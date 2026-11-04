// Reels: Szenen mit Zeitfenster in Sekunden. Die letzte Szene bleibt bis zum Ende stehen.
const REELS={
 '2026-11-07_Sa_TikTok':{
  dauer:26,
  szenen:[
   {von:0,bis:3.5,zeilen:[{text:'Mehr Gehalt?'},{text:'<em>Glückwunsch!</em>'}],groesse:124},
   {von:3.5,bis:7.5,zeilen:[{text:'Beispiel:'},{text:'<em>200 € mehr</em>'},{text:'im Monat.'}],groesse:118},
   {von:7.5,bis:12.5,zeilen:[{text:'So teilst du auf:'}],groesse:96,
    balken:[{name:'📈 In den Sparplan',betrag:100,wert:50},{name:'🎉 Zum Genießen',betrag:100,wert:50}]},
   {von:12.5,bis:18.5,zeilen:[{text:'Nach 20 Jahren:'}],groesse:96,
    balken:[{name:'Eingezahlt',betrag:24000,wert:52},{name:'Im Depot',betrag:46200,wert:100}],
    notiz:'Beispielrechnung: 100 € im Monat, 6 % pro Jahr, ohne Kosten und Steuern. Keine Garantie.'},
   {von:18.5,bis:22,zeilen:[{text:'Kein Verzicht.'},{text:'Das Geld hattest'},{text:'du vorher <em>nicht.</em>'}],groesse:108},
   {von:22,bis:26,zeilen:[{text:'Sparplan umstellen,'},{text:'<em>bevor</em> das'},{text:'Geld kommt.'}],groesse:104,cta:'Folge für mehr', bio:'@depiq.io'}
  ]
 },
 '2026-11-08_So_TikTok':{
  dauer:21,
  szenen:[
   {von:0,bis:3.5,zeilen:[{text:'Frage zum'},{text:'<em>Sonntag</em> ☕'}],groesse:130},
   {von:3.5,bis:8,zeilen:[{text:'Wann hast du'},{text:'zum ersten Mal'},{text:'<em>investiert?</em>'}],groesse:116},
   {von:8,bis:13.5,zeilen:[{text:'🎒 in der Schule'},{text:'💼 erster Job'},{text:'⏳ deutlich später'},{text:'🌱 noch gar nicht'}],groesse:92},
   {von:13.5,bis:17,zeilen:[{text:'Schreib dein'},{text:'<em>Emoji</em> 👇'}],groesse:130},
   {von:17,bis:21,zeilen:[{text:'Bester Zeitpunkt:'},{text:'gestern.'},{text:'Zweitbester:'},{text:'<em>heute.</em>'}],groesse:100,cta:'Folge für mehr', bio:'@depiq.io'}
  ]
 },
 '2026-11-11_Mi_TikTok':{
  dauer:26,
  szenen:[
   {von:0,bis:3.5,zeilen:[{text:'Thesaurierend'},{text:'oder'},{text:'<em>ausschüttend?</em>'}],groesse:108},
   {von:3.5,bis:7.5,zeilen:[{text:'Ausschüttend:'},{text:'Dividenden'},{text:'aufs <em>Konto.</em>'}],groesse:116},
   {von:7.5,bis:11.5,zeilen:[{text:'Thesaurierend:'},{text:'Sie bleiben'},{text:'im ETF und'},{text:'<em>wachsen mit.</em>'}],groesse:108},
   {von:11.5,bis:17.5,zeilen:[{text:'10.000 €, 25 Jahre:'}],groesse:88,
    balken:[{name:'💸 Ausgegeben',betrag:32000,wert:74},{name:'🌱 Im ETF gelassen',betrag:43000,wert:100}],
    notiz:'Beispiel: 6 % pro Jahr, davon 1,2 % Ausschüttung, ohne Steuern. Keine Garantie.'},
   {von:17.5,bis:21.5,zeilen:[{text:'Rund'},{text:'<em>11.000 €</em>'},{text:'Unterschied.'}],groesse:124},
   {von:21.5,bis:26,zeilen:[{text:'<em>Acc</em> im Namen:'},{text:'thesaurierend.'},{text:'<em>Dist</em>: ausschüttend.'}],groesse:100,cta:'Folge für mehr', bio:'@depiq.io'}
  ]
 },
 '2026-11-09_Mo_Reel':{
  dauer:22,
  szenen:[
   {von:0,bis:2.8,zeilen:[{text:'Dividende ='},{text:'geschenktes Geld?'}],groesse:116},
   {von:2.8,bis:6.6,zeilen:[{text:'Beispiel:'},{text:'Deine Aktie ist'},{text:'<em>100 € wert.</em>'}],groesse:112},
   {von:6.6,bis:10.4,zeilen:[{text:'Sie zahlt dir'},{text:'<em>2 € Dividende</em>'},{text:'aufs Konto.'}],groesse:112},
   {von:10.4,bis:14.2,zeilen:[{text:'Am selben Tag'},{text:'sinkt die Aktie'},{text:'auf <em>98 €.</em>',rot:false}],groesse:112},
   {von:14.2,bis:18.2,zeilen:[{text:'98 € Aktie'},{text:'+ 2 € Konto'},{text:'= <em>100 €.</em>'},{text:'Wie vorher.'}],groesse:112},
   {von:18.2,bis:22,zeilen:[{text:'Dividende ist'},{text:'<em>kein Geschenk.</em>'}],groesse:116,cta:'Folge für mehr', bio:'@depiq.io'}
  ]
 },
 '2026-11-10_Di_Reel':{
  dauer:14,
  szenen:[
   {von:0,bis:2.6,zeilen:[{text:'Du hast 3 ETFs?'},{text:'<em>Gut gestreut?</em>'}],groesse:118},
   {von:2.6,bis:5.2,zeilen:[{text:'MSCI World.'},{text:'S&P 500.'},{text:'Nasdaq 100.'}],groesse:124},
   {von:5.2,bis:8,zeilen:[{text:'In allen dreien:'},{text:'<em>Apple, Microsoft,</em>'},{text:'<em>Nvidia.</em>'}],groesse:104},
   {von:8,bis:10.8,zeilen:[{text:'Drei ETFs.'},{text:'Oft dieselben'},{text:'<em>Firmen.</em>'}],groesse:124},
   {von:10.8,bis:14,zeilen:[{text:'Prüf die Top 10'},{text:'jedes ETFs.'},{text:'<em>Heute noch.</em>'}],groesse:112,cta:'Folge für mehr', bio:'@depiq.io'}
  ]
 },
 '2026-11-12_Do_Reel':{
  dauer:21,
  szenen:[
   {von:0,bis:3,zeilen:[{text:'Dein Fonds kostet'},{text:'<em>1,5 % im Jahr?</em>'}],groesse:108},
   {von:3,bis:7,zeilen:[{text:'Beispiel:'},{text:'10.000 € anlegen.'},{text:'30 Jahre warten.'}],groesse:108},
   {von:7,bis:13,zeilen:[{text:'Was am Ende bleibt:'}],groesse:90,
    balken:[{name:'Fonds, 1,5 % Kosten',betrag:37453,wert:69},{name:'ETF, 0,2 % Kosten',betrag:54271,wert:100}],
    notiz:'Annahme: Beide wachsen 6 % pro Jahr. Nur die Kosten sind verschieden. Ohne Steuern, keine Garantie.'},
   {von:13,bis:17,zeilen:[{text:'Fast <em>17.000 €</em>'},{text:'weniger.'},{text:'Nur wegen Kosten.'}],groesse:112},
   {von:17,bis:21,zeilen:[{text:'Die Kosten stehen'},{text:'im <em>Factsheet.</em>'},{text:'Prüf sie.'}],groesse:112,cta:'Folge für mehr', bio:'@depiq.io'}
  ]
 },
 '2026-11-01_TikTok_Start':{
  dauer:14,
  szenen:[
   {von:0,bis:2.6,zeilen:[{text:'Dein Depot'},{text:'ist für dich'},{text:'ein <em>Rätsel?</em>'}],groesse:124},
   {von:2.6,bis:5.4,zeilen:[{text:'Einstandskurs?'},{text:'Klumpenrisiko?'},{text:'Thesaurierend?'}],groesse:116},
   {von:5.4,bis:8.2,zeilen:[{text:'Hier erkläre ich'},{text:'Börse'},{text:'<em>einfach.</em>'}],groesse:118},
   {von:8.2,bis:11,zeilen:[{text:'Ohne'},{text:'Fachchinesisch.'},{text:'Ohne Kauftipps.'}],groesse:112},
   {von:11,bis:14,zeilen:[{text:'Depot verstehen'},{text:'<em>statt raten.</em>'}],groesse:112,cta:'Folge für mehr', bio:'@depiq.io'}
  ]
 },
 '2026-11-02_Mo_Reel':{
  dauer:13, glow:'rgba(225,29,72,.5)',
  szenen:[
   {von:0,bis:2.2,zeilen:[{text:'Waschmaschine',rot:true},{text:'kaputt.',rot:true}],groesse:108},
   {von:2.2,bis:4.4,zeilen:[{text:'Auto in der',rot:true},{text:'Werkstatt.',rot:true}],groesse:120},
   {von:4.4,bis:6.8,zeilen:[{text:'Plötzlich fehlen'},{text:'<em>800 €.</em>'}],groesse:130},
   {von:6.8,bis:10.2,zeilen:[{text:'Dein Notgroschen:'},{text:'<em>3 bis 6</em>'},{text:'Monatsausgaben.'}],groesse:100},
   {von:10.2,bis:13,zeilen:[{text:'Erst das Polster.'},{text:'<em>Dann</em> das Depot.'}],groesse:112,cta:'Folge für mehr', bio:'@depiq.io'}
  ]
 },
 '2026-11-06_Fr_Reel':{
  dauer:14,
  szenen:[
   {von:0,bis:2.8,zeilen:[{text:'In der Schule'},{text:'hat mir das'},{text:'<em>niemand</em>'},{text:'beigebracht.'}],groesse:118},
   {von:2.8,bis:5.4,zeilen:[{text:'Aktien?'},{text:'ETFs?'},{text:'Zinseszins?'}],groesse:140},
   {von:5.4,bis:8.2,zeilen:[{text:'Erst später'},{text:'habe ich es'},{text:'<em>selbst</em> gelernt.'}],groesse:118},
   {von:8.2,bis:11,zeilen:[{text:'Die beste'},{text:'Investition:'},{text:'<em>Wissen.</em>'}],groesse:136},
   {von:11,bis:14,zeilen:[{text:'Was hättest du'},{text:'gern <em>früher</em>'},{text:'gewusst?'}],groesse:112,cta:'Folge für mehr', bio:'@depiq.io'}
  ]
 },
 '2026-10-27_Di_Reel':{
  dauer:12, glow:'rgba(225,29,72,.55)',
  szenen:[
   {von:0,bis:2.4,zeilen:[{text:'Rot.',rot:true},{text:'Überall rot.',rot:true}],groesse:150},
   {von:2.4,bis:5,zeilen:[{text:'Der Daumen'},{text:'schwebt über'},{text:'„Verkaufen“.'}],groesse:118},
   {von:5,bis:7.4,zeilen:[{text:'Panik ist'},{text:'kein Plan.'}],groesse:150},
   {von:7.4,bis:9.4,zeilen:[{text:'<em>Überblick</em>'},{text:'<em>schon.</em>'}],groesse:150},
   {von:9.4,bis:12,zeilen:[{text:'Erst schauen.'},{text:'Dann <em>entscheiden.</em>'}],groesse:104,cta:'Folge für mehr', bio:'@depiq.io'}
  ]
 },
 '2026-10-29_Do_Reel':{
  dauer:13,
  szenen:[
   {von:0,bis:2,zeilen:[{text:'100 € im Monat.'}],groesse:118},
   {von:2,bis:3.8,zeilen:[{text:'30 Jahre lang.'}],groesse:118},
   {von:3.8,bis:8.2,zeilen:[{text:'Was wird daraus?'}],groesse:96,
    balken:[{name:'Eingezahlt',betrag:36000,wert:36},{name:'Mit Zinseszins',betrag:100452,wert:100}],
    notiz:'Beispielrechnung, angenommen 6 % pro Jahr. Keine Garantie – Kurse schwanken.'},
   {von:8.2,bis:10.2,zeilen:[{text:'Zeit ist dein'},{text:'<em>stärkster</em>'},{text:'Hebel.'}],groesse:140},
   {von:10.2,bis:13,zeilen:[{text:'Fang heute an.'},{text:'Mit <em>Überblick.</em>'}],groesse:104,cta:'Folge für mehr', bio:'@depiq.io'}
  ]
 },
 '2026-11-03_Di_Reel':{
  dauer:13, glow:'rgba(225,29,72,.55)',
  szenen:[
   {von:0,bis:2.2,zeilen:[{text:'Konto im Minus.',rot:true}],groesse:118},
   {von:2.2,bis:4.2,zeilen:[{text:'Schon wieder.',rot:true}],groesse:130},
   {von:4.2,bis:8.4,zeilen:[{text:'Was kostet das?'}],groesse:96,
    balken:[{name:'nach 1 Jahr',betrag:330,wert:10},{name:'nach 10 Jahren',betrag:3300,wert:100}],
    notiz:'Beispielrechnung: 3.000 € Dispokredit zu 10,99 % pro Jahr, ohne Tilgung.'},
   {von:8.4,bis:10.4,zeilen:[{text:'Erst der Dispo.'},{text:'<em>Dann</em> das Depot.'}],groesse:120},
   {von:10.4,bis:13,zeilen:[{text:'Teure Schulden'},{text:'<em>zuerst.</em>'}],groesse:120,cta:'Folge für mehr', bio:'@depiq.io'}
  ]
 },
 '2026-11-05_Do_Reel':{
  dauer:13,
  szenen:[
   {von:0,bis:2.6,zeilen:[{text:'100 € gefunden.'},{text:'<em>Schön.</em>'}],groesse:118},
   {von:2.6,bis:5.2,zeilen:[{text:'100 € verloren.',rot:true},{text:'Ärgert dich',rot:true},{text:'doppelt.',rot:true}],groesse:110},
   {von:5.2,bis:8,zeilen:[{text:'Verluste'},{text:'tun <em>doppelt</em>'},{text:'so weh.'}],groesse:130},
   {von:8,bis:10.4,zeilen:[{text:'Deshalb verkaufen'},{text:'so viele'},{text:'im Crash.'}],groesse:110},
   {von:10.4,bis:13,zeilen:[{text:'Ein Plan schlägt'},{text:'das <em>Bauchgefühl.</em>'}],groesse:110,cta:'Folge für mehr', bio:'@depiq.io'}
  ]
 }
};
