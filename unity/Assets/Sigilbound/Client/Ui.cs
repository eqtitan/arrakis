// Code-only UI toolkit on Unity's immediate-mode GUI: a phone-sized logical canvas
// (390 points wide, scaled to the screen), rounded panels/buttons from generated
// textures, and touch drag-to-scroll. No editor setup or UI package needed.
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
        static Font _font;

        public static void Begin()
        {
            GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, new Vector3(Scale, Scale, 1));
            if (_font == null) _font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
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

        public static GUIStyle Label(int size = 15, Color? color = null, FontStyle fs = FontStyle.Normal, TextAnchor align = TextAnchor.MiddleLeft, bool wrap = false)
        {
            var c = color ?? Palette.Text;
            return Style($"lbl{size}{ColorUtility.ToHtmlStringRGBA(c)}{fs}{align}{wrap}", () => new GUIStyle
            {
                fontSize = size, fontStyle = fs, alignment = align, wordWrap = wrap, richText = true, clipping = TextClipping.Clip,
                normal = { textColor = c }, font = _font,
            });
        }

        public static void Panel(Rect r, Color? fill = null, Color? border = null, int radius = 14) =>
            GUI.Box(r, GUIContent.none, Style($"box{fill}{border}{radius}", () => BoxStyle(fill ?? Palette.Panel, border ?? Palette.Line, radius)));

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
                (Color fill, Color text, Color? border) = k switch
                {
                    Kind.Primary => (Palette.Gold, Palette.Hex("#1b1408"), (Color?)Palette.GoldDark),
                    Kind.Blue => (Palette.Hex("#3d8fe8"), Color.white, Palette.Hex("#1a4378")),
                    Kind.Red => (Palette.Hex("#d84848"), Color.white, Palette.Hex("#6e1c1c")),
                    Kind.Chip => (Palette.Panel2, Palette.Text, Palette.Line),
                    Kind.ChipOn => (Palette.Panel2, Palette.Gold, Palette.Gold),
                    Kind.Ghost => (new Color(0, 0, 0, 0), Palette.Text, (Color?)null),
                    _ => (Palette.Panel2, Palette.Text, Palette.Line),
                };
                int rad = k == Kind.Chip || k == Kind.ChipOn ? 14 : 11;
                var s = BoxStyle(fill, border, rad);
                s.active.background = RoundTex(Color.Lerp(fill, Color.black, 0.2f), border, rad);
                s.fontSize = size; s.fontStyle = FontStyle.Bold; s.alignment = TextAnchor.MiddleCenter; s.wordWrap = true; s.richText = true;
                s.normal.textColor = s.active.textColor = s.hover.textColor = text; s.hover.background = s.normal.background;
                s.padding = new RectOffset(6, 6, 4, 4); s.font = _font;
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

        public static void Text(Rect r, string text, int size = 15, Color? color = null, FontStyle fs = FontStyle.Normal, TextAnchor align = TextAnchor.MiddleLeft, bool wrap = false) =>
            GUI.Label(r, text, Label(size, color, fs, align, wrap));

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
