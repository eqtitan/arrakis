// Small helpers that reproduce JavaScript behaviour exactly, so numbers match the web game.
using System;
using System.Globalization;

namespace Sigilbound.Core
{
    public static class Js
    {
        // Math.round: halves round up (toward +infinity), unlike C#'s banker's rounding.
        public static double Round(double x) => Math.Floor(x + 0.5);
        public static int RoundInt(double x) => (int)Math.Floor(x + 0.5);
        public static long RoundLong(double x) => (long)Math.Floor(x + 0.5);

        // new Date().toISOString().slice(0, 10): the UTC calendar date.
        public static string UtcDate(DateTime now) => now.ToUniversalTime().ToString("yyyy-MM-dd", CultureInfo.InvariantCulture);

        // modes.js weekKey: the Monday (UTC) of the current week, "yyyy-MM-dd".
        public static string WeekKey(DateTime now)
        {
            var u = now.ToUniversalTime().Date;
            int back = ((int)u.DayOfWeek + 6) % 7;
            return u.AddDays(-back).ToString("yyyy-MM-dd", CultureInfo.InvariantCulture);
        }

        // Math.floor(Date.now() / 864e5): whole UTC days since 1970-01-01.
        public static long UtcDays(DateTime now) => (long)Math.Floor((now.ToUniversalTime() - new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).TotalMilliseconds / 864e5);

        // Number.prototype.toString(36) for a non-negative integer.
        public static string Base36(ulong n)
        {
            const string digits = "0123456789abcdefghijklmnopqrstuvwxyz";
            if (n == 0) return "0";
            var buf = new char[16]; int i = buf.Length;
            while (n > 0) { buf[--i] = digits[(int)(n % 36)]; n /= 36; }
            return new string(buf, i, buf.Length - i);
        }
    }
}
