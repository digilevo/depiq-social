// Aufruf: node vorlage/render-pin.js <daten.json> <ziel-ohne-endung>
// Rendert jede Seite des Pins als <ziel>_N.png (1000 × 1500, Pinterest). Meldet „ÜBERLAUF“, wenn Inhalt nicht passt (Exit-Code 2).
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
(async () => {
  const [daten, ziel] = process.argv.slice(2); const d = JSON.parse(fs.readFileSync(daten, 'utf8'));
  const b = await chromium.launch(); let fehler = 0;
  for (let n = 1; n <= d.seiten.length; n++) {
    const p = await b.newPage({ viewport: { width: 1000, height: 1500 } });
    await p.goto('file://' + path.join(__dirname, 'pin.html') + '?seite=' + n);
    await p.evaluate(() => document.fonts.ready); await p.evaluate(d => window.zeichne(d), d); await p.waitForTimeout(150);
    const ueber = await p.evaluate(() => { const i = document.querySelector('.inhalt'); return i.scrollHeight > i.clientHeight + 1; });
    await p.screenshot({ path: `${ziel}_${n}.png` }); await p.close();
    console.log('Bild:', `${ziel}_${n}.png`, ueber ? 'ÜBERLAUF' : ''); if (ueber) fehler = 2;
  }
  await b.close(); process.exit(fehler);
})();
