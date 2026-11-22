// Code-only UI toolkit on Unity's immediate-mode GUI: a phone-sized logical canvas
// (390 points wide, scaled to the screen), rounded panels/buttons from generated
// textures, and touch drag-to-scroll. No editor setup or UI package needed.
// Styled like the web game's gilded dark-fantasy skin (style.css): framed panels with a bronze
// edge, gilded gradient buttons, gold rules, and serif display type for headings and buttons
// (the phone's own serif font, e.g. Noto Serif on Android; nothing is bundled).
using System.Collections.Generic;
using UnityEngine;

namespace Sigilbound.Client
{
    public static class Ui
    {
        public const float W = 390f;               // logical width
        public static float Scale => Screen.width / W;
        public static float H => Screen.height / Scale;
        public static Rect Safe                       // safe area in logical units
        {
            get
            {
                var s = Screen.safeArea; float k = Scale;
                return new Rect(s.x / k, (Screen.height - s.yMax) / k, s.width / k, s.height / k);
            }
        }

        static readonly Dictionary<string, Texture2D> _tex = new Dictionary<string, Texture2D>();
        static readonly Dictionary<string, GUIStyle> _styles = new Dictionary<string, GUIStyle>();
        static Font _font, _serif;
        public static Font Serif => _serif;

        public static void Begin()
        {
            GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, new Vector3(Scale, Scale, 1));
            if (_font == null) _font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
            if (_serif == null)
            {
                // Same preference order as the web's --display stack, ending with the system serif.
                try { _serif = Font.CreateDynamicFontFromOSFont(new[] { "Cinzel", "Cormorant SC", "Palatino Linotype", "Palatino", "Book Antiqua", "Georgia", "Noto Serif", "NotoSerif", "Droid Serif", "serif", "Times New Roman" }, 16); }
                catch (System.Exception) { }
                if (_serif == null) _serif = _font;
            }
            GUI.skin.font = _font;
        }

        // Rounded-rect texture, used 9-sliced so corners stay crisp at any size.
        public static Texture2D RoundTex(Color fill, Color? border = null, int radius = 12)
        {
            string key = $"{ColorUtility.ToHtmlStringRGBA(fill)}|{(border.HasValue ? ColorUtility.ToHtmlStringRGBA(border.Value) : "")}|{radius}";
            if (_tex.TryGetValue(key, out var t) && t != null) return t;
            int size = radius * 2 + 4;
            t = new Texture2D(size, size, TextureFormat.RGBA32, false) { wrapMode = TextureWrapMode.Clamp, filterMode = FilterMode.Bilinear };
            var px = new Color[size * size];
            for (int y = 0; y < size; y++)
                for (int x = 0; x < size; x++)
                {
                    float cx = Mathf.Clamp(x + 0.5f, radius, size - radius), cy = Mathf.Clamp(y + 0.5f, radius, size - radius);
                    float d = Vector2.Distance(new Vector2(x + 0.5f, y + 0.5f), new Vector2(cx, cy));
                    float a = Mathf.Clamp01(radius - d + 0.5f);
                    Color c = fill;
                    if (border.HasValue && d > radius - 1.6f) c = border.Value;
                    c.a *= a;
                    px[y * size + x] = c;
                }
            t.SetPixels(px); t.Apply();
            _tex[key] = t;
            return t;
        }
        // Vertical gradient with rounded corners and an optional border (gilded plates, panels).
        public static Texture2D GradientTex(Color top, Color bottom, Color? border, int radius, Color? midA = null, float midAt = 0.5f, Color? midB = null)
        {
            string key = $"grad{ColorUtility.ToHtmlStringRGBA(top)}{ColorUtility.ToHtmlStringRGBA(bottom)}{(border.HasValue ? ColorUtility.ToHtmlStringRGBA(border.Value) : "")}{radius}{midA}{midAt}{midB}";
            if (_tex.TryGetValue(key, out var t) && t != null) return t;
            int w = radius * 2 + 4, h = Mathf.Max(48, radius * 2 + 4);
            t = new Texture2D(w, h, TextureFormat.RGBA32, false) { wrapMode = TextureWrapMode.Clamp, filterMode = FilterMode.Bilinear };
            var px = new Color[w * h];
            for (int y = 0; y < h; y++)
            {
                float v = 1f - y / (h - 1f); // 0 at the top
                // Four stops (top 0, midA 38%, midB 62%, bottom 100%) like the CSS button gradients.
                Color fill = midA.HasValue && midB.HasValue
                    ? (v < 0.38f ? Color.Lerp(top, midA.Value, v / 0.38f) : v < 0.62f ? Color.Lerp(midA.Value, midB.Value, (v - 0.38f) / 0.24f) : Color.Lerp(midB.Value, bottom, (v - 0.62f) / 0.38f))
                    : Color.Lerp(top, bottom, v);
                for (int x = 0; x < w; x++)
                {
                    float cx = Mathf.Clamp(x + 0.5f, radius, w - radius), cy = Mathf.Clamp(y + 0.5f, radius, h - radius);
                    float d = Vector2.Distance(new Vector2(x + 0.5f, y + 0.5f), new Vector2(cx, cy));
                    float a = Mathf.Clamp01(radius - d + 0.5f);
                    Color c = fill;
                    if (border.HasValue && (d > radius - 1.6f || x < 1 || x > w - 2 || y < 1 || y > h - 2)) c = border.Value;
                    c.a *= a;
                    px[y * w + x] = c;
                }
            }
            t.SetPixels(px); t.Apply();
            _tex[key] = t;
            return t;
        }

