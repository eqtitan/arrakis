// Checks for the rendering data that lives in Core: hero looks/recolours (against colours the web
// computes with three.js) and the battle layout and camera framing ported from three3d.mjs.
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Sigilbound.Core;

static class RenderTests
{
    public static void Run(Action<bool, string> check)
    {
        Console.WriteLine("\nLooks and battle layout:");
        var fx = (Dictionary<string, object>)Json.Parse(File.ReadAllText(Path.Combine(AppContext.BaseDirectory, "fixtures", "role-colors.json")));
        int bad = 0, n = 0;
        foreach (var kv in fx)
        {
            var look = Looks.Of(kv.Key);
            foreach (var hollow in new[] { false, true })
            {
                var mine = Looks.RoleColors(look, hollow);
                foreach (var role in (Dictionary<string, object>)((Dictionary<string, object>)kv.Value)[hollow ? "hollow" : "hero"])
                {
                    n++;
                    if (mine[role.Key] != (string)role.Value) { bad++; if (bad < 6) Console.WriteLine($"   {kv.Key} {(hollow ? "hollow " : "")}{role.Key}: {mine[role.Key]} vs {role.Value}"); }
                }
            }
        }
        check(fx.Count == 24 && Looks.Table.Count == 24 && bad == 0, $"model recolours match the web's three.js colours ({n - bad}/{n} role colours, heroes and Hollow enemies)");
        check(Looks.Of("hask").Base == "monarch" && Looks.Of("mira").Base == "hooded" && Looks.Of("brannoc").Base == "adventurer" && Looks.Of("mira").Hide.Contains("hood"), "base model and hidden parts per hero");
        check(Looks.RoleOf("hooded", true, "Brown") == "eye" && Looks.RoleOf("hooded", false, "Brown") == "cloth" && Looks.RoleOf("titan", false, "Eye_Black") == "maw", "material roles (head-specific roles too)");

        // Layout: allies on the near arc, enemies on the far arc, 2.2 m apart, facing the centre.
        var allies = Enumerable.Range(0, 4).Select(i => BattleLayout.Slot(true, i, 4)).ToArray();
        var foes = Enumerable.Range(0, 3).Select(i => BattleLayout.Slot(false, i, 3)).ToArray();
        bool rim = allies.Concat(foes).All(p => Math.Abs(Math.Pow((p.X - BattleLayout.RimCx) / BattleLayout.RimRx, 2) + Math.Pow((p.Z - BattleLayout.RimCz) / BattleLayout.RimRz, 2) - 1) < 1e-9);
        check(rim && allies.All(p => p.Z < BattleLayout.RimCz) && foes.All(p => p.Z > BattleLayout.RimCz), "units stand on the rune-circle rim: allies near side, enemies far side");
        double gap = (allies[1] - allies[0]).Length;
        check(gap > 2.1 && gap < 2.3 && Math.Abs(allies[0].X + allies[3].X) < 1e-9, $"neighbours ~2.2 m apart along the arc (chord {gap:0.00} m), rows centred");
        double yaw = BattleLayout.FacingCentreYaw(BattleLayout.Slot(true, 0, 1));
        check(Math.Abs(yaw) < 1e-9 && Math.Abs(Math.Abs(BattleLayout.FacingCentreYaw(BattleLayout.Slot(false, 0, 1))) - 180) < 1e-9, "a lone ally faces +Z (toward the centre), a lone enemy faces back");

        // Camera: the default is Three-quarter (yaw 38, pitch 30), fitted to a portrait frame.
        var cam = BattleLayout.Camera("nope");
        double aspect = 1080.0 / 2340.0, dist = BattleLayout.FitDistance(cam, aspect, false);
        var eye = BattleLayout.CameraPosition(cam, dist);
        var pts = BattleLayout.FramePoints(false);
        bool inside = pts.All(p => { var q = BattleLayout.Project(eye, BattleLayout.FovFor(aspect), aspect, p); return q != null && Math.Abs(q.Value.x) <= 0.95 + 1e-6 && Math.Abs(q.Value.y) <= 0.84 + 1e-6; });
        var closer = BattleLayout.CameraPosition(cam, dist * 0.95);
        bool clipsCloser = pts.Any(p => { var q = BattleLayout.Project(closer, BattleLayout.FovFor(aspect), aspect, p); return q == null || Math.Abs(q.Value.x) > 0.95 || Math.Abs(q.Value.y) > 0.84; });
        check(cam.Key == "angle" && cam.Yaw == 38 && cam.Pitch == 30 && inside && clipsCloser && eye.X > 0 && eye.Z < 0, $"Three-quarter camera fits the whole circle on a phone screen (distance {dist:0.0} m, fov {BattleLayout.FovFor(aspect)})");
        check(BattleLayout.FitDistance(cam, aspect, true) >= dist, "Titan battles pull the camera back to fit the Titan");
    }
}
