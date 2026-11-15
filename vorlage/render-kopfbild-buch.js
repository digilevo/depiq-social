// Aufruf: node vorlage/render-kopfbild-buch.js <zielordner>
// Rendert das E-Book-Kopfbild (heller Stil) in den Maßen aller Kanäle. s = sicherer Bereich [links, oben, breite, höhe]:
// dort steht der Inhalt; links bleibt Platz für das Profilbild, wo der Kanal es über das Kopfbild legt.
// Meldet „ÜBERLAUF“ (Exit-Code 2), wenn Text oder Buch über den sicheren Bereich hinausragen.
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const KANAELE = [
  { name: 'X', w: 1500, h: 500, s: [80, 40, 1340, 420], lay: 'x' }, // eigener Aufbau: Profilbild links unten (Kreis bis etwa x 400, ab y 310)
  { name: 'Facebook', w: 1640, h: 624, s: [420, 70, 1060, 470] },                // mobil werden die Seiten beschnitten
  { name: 'LinkedIn', w: 1128, h: 191, s: [270, 18, 820, 155], kurz: true, fs: .2 }, // Logo der Seite links unten
  { name: 'YouTube', w: 2560, h: 1440, s: [507, 509, 1546, 423] },               // sicherer Bereich auf allen Geräten
  { name: 'Pinterest', w: 1920, h: 1080, s: [180, 180, 1560, 720], fs: .12 },
];
(async () => {
  const ziel = process.argv[2] || '.'; fs.mkdirSync(ziel, { recursive: true });
  const b = await chromium.launch(); let fehler = 0;
  for (const k of KANAELE) {
    const p = await b.newPage({ viewport: { width: k.w, height: k.h } });
    await p.goto('file://' + path.join(__dirname, 'kopfbild-buch.html'));
    await p.evaluate(k => window.zeichne(k), k); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
    const ueber = await p.evaluate(() => { const s = document.getElementById('s').getBoundingClientRect();
      const t = document.querySelector('.txt').getBoundingClientRect(); const i = document.querySelector('.txt');
      return i.scrollWidth > i.clientWidth + 1 || t.bottom > s.bottom + 1 || t.top < s.top - 1; });
    const datei = path.join(ziel, `Kopfbild_Buch_${k.name}.png`);
    await p.screenshot({ path: datei }); await p.close();
    console.log('Bild:', datei, `${k.w}×${k.h}`, ueber ? 'ÜBERLAUF' : ''); if (ueber) fehler = 2;
  }
  await b.close(); process.exit(fehler);
})();
