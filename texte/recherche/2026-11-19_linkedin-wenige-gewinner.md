# Recherche LinkedIn-Dokument 19.11.2026: „Rund 4 % der Aktien machen den ganzen Mehrertrag“

Typ: Studie mit Quelle (Wechsel nach zwei Zahlenrechnungen: Kosten 10.11., Rebalancing 12.11.). Thema §4d: Depot-Struktur und Streuung / was Studien zeigen. Themenwelt: Depot & Strategie.

## Studie 1: USA 1926–2016
- Hendrik Bessembinder (2018): „Do Stocks Outperform Treasury Bills?“, Journal of Financial Economics 129 (3), S. 440–457.
- Rund 26.000 US-Aktien (Datenbank CRSP). Die besten rund 4 % (1.092 Unternehmen) erklären den gesamten Netto-Mehrertrag des US-Aktienmarkts gegenüber einmonatigen US-Staatsanleihen (Treasury Bills), rund 35 Billionen US-Dollar.
- 58 % der Aktien lagen über ihre gesamte Börsenzeit hinter Treasury Bills, 38 % schlugen sie nur moderat, rund 4 % trieben den Markt.
- Abstract: Ergebnisse erklären, warum schlecht gestreute aktive Strategien meist hinter dem Markt liegen; Schiefe der Renditen ist entscheidend.
- Quellen: https://econpapers.repec.org/RePEc:eee:jfinec:v:129:y:2018:i:3:p:440-457 · https://news.wpcarey.asu.edu/20180917-do-stocks-outperform-treasury-bills · https://www.morningstar.com.au/insights/stocks/233587/only-24-of-companies-deliver-all-net-shareholder-wealth
- Nachgerechnet: 1.092 / 26.000 ≈ 4,2 % → „rund 4 %“.

## Studie 2: weltweit 1990–2020
- Bessembinder, Chen, Choi, Wei (2023): „Long-Term Shareholder Returns: Evidence from 64,000 Global Stocks“, Financial Analysts Journal 79 (3), S. 33–63.
- Über 64.000 Aktien (63.785 Unternehmen) aus 43 Ländern. Die besten 2,4 % (1.526 Unternehmen) schufen den gesamten Netto-Wertzuwachs von 75,7 Billionen US-Dollar.
- 55,2 % der US-Aktien und 57,4 % der Aktien außerhalb der USA lagen über den Zeitraum hinter einmonatigen US-Staatsanleihen. Morningstar: 57,7 % aller Unternehmen vernichteten Wert.
- Quellen: https://rpc.cfainstitute.org/research/financial-analysts-journal/2023/long-term-shareholder-returns-evidence-from-64000-global-stocks · https://ideas.repec.org/a/taf/ufajxx/v79y2023i3p33-63.html · https://www.morningstar.com.au/insights/stocks/233587/only-24-of-companies-deliver-all-net-shareholder-wealth
- Nachgerechnet: 1.526 / 63.785 = 2,39 %; 36.818 / 63.785 = 57,7 %.

## Eigene Beispielrechnung (Python)
Annahme: Anteil der „großen Gewinner“ 4 %, Aktien zufällig ausgewählt, jede Auswahl unabhängig. Wahrscheinlichkeit, dass KEIN großer Gewinner dabei ist = 0,96^n.
- 5 Aktien: 81,5 % · 10: 66,5 % · 20: 44,2 % · 50: 13,0 % · 100: 1,7 %
Vereinfachung, keine echte Depotsimulation. Echte Auswahl ist nicht zufällig, Gewinner sind vorher nicht bekannt.

## Nicht verwendet
- Keine Aussage, welche Aktien künftig Gewinner sind, keine Produktempfehlung.
