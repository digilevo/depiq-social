// Aufruf: node vorlage/render-vorschaubild.js <daten.json> <ziel-ohne-endung>
// daten.json: {"etikett":"Aktie im Check","symbol":"📈","titel":"AMD: <em>Bin ich zu spät?</em>","zahl":"−8,75 %","zahlText":"Schluss Fr 13.11.","unter":"Was hinter dem Kurssprung steckt","format":"hoch"|"quer"}
// Ergebnis: <ziel>.jpg (JPEG, Qualität 90; YouTube, Instagram und TikTok nehmen JPEG sicher an).
// Hochkant 1080 × 1920 (Shorts, Reels, TikTok), quer 1280 × 720 (lange YouTube-Videos, YouTube verlangt unter 2 MB).
// Meldet „ÜBERLAUF“ (Exit-Code 2), wenn Text über den Rand oder in den unteren Bereich mit den Bedienelementen ragt.
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
(async () => {
  const [daten, ziel] = process.argv.slice(2); const d = JSON.parse(fs.readFileSync(daten, 'utf8'));
  const quer = d.format === 'quer'; const w = quer ? 1280 : 1080, h = quer ? 720 : 1920;
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto('file://' + path.join(__dirname, 'vorschaubild.html'));
  await p.evaluate(d => window.zeichne(d), d); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
  const ueber = await p.evaluate(q => { const i = document.querySelector('.inhalt').getBoundingClientRect(); const f = document.querySelector('.fuss').getBoundingClientRect();
    const h1 = document.querySelector('h1'); return h1.scrollWidth > h1.clientWidth + 1 || i.bottom > f.top - (q ? 10 : 30); }, quer);
  await p.screenshot({ path: ziel + '.jpg', type: 'jpeg', quality: 90 }); await b.close();
  console.log('Vorschaubild:', ziel + '.jpg', `${w}×${h}`, ueber ? 'ÜBERLAUF' : ''); process.exit(ueber ? 2 : 0);
})();
