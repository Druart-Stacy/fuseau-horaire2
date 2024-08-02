// //debut d exemple
// let dateInThePast = new Date('1990-12-25')

// console.log(dateInThePast.toISOString()) // 1990-12-25T00:00:00.000Z
// console.log(dateInThePast.toUTCString()) // Tue, 25 Dec 1990 00:00:00 GMT
// console.log(dateInThePast.toString()) // Tue Dec 25 1990 01:00:00 GMT+0100 (Central European Standard Time)

// let dateInThePast2 = new Date('1990-12-25')

// console.log(dateInThePast2.getDate()) // 25
// console.log(dateInThePast2.getDay()) // 2 ( = tuesday)
// console.log(dateInThePast2.getFullYear()) // 1990
// console.log(dateInThePast2.getHours()) // 1 (midnight, UTC+1)
// console.log(dateInThePast2.getMilliseconds()) // 0
// console.log(dateInThePast2.getMinutes()) // 0
// console.log(dateInThePast2.getMonth()) // 11 (! Months start at 0 !)
// console.log(dateInThePast2.getSeconds()) // 0


// let christmas1995 = new Date('1995-12-25')
// let halloween2002i = new Date('2002-10-30')

// console.log((halloween2002i.getTime() / 1000) + ' seconds have passed betweeen halloween 2002 and 1/1/1970')
// console.log((halloween2002i.getTime() - christmas1995.getTime()) / (1000 * 60) + ' minutes have passed betweeen halloween 2002 and c')


// let halloween2002 = new Date('2002-10-30')
// let threeDays = 1000 * 60 * 60 * 24 * 3 // 1000 miliseconds * 60 seconds * 60 minutes * 24 hours * 3 days

// let threeDaysPastHalloween2002 = new Date(
//   halloween2002.getTime() + threeDays
// )

// console.log(threeDaysPastHalloween2002.toString())
//fin d exemple


//exercice 1
// Trouvez les fuseaux horaires de :
// Anchorage (USA)
// Reykjavik (Islande)
// Saint-Pétersbourg (Russie)
// Et affichez la date et l'heure de ces villes ainsi que la date et l'heure de Bruxelles.

let DateAujourdhui = Date();
let DateAujourdhui2 = Date.now();



// const USA = new Date('August 19, 1975 23:15:30 GMT-07:00');
const USA = new Date(DateAujourdhui2 -7);
const Islande = new Date(DateAujourdhui2 -2); // L'heure actuelle de l'Islande
const Russie = new Date(DateAujourdhui2 + 1); // L'heure actuelle de la Russie
const Bruxelles = new Date(DateAujourdhui2 +0); // L'heure actuelle de Bruxelles

// Définir l'heure pour Islande, Russie et Bruxelles
USA.setHours(USA.getHours() - 7); // GMT -07:00
Islande.setHours(Islande.getHours() + 0); // GMT+00:00
Russie.setHours(Russie.getHours() + 1); // GMT+01:00
Bruxelles.setHours(Bruxelles.getHours() + 2); // GMT+02:00

// définir les minutes
USA.setMinutes(USA.getMinutes()-0);
Islande.setMinutes(Islande.getMinutes()-0);
Russie.setMinutes(Russie.getMinutes()-0);
Bruxelles.setMinutes(Bruxelles.getMinutes()-0);

//definir les secondes
USA.setSeconds(USA.getSeconds()-0);
Islande.setSeconds(Islande.getSeconds()-0);
Russie.setSeconds(Russie.getSeconds()-0);
Bruxelles.setSeconds(Bruxelles.getSeconds()-0);

const body = document.createElement("body");
const UsaParagraph = document.createElement("p"); 
const islandeParagraph = document.createElement("p");
const RussieParagraph = document.createElement("p");
const BruxellesParagraph = document.createElement("p");

UsaParagraph.innerText = "Aux USA, on est le : " + USA.getDate() + " et il est : " + USA.getHours() + " heures "+USA.getMinutes() +"minutes et "+USA.getSeconds()+"secondes"; // Correction: Appeler "getDate()" pour obtenir le jour du mois
islandeParagraph.innerText = "En Islande, on est le : " + Islande.getDate() + " et il est : " + Islande.getHours() + " heures, " + Islande.getMinutes() + " minutes et " + Islande.getSeconds() + " secondes.";
RussieParagraph.innerText = "En Russie, on est le : "+Russie.getDate() +" et il est: " + Russie.getHours() + " heures "+Russie.getMinutes()+"minutes et "+Russie.getSeconds()+" secondes";
BruxellesParagraph.innerText="En Belgique,on n'est: "+Bruxelles.getDate()+" et il est : "+Bruxelles.getHours()+" heures "+Bruxelles.getMinutes()+"minutes et "+Bruxelles.getSeconds()+" secondes";

body.appendChild(UsaParagraph);
body.appendChild(islandeParagraph);
body.appendChild(RussieParagraph);
body.appendChild(BruxellesParagraph);

document.body.appendChild(body);




// Obtenir la date actuelle
let date = new Date();

// Obtenir le jour de la semaine (0 = Dimanche, 1 = Lundi, ..., 6 = Samedi)
let weekday = date.toLocaleDateString('en-US', { weekday: 'long' });

// Obtenir le jour du mois
let dayOfMonth = date.getDate();

// Obtenir le mois actuel (0 = janvier, 1 = février, ..., 11 = décembre)
let month = date.getMonth() + 1;

// Afficher le jour de la semaine, le jour du mois et le mois dans les éléments HTML correspondants
document.getElementById('weekday').textContent = weekday;
document.getElementById('dayOfMonth').textContent = dayOfMonth;
document.getElementById('month').textContent = month;






