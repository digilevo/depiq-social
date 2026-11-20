// Aufruf: node vorlage/render-kopfbild-kanal.js <zielordner> [bild1 bild2 bild3]
// Rendert das YouTube-Kanal-Kopfbild (2560 × 1440). Bilder = drei Seiten 1 aus „Aktie im Check“ (Pfade relativ zum Repository).
// Meldet „ÜBERLAUF“ (Exit-Code 2), wenn Text oder Karten aus dem sicheren Bereich x 507–2053, y 509–932 ragen.
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
(async () => {
  const ziel = process.argv[2] || '.'; fs.mkdirSync(ziel, { recursive: true });
  const bilder = (process.argv.slice(3).length ? process.argv.slice(3) : [
    'karussell/2026-11-17_Di_aktie-im-check-disney_1.png', 'karussell/2026-11-19_Do_aktie-im-check-walmart_1.png', 'karussell/2026-11-18_Mi_aktie-im-check-nvidia_1.png',
  ]).map(b => '../' + b);
  const br = await chromium.launch(); const p = await br.newPage({ viewport: { width: 2560, height: 1440 } });
  await p.goto('file://' + path.join(__dirname, 'kopfbild-kanal.html'));
  await p.evaluate(b => window.zeichne(b), bilder); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  const ueber = await p.evaluate(() => [...document.querySelectorAll('.txt, .txt *, .karten img')].some(e => {
    const r = e.getBoundingClientRect(); return r.left < 507 || r.right > 2053 || r.top < 509 || r.bottom > 932; }));
  const datei = path.join(ziel, 'Kopfbild_Kanal_YouTube.png'); await p.screenshot({ path: datei }); await br.close();
  console.log('Bild:', datei, '2560×1440', ueber ? 'ÜBERLAUF' : ''); process.exit(ueber ? 2 : 0);
})();
