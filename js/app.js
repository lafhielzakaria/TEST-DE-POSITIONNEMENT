const matchs = [
    {
        id: 1, equipe1: "FC KOORAWAVE", equipe2: "Raja Club",
        date: "15/03/2025", heure: "20:00", stade: "Stade Mohammed V",
        prix: { tribune: 200, virage: 100, pelouse: 50 }
    },
    {
        id: 2, equipe1: "FC KOORAWAVE", equipe2: "Wydad AC",
        date: "22/03/2025", heure: "18:00", stade: "Stade Mohammed V",
        prix: { tribune: 250, virage: 120, pelouse: 60 }
    },
    {
        id: 3, equipe1: "FC KOORAWAVE", equipe2: "AS FAR",
        date: "05/04/2025", heure: "21:00", stade: "Stade Mohammed V",
        prix: { tribune: 300, virage: 150, pelouse: 80 }
    }
];
let reservedMatches = 0;
let ProchainMatchSection = document.getElementById("ProchainMatch");

function renderMatchs(list) {
    ProchainMatchSection.innerHTML = list.map(match =>
        `<p>${match.equipe1} Vs ${match.equipe2}</p><p>${match.date}</p><p>${match.stade}</p><button onclick="reserver(${match.id})">reserver</button>`
    ).join('');
}

window.onload = function () { renderMatchs(matchs); }
function reserver(id) {
    const match = matchs.find(m => m.id === id);
    const value = `${match.equipe1} vs ${match.equipe2} — ${match.date}`;
    document.getElementById("matchReserved").value = value;
}
document.getElementById("sortBtn").addEventListener('click', () => {
    const sorted = matchs.sort((a,b)=> a.prix.tribune > b.prix.tribune ? 1 : -1);
    renderMatchs(sorted);
});

document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    reservedMatches++;
    document.getElementById("reservationCount").textContent = `You reserved  ${reservedMatches} match`;
})