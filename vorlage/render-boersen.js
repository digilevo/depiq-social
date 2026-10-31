// Aufruf: node vorlage/render-boersen.js <daten.json> <ziel.png> [story]
// Rendert das Börsen-Frühstück aus vorlage/boersen.html: ohne drittes Argument 1600 × 900 (X, Facebook),
// mit „story“ 1080 × 1920 (Instagram-Story). Aufbau der JSON-Datei: siehe Kopf von boersen.html.
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
(async () => {
  const [daten, ziel, art] = process.argv.slice(2);
  const story = art === 'story';
  const d = JSON.parse(fs.readFileSync(daten, 'utf8'));
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: story ? { width: 1080, height: 1920 } : { width: 1600, height: 900 } });
  await p.goto('file://' + path.join(__dirname, 'boersen.html') + (story ? '?story' : '')); await p.evaluate(() => document.fonts.ready);
  await p.evaluate(d => window.zeichne(d), d); await p.waitForTimeout(200);
  await p.screenshot({ path: ziel }); await b.close();
  console.log('Bild:', ziel);
})();
