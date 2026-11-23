// Saved game state. Plain public fields and Lists only (Unity-serializer friendly).
// On disk and in save codes it is stored in the web game's JSON layout (see SaveCodec),
// so a save code moves freely between the web game and the Unity app in both directions.
using System;
using System.Collections.Generic;

namespace Sigilbound.Core
{
    [Serializable] public sealed class HeroSave
    {
        public int uid; public string id; public int level = 1; public int xp; public int stars; public bool locked;
        public int weapon, helm, chest, boots; // gear uids, 0 = empty
        public List<int> skillLv = new List<int>(); // skill upgrade levels 0-4 per skill (Skill Tomes); missing = 0
        public int SkillLv(int i) => i < skillLv.Count ? skillLv[i] : 0;
        public int GetGear(GameData.Slot s) => s switch { GameData.Slot.Weapon => weapon, GameData.Slot.Helm => helm, GameData.Slot.Chest => chest, _ => boots };
        public void SetGear(GameData.Slot s, int v) { switch (s) { case GameData.Slot.Weapon: weapon = v; break; case GameData.Slot.Helm: helm = v; break; case GameData.Slot.Chest: chest = v; break; default: boots = v; break; } }
    }

    [Serializable] public sealed class SubStatSave { public int stat; public int val; }

    [Serializable] public sealed class GearSave
    {
        public int uid; public int slot; public int rarity; public int set; public int level; public bool locked;
        public List<SubStatSave> subs = new List<SubStatSave>();
        public GameData.Slot Slot => (GameData.Slot)slot;
        public GameData.GearSet Set => (GameData.GearSet)set;
    }

    [Serializable] public sealed class DailySave
    {
        public string date = "";
        public int win, summon, upgrade, titan;              // quest progress
        public bool cWin, cSummon, cUpgrade, cTitan, cAll;   // claimed
        public int titanTries = 3; public long titanBest;
        // Trials (modes.js): winning dungeon runs left today, arena fights left today.
        public int runsVault = Trials.DungeonRuns, runsTrial = Trials.DungeonRuns, runsForge = Trials.DungeonRuns;
        public int arenaTries = Trials.ArenaTries;
    }

    [Serializable] public sealed class SettingsSave
    {
        public int speed = 1; public bool auto; public bool autoReplay;
        public string cam = "angle";      // battle camera preset (Three-quarter is the default)
        public int fpsCap = 60;           // 30 (cooler) or 60 (smoother)
        public string quality = "auto";   // auto | Ultra | High | Medium | Low
        public double sfxVol = 0.8, musicVol = 0.6; // 0..1, 0 = off (audio.js)
    }

    [Serializable] public sealed class ArenaSave
    {
        public int points = 1000, best = 1000, wins, losses, seed = 1;
        public string week = "";
        public string pendingTier = "";   // weekly reward waiting to be claimed (tier name), "" = none
    }

    [Serializable] public sealed class ModesSave
    {
        public int floorsVault, floorsTrial, floorsForge;   // dungeon floors cleared
        public int forgeSet;                                 // GameData.GearSet
        public ArenaSave arena = new ArenaSave();
        public List<string> tips = new List<string>();       // first-time tips already shown
        public List<string> codes = new List<string>();      // promo code fingerprints already redeemed
        public bool initialized;                             // ensureModes has run (arena week set)
    }

    [Serializable] public sealed class TeamPreset { public List<int> uids = new List<int>(); }

    [Serializable] public sealed class SaveData
    {
        public int v = 1; public bool started; public int nextUid = 1;
        public int gold = 5000, essence;
        public int shardCommon = 5, shardMystic = 3, shardRadiant;
        public List<HeroSave> heroes = new List<HeroSave>();
        public List<GearSave> gear = new List<GearSave>();
        public List<int> team = new List<int>();
        public int cleared;
        public int hardCleared;                               // Hard campaign stages cleared (extras.js)
        public int tomes;                                     // Skill Tomes
        public List<string> ach = new List<string>();         // claimed achievement ids
        public List<TeamPreset> teams = new List<TeamPreset>(); // team presets (3 slots)
        public int pityMystic, pityRadiant;
        public string loginLast = ""; public int loginDay;
        public DailySave daily = new DailySave();
        public SettingsSave settings = new SettingsSave();
        public ModesSave modes = new ModesSave();
        public int wins, summons; public long titanBestAllTime;
        public string playerName = "";
        public string gameVersion = "";
        // The JSON this save was read from. Fields the Unity app doesn't use (sound volumes,
        // the web's 2D toggle, online profile...) are kept from it when the save is written back.
        public string sourceJson = "";
    }
}
