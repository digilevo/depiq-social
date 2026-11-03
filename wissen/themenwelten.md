# Themenwelten – eine Zuordnung für Buch, Website, Posts, App und Academy

Entschieden von Jürgen am 03.11.2026: „Alles passt zusammen wie ein Lego-Baustein.“ Jedes Thema hat überall
dieselbe Farbe, dasselbe Symbol und denselben Namen. Wer etwas im Buch gesehen hat, erkennt es auf der Website,
in den Posts und später in der App und in der Academy sofort wieder.

Quelle der Wahrheit: buch/themen.json (nur dort ändern). Diese Tabelle ist die öffentliche Abschrift für alle anderen Stellen.
Auf der Landingpage liegt dieselbe Zuordnung als eine Datei (app/shared/themen/themenwelten.ts oder vorhandene Quelle).

| Kennung | Deutsch | Englisch | Farbe | Symbol | Buchkapitel |
|---|---|---|---|---|---|
| grundlagen | Grundlagen | Basics | #4f46e5 | Buch offen | 1–7, 27, 31, 32 |
| aktien | Aktien & Börse | Stocks & Markets | #2563eb | Kurve nach oben | 8, 9, 16–18 |
| etfs | ETFs & Fonds | ETFs & Funds | #0d9488 | Ebenen/Stapel | 11, 19 |
| depot | Depot & Strategie | Portfolio & Strategy | #16a34a | Zielscheibe | 10, 12–15 |
| immobilien | Immobilien | Real Estate | #6b7280 | Gebäude | 21 |
| edelmetalle | Edelmetalle | Precious Metals | #c99a06 | Edelstein | 20 |
| krypto | Krypto | Crypto | #ea7a12 | Bitcoin | 22 |
| vorsorge | Vorsorge & Steuern | Retirement & Taxes | #db2777 | Sparschwein | 24–26, 30 |
| risiken | Risiken & Fallen | Risks & Pitfalls | #e11d48 | Schild mit Ausrufezeichen | 23, 28, 29 |

## Regeln (gelten für alle weiteren Umsetzungen)
- Jeder Artikel, Post, Rechner, jede Vorlage und jede Academy-Lektion bekommt genau EINE Themenwelt (Feld `thema`).
  Zuordnung nach dem Buchkapitel, aus dem der Inhalt stammt.
- Keine eigenen Rubriken, Farben oder Symbole erfinden. Neue Themenwelt nur nach Freigabe von Jürgen und nur in buch/themen.json.
- Farbe und Symbol sichtbar zeigen: Kachel, Pille, Akzentlinie, in Grafiken eine Ecke oder ein Band in Themenfarbe mit Symbol.
- Neben der Themenfarbe bleibt das depiq-Design (Indigo/Türkis, DM Sans) der Rahmen. Die Themenfarbe ist Akzent, nicht Fläche.
- Kontrast ≥ 4,5 : 1 für Text, ≥ 3 : 1 für Symbole, im dunklen Thema hellere Stufe derselben Farbe.
