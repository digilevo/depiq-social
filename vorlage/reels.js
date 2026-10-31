// Reels: Szenen mit Zeitfenster in Sekunden. Die letzte Szene bleibt bis zum Ende stehen.
const REELS={
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
