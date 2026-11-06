// Aufruf: node vorlage/render-wertlinie.js <daten.json> <ziel-ohne-endung>
// Rendert „Kurs gegen Gewinn“ als <ziel>.png und <ziel>.jpg (1080 × 1350). Meldet „ÜBERLAUF“ (Exit-Code 2), wenn Inhalt nicht passt.
// Daten: { firma, flagge, stand, jahre:[…], kurs:[Jahresschlusskurse], gewinn:[Gewinn je Aktie je Jahr], kgv?(sonst Mittel), kursHeute?, waehrung?, unter?, hinweis?, annahmen? }
// Regeln (RICHTLINIEN §4i): Kurse und Gewinne aus zwei Quellen, Stand-Datum nennen, keine Kaufempfehlung, keine Prognose-Linie.
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
(async () => {
  const [daten, ziel] = process.argv.slice(2); const d = JSON.parse(fs.readFileSync(daten, 'utf8'));
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto('file://' + path.join(__dirname, 'wertlinie.html'));
  await p.evaluate(() => document.fonts.ready); await p.evaluate(d => window.zeichne(d), d); await p.waitForTimeout(150);
  const ueber = await p.evaluate(() => { const i = document.querySelector('.inhalt'); return i.scrollHeight > i.clientHeight + 1; });
  await p.screenshot({ path: `${ziel}.png` }); await p.screenshot({ path: `${ziel}.jpg`, type: 'jpeg', quality: 92 });
  await b.close(); console.log('Bild:', `${ziel}.png`, ueber ? 'ÜBERLAUF' : ''); process.exit(ueber ? 2 : 0);
})();
