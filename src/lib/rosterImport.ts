import type { RosterEntry } from "../../shared/types";

export interface ImportResult {
  entries: RosterEntry[];
  errors: string[];
}

// Accepts the JSON produced by tools/rslhelper-export.mjs (an array of
// RosterEntry objects) — this is the format the in-app import box expects.
export function parseRosterImport(raw: string): ImportResult {
  const errors: string[] = [];
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return { entries: [], errors: ["That isn't valid JSON."] };
  }

  if (!Array.isArray(data)) {
    return { entries: [], errors: ["Expected a JSON array of roster entries."] };
  }

  const entries: RosterEntry[] = [];
  data.forEach((item, index) => {
    if (!isRosterEntryShape(item)) {
      errors.push(`Entry ${index} is missing required fields (championId, stars, level, stats) — skipped.`);
      return;
    }
    entries.push(item);
  });

  return { entries, errors };
}

function isRosterEntryShape(value: unknown): value is RosterEntry {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  if (typeof v.championId !== "string") return false;
  if (typeof v.stars !== "number") return false;
  if (typeof v.level !== "number") return false;
  if (typeof v.stats !== "object" || v.stats === null) return false;
  const stats = v.stats as Record<string, unknown>;
  return (
    typeof stats.speed === "number" &&
    typeof stats.hp === "number" &&
    typeof stats.def === "number" &&
    typeof stats.accuracy === "number" &&
    typeof stats.resistance === "number" &&
    typeof stats.critDamage === "number"
  );
}
