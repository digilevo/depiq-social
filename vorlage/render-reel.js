// Aufruf: node render-reel.js <reelId> → ../reels/<reelId>.mp4 (1080 × 1920, 30 Bilder pro Sekunde, H.264, stille Tonspur)
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs'); const { execFileSync } = require('child_process');
const FPS = 30;
(async () => {
  const id = process.argv[2];
  const tmp = fs.mkdtempSync(path.join(require('os').tmpdir(), 'reel-'));
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + path.join(__dirname, 'reel.html') + '#' + id);
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  const dauer = await p.evaluate(() => window.DAUER);
  for (let i = 0; i < dauer * FPS; i++) {
    await p.evaluate(t => window.render(t), i / FPS);
    await p.screenshot({ path: path.join(tmp, String(i).padStart(5, '0') + '.jpg'), type: 'jpeg', quality: 92 });
  }
  await b.close();
  const ziel = path.join(__dirname, '..', 'reels'); fs.mkdirSync(ziel, { recursive: true });
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(tmp, '%05d.jpg'),
    '-f', 'lavfi', '-i', 'anullsrc=channel_layout=stereo:sample_rate=44100',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-crf', '18', '-r', String(FPS),
    '-c:a', 'aac', '-b:a', '128k', '-shortest', '-movflags', '+faststart', path.join(ziel, id + '.mp4')]);
  fs.rmSync(tmp, { recursive: true });
})();
