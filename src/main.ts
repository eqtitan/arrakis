import type { Champion, RosterEntry, Template } from "../shared/types";
import { suggestTeams } from "../shared/synergy";
import { fetchChampions, fetchTemplates } from "./lib/dataClient";
import { loadRoster, saveRoster } from "./lib/storage";
import { parseRosterImport } from "./lib/rosterImport";
import { initChampionPicker } from "./ui/championPicker";
import { renderRoster } from "./ui/rosterEditor";
import { renderTemplateGallery } from "./ui/templateGallery";
import { renderResults } from "./ui/resultsPanel";

const DEFAULT_STATS: RosterEntry["stats"] = {
  speed: 100,
  hp: 15000,
  def: 500,
  accuracy: 0,
  resistance: 50,
  critDamage: 50,
};

async function main() {
  const rosterListEl = document.getElementById("roster-list")!;
  const resultsPanelEl = document.getElementById("results-panel")!;
  const templateGalleryEl = document.getElementById("template-gallery")!;
  const searchInput = document.getElementById("champion-search") as HTMLInputElement;
  const searchResultsEl = document.getElementById("champion-search-results")!;
  const importTextarea = document.getElementById("import-textarea") as HTMLTextAreaElement;
  const importBtn = document.getElementById("import-btn") as HTMLButtonElement;
  const importStatus = document.getElementById("import-status")!;

  let champions: Champion[];
  let templates: Template[];
  try {
    [champions, templates] = await Promise.all([fetchChampions(), fetchTemplates()]);
  } catch (err) {
    rosterListEl.textContent =
      "Couldn't load champion data. If you're running `npm run dev` alone, also run `npm run pages:dev` in a second terminal.";
    console.error(err);
    return;
  }

  const championsById = new Map(champions.map((c) => [c.id, c]));
  let roster: RosterEntry[] = loadRoster();

  function recompute() {
    saveRoster(roster);
    renderRoster(
      rosterListEl,
      roster,
      championsById,
      (championId, patch) => {
        roster = roster.map((e) => (e.championId === championId ? { ...e, ...patch, stats: { ...e.stats, ...patch.stats } } : e));
        recompute();
      },
      (championId) => {
        roster = roster.filter((e) => e.championId !== championId);
        recompute();
      },
    );

    const suggestions = suggestTeams(templates, roster, championsById);
    renderResults(resultsPanelEl, suggestions, championsById);
  }

  renderTemplateGallery(templateGalleryEl, templates, championsById);

  initChampionPicker(
    searchInput,
    searchResultsEl,
    champions,
    () => new Set(roster.map((e) => e.championId)),
    (championId) => {
      roster = [...roster, { championId, stars: 6, level: 60, stats: { ...DEFAULT_STATS } }];
      recompute();
    },
  );

  importBtn.addEventListener("click", () => {
    const { entries, errors } = parseRosterImport(importTextarea.value);
    if (entries.length > 0) {
      const byId = new Map(roster.map((e) => [e.championId, e]));
      for (const entry of entries) byId.set(entry.championId, entry);
      roster = [...byId.values()];
      recompute();
    }
    importStatus.textContent =
      entries.length > 0
        ? `Imported ${entries.length} champion(s).${errors.length ? ` (${errors.length} skipped)` : ""}`
        : errors[0] ?? "Nothing to import.";
  });

  recompute();
}

main();
