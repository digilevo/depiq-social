// Reels: Szenen mit Zeitfenster in Sekunden. Die letzte Szene bleibt bis zum Ende stehen.
const REELS={
 '2026-10-27_Di_Reel':{
  dauer:12, glow:'rgba(225,29,72,.55)',
  szenen:[
   {von:0,bis:2.4,zeilen:[{text:'Rot.',rot:true},{text:'Überall rot.',rot:true}],groesse:150},
   {von:2.4,bis:5,zeilen:[{text:'Der Daumen'},{text:'schwebt über'},{text:'„Verkaufen“.'}],groesse:118},
   {von:5,bis:7.4,zeilen:[{text:'Panik ist'},{text:'kein Plan.'}],groesse:150},
   {von:7.4,bis:9.4,zeilen:[{text:'<em>Überblick</em>'},{text:'<em>schon.</em>'}],groesse:150},
   {von:9.4,bis:12,zeilen:[{text:'Erst schauen.'},{text:'Dann <em>entscheiden.</em>'}],groesse:104,cta:'14 Tage MAX kostenlos'}
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
   {von:10.2,bis:13,zeilen:[{text:'Fang heute an.'},{text:'Mit <em>Überblick.</em>'}],groesse:104,cta:'14 Tage MAX kostenlos'}
  ]
 }
};
