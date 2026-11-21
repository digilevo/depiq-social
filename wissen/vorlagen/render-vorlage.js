// Aufruf: node render-vorlage.js <vorlage.html> <ziel.pdf>  – rendert eine A4-Vorlage als PDF (und Vorschau-PNG je Seite daneben).
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const [quelle, ziel] = process.argv.slice(2);
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + path.resolve(quelle)); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  await p.pdf({ path: ziel, format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await p.setViewportSize({ width: 794, height: 1123 });
  const n = await p.evaluate(() => document.querySelectorAll('.seite').length);
  for (let i = 0; i < n; i++) { const el = (await p.$$('.seite'))[i]; await el.screenshot({ path: ziel.replace(/\.pdf$/, `-s${i + 1}.png`) }); }
  const ueber = await p.evaluate(() => [...document.querySelectorAll('.seite')].map(s => { const f = s.querySelector('.fuss').getBoundingClientRect().top; return Math.max(...[...s.children].filter(c => !c.classList.contains('fuss')).map(c => c.getBoundingClientRect().bottom)) > f - 4; }));
  await b.close(); console.log('PDF:', ziel, 'Seiten:', n, 'Überlauf:', ueber);
})();
