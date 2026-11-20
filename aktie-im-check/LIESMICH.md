# Aktie im Check: automatischer Ablauf (ab 05.11.2026, von Jürgen freigegeben)

Geplante Aufgabe „depiq Aktie im Check“ läuft Mo–Fr gegen 14:30 Uhr. Regeln für Inhalt und Aufbau: RICHTLINIEN.md §4i.

## Auswahl
- Unternehmen: Börsenwert über 50 Mrd. US-Dollar UND Privatanlegern in Deutschland, Österreich, Schweiz bekannt (Marke, die man im Alltag kennt), dazu jede DAX-Firma.
- Anlass: Quartals- oder Jahreszahlen seit dem letzten Lauf (US-Zahlen vom Vorabend nach Börsenschluss und vom heutigen Tag vor Börsenstart, Europa und Asien von heute früh).
- Höchstens 1 Beitrag pro Tag. Bei mehreren Kandidaten die wichtigste Meldung: 1) Bekanntheit in DACH, 2) Kursreaktion, 3) Überraschung gegenüber den Erwartungen.
- Kein Beitrag, wenn nichts Passendes kam oder sich die Zahlen nicht aus zwei Quellen belegen lassen. Dann keine Nachricht an Jürgen.
- Dieselbe Firma höchstens einmal pro Quartal (siehe Liste unten).

## Offenlegung
Pflicht in jedem Beitrag. Grundlage ist `offenlegung.md`. Steht die Firma nicht dort: „Offenlegung: Ich halte die Aktie nicht.“ und in der Nachricht an Jürgen deutlich „Offenlegung bitte prüfen“ schreiben.

## Veröffentlichung
Ab 11.11.2026 (Test-Strategie): Montag bis Freitag. TikTok-Fotostrecke (JPEG, ohne Musik), YouTube Short (Musik ruhig), Instagram- und Facebook-Reel (Bilder-Video mit depiq-Sound, `_Ton.mp4`) um 16:00 Uhr als Entwurf in Metricool. Jürgen gibt frei und postet X selbst (Bild 1–4).
Dienstags und donnerstags zusätzlich ein Sprechtext für Jürgen in `selbst/JJJJ-MM-TT_sprechtext-<firma>.md` (rund 30 Sekunden, 70–80 Wörter, Ich-Form, Haken im ersten Satz, keine Empfehlung, keine Prognose, Offenlegung am Ende).

## Design: immer hell (ab 17.11.2026, Jürgen: „wir haben definiert, alles im hell-modus umzustellen“)
Jede Folge im hellen Design: in der JSON `"design": "hell"` setzen (gleiches Rendern mit `render-karussell.js`). Kein Wechsel hell/dunkel mehr; der Test 16.11.–27.11. ist beendet. Die dunkle Grundvorlage bleibt nur als Rückfall erhalten.

## Bereits behandelt
| Datum | Firma | Anlass |
|---|---|---|
| 04.11.2026 | Novo Nordisk | Zahlen 3. Quartal 2026 |
| 04.11.2026 | McDonald's | Zahlen 3. Quartal 2026 |
| 05.11.2026 | Rheinmetall | Zahlen 3. Quartal 2026, Prognose gesenkt |
| 06.11.2026 | Daimler Truck | Zahlen 3. Quartal 2026, Bestellungen unter Erwartung |
| 09.11.2026 | UniCredit | Zahlen 3. Quartal 2026, Plan zur Commerzbank-Kontrolle |
| 11.11.2026 | Siemens Energy | Zahlen Geschäftsjahr 2025/26, Rekordjahr, Aktie +9 % (kein Haken-Test aktiv, Standard-Vorlage) |
| 12.11.2026 | Siemens | Zahlen Geschäftsjahr 2025/26, Rekordaufträge 108 Mrd. €, Aktie rund +4 % nahe Rekordhoch (dunkel, kein Haken-Test aktiv, Sprechtext Do) |
| 13.11.2026 | Richemont | Halbjahreszahlen 2026/27, Gewinn +39 %, Aktie zeitweise rund −7 %, am Nachmittag rund −4,5 % (dunkel, kein Haken-Test aktiv) |
| 16.11.2026 | AMD | Kursbewegung: rund +30 % in vier Tagen nach Nvidia-Chefrücktritt, dann Fr −8,75 %, Mo vorbörslich erneut Minus (keine Zahlen im Zeitraum; hell, kein Haken-Test aktiv) |
| 17.11.2026 | Walt Disney | Zahlen 4. Quartal und Geschäftsjahr 2025/26, Gewinn je Aktie bereinigt +59 % über Erwartung, Dividende +33 %, Aktie vorbörslich erst rund +2 %, dann im Minus (hell, nachträglich von dunkel umgestellt, kein Haken-Test aktiv, Sprechtext Di) |
| 18.11.2026 | Nvidia | Zahlen 3. Quartal GJ 2027 (erste ohne Jensen Huang), Umsatz +103 % auf 115,8 Mrd. $ über Erwartung, Aktie seit Chef-Rücktritt rund −10 %, Mi vorbörslich rund +3 % (hell, kein Haken-Test aktiv) |
| 19.11.2026 | Walmart | Zahlen 3. Quartal GJ 2027, Umsatz +5,2 % auf 188,8 Mrd. $ leicht über Erwartung, Prognose zum 3. Mal angehoben (aber unter Erwartung), Aktie vorbörslich knapp im Plus, KGV rund 44 (hell, kein Haken-Test aktiv, Sprechtext Do) |
| 20.11.2026 | Anthropic | Börsengang Do 19.11. (größter bisher, 81,3 Mrd. $): Ausgabepreis 83 $, erster Kurs 111,50 $, Schluss 97,17 $ (+17,1 %), Fr vorbörslich über −6 %; keine Quartalszahlen, Zahlen aus Prospekt (hell, kein Haken-Test aktiv, Vorschaubild neu) |

## Baustein „Kurs gegen Gewinn“ (Entwurf 06.11.2026, noch nicht freigegeben)
Ein Bild mit Kurs und einfacher Wertlinie (Gewinn je Aktie × Ø-KGV), passend als Seite 3 „Kennzahlen einfach erklärt“.
`node vorlage/render-wertlinie.js <daten.json> <ziel>`; Beispiel: `aktie-im-check/vorlage-beispiel/wertlinie_beispiel.json`.
Regeln: Jahresschlusskurse und Gewinne je Aktie aus zwei Quellen, Stand nennen, Linie endet beim letzten echten Jahr (keine Prognose), nie „Kauflimit“, „kaufenswert“, „Schnäppchen“, „Renditepotenzial“.