        // Thin gold rule that fades out at both ends (under the top bar, above the nav).
        public static void GoldRule(Rect r)
        {
            var key = "goldrule";
            if (!_tex.TryGetValue(key, out var t) || t == null)
            {
                t = new Texture2D(64, 1, TextureFormat.RGBA32, false) { wrapMode = TextureWrapMode.Clamp };
                for (int x = 0; x < 64; x++)
                {
                    float k = Mathf.Abs(x / 63f - 0.5f) * 2; // 0 centre, 1 ends
                    var c = Color.Lerp(Palette.TrimHi, Palette.Trim, Mathf.Clamp01(k * 1.6f));
                    c.a = 1 - Mathf.Clamp01((k - 0.6f) / 0.4f);
                    t.SetPixel(x, 0, c);
                }
                t.Apply(); _tex[key] = t;
            }
            GUI.DrawTexture(r, t);
        }

        public static Texture2D Solid(Color c)
        {
            string key = "solid" + ColorUtility.ToHtmlStringRGBA(c);
            if (_tex.TryGetValue(key, out var t) && t != null) return t;
            t = new Texture2D(1, 1, TextureFormat.RGBA32, false);
            t.SetPixel(0, 0, c); t.Apply();
            _tex[key] = t;
            return t;
        }

        public static GUIStyle Style(string key, System.Func<GUIStyle> make)
        {
            if (!_styles.TryGetValue(key, out var s) || s == null) { s = make(); _styles[key] = s; }
            return s;
        }
        static GUIStyle BoxStyle(Color fill, Color? border, int radius) => new GUIStyle
        {
            normal = { background = RoundTex(fill, border, radius) }, border = new RectOffset(radius + 2, radius + 2, radius + 2, radius + 2),
        };

        public static GUIStyle Label(int size = 15, Color? color = null, FontStyle fs = FontStyle.Normal, TextAnchor align = TextAnchor.MiddleLeft, bool wrap = false, bool serif = false)
        {
            var c = color ?? Palette.Text;
            return Style($"lbl{size}{ColorUtility.ToHtmlStringRGBA(c)}{fs}{align}{wrap}{serif}", () => new GUIStyle
            {
                fontSize = size, fontStyle = fs, alignment = align, wordWrap = wrap, richText = true, clipping = TextClipping.Clip,
                normal = { textColor = c }, font = serif ? _serif : _font,
            });
        }

        public static void Panel(Rect r, Color? fill = null, Color? border = null, int radius = 14) =>
            GUI.Box(r, GUIContent.none, Style($"box{fill}{border}{radius}", () => BoxStyle(fill ?? Palette.Panel, border ?? Palette.Line, radius)));

