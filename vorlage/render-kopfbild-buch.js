// Aufruf: node vorlage/render-kopfbild-buch.js <zielordner>
// Rendert das E-Book-Kopfbild (heller Stil) in den Maßen aller Kanäle. s = sicherer Bereich [links, oben, breite, höhe]:
// dort steht der Inhalt; links bleibt Platz für das Profilbild, wo der Kanal es über das Kopfbild legt.
// Meldet „ÜBERLAUF“ (Exit-Code 2), wenn Text oder Buch über den sicheren Bereich hinausragen.
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
const KANAELE = [
  { name: 'X', w: 1500, h: 500, s: [0, 0, 1500, 500], lay: 'x', deko: 'seiten' }, // eigener Aufbau für Desktop und Handy, Maße in kopfbild-buch.html
  { name: 'Facebook', w: 1640, h: 624, s: [0, 0, 1640, 624], lay: 'frei', deko: 'seiten', t: [400, 120, 360], b: [1065, 92, 440], d: [-100, 40, 520] }, // Profilbild links unten, Handy schneidet je ~265 px seitlich
  { name: 'LinkedIn', w: 1128, h: 191, s: [0, 0, 1128, 191], lay: 'frei', deko: 'seiten', kurz: true, t: [290, 22, 150], b: [790, 8, 176], d: [-30, 0, 191] }, // Logo der Seite links unten
  { name: 'YouTube', w: 2560, h: 1440, s: [0, 0, 2560, 1440], lay: 'frei', deko: 'seiten', t: [640, 545, 360], b: [1650, 515, 410], d: [40, 470, 500] }, // sicherer Bereich x 507–2053, y 509–932
  { name: 'Pinterest', w: 1920, h: 1080, s: [0, 0, 1920, 1080], lay: 'frei', deko: 'seiten', t: [560, 270, 440], b: [1330, 160, 660], d: [-160, 150, 700] }, // Profilbild mittig unten
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
