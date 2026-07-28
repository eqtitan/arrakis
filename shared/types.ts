// Core data model shared between the frontend (real-time scoring) and the
// Cloudflare Pages Functions that serve the static champion/template data.

export type Affinity = "Magic" | "Force" | "Spirit" | "Void";

export type Rarity = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary" | "Mythical";

export type Faction =
  | "Banner Lords"
  | "Barbarians"
  | "Dark Elves"
  | "Demonspawn"
  | "Dwarves"
  | "Draconis"
  | "High Elves"
  | "High Men"
  | "Knights Revenant"
  | "Lizardmen"
  | "Ogryn Tribes"
  | "Orcs"
  | "Sacred Order"
  | "Salamander Fire Knights"
  | "Shadowkin"
  | "Skinwalkers"
  | "Sylvan Watchers"
  | "Undead Hordes";

// Capability tags relevant to Clan Boss team building. Kept intentionally
// narrow to what CB scoring actually cares about — this is not a full skill
// encoding of every champion ability.
export type CbTag =
  | "Poison"
  | "HpBurn"
  | "DecreaseDef"
  | "Weaken"
  | "DecreaseAtk"
  | "IncreaseAtk"
  | "Shield"
  | "Heal"
  | "Revive"
  | "AllyProtection" // enables/extends Unkillable-style survivability
  | "AoeReliable" // hits all enemies reliably each turn (relevant vs. CB's multi-hit patterns)
  | "TurnMeterControl"; // NOTE: does not work against Clan Boss — see shared/synergy.ts CB_INERT_TAGS

export interface Champion {
  id: string;
  name: string;
  faction: Faction;
  affinity: Affinity;
  rarity: Rarity;
  tags: CbTag[];
  notes?: string;
}

// A champion the user owns, with the stats that matter for CB team scoring.
// Stats are the champion's final (gear-included) values, as you'd read them
// off the in-game champion screen.
export interface RosterEntry {
  championId: string;
  stars: 1 | 2 | 3 | 4 | 5 | 6;
  level: number;
  // RSL's Ascension system, 0-6 (shown as purple stars in-game). Raises base
  // stats and unlocks skill upgrades at level 3+. Optional because manual
  // roster entries won't have it unless the user sets it. Awakening is a
  // separate, newer RSL system that isn't tracked here — RSL Helper's local
  // database (the only automated import source this app has) doesn't record
  // it, so there's no real data to import rather than a field we chose to skip.
  ascension?: number;
  stats: {
    speed: number;
    hp: number;
    def: number;
    accuracy: number;
    resistance: number;
    critDamage: number;
  };
}

export type CbPurpose = "Poison" | "HpBurn" | "Nuke" | "Debuff" | "Unkillable";

export type CbStyle = "FullAuto" | "Manual" | "SlowTune";

export interface TemplateSlot {
  tag: CbTag;
  count: number;
  required: boolean;
}

export interface Template {
  id: string;
  name: string;
  purpose: CbPurpose;
  style: CbStyle;
  description: string;
  slots: TemplateSlot[];
  // Specific named champions this template is built around, when the
  // synergy is tighter than the generic tag-slot matching can express
  // (e.g. a named community comp). Shown as guidance in the UI; the
  // scoring engine still matches by tag slots above, not this list.
  recommendedChampionIds?: string[];
}

export interface TeamSlotResult {
  tag: CbTag;
  championId: string | null;
}

export interface TeamSuggestion {
  templateId: string;
  templateName: string;
  championIds: string[];
  score: number;
  filledSlots: TeamSlotResult[];
  missingTags: CbTag[];
  warnings: string[];
}
