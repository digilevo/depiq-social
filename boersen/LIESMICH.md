# Börsen-Frühstück (X)

Täglicher Post an Börsentagen (Mo–Fr), vorbereitet von einer geplanten Aufgabe um 6:45 Uhr.

- Daten je Tag: `boersen/JJJJ-MM-TT.json` (Aufbau siehe `beispiel.json` und Kopf von `vorlage/boersen.html`)
- Bild je Tag: `boersen/JJJJ-MM-TT_X.png`, gerendert mit `node vorlage/render-boersen.js <json> <png>`
- Text je Tag: `boersen/JJJJ-MM-TT_X.txt` (unter 280 Zeichen)

Aufbau des Bildes:
- oben: Indexleiste mit 6 Werten (DAX, S&P 500, Nasdaq 100, MSCI World, Gold, Bitcoin)
- links: Top 5 Gewinner und Top 5 Verlierer weltweit, unabhängig von Indizes. Nur große, bekannte Aktien mit Börsenwert über 10 Milliarden US-Dollar (Feld `auswahl`), jede Zeile mit der Flagge des Firmensitzes (Feld `land`), reine Tagesveränderung in Prozent
- rechts: 3 bis 4 Markt-News, jede mit Absender-Etikett (`wer`: EZB, Fed, USA, Firmenname …) und einem vollständigen Satz, der sagt, wer was getan hat. Nie „Notenbank“ ohne Namen, immer „Europäische Zentralbank“, „US-Notenbank Fed“ usw.
- darunter: „Was heißt das für dich?“

Regeln: nur belegte Fakten vom selben Morgen, keine Prognosen, keine Kauf-/Verkaufsempfehlung, Gewinner und Verlierer nur als Fakt ohne Wertung, „Keine Anlageberatung.“ im Text und im Bild. Unsichere Werte lieber weglassen.
