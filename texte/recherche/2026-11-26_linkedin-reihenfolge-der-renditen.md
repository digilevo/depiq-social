# Recherche LinkedIn 26.11.2026: Reihenfolge der Renditen (Sequenzrisiko in der Entnahmephase)

Themenfeld §4d: Altersvorsorge mit Depot (in den letzten 8 Wochen noch nicht verwendet). Dokument-Typ: Zahlenrechnung (vorher 19.11. Studie, 24.11. Studie + Checkliste).
Wissensartikel auf depiq.io/de/wissen/ (Abruf 26.11.): 11 Artikel online, keiner zu Vorsorge/Entnahme; die Themenwelt „Vorsorge & Steuern“ hat noch keinen Artikel.

## Beispielrechnung (Python, scratch: work/bau.py)
- Start 300.000 €, Entnahme 12.000 € pro Jahr (4 % vom Start) zu Jahresbeginn, 25 Jahre, ohne Steuern, Kosten, Inflation.
- Renditen: 3 schwache Jahre −25 %, −15 %, −10 %; 22 Jahre je 8,404 % → geometrisches Mittel genau 5,00 % pro Jahr (arithmetisch 5,40 %). Schnitt damit unter der 6-%-Grenze.
- Depot A: schwache Jahre zuerst; Depot B: schwache Jahre zuletzt (umgekehrte Reihenfolge).
- Ohne Entnahme: A und B identisch (Multiplikation ist vertauschbar), je 1.015.906 €.
- Mit Entnahme nach 25 Jahren: A 98.559 € (≈ 99.000 €), B 557.018 € (≈ 557.000 €), Unterschied 458.459 € (≈ 458.000 €).
- A nach 3 Jahren: 145.260 € (≈ 145.000 €). B Höchststand Jahr 22: 1.011.857 €.

## Fakten und Quellen
| Aussage | Quelle 1 | Quelle 2 |
|---|---|---|
| William P. Bengen, „Determining Withdrawal Rates Using Historical Data“, Journal of Financial Planning, Oktober 1994 | Nachdruck JFP März 2004 (Editor's Note: „published in the October 1994 issue“) https://www.financialplanningassociation.org/sites/default/files/2021-04/MAR04%20Determining%20Withdrawal%20Rates%20Using%20Historical%20Data.pdf | Wikipedia „4% rule“ (S. 14–24) https://en.wikipedia.org/wiki/4%25_rule |
| US-Daten ab 1926, Ruhestand mindestens 30 Jahre | Paper: Kohorten ab „Jan. 1, 1926“, „minimum requirement of 30 years“ | Wikipedia: „simulating 30-year retirement periods … starting in 1926“ |
| 4 % im ersten Jahr, danach inflationsangepasst, hielt in allen Zeiträumen | Paper: „4-percent rate satisfies those criteria for all periods since 1926“; „In no past case has it caused a portfolio to be exhausted before 33 years“ | Wikipedia „4% rule“ / „William Bengen“ |
| Warnung vor Durchschnittsrenditen | Paper: „The logical fallacy … was assuming that average returns and average inflation rates are a sound basis“ | Sinngemäß Wikipedia „4% rule“; Sequenzrisiko als Suchtreffer bei finanzfluss.de/geldanlage/entnahmestrategien/ und ing.de/wissen/entnahmestrategien/ |
| Nach schwachen Jahren Entnahme senken als Mittel | Paper (Bengen: Entnahmen reduzieren, Aufteilung halten) | ing.de/wissen/entnahmestrategien/ (Suchtreffer, Seite nicht im Detail geprüft; Punkt im Dokument als Möglichkeit formuliert, ohne Zahl) |
| Trinity-Studie 1998 (Cooley, Hubbard, Walz, AAII Journal 10 (3)) bestätigte die Regel – nicht im Dokument verwendet | Wikipedia „Trinity study“ | Wikipedia „4% rule“ |

Hinweis: Bengens Basisdepot war 50 % Aktien / 50 % mittelfristige US-Staatsanleihen; im Dokument nur „US-Börsendaten“ genannt.