        // The web's framed ".card": dark violet gradient, bronze edge, gold corner studs.
        public static void Card(Rect r, bool highlight = false)
        {
            var s = Style($"card{highlight}", () => new GUIStyle
            {
                normal = { background = GradientTex(Palette.Hex("#221b2e"), Palette.Hex("#1a1523"), highlight ? Palette.Gold : Palette.Hex("#5c4a30"), 12) },
                border = new RectOffset(14, 14, 14, 14),
            });
            GUI.Box(r, GUIContent.none, s);
            var stud = RoundTex(Palette.TrimHi, null, 2);
            foreach (var p in new[] { new Vector2(r.x + 5, r.y + 5), new Vector2(r.xMax - 9, r.y + 5), new Vector2(r.x + 5, r.yMax - 9), new Vector2(r.xMax - 9, r.yMax - 9) })
                GUI.DrawTexture(new Rect(p.x, p.y, 4, 4), stud);
        }

        // Section heading in serif gold (h2 in the web skin).
        public static void Heading(Rect r, string text, int size = 22, TextAnchor align = TextAnchor.MiddleLeft) =>
            Text(r, text, size, Palette.Gold, FontStyle.Bold, align, false, true);

        public static void Bar(Rect r, float pct, Color fill, Color? back = null)
        {
            GUI.DrawTexture(r, RoundTex(back ?? new Color(0, 0, 0, 0.55f), null, 3));
            if (pct > 0) GUI.DrawTexture(new Rect(r.x, r.y, r.width * Mathf.Clamp01(pct), r.height), RoundTex(fill, null, 3));
        }

        public enum Kind { Primary, Secondary, Blue, Red, Chip, ChipOn, Ghost }
        static GUIStyle ButtonStyle(Kind k, int size)
        {
            return Style($"btn{k}{size}", () =>
            {
                // Gilded plates as in style.css: gradient stops top / upper-mid / lower-mid / bottom.
                (Color top, Color midA, Color midB, Color bottom, Color text, Color? border) = k switch
                {
                    Kind.Primary => (Palette.Hex("#fde3a0"), Palette.Hex("#e2b14e"), Palette.Hex("#b98330"), Palette.Hex("#d9a64a"), Palette.Hex("#2a1a05"), (Color?)Palette.Hex("#4a3110")),
                    Kind.Blue => (Palette.Hex("#a6d6ff"), Palette.Hex("#4aa3ff"), Palette.Hex("#2563b5"), Palette.Hex("#3f8ae0"), Color.white, Palette.Hex("#0f2c52")),
                    Kind.Red => (Palette.Hex("#ffb0a0"), Palette.Hex("#ff6a5a"), Palette.Hex("#b52a2a"), Palette.Hex("#e0503e"), Color.white, Palette.Hex("#4a0f0f")),
                    Kind.Chip => (Palette.Hex("#2a2236"), Palette.Hex("#241d30"), Palette.Hex("#1f1829"), Palette.Hex("#1b1624"), Palette.Hex("#d8cbb2"), Palette.Hex("#5c4a30")),
                    Kind.ChipOn => (Palette.Hex("#3d3020"), Palette.Hex("#33281b"), Palette.Hex("#2a2117"), Palette.Hex("#241c14"), Palette.Gold, Palette.Gold),
                    Kind.Ghost => (Color.clear, Color.clear, Color.clear, Color.clear, Palette.Text, (Color?)null),
                    _ => (Palette.Hex("#3a2f45"), Palette.Hex("#2f2639"), Palette.Hex("#261e30"), Palette.Hex("#1c1624"), Palette.Hex("#f3e3c3"), Palette.Hex("#6b5432")),
                };
                int rad = k == Kind.Chip || k == Kind.ChipOn ? 14 : 10;
                var s = new GUIStyle
                {
                    normal = { background = k == Kind.Ghost ? null : GradientTex(top, bottom, border, rad, midA, 0.45f, midB) },
                    border = new RectOffset(rad + 2, rad + 2, rad + 2, rad + 2),
                };
                if (k != Kind.Ghost) s.active.background = GradientTex(Color.Lerp(top, Color.black, 0.2f), Color.Lerp(bottom, Color.black, 0.2f), border, rad, Color.Lerp(midA, Color.black, 0.2f), 0.45f, Color.Lerp(midB, Color.black, 0.2f));
                s.fontSize = size; s.fontStyle = FontStyle.Bold; s.alignment = TextAnchor.MiddleCenter; s.wordWrap = true; s.richText = true;
                s.normal.textColor = s.active.textColor = s.hover.textColor = text; s.hover.background = s.normal.background;
                s.padding = new RectOffset(6, 6, 4, 4); s.font = k == Kind.Ghost ? _font : _serif;
                return s;
            });
        }

