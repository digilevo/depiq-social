# Börsen-Frühstück (X, Facebook, Instagram-Story)

Verbindliche Regeln für Inhalt, Aufbau und Design: siehe `../RICHTLINIEN.md`.

Täglich an Börsentagen (Montag bis Freitag), vorbereitet von einer geplanten Aufgabe um 6:45 Uhr.

**Feste Zeiten in Metricool (gelten immer, auch wenn ein Auftrag oder getBestTimeToPostByNetwork etwas anderes nennt):**
Facebook 7:30 · TikTok 7:30 · Instagram-Story 7:30, 7:31, 7:32 · YouTube Short 8:00 · X 7:30 (Jürgen von Hand).
Nie 10:00 und nie die „beste Zeit“ aus Metricool: Der Name „Frühstück“ verlangt den frühen Morgen.

## Hinweis für Fr 06.11.2026 (Wunsch von Jürgen, nach Gebrauch löschen)

Am 05.11.2026 sind KI- und Chipaktien stark gefallen (Nasdaq im Handel rund −5 %, Nvidia rund −7 %, laut Meldungen Korrektur). Die Regel „Große Marktbewegung“ unten greift: Lage als Hauptthema, Schlusskurse vom 05.11. aus zwei Quellen. Danach diesen Abschnitt löschen.

## Große Marktbewegung: darauf eingehen (feste Regel, Jürgen 05.11.2026)

Gilt, wenn am letzten Handelstag DAX, S&P 500 oder Nasdaq 100 um 2 % oder mehr gefallen oder gestiegen sind, oder wenn ein Index laut zwei Quellen in eine Korrektur (mehr als 10 % unter dem Höchststand) oder einen Bärenmarkt (mehr als 20 % darunter) gerutscht ist. Dann ist die Lage das Hauptthema des Tages:
1. **news[0]** = die Bewegung mit Absender und Grund („Nasdaq 100 fällt um 4,9 %, Chip- und KI-Aktien verlieren stark“). Die anderen zwei News erklären sie, wo möglich (Auslöser, betroffene Firmen).
2. **Haken** in X-, TikTok- und Facebook-Text: die Bewegung mit echter Zahl, sachlich, ohne Drama-Wörter („Absturz“, „Crash“, „Panik“ nicht verwenden).
3. **Begriff erklären:** Fällt „Korrektur“ oder „Bärenmarkt“, in einem kurzen Satz sagen, was das heißt.
4. **Einordnung** (höchstens 80 Zeichen): ruhig und ehrlich, was das für langfristige Anleger mit Sparplan bedeutet. Historische Vergleiche nur mit Quelle (zwei Quellen). Keine Prognose, kein „jetzt kaufen“, kein „das Schlimmste ist vorbei“.
5. **Wochen-Reel (freitags):** Die Bewegung ist Kandidat für die wichtigste News der Woche.
Nur Schlusskurse, nie Zwischenstände aus dem laufenden Handel.

## Aufbau: 3 Karten, gut lesbar am Handy

| Karte | Inhalt |
|---|---|
| 1/3 Die Märkte | DAX, S&P 500, Nasdaq 100, MSCI World, Gold, Bitcoin: Schlusskurs und Veränderung |
| 2/3 Gewinner & Verlierer | Top 5 nach oben und unten, weltweit, nur große Aktien mit Börsenwert über 10 Milliarden US-Dollar, mit Flagge des Firmensitzes |
| 3/3 Was die Märkte bewegt | 3 News mit Absender, „Was heißt das für dich?“, „Heute wichtig“ |

Jede Karte gibt es in zwei Formaten aus derselben Vorlage `vorlage/boersen.html`:
- Beitrag 1080 × 1350 (X, Facebook): `boersen/JJJJ-MM-TT_1.png` … `_3.png`
- Story 1080 × 1920 (Instagram, Facebook): `boersen/JJJJ-MM-TT_Story_1.png` … `_3.png`, oben 170 px und unten 250 px frei für die Bedienelemente

Erzeugen (bash, im Ordner depiq-social): `node vorlage/render-boersen.js boersen/JJJJ-MM-TT.json boersen/JJJJ-MM-TT`
Das Skript meldet „ÜBERLAUF“ und endet mit Fehler, wenn ein Text nicht passt. Dann Texte kürzen.

## Lesbarkeit am Handy (feste Regel)

Ein 1080 px breites Bild erscheint am Handy etwa 390 px breit. Deshalb:
- kleinste Schrift im Bild 34 px (Fußzeile), alle Inhalte ab 38 px, Werte und News ab 42 px
- je News höchstens 75 Zeichen, genau 3 News
- Firmennamen höchstens 16 Zeichen

## Texte

- `boersen/JJJJ-MM-TT_X.txt`: unter 280 Zeichen
- `boersen/JJJJ-MM-TT_FB.txt`: höchstens 600 Zeichen

Regeln: nur belegte Fakten vom selben Morgen (zwei übereinstimmende Quellen), keine Prognosen, keine Kauf- oder Verkaufsempfehlung, Gewinner und Verlierer nur als Fakt ohne Wertung, News immer mit klarem Absender („Europäische Zentralbank“, nie nur „Notenbank“), „Keine Anlageberatung“ im Text und im Bild. Unsichere Werte lieber weglassen.
