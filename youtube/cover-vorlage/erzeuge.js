// YouTube-Cover „depiq erklärt“ (1280 × 720). Aufruf im Ordner youtube/cover-vorlage: node erzeuge.js
// Neue Folge: Eintrag in folgen.json ergänzen. <em>…</em> = Schlüsselwort mit Farbverlauf, <b>…</b> = Nutzen in Gelb.
// Farbe = Themenfarbe (grundlagen #4f46e5, mindset #7c3aed, aktien #2563eb, etfs #0d9488, depot #16a34a, immobilien #6b7280,
// edelmetalle #c99a06, krypto #ea7a12, vorsorge #92400e, risiken #e11d48, allgemein #6366f1)
const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  const t = fs.readFileSync(path.join(__dirname, 'thumb.html'), 'utf8');
  for (const v of JSON.parse(fs.readFileSync(path.join(__dirname, 'folgen.json'), 'utf8'))) {
    let h = t; for (const k of ['farbe', 'reihe', 'titel', 'unter', 'dauer']) h = h.replaceAll('{{' + k + '}}', v[k]);
    const tmp = path.join(__dirname, '_' + v.datei + '.html'); fs.writeFileSync(tmp, h);
    await p.goto('file://' + tmp); await p.waitForTimeout(800);
    await p.screenshot({ path: path.join(__dirname, 'ausgabe', v.datei + '.png') }); fs.unlinkSync(tmp);
    console.log('erstellt', v.datei + '.png');
  }
  await b.close();
})();
