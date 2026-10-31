// Aufruf: node vorlage/render-boersen.js <daten.json> <ziel.png>
// Rendert das Börsen-Frühstück (1600 × 900) aus vorlage/boersen.html. Aufbau der JSON-Datei: siehe Kopf von boersen.html.
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
(async () => {
  const [daten, ziel] = process.argv.slice(2);
  const d = JSON.parse(fs.readFileSync(daten, 'utf8'));
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1600, height: 900 } });
  await p.goto('file://' + path.join(__dirname, 'boersen.html')); await p.evaluate(() => document.fonts.ready);
  await p.evaluate(d => window.zeichne(d), d); await p.waitForTimeout(200);
  await p.screenshot({ path: ziel }); await b.close();
  console.log('Bild:', ziel);
})();
