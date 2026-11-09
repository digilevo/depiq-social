#!/usr/bin/env python3
"""depiq-Logo unten rechts auf ein Bild setzen – gleiche Kachel wie bei den Wissens-Titelbildern.
Aufruf: python3 vorlage/logo-stempel.py <eingabe> <ausgabe> [breite höhe]
Ohne breite/höhe bleibt die Größe; sonst wird auf diese Größe zugeschnitten (Mitte)."""
import sys, os
from PIL import Image, ImageDraw, ImageFilter
HIER = os.path.dirname(os.path.abspath(__file__))
def stempel(src, dst, w=None, h=None):
    im = Image.open(src).convert('RGB')
    if w and h:
        s = max(w / im.width, h / im.height)
        im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
        l, t = (im.width - w) // 2, (im.height - h) // 2
        im = im.crop((l, t, l + w, t + h))
    W, H = im.size; k = W / 1600
    tw, th, r = round(346 * k), round(97 * k), round(18 * k)
    x0, y0 = W - round(32 * k) - tw, H - round(28 * k) - th
    # Kachel: dunkles Blau, leicht durchscheinend, feiner heller Rand, weicher Schatten
    lage = Image.new('RGBA', im.size, (0, 0, 0, 0)); d = ImageDraw.Draw(lage)
    schatten = Image.new('RGBA', im.size, (0, 0, 0, 0))
    ImageDraw.Draw(schatten).rounded_rectangle((x0, y0 + round(6 * k), x0 + tw, y0 + th + round(6 * k)), r, fill=(0, 0, 0, 90))
    schatten = schatten.filter(ImageFilter.GaussianBlur(round(10 * k)))
    d.rounded_rectangle((x0, y0, x0 + tw, y0 + th), r, fill=(17, 22, 66, 214), outline=(255, 255, 255, 46), width=max(1, round(2 * k)))
    logo = Image.open(os.path.join(HIER, 'logo-weiss.png')).convert('RGBA')
    lh = round(th * 0.68); lw = round(logo.width * lh / logo.height)
    logo = logo.resize((lw, lh), Image.LANCZOS)
    basis = im.convert('RGBA'); basis.alpha_composite(schatten); basis.alpha_composite(lage)
    basis.alpha_composite(logo, (x0 + (tw - lw) // 2, y0 + (th - lh) // 2))
    basis.convert('RGB').save(dst, quality=90)
if __name__ == '__main__':
    a = sys.argv[1:]
    stempel(a[0], a[1], *(int(x) for x in a[2:4])) if len(a) >= 4 else stempel(a[0], a[1])
