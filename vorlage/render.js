// Aufruf: node render.js <postId> [<postId> ...]  → schreibt ../bilder/<postId>_Instagram.png und _X.png
const { chromium } = require('playwright'); const path = require('path');
const GROESSE = { ig: [1080, 1350, 'Instagram'], x: [1600, 900, 'X'] };
(async () => {
  const b = await chromium.launch();
  for (const id of process.argv.slice(2)) for (const [f, [w, h, name]] of Object.entries(GROESSE)) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    await p.goto('file://' + path.join(__dirname, 'karte.html') + '#' + id + '/' + f);
    await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
    await p.screenshot({ path: path.join(__dirname, '..', 'bilder', id + '_' + name + '.png') });
  }
  await b.close();
})();
