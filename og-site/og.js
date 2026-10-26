const { chromium } = require('playwright'); const path = require('path');
(async () => { const b = await chromium.launch();
  for (const [q, f] of [['', 'og-image.png'], ['lang=en', 'og-image-en.png']]) {
    const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
    await p.goto('file://' + path.join(__dirname, 'og.html') + '?' + q); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
    await p.screenshot({ path: path.join(__dirname, f) }); await p.close(); }
  await b.close(); })();
