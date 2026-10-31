// Aufruf: node vorlage/render-boersen.js <daten.json> <ziel-ohne-endung>
// Rendert die 3 Karten des Börsen-Frühstücks aus vorlage/boersen.html, je als Beitrag (1080 × 1350) und Story (1080 × 1920):
//   <ziel>_1.png … _3.png         Beitrag für X, Facebook
//   <ziel>_Story_1.png … _3.png   Story für Instagram und Facebook
// Prüft dabei, dass kein Text über den Rand läuft (Ausgabe „ÜBERLAUF“ + Exit-Code 2).
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
(async () => {
  const [daten, ziel] = process.argv.slice(2);
  const d = JSON.parse(fs.readFileSync(daten, 'utf8'));
  const b = await chromium.launch(); let fehler = 0;
  for (const format of ['feed', 'story']) for (const karte of [1, 2, 3]) {
    const p = await b.newPage({ viewport: { width: 1080, height: format === 'story' ? 1920 : 1350 } });
    await p.goto('file://' + path.join(__dirname, 'boersen.html') + `?karte=${karte}&format=${format}`);
    await p.evaluate(() => document.fonts.ready);
    await p.evaluate(d => window.zeichne(d), d); await p.waitForTimeout(150);
    const ueber = await p.evaluate(() => { const s = document.querySelector('.seite'); const r = [];
      s.querySelectorAll('*').forEach(e => { if (e.scrollWidth > e.clientWidth + 1 && getComputedStyle(e).overflow !== 'visible') r.push(e.className); });
      const inh = document.querySelector('.inhalt'); if (inh.scrollHeight > inh.clientHeight + 1) r.push('Inhalt zu hoch');
      const fu = document.querySelector('.fuss'); if (fu.scrollWidth > fu.clientWidth + 1) r.push('Fußzeile zu breit'); return r; });
    const datei = `${ziel}${format === 'story' ? '_Story' : ''}_${karte}.png`;
    await p.screenshot({ path: datei }); await p.close();
    console.log('Bild:', datei, ueber.length ? 'ÜBERLAUF: ' + ueber.join(', ') : '');
    if (ueber.length) fehler = 2;
  }
  await b.close(); process.exit(fehler);
})();
