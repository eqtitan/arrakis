// Saved game state. Plain public fields and Lists only, so Unity's JsonUtility can
// serialize it (it can't do dictionaries or properties).
using System;
using System.Collections.Generic;

namespace Sigilbound.Core
{
    [Serializable] public sealed class HeroSave
    {
        public int uid; public string id; public int level = 1; public int xp; public int stars; public bool locked;
        public int weapon, helm, chest, boots; // gear uids, 0 = empty
        public int GetGear(GameData.Slot s) => s switch { GameData.Slot.Weapon => weapon, GameData.Slot.Helm => helm, GameData.Slot.Chest => chest, _ => boots };
        public void SetGear(GameData.Slot s, int v) { switch (s) { case GameData.Slot.Weapon: weapon = v; break; case GameData.Slot.Helm: helm = v; break; case GameData.Slot.Chest: chest = v; break; default: boots = v; break; } }
    }

    [Serializable] public sealed class SubStatSave { public int stat; public int val; }

    [Serializable] public sealed class GearSave
    {
        public int uid; public int slot; public int rarity; public int set; public int level;
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
    }

    [Serializable] public sealed class SettingsSave { public int speed = 1; public bool auto; public bool autoReplay; }

    [Serializable] public sealed class SaveData
    {
        public int v = 1; public bool started; public int nextUid = 1;
        public int gold = 5000, essence;
        public int shardCommon = 5, shardMystic = 3, shardRadiant;
        public List<HeroSave> heroes = new List<HeroSave>();
        public List<GearSave> gear = new List<GearSave>();
        public List<int> team = new List<int>();
        public int cleared;
        public int pityMystic, pityRadiant;
        public string loginLast = ""; public int loginDay;
        public DailySave daily = new DailySave();
        public SettingsSave settings = new SettingsSave();
        public int wins, summons; public long titanBestAllTime;
        public string playerName = "";
    }
}
