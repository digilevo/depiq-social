// Inhalte der Bilder je Post. Schlüssel = Dateiname ohne Format-Endung.
// titel: Zeilen je Format (ig = Instagram 1080 × 1350, x = X 1600 × 900); <em> = Farbverlauf.
const POSTS={
 '2026-10-22_Do':{
  saeule:'kopf', chip:'Kopfsache',
  titel:{ig:['Panik ist','kein Plan.','<em>Überblick</em>','<em>schon.</em>'], x:['Panik ist kein Plan.','<em>Überblick schon.</em>']},
  unter:'Bevor du verkaufst: Schau aufs ganze Depot – nicht auf den roten Tag.',
  liste:['Grund für den Kauf noch gültig?','Depot breit genug gestreut?','Geld wirklich bald nötig?'], nummeriert:true, listeX:false
 },
 '2026-10-23_Fr':{
  saeule:'gruender', chip:'Gründer',
  titel:{ig:['Ich wollte','eine App, die','<em>erklärt</em> statt','verkauft.'], x:['Ich wollte eine App, die','<em>erklärt</em> statt verkauft.']},
  unter:'Also habe ich depiq gebaut. – Jürgen',
  liste:['Alle Depots an einem Ort','Verständlich statt Fachchinesisch','Keine Kauf- oder Verkaufstipps'], listeX:false
 }
};
