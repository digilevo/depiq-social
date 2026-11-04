// Macht aus einem Börsen-Frühstück (boersen/JJJJ-MM-TT.json) ein animiertes TikTok-Video mit depiq-Sound.
// Aufruf: node vorlage/boersen-tiktok.js boersen/JJJJ-MM-TT.json
// Ergebnis: reels/JJJJ-MM-TT_Boerse_TikTok_Ton.mp4 (für TikTok) – Titelbild bei 3000 ms.
// Szenen: Titel · Top 3 Gewinner (Balken wachsen) · Top 3 Verlierer (rote Balken) · wichtigste News · Folge-Knopf.
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const datei = process.argv[2]; const d = JSON.parse(fs.readFileSync(datei, 'utf8'));
const tag = path.basename(datei, '.json'); const id = tag + '_Boerse_TikTok';
const [j, m, t] = tag.split('-'); const kurz = `${t}.${m}.`;
const top = (liste) => { const l = liste.slice(0, 3); const max = Math.max(...l.map(a => Math.abs(a.prozent))) || 1;
  return l.map(a => ({ name: `${a.land} ${a.name}`, betrag: a.prozent, einheit: '%', nk: 1, vorz: true, wert: Math.round(Math.abs(a.prozent) / max * 100), rot: a.prozent < 0 })); };
// News in Zeilen zu höchstens 18 Zeichen umbrechen, höchstens 4 Zeilen
const umbruch = (s) => { const w = s.split(' '); const z = []; let akt = '';
  for (const x of w) { if ((akt + ' ' + x).trim().length > 18 && akt) { z.push(akt); akt = x; } else akt = (akt + ' ' + x).trim(); }
  if (akt) z.push(akt); return z.slice(0, 4); };
const n = d.news[0];
const szenen = [
  { von: 0, bis: 3.5, zeilen: [{ text: '☕ Börse heute' }, { text: `<em>${kurz}</em>` }], groesse: 112 },
];
let t0 = 3.5;
if (d.gewinner && d.gewinner.length >= 3) { szenen.push({ von: t0, bis: t0 + 5.5, zeilen: [{ text: 'Top 3 Gewinner 🚀' }], groesse: 92, balken: top(d.gewinner) }); t0 += 5.5;
  szenen.push({ von: t0, bis: t0 + 5.5, zeilen: [{ text: 'Top 3 Verlierer 📉', rot: true }], groesse: 92, balken: top(d.verlierer) }); t0 += 5.5; }
szenen.push({ von: t0, bis: t0 + 5, zeilen: [{ text: `<em>${n.wer}</em>` }, ...umbruch(n.text).map(x => ({ text: x }))], groesse: 88 }); t0 += 5;
szenen.push({ von: t0, bis: t0 + 4, zeilen: [{ text: 'Jeden Morgen' }, { text: 'um <em>7:30 Uhr.</em>' }], groesse: 116, cta: 'Folge für mehr', bio: '@depiq.io' }); t0 += 4;
const eintrag = { dauer: t0, szenen };
fs.writeFileSync(path.join(__dirname, 'reels-boersen.js'), `// automatisch erzeugt von boersen-tiktok.js\nObject.assign(REELS, ${JSON.stringify({ [id]: eintrag }, null, 1)});\n`);
execFileSync('node', [path.join(__dirname, 'render-reel.js'), id, 'heiter'], { stdio: 'inherit' });
console.log('fertig: reels/' + id + '_Ton.mp4');
