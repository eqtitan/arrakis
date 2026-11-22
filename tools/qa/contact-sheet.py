"""Compose hero QA shots into labelled PNG contact sheets.
stdin JSON: {"out": prefix, "per_sheet": n, "cell": [w,h], "title": str,
             "groups": [str...], "views": [str...],
             "rows": [{"label": str, "sub": str, "cells": [path|None...]}]}
Columns = groups x views. Prints the written paths, one per line."""
import json, sys
from PIL import Image, ImageDraw, ImageFont

cfg = json.load(sys.stdin)
cw, ch = cfg.get("cell", [180, 270])
groups, views, rows = cfg["groups"], cfg["views"], cfg["rows"]
per = cfg.get("per_sheet", 8)
label_w, head_h, gap = 250, 58, 4

def font(size, bold=False):
    for f in (["DejaVuSans-Bold.ttf", "DejaVuSans.ttf"] if bold else ["DejaVuSans.ttf"]):
        for d in ("/usr/share/fonts/truetype/dejavu/", ""):
            try: return ImageFont.truetype(d + f, size)
            except OSError: pass
    return ImageFont.load_default()

F_big, F_med, F_sm = font(17, True), font(13), font(11)
ncol = len(groups) * len(views)
out = []
for si in range(0, len(rows), per):
    chunk = rows[si:si + per]
    W = label_w + ncol * (cw + gap) + (len(groups) - 1) * 10
    H = head_h + len(chunk) * (ch + gap) + 24
    im = Image.new("RGB", (W, H), (24, 22, 30))
    d = ImageDraw.Draw(im)
    d.text((8, 4), cfg.get("title", ""), fill=(230, 220, 200), font=F_med)
    x = label_w
    for g in groups:
        gw = len(views) * (cw + gap)
        d.rectangle([x, 22, x + gw - gap, head_h - 4], fill=(48, 42, 60))
        d.text((x + 6, 24), g, fill=(255, 210, 120), font=F_med)
        for vi, v in enumerate(views):
            vx = x + vi * (cw + gap)
            d.text((vx + (cw - d.textlength(v, font=F_sm)) / 2, 40), v, fill=(190, 190, 210), font=F_sm)
        x += gw + 10
    for ri, r in enumerate(chunk):
        y = head_h + ri * (ch + gap)
        d.text((8, y + 8), r["label"], fill=(255, 255, 255), font=F_big)
        yy = y + 32
        for line in (r.get("sub") or "").split("\n"):
            d.text((8, yy), line, fill=(170, 170, 185), font=F_sm); yy += 15
        x = label_w
        ci = 0
        for g in groups:
            for v in views:
                p = r["cells"][ci] if ci < len(r["cells"]) else None
                ci += 1
                if p:
                    try:
                        t = Image.open(p).convert("RGB"); t.thumbnail((cw, ch))
                        im.paste(t, (x + (cw - t.width) // 2, y + (ch - t.height) // 2))
                    except Exception as e:
                        d.text((x + 4, y + 4), "ERR " + str(e)[:20], fill=(255, 80, 80), font=F_sm)
                else:
                    d.rectangle([x, y, x + cw, y + ch], outline=(90, 40, 40)); d.text((x + 6, y + 6), "missing", fill=(255, 90, 90), font=F_sm)
                x += cw + gap
            x += 10
    path = f"{cfg['out']}-{si // per + 1}.png"
    im.save(path, optimize=True)
    out.append(path)
print("\n".join(out))
