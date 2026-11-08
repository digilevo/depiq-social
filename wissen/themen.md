# depiq Wissen – Themenliste der Grundlagenartikel

Adressen: depiq.io/de/wissen/<slug> und depiq.io/en/learn/<slug>
Quelle: Buch „Depot-IQ“, Kapitel in buch/kapitel/kNN.html. Das Buch ist noch nicht final: Kapitelnummern sind nur interne Verweise, nie im Artikel nennen. Vor jedem Artikel den aktuellen Stand des Kapitels lesen.
Ablauf: KI-Entwurf DE + EN → Freigabe Jürgen → Veröffentlichung
Themenwelt: Jeder Artikel trägt im Frontmatter `thema` (Kennung aus wissen/themenwelten.md), keine Rubriken mehr.
Takt (entschieden 02.11.2026): 3 Artikel pro Woche, Montag, Mittwoch, Freitag. Läuft die Freigabe nicht hinterher, auf 2 pro Woche (Dienstag, Freitag) zurückgehen.
Weg online (Ziel): freigegebener Artikel → Repository digilevo/depiq-wissen (nur Artikel und Bilder) → Job auf Hetzner baut früh morgens nur die Wissensseiten neu; Feld veroeffentlicht steuert das Erscheinungsdatum. Am Erscheinungstag ein Post in Metricool mit Link.
⛔ Ab 04.11.2026: /opt/depiq-wissen auf netcup-dev ist mit GitHub verbunden (digilevo/depiq-wissen, privat). Nach JEDEM Commit neuer oder geänderter Artikel sofort `git push` ausführen und den Commit-Hash melden. Die Landingpage wird vom Desktop aus mit dem Stand von GitHub gebaut, ein nicht gepushter Artikel fehlt dort.
Entwürfe: geplante Aufgabe sonntagabends bereitet die Artikel der Woche vor (einrichten, sobald depiq-wissen existiert). Bilder aus Canva.
CTA DE: Registrierung (14 Tage alle Funktionen kostenlos, ohne Kreditkarte, jederzeit kündbar) + E-Book
CTA EN: englisches E-Book + Warteliste englische App (App noch nur DE)

## Welle 1 (zuerst, je 1 Artikel alle 2–3 Tage)

| Nr | Titel DE | Hauptsuchbegriff DE | Kapitel | EN |
|---|---|---|---|---|
| 1 | ETF-Sparplan: So startest du in 5 Schritten | etf sparplan | k11, k13 | ja |
| 2 | Notgroschen: Wie viel brauchst du wirklich? | notgroschen | k03, k10 | ja |
| 3 | Zinseszins: Warum früh starten so viel bringt | zinseszins | k06 | ja |
| 4 | Inflation einfach erklärt: Was dein Geld verliert | inflation erklärt | k05 | ja |
| 5 | Rebalancing: Depot wieder ins Gleichgewicht bringen | rebalancing | k12, k15 | ja |
| 6 | Depot eröffnen: Worauf du achten musst | depot eröffnen | k13 | angepasst |
| 7 | KGV einfach erklärt: Ist die Aktie teuer? | kgv | k16 | ja |
| 8 | Dividenden: Passives Einkommen realistisch gerechnet | dividenden | k18 | ja |

## Welle 2

| Nr | Titel DE | Hauptsuchbegriff DE | Kapitel | EN |
|---|---|---|---|---|
| 9 | Aktie oder ETF: Was passt zu dir? | aktie oder etf | k09, k11 | ja |
| 10 | Risiko und Streuung: Nicht alles auf eine Karte | diversifikation | k12 | ja |
| 11 | Versteckte Kosten im Depot erkennen | depot kosten | k14 | ja |
| 12 | Tagesgeld, Festgeld, Anleihen im Vergleich | tagesgeld festgeld | k10 | angepasst |
| 13 | Die 200-Tage-Linie einfach erklärt | 200 tage linie | k17 | ja |
| 14 | Fair Value: Was ist eine Aktie wirklich wert? | fair value aktie | k16 | ja |
| 15 | Börsencrash: Was du jetzt tun und lassen solltest | börsencrash | k07, k27 | ja |
| 16 | Die 15 häufigsten Anfängerfehler beim Investieren | fehler beim investieren | k29 | ja |

## Welle 3

