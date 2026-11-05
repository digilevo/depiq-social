#!/usr/bin/env python3
"""Prüft einen Artikel-Entwurf gegen wissen/SCHREIBREGELN.md.
Aufruf: python3 wissen/pruefe-artikel.py wissen/entwuerfe/<datei>.md
Meldet: Wörter, H2-Zahl, Fachbegriffe ohne Erklärung beim ersten Vorkommen, verbotene Floskeln, Fett, Links."""
import re, sys
BEGRIFFE = ['ETF','Index','MSCI World','MSCI ACWI','FTSE All-World','TER','laufende Kosten','ISIN','thesaurierend',
 'ausschüttend','Sondervermögen','Verwahrstelle','ETC','ETN','physisch','synthetisch','Neobroker','Verrechnungskonto',
 'Vorabpauschale','Teilfreistellung','Freistellungsauftrag','Sparerpauschbetrag','Meldefonds','Kapitalertragsteuer',
 'steuereinfach','Einlagensicherung','Geldmarkt-ETF','Durchschnittskosteneffekt','nominal','real','SPIVA','Rendite',
 'Inflation','Dispo','Tagesgeld','Festgeld','Depot','Broker','Abgeltungsteuer','Zinseszins','72er-Regel','Rebalancing']
ERKL = re.compile(r'(heißt|bedeutet|also|das ist|ist ein|ist eine|sind |nennt man|sogenannte|gemeint|auf Deutsch|steht für|\(|:|wie ein|stell dir)', re.I)
FLOSKELN = ['In diesem Artikel erfährst du','Es ist wichtig zu beachten','Fazit','Zusammenfassend','Im heutigen Artikel',
 'Lass uns eintauchen','Ehrliche Antwort','Gut zu wissen:','Das Entscheidende','Die Antwort beruhigt','Viele sind überrascht',
 'Hier verlieren sich','Jetzt kommt der schwierigste','Klingt ','Genau das ','Fertig.']
t = open(sys.argv[1], encoding='utf-8').read()
body = t.split('---', 2)[2] if t.startswith('---') else t
text = re.sub(r':::\w+|```.*?```', ' ', body, flags=re.S)
saetze = re.split(r'(?<=[.!?])\s+', re.sub(r'\s+', ' ', text))
w = len(re.findall(r'\w+', text)); h2 = len(re.findall(r'^## ', body, re.M))
print(f'Wörter: {w} (Richtwert 1.200–2.000) · H2: {h2} (6–10)')
neu, offen = [], []
for b in BEGRIFFE:
    pat = re.compile(r'(?<![\w-])' + re.escape(b) + r'(?![\w-])', re.I if b[0].islower() else 0)
    for i, s in enumerate(saetze):
        if pat.search(s):
            neu.append(b)
            umfeld = s + ' ' + (saetze[i+1] if i+1 < len(saetze) else '')
            if not ERKL.search(umfeld): offen.append(f'{b}: „{s[:110]}“')
            break
print(f'Fachbegriffe im Text: {len(neu)} → {", ".join(neu)}')
print('Ohne erkennbare Erklärung beim ersten Vorkommen:' if offen else 'Alle Fachbegriffe beim ersten Vorkommen erklärt (Stichwortprüfung).')
for o in offen: print('  -', o)
f = [x for x in FLOSKELN if x in body]
print('Floskeln:', f or 'keine')
print('Fett außerhalb Fehler-Kästen:', len(re.findall(r'\*\*', re.sub(r':::fehler.*?:::', '', body, flags=re.S)))//2)
print('Links intern:', len(re.findall(r'\]\(/', body)), '· extern:', len(re.findall(r'\]\(https?://', body)))
