import type { Champion, RosterEntry } from "../../shared/types";

type StatKey = keyof RosterEntry["stats"];

const STAT_FIELDS: { key: StatKey; label: string }[] = [
  { key: "speed", label: "Speed" },
  { key: "hp", label: "HP" },
  { key: "def", label: "DEF" },
  { key: "accuracy", label: "ACC" },
  { key: "resistance", label: "RES" },
  { key: "critDamage", label: "C.DMG" },
];

export function renderRoster(
  container: HTMLElement,
  roster: RosterEntry[],
  championsById: Map<string, Champion>,
  onUpdate: (championId: string, patch: Partial<RosterEntry>) => void,
  onRemove: (championId: string) => void,
): void {
  container.innerHTML = "";

  if (roster.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "No champions added yet — search above or import a roster.";
    container.appendChild(empty);
    return;
  }

  for (const entry of roster) {
    const champion = championsById.get(entry.championId);
    if (!champion) continue;

    const card = document.createElement("div");
    card.className = "roster-card";

    const name = document.createElement("div");
    name.textContent = `${champion.name} (${champion.rarity})`;
    card.appendChild(name);

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => onRemove(entry.championId));
    card.appendChild(removeBtn);

    const statsGrid = document.createElement("div");
    statsGrid.className = "stats-grid";

    const starsLabel = document.createElement("label");
    starsLabel.textContent = "Stars";
    const starsInput = document.createElement("input");
    starsInput.type = "number";
    starsInput.min = "1";
    starsInput.max = "6";
    starsInput.value = String(entry.stars);
    starsInput.addEventListener("change", () =>
      onUpdate(entry.championId, { stars: clampStars(Number(starsInput.value)) }),
    );
    starsLabel.appendChild(starsInput);
    statsGrid.appendChild(starsLabel);

    const levelLabel = document.createElement("label");
    levelLabel.textContent = "Level";
    const levelInput = document.createElement("input");
    levelInput.type = "number";
    levelInput.min = "1";
    levelInput.max = "60";
    levelInput.value = String(entry.level);
    levelInput.addEventListener("change", () =>
      onUpdate(entry.championId, { level: Number(levelInput.value) }),
    );
    levelLabel.appendChild(levelInput);
    statsGrid.appendChild(levelLabel);

    for (const field of STAT_FIELDS) {
      const label = document.createElement("label");
      label.textContent = field.label;
      const input = document.createElement("input");
      input.type = "number";
      input.value = String(entry.stats[field.key]);
      input.addEventListener("change", () =>
        onUpdate(entry.championId, {
          stats: { ...entry.stats, [field.key]: Number(input.value) },
        }),
      );
      label.appendChild(input);
      statsGrid.appendChild(label);
    }

    card.appendChild(statsGrid);
    container.appendChild(card);
  }
}

function clampStars(value: number): RosterEntry["stars"] {
  const clamped = Math.min(6, Math.max(1, Math.round(value)));
  return clamped as RosterEntry["stars"];
}
