# Schreibregeln für Wissensartikel (depiq.io/de/wissen, /en/learn)

Festgelegt von Jürgen am 03.11.2026: Artikel sollen **conversion-optimiert, SEO-optimiert und ausführlich verständlich** sein, mit Spannung gelesen werden und **anziehend und motivierend** wirken. Nicht „schon wieder das Gleiche wie bei den anderen“.

## Länge und Tiefe
- 1.800 bis 2.500 Wörter je Sprache. Kein Fülltext: Jeder Abschnitt beantwortet eine Frage, die Leser wirklich suchen.
- Material zuerst aus dem Buchkapitel holen, dann aktuelle Zahlen recherchieren (texte/recherche/).
- Mindestens ein Schaubild (`:::balken`), eine Tabelle, ein Merke-Kasten, ein Fehler-Kasten, 5–7 häufige Fragen.

## Spannung (damit niemand wegklickt)
1. **Einstieg in den ersten drei Sätzen:** eine Szene, eine überraschende Zahl, ein Mythos oder eine Frage, die wehtut. Kein „In diesem Artikel erfährst du“.
2. **Einstiegs-Typ wechseln:** Vor dem Schreiben die Einstiege der letzten fünf Artikel lesen. Nie zweimal hintereinander derselbe Typ, nie dieselben Satzbausteine.
3. **Versprechen nach dem Einstieg:** in einem Satz, was der Leser danach kann („In zehn Minuten kennst du deine Zahl.“).
4. **Zwischenüberschriften als Fragen oder Versprechen**, nicht als Schlagworte („Was ist ein Notfall – und was nicht?“ statt „Definition“).
5. **Ein Beispiel mit einer erfundenen Person** pro Artikel, als Beispiel gekennzeichnet, mit einer kleinen Entwicklung (vorher, nachher).
6. **Aha-Momente:** pro Abschnitt eine Zahl oder Erkenntnis, die überrascht. Kurze und lange Sätze abwechseln, Absätze höchstens vier Zeilen.
7. **Motivierender Ton:** Mut machen, kleine erste Schritte zeigen, nie belehren oder Angst machen. Schmerz benennen, dann sofort den Ausweg.
8. **Abschnitt „In 10 Minuten erledigt“:** drei bis fünf konkrete Handgriffe, die man heute macht.

## Verbotene Floskeln
„In diesem Artikel erfährst du“ · „Kennst du das?“ (höchstens selten) · „Es ist wichtig zu beachten“ · „Fazit“ · „Zusammenfassend lässt sich sagen“ · „Im heutigen Artikel“ · „Lass uns eintauchen“ · gleiche Schlusssätze in mehreren Artikeln.

## SEO
- **Vor dem Schreiben recherchieren, wonach Leute suchen:** Websuche zum Hauptbegriff und zu Varianten (wie viel, wo, für wen, Fehler, Rechner, Österreich/Schweiz). Notieren, welche Fragen die oberen Treffer beantworten, und eine Liste der Suchbegriffe (Haupt- und Nebenbegriffe) im Frontmatter ablegen. Jede dieser Fragen bekommt einen Abschnitt oder eine Antwort in den häufigen Fragen.
- **Überschriften-Hierarchie:** Genau eine H1 = Titel aus dem Frontmatter (setzt die Seite, nie im Text). Hauptabschnitte H2 (`##`), Unterpunkte H3 (`###`), keine Ebene überspringen, keine H4 nötig. 8–14 H2 pro Artikel, H3 nur, wo ein Abschnitt drei oder mehr Teile hat.
- Titel höchstens 60 Zeichen (sonst bricht der Build ab).
- Hauptsuchbegriff in Titel, Adresse, ersten 100 Wörtern, Beschreibung (höchstens 160 Zeichen) und in 2–3 Zwischenüberschriften.
- 5 Nebenbegriffe natürlich einbauen, Dichte des Hauptbegriffs etwa 1 bis 1,5 %.
- Fragen-Überschriften und kurze Antwortsätze direkt darunter (für Antwortboxen bei Google).
- Mindestens 3 interne Links (andere Artikel, Rechner, Vorlage) und 2 externe Quellen.
- Bildbeschreibung für Titelbild und Schaubild.

## Conversion ohne Verkaufsgefühl
- depiq erst am Ende, als Nutzen für genau das Problem des Artikels, in zwei bis drei Sätzen. Keine Funktionsliste.
- Buch und Testphase stehen in den Widgets, nicht im Text. Der Satz „14 Tage kostenlos“ steht nie im Artikeltext.
- Passende Vorlage und passender Rechner werden verlinkt (siehe wissen/themen.md).

## Zahlen und Ehrlichkeit
- Jede Rechnung nachgerechnet, gerundet, als Beispielrechnung gekennzeichnet. Quellen verlinkt.
- „Keine Anlageberatung“ am Ende. Ich-Form für Jürgen nur mit Aussagen aus dem Buch, Du-Form für den Leser. Keine Abkürzungen.

## Schaubild-Schreibweise (wird von der Landingpage als Balken gezeichnet)
```
:::balken
titel: Dein Notgroschen wächst
einheit: €
ziel: 6000
Monat 3: 900
Monat 6: 1800
:::
```
