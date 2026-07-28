// Core data model shared between the frontend (real-time scoring) and the
// Cloudflare Pages Functions that serve the static champion/template data.

export type Affinity = "Magic" | "Force" | "Spirit" | "Void";

export type Rarity = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";

export type Faction =
  | "Banner Lords"
  | "Barbarians"
  | "Dark Elves"
  | "Demonspawn"
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