        // Buttons ignore the release that ends a drag-scroll.
        public static bool Button(Rect r, string text, Kind k = Kind.Primary, int size = 15, bool enabled = true)
        {
            var was = GUI.enabled; GUI.enabled = was && enabled;
            var col = GUI.color; if (!enabled) GUI.color = new Color(1, 1, 1, 0.4f);
            bool hit = GUI.Button(r, text, ButtonStyle(k, size));
            GUI.color = col; GUI.enabled = was;
            return hit && !Scroller.WasDragging;
        }

        public static void Text(Rect r, string text, int size = 15, Color? color = null, FontStyle fs = FontStyle.Normal, TextAnchor align = TextAnchor.MiddleLeft, bool wrap = false, bool serif = false) =>
            GUI.Label(r, text, Label(size, color, fs, align, wrap, serif));

        // Multi-line text box (save codes, promo codes). Tapping it opens the phone keyboard.
        public static string Field(Rect r, string value, int maxLength, bool multiline)
        {
            var st = Style($"field{multiline}", () => new GUIStyle(multiline ? GUI.skin.textArea : GUI.skin.textField)
            {
                fontSize = 13, wordWrap = multiline, padding = new RectOffset(8, 8, 6, 6), font = _font,
                normal = { background = RoundTex(Palette.Hex("#0d0a12"), Palette.Hex("#5c4a30"), 8), textColor = Palette.Text },
                focused = { background = RoundTex(Palette.Hex("#120e19"), Palette.Gold, 8), textColor = Palette.Text },
                border = new RectOffset(10, 10, 10, 10),
            });
            return multiline ? GUI.TextArea(r, value ?? "", maxLength, st) : GUI.TextField(r, value ?? "", maxLength, st);
        }

        public static string Stars(int n) => new string('★', Mathf.Clamp(n, 0, 6));
        public static string Fmt(long n) => n >= 1_000_000 ? (n / 1e6).ToString("0.00") + "M" : n >= 10_000 ? (n / 1e3).ToString("0.0") + "K" : n.ToString("N0");
        public static string ColorTag(string s, Color c) => $"<color=#{ColorUtility.ToHtmlStringRGB(c)}>{s}</color>";
    }

    // Drag-to-scroll for touch screens (IMGUI scroll views only scroll by wheel/scrollbar).
    public static class Scroller
    {
        public static bool WasDragging;
        static bool _down, _dragging; static Vector2 _start, _last;
        public static float Delta;   // logical units moved this frame (positive = content moves up)

        public static void Tick()
        {
            Delta = 0;
            if (Input.GetMouseButtonDown(0)) { _down = true; _dragging = false; WasDragging = false; _start = _last = Input.mousePosition; }
            if (_down && Input.GetMouseButton(0))
            {
                Vector2 p = Input.mousePosition;
                if (!_dragging && Mathf.Abs(p.y - _start.y) > 10 * Ui.Scale / 2) _dragging = true;
                if (_dragging) { Delta = (p.y - _last.y) / Ui.Scale; WasDragging = true; }
                _last = p;
            }
            if (Input.GetMouseButtonUp(0)) { _down = false; _dragging = false; }
        }

        public static Vector2 Begin(Rect view, Vector2 scroll, float contentHeight)
        {
            if (view.Contains(Event.current.mousePosition))
                scroll.y = Mathf.Clamp(scroll.y + (Event.current.type == EventType.Repaint ? Delta : 0), 0, Mathf.Max(0, contentHeight - view.height));
            return GUI.BeginScrollView(view, scroll, new Rect(0, 0, view.width - 1, Mathf.Max(contentHeight, view.height)), GUIStyle.none, GUIStyle.none);
        }
        public static void End() => GUI.EndScrollView();
    }
}
