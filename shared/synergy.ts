import type {
  CbTag,
  Champion,
  RosterEntry,
  Template,
  TeamSlotResult,
  TeamSuggestion,
} from "./types";

// Clan Boss ignores Turn Meter manipulation entirely (confirmed via community
// guides, e.g. Ayumilove's CB coverage) — a tag that would matter in Arena or
// Dungeons must never earn points here. Templates in data/templates.json
// should never list this tag as a slot, but scoring defends against it
// anyway so a bad template can't silently reward it.
export const CB_INERT_TAGS: ReadonlySet<CbTag> = new Set(["TurnMeterControl"]);

// Rough, editable guideline for the Accuracy needed to reliably land CB
// debuffs. This is not a verified exact game constant — it's a soft weight
// used to break ties between otherwise-equal debuffers, not a hard gate.
export const ACC_FLOOR_FOR_DEBUFFS = 250;

const DEBUFF_TAGS: ReadonlySet<CbTag> = new Set([
  "Poison",
  "HpBurn",
  "DecreaseDef",
  "Weaken",
  "DecreaseAtk",
]);

interface OwnedChampion {
  entry: RosterEntry;
  champion: Champion;
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function joinRoster(roster: RosterEntry[], championsById: Map<string, Champion>): OwnedChampion[] {
  const owned: OwnedChampion[] = [];
  for (const entry of roster) {
    const champion = championsById.get(entry.championId);
    if (champion) owned.push({ entry, champion });
  }
  return owned;
}

// A single 0..1 "how good is this champion in a CB team, generally" score,
// used both to rank candidates for a specific tag slot and to pick
// generalist fill-ins once required slots are covered.
function fitness(owned: OwnedChampion, forTag?: CbTag): number {
  const { stats } = owned.entry;
  const accScore = clamp01(stats.accuracy / (ACC_FLOOR_FOR_DEBUFFS * 1.5));
  const speedScore = clamp01(stats.speed / 250);
  const critDmgScore = clamp01(stats.critDamage / 300);

  let score = 0.4 * critDmgScore + 0.3 * speedScore;
  if (!forTag || DEBUFF_TAGS.has(forTag)) {
    score += 0.3 * accScore;
  } else {
    score += 0.3 * critDmgScore;
  }
  return clamp01(score);
}

// Non-inert tag count is used as a rough "generalist usefulness" signal for
// filling leftover team slots once required slots are satisfied.
function usefulTagCount(champion: Champion): number {
  return champion.tags.filter((tag) => !CB_INERT_TAGS.has(tag)).length;
}

export function buildTeamForTemplate(
  template: Template,
  roster: RosterEntry[],
  championsById: Map<string, Champion>,
): TeamSuggestion {
  const owned = joinRoster(roster, championsById);
  const assigned = new Set<string>();
  const filledSlots: TeamSlotResult[] = [];
  const missingTags: CbTag[] = [];

  const sortedSlots = [...template.slots].sort((a, b) => Number(b.required) - Number(a.required));

  for (const slot of sortedSlots) {
    if (CB_INERT_TAGS.has(slot.tag)) continue; // defensive: never score an inert tag
    for (let i = 0; i < slot.count; i++) {
      const candidates = owned
        .filter((o) => !assigned.has(o.entry.championId) && o.champion.tags.includes(slot.tag))
        .sort((a, b) => fitness(b, slot.tag) - fitness(a, slot.tag));

      const pick = candidates[0];
      if (pick) {
        assigned.add(pick.entry.championId);
        filledSlots.push({ tag: slot.tag, championId: pick.entry.championId });
      } else {
        filledSlots.push({ tag: slot.tag, championId: null });
        if (slot.required) missingTags.push(slot.tag);
      }
    }
  }

  const TEAM_SIZE = 4;
  const generalists = owned
    .filter((o) => !assigned.has(o.entry.championId))
    .sort((a, b) => usefulTagCount(b.champion) - usefulTagCount(a.champion) || fitness(b) - fitness(a));

  for (const candidate of generalists) {
    if (assigned.size >= TEAM_SIZE) break;
    assigned.add(candidate.entry.championId);
  }

  const requiredSlots = template.slots.filter((s) => s.required && !CB_INERT_TAGS.has(s.tag));
  const requiredTotal = requiredSlots.reduce((sum, s) => sum + s.count, 0);
  const requiredFilled = filledSlots.filter(
    (s) => s.championId !== null && requiredSlots.some((rs) => rs.tag === s.tag),
  ).length;
  const coverageScore = requiredTotal > 0 ? (requiredFilled / requiredTotal) * 70 : 70;

  const assignedOwned = owned.filter((o) => assigned.has(o.entry.championId));
  const avgFitness =
    assignedOwned.length > 0
      ? assignedOwned.reduce((sum, o) => sum + fitness(o), 0) / assignedOwned.length
      : 0;
  const statScore = avgFitness * 30;

  const warnings: string[] = [];
  if (assigned.size < TEAM_SIZE) {
    warnings.push(
      `Only ${assigned.size} owned champion(s) available for this team — need ${TEAM_SIZE}.`,
    );
  }
  if (missingTags.length > 0) {
    warnings.push(`Missing a champion for: ${missingTags.join(", ")}.`);
  }

  return {
    templateId: template.id,
    templateName: template.name,
    championIds: [...assigned],
    score: Math.round(coverageScore + statScore),
    filledSlots,
    missingTags,
    warnings,
  };
}

export function suggestTeams(
  templates: Template[],
  roster: RosterEntry[],
  championsById: Map<string, Champion>,
): TeamSuggestion[] {
  return templates
    .map((template) => buildTeamForTemplate(template, roster, championsById))
    .sort((a, b) => b.score - a.score);
}
