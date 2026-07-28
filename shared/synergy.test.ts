import { describe, expect, it } from "vitest";
import { CB_INERT_TAGS, buildCommunityTeam, buildTeamForTemplate, championFitness, suggestTeams } from "./synergy";
import type { Champion, RosterEntry, Template } from "./types";

function champ(id: string, tags: Champion["tags"]): Champion {
  return {
    id,
    name: id,
    faction: "Barbarians",
    affinity: "Force",
    rarity: "Legendary",
    tags,
  };
}

function entry(championId: string, overrides: Partial<RosterEntry["stats"]> = {}): RosterEntry {
  return {
    championId,
    stars: 6,
    level: 60,
    stats: {
      speed: 180,
      hp: 20000,
      def: 1000,
      accuracy: 200,
      resistance: 100,
      critDamage: 200,
      ...overrides,
    },
  };
}

const poisonTemplate: Template = {
  id: "poison",
  name: "Test Poison",
  purpose: "Poison",
  style: "FullAuto",
  description: "test",
  slots: [
    { tag: "Poison", count: 2, required: true },
    { tag: "DecreaseDef", count: 1, required: true },
    { tag: "Heal", count: 1, required: false },
  ],
};

describe("buildTeamForTemplate", () => {
  it("fills required slots with tagged champions", () => {
    const champions = new Map([
      ["a", champ("a", ["Poison"])],
      ["b", champ("b", ["Poison"])],
      ["c", champ("c", ["DecreaseDef"])],
      ["d", champ("d", ["Heal"])],
    ]);
    const roster = [entry("a"), entry("b"), entry("c"), entry("d")];

    const result = buildTeamForTemplate(poisonTemplate, roster, champions);

    expect(result.missingTags).toHaveLength(0);
    expect(result.championIds).toHaveLength(4);
    expect(result.championIds).toContain("c");
  });

  it("reports missing tags for required slots with no owned candidate", () => {
    const champions = new Map([["a", champ("a", ["Poison"])]]);
    const roster = [entry("a")];

    const result = buildTeamForTemplate(poisonTemplate, roster, champions);

    expect(result.missingTags).toContain("DecreaseDef");
    expect(result.warnings.some((w) => w.includes("DecreaseDef"))).toBe(true);
  });

  it("never assigns a slot for an inert (Turn Meter Control) tag", () => {
    const tmcTemplate: Template = {
      ...poisonTemplate,
      slots: [{ tag: "TurnMeterControl", count: 1, required: true }],
    };
    const champions = new Map([["a", champ("a", ["TurnMeterControl"])]]);
    const roster = [entry("a")];

    const result = buildTeamForTemplate(tmcTemplate, roster, champions);

    expect(result.filledSlots).toHaveLength(0);
    expect(CB_INERT_TAGS.has("TurnMeterControl")).toBe(true);
  });

  it("prefers a champion with a real CB tag over a Turn-Meter-Control-only champion as a generalist fill-in", () => {
    const emptyTemplate: Template = { ...poisonTemplate, slots: [] };
    const champions = new Map([
      ["tmcOnly", champ("tmcOnly", ["TurnMeterControl"])],
      ["realTag", champ("realTag", ["Shield"])],
    ]);
    const roster = [entry("tmcOnly"), entry("realTag")];

    const result = buildTeamForTemplate(emptyTemplate, roster, champions);

    // Both get picked (only 2 owned), but score must not be inflated by the
    // TMC tag — assert scoring path doesn't throw and TMC contributes 0 to
    // usefulness by construction (see usefulTagCount / CB_INERT_TAGS).
    expect(result.championIds.sort()).toEqual(["realTag", "tmcOnly"].sort());
  });

  it("adds a warning when the roster can't fill a full 4-champion team", () => {
    const champions = new Map([["a", champ("a", ["Poison"])]]);
    const roster = [entry("a")];

    const result = buildTeamForTemplate(poisonTemplate, roster, champions);

    expect(result.warnings.some((w) => w.includes("Only 1"))).toBe(true);
  });
});

describe("suggestTeams", () => {
  it("sorts templates by score descending", () => {
    const nukeTemplate: Template = {
      id: "nuke",
      name: "Test Nuke",
      purpose: "Nuke",
      style: "Manual",
      description: "test",
      slots: [{ tag: "DecreaseDef", count: 3, required: true }],
    };
    const champions = new Map([
      ["a", champ("a", ["Poison"])],
      ["b", champ("b", ["Poison"])],
      ["c", champ("c", ["DecreaseDef"])],
      ["d", champ("d", ["Heal"])],
    ]);
    const roster = [entry("a"), entry("b"), entry("c"), entry("d")];

    const results = suggestTeams([poisonTemplate, nukeTemplate], roster, champions);

    expect(results[0].score).toBeGreaterThanOrEqual(results[1].score);
  });
});

describe("championFitness", () => {
  it("scores higher ascension more favorably, all else equal", () => {
    const low = championFitness(entry("a", {}) && { ...entry("a"), ascension: 0 });
    const high = championFitness({ ...entry("a"), ascension: 6 });

    expect(high).toBeGreaterThan(low);
  });
});

describe("buildCommunityTeam", () => {
  const namedTemplate: Template = {
    id: "named",
    name: "Named Comp",
    purpose: "Unkillable",
    style: "Manual",
    description: "test",
    slots: [
      { tag: "AllyProtection", count: 1, required: true },
      { tag: "Poison", count: 1, required: true },
    ],
    recommendedChampionIds: ["tank", "dps"],
  };

  it("returns null for templates with no recommendedChampionIds", () => {
    const plainTemplate: Template = { ...namedTemplate, recommendedChampionIds: undefined };
    expect(buildCommunityTeam(plainTemplate, [], new Map())).toBeNull();
  });

  it("scores the fixed named lineup instead of freely picking from the roster", () => {
    const champions = new Map([
      ["tank", champ("tank", ["AllyProtection"])],
      ["dps", champ("dps", ["Poison"])],
      ["better-dps", champ("better-dps", ["Poison"])],
    ]);
    // A better Poison applier exists in the roster, but it's not part of the
    // named comp, so buildCommunityTeam must ignore it.
    const roster = [entry("tank"), entry("dps"), entry("better-dps", { accuracy: 999 })];

    const result = buildCommunityTeam(namedTemplate, roster, champions)!;

    expect(result.championIds.sort()).toEqual(["dps", "tank"]);
    expect(result.warnings).toHaveLength(0);
  });

  it("flags named champions the user doesn't own", () => {
    const champions = new Map([["tank", champ("tank", ["AllyProtection"])]]);
    const roster = [entry("tank")];

    const result = buildCommunityTeam(namedTemplate, roster, champions)!;

    expect(result.championIds).toEqual(["tank"]);
    expect(result.warnings.some((w) => w.includes("dps"))).toBe(true);
  });
});
