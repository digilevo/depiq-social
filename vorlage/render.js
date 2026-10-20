// Aufruf: node render.js <postId>[:ig|:x] ...
// Schreibt ../bilder/<postId>_Instagram.png und <postId>_X.png.
// Karussell-Folien (<Tag>_<n>von4) werden zu <Tag>_Instagram_<n>von4.png.
const { chromium } = require('playwright'); const path = require('path');
const GROESSE = { ig: [1080, 1350, 'Instagram'], x: [1600, 900, 'X'] };
const dateiname = (id, name) => /_\dvon\d$/.test(id)
  ? id.replace(/_(\dvon\d)$/, '_' + name + '_$1') + '.png'
  : id + '_' + name + '.png';
(async () => {
  const b = await chromium.launch();
  for (const arg of process.argv.slice(2)) {
    const [id, nur] = arg.split(':');
    for (const [f, [w, h, name]] of Object.entries(GROESSE)) {
      if (nur && nur !== f) continue;
      const p = await b.newPage({ viewport: { width: w, height: h } });
      await p.goto('file://' + path.join(__dirname, 'karte.html') + '#' + id + '/' + f);
      await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
      await p.screenshot({ path: path.join(__dirname, '..', 'bilder', dateiname(id, name)) });
      await p.close();
    }
  }
  await b.close();
})();