| Nr | Titel DE | Hauptsuchbegriff DE | Kapitel | EN |
|---|---|---|---|---|
| 17 | Vermögen aufbauen mit wenig Geld | vermögen aufbauen | k03 | ja |
| 18 | Gold und Silber im Depot: Sinn oder Unsinn? | gold investieren | k20 | ja |
| 19 | Kryptowährungen: Chancen und Risiken ehrlich erklärt | krypto investieren | k22 | ja |
| 20 | Hebel, Derivate, Zertifikate: Finger weg? | hebelprodukte | k23 | ja |
| 21 | Finanzbetrug erkennen: Die typischen Maschen | finanzbetrug | k28 | ja |
| 22 | Psychologie beim Investieren: Die Gefühlsfallen | psychologie börse | k27 | ja |
| 23 | Kapitalerträge und Steuern: Die Grundzüge (DE, AT, CH) | steuern aktien | k30 | nein |
| 24 | Geförderte Altersvorsorge in DE, AT, CH | altersvorsorge | k24 | nein |
| 25 | Finanzielle Freiheit: Die 4-Prozent-Regel erklärt | 4 prozent regel | k26 | ja |

EN: „ja“ = gleicher Inhalt; „angepasst“ = ohne deutsche Sonderbegriffe; „nein“ = nur DACH-Thema.
Suchbegriffe sind Annahmen. Vor dem Schreiben mit einem Suchvolumen-Werkzeug (zum Beispiel Google Search Console oder Ubersuggest) prüfen.

## Laufende Artikel (ab Welle 1, 2–3 pro Woche)
Aktuelle Themen zu festen Rubriken: Markt verstehen, Sparen & Sicherheit, Depot & Strategie, Fehler vermeiden.

## Rechner (eigene Seiten + Widget in der rechten Spalte der Artikel)

Eine Komponente je Rechner, zweimal benutzt: als eigene Seite (depiq.io/de/rechner/<slug>, depiq.io/en/calculators/<slug>) und als Widget in Artikeln. Nie zweimal gebaut. Von der Landingpage im Menü und in der Fußzeile erreichbar.

| Nr | Rechner | Slug DE | passt zu Artikel |
|---|---|---|---|
| R1 | Notgroschen-Rechner | notgroschen | 2, 12 |
| R2 | Sparplan- und Zinseszins-Rechner | sparplan | 1, 3, 17 |
| R3 | Inflationsrechner (Kaufkraft) | inflation | 4 |
| R4 | Dispo-Kosten-Rechner | dispo | laufende Artikel |
| R5 | Rebalancing-Rechner | rebalancing | 5, 10 |
| R6 | Kosten-Rechner (Fondskosten über die Jahre) | kosten | 11 |
| R7 | Dividenden-Rechner | dividenden | 8 |
| R8 | Entnahme-Rechner (4-Prozent-Regel) | entnahme | 25 |

Reihenfolge: R1, R2, R3 zusammen mit Welle 1, danach R5, R6, R7, R4, R8.
Stand 08.11.2026 (Jürgen): R1 Notgroschen und R2 Sparplan/Zinseszins (mit 72er-Regel) sind live. Als Nächstes R3 Inflation.
Jeder Rechner: Ergebnis als Balken/Skala, Annahmen sichtbar, „Werte gerundet, keine Anlageberatung“, darunter der Knopf zur Registrierung (DE) bzw. E-Book/Warteliste (EN).

## Vorlagen zum Download (aus dem Download-Center)

Artikel verlinken passende Vorlagen (PDF, A4) aus dem geplanten Download-Center. Eine Komponente „Vorlagen-Box“, im Artikeltext nach dem passenden Abschnitt und als Widget in der rechten Spalte.
- Buchvorlagen: frei herunterladbar, ohne Registrierung.
- Alle weiteren Vorlagen und Extras: im kostenlosen depiq-Konto → Knopf führt zur Registrierung (DE). EN: nur Vorlagen, die es auf Englisch gibt; sonst E-Book/Warteliste.
- Vorlagen nie im Artikel kopieren, immer auf die aktuelle Version im Download-Center verlinken (Jürgen lädt neue Versionen selbst hoch).

| Artikel | passende Vorlage (Nummer = Buchvorlage, Kurzlink depiq.io/de/v/NN) |
|---|---|
| 1 ETF-Sparplan | 16 ETF-Auswahl · 18 Broker-Vergleich |
| 2 Notgroschen | 02 Mein Finanz-Fundament · 12 Mein Notfallplan |
| 3 Zinseszins | 11 Mein Zeitplan |
| 5 Rebalancing | 20 Mein Anlageplan |
| 6 Depot eröffnen | 18 Broker-Vergleich · 13 Vor meiner ersten Order |
| 11 Kosten | 19 Mein Kostencheck |
| 16 Anfängerfehler | 35 Welche Fehler mache ich gerade? · 34 Der 60-Sekunden-Check |
Quelle: Downloadcenter depiq.io/de/templates/ (42 Vorlagen, live ab KW 46). PDFs aus buch/vorlagen/pdf. Im Artikel immer über den Kurzlink verlinken, nie die Datei kopieren.
Voraussetzung: Die Kurzlinks depiq.io/de/v/NN bzw. das Download-Center depiq.io/de/templates/ müssen live sein, bevor der Artikel sie verlinkt (vorher per WebFetch prüfen; nicht live → Vorlagen-Hinweis weglassen).

