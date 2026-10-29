// Inhalte der Bilder je Post. Schlüssel = Dateiname ohne Format-Endung.
// titel: Zeilen je Format (ig = Instagram 1080 × 1350, x = X 1600 × 900); <em> = Farbverlauf.
// Leitlinie: Schmerz, Bedürfnis, Gefühl, Wissen. Funktionen von depiq nur selten.
const POSTS={
 '2026-10-22_Do':{
  saeule:'kopf', chip:'Kopfsache',
  titel:{ig:['Panik ist','kein Plan.','<em>Überblick</em>','<em>schon.</em>'], x:['Panik ist kein Plan.','<em>Überblick schon.</em>']},
  unter:'Bevor du verkaufst: Schau aufs ganze Depot – nicht auf den roten Tag.',
  liste:['Grund für den Kauf noch gültig?','Depot breit genug gestreut?','Geld wirklich bald nötig?'], nummeriert:true, listeX:false
 },
 '2026-10-23_Fr':{
  saeule:'gruender', chip:'Gründer',
  titel:{ig:['Mehrere Broker.','Eine Excel-Liste.','<em>Kein Überblick.</em>'], x:['Mehrere Broker.','Eine Excel-Liste.','<em>Kein Überblick.</em>']},
  unter:'Genau dafür gibt es jetzt depiq.', cta:'Kostenlos starten',
  liste:['Alle Depots an einem Ort','Streuung auf einen Blick','Deqo erklärt deine Zahlen'], listeX:false
 },
 '2026-10-23_Fr_v2':{
  saeule:'gruender', chip:'Freitagsfrage',
  titel:{ig:['Was war dein','größter <em>Fehler</em>','beim','Investieren?'], x:['Was war dein größter','<em>Fehler</em> beim Investieren?']},
  unter:'Aus fremden Fehlern lernt man am günstigsten.'
 },
 '2026-10-24_Sa':{
  saeule:'tipp', chip:'Tipp',
  titel:{ig:['Schreib dein','<em>Warum</em> auf.'], x:['Schreib bei jedem Kauf','dein <em>Warum</em> auf.']},
  unter:'Nicht für heute. Für den Tag, an dem der Kurs fällt und du zweifelst.'
 },
 '2026-10-25_So':{
  saeule:'frage', chip:'Frage',
  titel:{ig:['Was fühlst du,','wenn du in','dein <em>Depot</em>','schaust?'], x:['Was fühlst du, wenn du','in dein <em>Depot</em> schaust?']},
  unter:'Ruhe? Stress? Oder schaust du lieber gar nicht rein?'
 },
 '2026-10-26_Mo':{
  saeule:'loesung', chip:'Lösung',
  titel:{ig:['In 3 Schritten','zu deinem','<em>Überblick.</em>'], x:['In 3 Schritten zu deinem','<em>Depot-Überblick.</em>']},
  unter:'Ohne Excel-Chaos. Ein Blatt Papier reicht für den Anfang.',
  liste:['Alle Depots und Konten auflisten','Aktuellen Wert je Position notieren','Anteile in Prozent ausrechnen'], nummeriert:true, listeX:false
 },
 '2026-10-27_Di':{
  saeule:'schmerz', chip:'Kennst du das?',
  titel:{ig:['Steuer-Stress','beginnt nicht','im <em>Frühjahr.</em>'], x:['Steuer-Stress beginnt','nicht im <em>Frühjahr.</em>']},
  unter:'Er beginnt, wenn du das ganze Jahr keinen Überblick hast.',
  liste:['Drei Broker, drei Formate','Belege überall verstreut','Das Gefühl, etwas zu vergessen'], symbol:'kreuz', listeX:false
 },
 '2026-10-28_Mi_1von4':{
  saeule:'wissen', chip:'Wissen · 1/4', cta:false,
  titel:{ig:['Dein Geld','wird jedes Jahr','<em>weniger wert.</em>']},
  unter:'Warum Nichtstun oft die teuerste Entscheidung ist.'
 },
 '2026-10-28_Mi_2von4':{
  saeule:'wissen', chip:'Wissen · 2/4', cta:false,
  titel:{ig:['Inflation','frisst','<em>Kaufkraft.</em>']},
  unter:'Was du heute für 10.000 € bekommst, kostet in 10 Jahren deutlich mehr.',
  balken:[{name:'Heute',wert:100,anzeige:'10.000 €'},{name:'In 10 Jahren',wert:82,anzeige:'8.203 €',rot:true}],
  notiz:'Beispielrechnung: 10.000 € auf dem Konto, 2 % Inflation pro Jahr, Kaufkraft nach 10 Jahren.'
 },
 '2026-10-28_Mi_3von4':{
  saeule:'wissen', chip:'Wissen · 3/4', cta:false,
  titel:{ig:['Zeit ist dein','<em>stärkster</em>','Hebel.'], x:['Zeit ist dein <em>stärkster</em> Hebel.']},
  unter:'Der Zinseszins: Auch deine Erträge bringen wieder Erträge.',
  balken:[{name:'Eingezahlt',wert:36,anzeige:'36.000 €'},{name:'Mit Zinseszins',wert:100,anzeige:'100.452 €'}],
  notiz:'Beispielrechnung: 100 € im Monat, 30 Jahre, angenommen 6 % pro Jahr. Keine Garantie – Kurse schwanken.'
 },
 '2026-10-28_Mi_4von4':{
  saeule:'wissen', chip:'Wissen · 4/4',
  titel:{ig:['Der beste Tag','war gestern.','<em>Der zweitbeste</em>','<em>ist heute.</em>']},
  unter:'Fang an. Und behalte von Anfang an den Überblick.'
 },
 '2026-10-28_Mi':{
  saeule:'wissen', chip:'Wissen',
  titel:{x:['Zeit ist dein <em>stärkster</em> Hebel.']},
  unter:'100 € im Monat über 30 Jahre – der Zinseszins macht den Unterschied.',
  balken:[{name:'Eingezahlt',wert:36,anzeige:'36.000 €'},{name:'Mit Zinseszins',wert:100,anzeige:'100.452 €'}],
  notiz:'Beispielrechnung mit angenommen 6 % pro Jahr. Keine Garantie – Kurse schwanken.'
 },
 '2026-10-29_Do':{
  saeule:'kopf', chip:'Kopfsache',
  titel:{ig:['FOMO ist laut.','Deine <em>Strategie</em>','sollte lauter','sein.'], x:['FOMO ist laut. Deine <em>Strategie</em>','sollte lauter sein.']},
  unter:'Alle reden über diese eine Aktie. Und plötzlich fühlt sich dein Depot falsch an.',
  liste:['24 Stunden warten','Aufschreiben, warum sie passt','Anteil danach prüfen'], nummeriert:true, listeX:false
 },
 '2026-10-30_Fr':{
  saeule:'gruender', chip:'Gründer', cta:'Kostenlos starten',
  titel:{ig:['Eine Woche','depiq.','<em>Danke.</em>'], x:['Eine Woche depiq.','<em>Danke.</em>']},
  unter:'Jede Rückmeldung lese ich selbst – und baue daraus die nächste Version.'
 },
 '2026-10-31_Sa':{
  saeule:'wissen', chip:'Wissen',
  titel:{ig:['ETF in','einem <em>Satz.</em>'], x:['ETF in einem <em>Satz.</em>']},
  unter:'ETF heißt „börsengehandelter Fonds“: ein Korb mit vielen Aktien. Mit einem Kauf bist du an Hunderten Firmen beteiligt.',
  liste:['Breit gestreut','Meist geringe Kosten','Einfach zu verstehen']
 },
 '2026-11-01_So':{
  saeule:'frage', chip:'Frage',
  titel:{ig:['Was ist dir','beim Investieren','am <em>wichtigsten?</em>'], x:['Was ist dir beim Investieren','am <em>wichtigsten?</em>']},
  unter:'Dividende, Kursgewinn – oder einfach Ruhe im Kopf?'
 },
 '2026-11-02_Mo':{
  saeule:'loesung', chip:'Lösung',
  titel:{ig:['Dein','<em>Notgroschen</em>','in 3 Schritten.'], x:['Dein <em>Notgroschen</em>','in 3 Schritten.']},
  unter:'Bevor du investierst, brauchst du ein Polster. Sonst wird die erste kaputte Waschmaschine zum Kredit.',
  liste:['Monatsausgaben ausrechnen','3 bis 6 Monate zurücklegen','Auf ein eigenes Tagesgeldkonto'], nummeriert:true, listeX:false
 },
 '2026-11-04_Mi_1von4':{
  saeule:'wissen', chip:'Wissen · 1/4', cta:false,
  titel:{ig:['3 Geldfehler,','die <em>keiner</em>','bemerkt.']},
  unter:'Sie fühlen sich normal an. Und kosten über die Jahre ein kleines Vermögen.'
 },
 '2026-11-04_Mi_2von4':{
  saeule:'wissen', chip:'Wissen · 2/4', cta:false,
  titel:{ig:['Fehler 1:','Konsum auf','<em>Pump.</em>']},
  unter:'Dispo, Kreditkarte, Ratenkauf. 3.000 € im Minus kosten dich jedes Jahr rund 330 € Zinsen.',
  balken:[{name:'Zinsen nach 1 Jahr',wert:10,anzeige:'330 €',rot:true},{name:'nach 10 Jahren',wert:100,anzeige:'3.300 €',rot:true}],
  notiz:'Beispielrechnung: 3.000 € Dispokredit zu 10,99 % pro Jahr, ohne Tilgung.'
 },
 '2026-11-04_Mi_3von4':{
  saeule:'wissen', chip:'Wissen · 3/4', cta:false,
  titel:{ig:['Fehler 2 und 3:','<em>Neuwagen</em> und','volles Konto.']},
  unter:'Ein Neuwagen verliert schnell an Wert. Und Geld, das nur rumliegt, verliert leise Kaufkraft.',
  balken:[{name:'Neuwagen heute',wert:100,anzeige:'40.000 €'},{name:'nach 3 Jahren',wert:60,anzeige:'24.000 €',rot:true}],
  notiz:'Beispielrechnung: angenommener Restwert 60 % nach 3 Jahren. Kaufkraft: 20.000 € bei 2,2 % Inflation sind nach 10 Jahren noch rund 16.100 € wert.'
 },
 '2026-11-04_Mi_4von4':{
  saeule:'wissen', chip:'Wissen · 4/4',
  titel:{ig:['Es gibt','noch <em>7 mehr.</em>']},
  unter:'Alle 10 teuersten Geldfehler stehen in meinem Buch „Depot-IQ“. Das E-Book gibt es bald kostenlos.'
 },
 '2026-11-06_Fr':{
  saeule:'gruender', chip:'Persönlich',
  titel:{ig:['In der Schule','hat mir das','<em>niemand</em>','beigebracht.'], x:['In der Schule hat mir das','<em>niemand</em> beigebracht.']},
  unter:'Aktien, ETFs, Gold? Hat mir als junger Mensch nichts gesagt. Deshalb schreibe ich das Buch, das ich damals gebraucht hätte.'
 },
 '2026-11-07_Sa':{
  saeule:'tipp', chip:'Tipp',
  titel:{ig:['Mehr Gehalt?','Die <em>Hälfte</em>','in den Sparplan.'], x:['Gehaltserhöhung? Die <em>Hälfte</em>','in den Sparplan.']},
  unter:'Du spürst keinen Verzicht. Und dein Vermögen wächst mit jedem Gehaltssprung mit.'
 },
 '2026-11-08_So':{
  saeule:'frage', chip:'Frage',
  titel:{ig:['Wann hast du','zum ersten Mal','<em>investiert?</em>'], x:['Wann hast du zum ersten Mal','<em>investiert?</em>']},
  unter:'Schule, erster Job, später? Oder noch gar nicht? Alles ist ein guter Startpunkt.'
 }
};
