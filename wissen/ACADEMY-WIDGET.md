# Academy-Widget neben den Wissensartikeln (Bauanleitung für die Landing)

Festgelegt von Jürgen am 09.11.2026: Rechts neben jedem Artikel ein schönes Widget mit Bild, Text und Knopf zur depiq Academy. Viele Artikelthemen bekommen dort ein Erklärvideo.

## Daten je Artikel
Datei `<kennung>/academy.yml` im Repository depiq-wissen, neben `artikel.de.md`:

```yaml
status: geplant            # geplant | live
bild: bilder/academy.png   # 1200 × 675, Motiv des Titelbilds mit Abspiel-Symbol und „Academy“-Band
de:
  titel: "KGV im Video erklärt"
  text: "In wenigen Minuten: wie du das KGV liest und wo es täuscht."
  knopf: "Bald in der Academy"     # bei status live z. B. „Video ansehen“
  ziel: null                       # bei status live: Adresse des Videos, z. B. /de/academy/<slug>
en:
  titel: "…"
  text: "…"
  knopf: "Coming soon to the Academy"
  ziel: null
```

## Darstellung (Vorschlag)
- Platz: rechte Spalte, oberhalb des Rechner-Widgets; am Handy nach dem Abschnitt „In 10 Minuten erledigt“.
- Aufbau: Bild (16:9, abgerundet), darüber kleines Band „depiq Academy“ in der Themenfarbe des Artikels (Feld `thema`), darunter Titel, ein Satz Text, Knopf.
- `status: geplant`: Knopf ist ein ruhiger Hinweis ohne Link oder führt zur Registrierung (DE) bzw. Warteliste (EN) mit Text „Bald in der Academy“. Kein toter Link.
- `status: live`: Knopf führt auf `ziel`, Frontmatter des Artikels `academy: true`.
- Fehlt `academy.yml`, wird kein Widget gezeigt.
