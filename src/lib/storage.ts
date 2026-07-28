import type { RosterEntry } from "../../shared/types";

const STORAGE_KEY = "arrakis.roster.v1";

export function loadRoster(): RosterEntry[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as RosterEntry[];
  } catch {
    return [];
  }
}

export function saveRoster(roster: RosterEntry[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(roster));
}
