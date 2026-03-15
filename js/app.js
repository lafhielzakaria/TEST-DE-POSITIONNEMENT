const matchs = [
{ id: 1, equipe1: "FC KOORAWAVE", equipe2: "Raja Club",
date: "15/03/2025", heure: "20:00", stade: "Stade Mohammed V",
prix: { tribune: 200, virage: 100, pelouse: 50 } },
{ id: 2, equipe1: "FC KOORAWAVE", equipe2: "Wydad AC",
date: "22/03/2025", heure: "18:00", stade: "Stade Mohammed V",
prix: { tribune: 250, virage: 120, pelouse: 60 } },
{ id: 3, equipe1: "FC KOORAWAVE", equipe2: "AS FAR",
date: "05/04/2025", heure: "21:00", stade: "Stade Mohammed V",
prix: { tribune: 300, virage: 150, pelouse: 80 } }
];
 let matchDetails = "";
let ProchainMatchSection = document.getElementById("Prochain-match");
window.onload = function (){
    matchs.forEach((match)=>{
     matchDetails += `<p>${match.equipe1} Vs ${match.equipe2}</p> <p>${match.date} </p> <p>${match.stade}</p>`
     ProchainMatchSection.innerHTML =  matchDetails;
});
}
function reserver(match){
console.log (match);
}