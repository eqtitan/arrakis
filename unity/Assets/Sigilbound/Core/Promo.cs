// Promo codes, exactly as in public/game/modes.js: codes are stored only as a fingerprint
// (promoHash), and each can be redeemed once per save (fingerprints go in modes.codes, which
// travels with save codes, so a code used on the web can't be used again in the app).
using System.Collections.Generic;
using System.Text;

namespace Sigilbound.Core
{
    public enum PromoResult { Redeemed, Empty, Invalid, AlreadyUsed }

    public static class Promo
    {
        public sealed class Entry { public Reward Reward; public string Label; }

        // To add one: put its fingerprint (Promo.Hash("YOUR-CODE")) and reward here AND in modes.js.
        public static readonly Dictionary<string, Entry> Codes = new Dictionary<string, Entry>
        {
            ["1qestrz-ml0zya"] = new Entry { Reward = new Reward { Radiant = 5 }, Label = "Welcome gift" },
        };

        // promoHash(): upper-cased, letters and digits only, then two 32-bit FNV-style mixes in base 36.
        public static string Hash(string code)
        {
            var sb = new StringBuilder();
            foreach (char ch in (code ?? "").Trim().ToUpperInvariant()) if ((ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')) sb.Append(ch);
            uint a = 0x811c9dc5, b = 0x01000193;
            unchecked
            {
                foreach (char c in sb.ToString())
                {
                    a ^= c; a *= 16777619u;
                    b = (b ^ c) * 2246822519u; b = (b << 13) | (b >> 19);
                }
            }
            return Js.Base36(a) + "-" + Js.Base36(b);
        }

        public static PromoResult Redeem(Game g, string code, out Entry entry)
        {
            entry = null;
            if (string.IsNullOrWhiteSpace(code)) return PromoResult.Empty;
            var M = g.EnsureModes();
            var key = Hash(code);
            if (!Codes.TryGetValue(key, out entry)) return PromoResult.Invalid;
            if (M.codes.Contains(key)) return PromoResult.AlreadyUsed;
            M.codes.Add(key);
            g.Grant(entry.Reward);
            return PromoResult.Redeemed;
        }
    }
}
