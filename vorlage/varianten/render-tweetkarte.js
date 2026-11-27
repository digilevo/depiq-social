// Aufruf: node vorlage/varianten/render-tweetkarte.js <daten.json> <ziel-ohne-endung>
// Rendert die Design-Variante „Tweet-Karte“ (tweetkarte.html) als Beitrag 1080 × 1350 (<ziel>.png/.jpg)
// und als Story/Reel-Bild 1080 × 1920 (<ziel>_Story.png/.jpg). Meldet „ÜBERLAUF“ (Exit-Code 2), wenn Text nicht passt.
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
(async () => {
  const [daten, ziel] = process.argv.slice(2);
  const d = JSON.parse(fs.readFileSync(daten, 'utf8'));
  const b = await chromium.launch(); let fehler = 0;
  for (const format of ['feed', 'story']) {
    const p = await b.newPage({ viewport: { width: 1080, height: format === 'story' ? 1920 : 1350 } });
    await p.goto('file://' + path.join(__dirname, 'tweetkarte.html') + `?format=${format}`);
    await p.evaluate(() => document.fonts.ready);
    await p.evaluate(d => window.zeichne(d), d); await p.waitForTimeout(150);
    const ueber = await p.evaluate(() => { const r = [];
      document.querySelectorAll('.seite *').forEach(e => { if (e.scrollWidth > e.clientWidth + 1 && e.parentElement.classList.contains('quelle')) r.push(e.className || e.tagName); });
      const k = document.getElementById('karte'); if (k.scrollHeight > k.clientHeight + 1) r.push('Karte zu hoch');
      const g = document.querySelector('.grafik'); if (g.scrollHeight > g.clientHeight + 1) r.push('Grafik zu hoch');
      document.querySelectorAll('.zeile .n').forEach(e => { if (e.scrollWidth > e.clientWidth + 1) r.push('Name zu lang: ' + e.textContent); });
      return r; });
    const datei = `${ziel}${format === 'story' ? '_Story' : ''}.png`;
    await p.screenshot({ path: datei });
    await p.screenshot({ path: datei.replace(/\.png$/, '.jpg'), type: 'jpeg', quality: 92 }); await p.close();
    console.log('Bild:', datei, ueber.length ? 'ÜBERLAUF: ' + ueber.join(', ') : '');
    if (ueber.length) fehler = 2;
  }
  await b.close(); process.exit(fehler);
})();
