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

const ValidateRules = {
    name: {
        regex: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{3,}$/,
        errormessage: "invaild name "
    },
    email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errormessage: "invalid email"
    },
    telephone: {
        regex: /^(\+212|0)[5-7]\d{8}$/,
        errormessage: "invalid phone number (ex: 0612345678)"
    },
    matchReserved: {
        regex: /^.+$/,
        errormessage: "select a match"
    },
    ticketNumber: {
        regex: /^([1-9]|10)$/,
        errormessage: "invalid ticket number"
    },
    comment: {
        regex: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{20,}$/,
        errormessage: "invalid comment message"
    },
};

let reservedMatches = 0;
let ProchainMatchSection = document.getElementById("ProchainMatch");

function renderMatchs(list) {
    ProchainMatchSection.innerHTML = "";
    list.forEachJJ(match => {
        ProchainMatchSection.innerHTML += `<p>${match.equipe1} Vs ${match.equipe2}</p><p>${match.date}</p><p>${match.stade}</p><button onclick="reserver(${match.id})">reserver</button>`
    });
}

window.onload = function () { renderMatchs(matchs); }

function reserver(id) {
    const match = matchs.find(m => m.id === id);
    const value = `${match.equipe1} vs ${match.equipe2} — ${match.date}`;
    document.getElementById("matchReserved").value = value;
}

document.getElementById("sortBtn").addEventListener('click', () => {
    const sorted = matchs.sort((a, b) => a.prix.tribune > b.prix.tribune ? 1 : -1);
    renderMatchs(sorted);
});

document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    const wrongInputs = Formvalidator();
    if (wrongInputs > 0) return;
    reservedMatches++;
    document.getElementById("reservationCount").textContent = `You reserved ${reservedMatches} match`;
});

function Formvalidator() {
    let inputs = document.querySelector("form").querySelectorAll(".marchDetailsInputs");
    let wronginput = 0;
    inputs.forEach(input => {
        let value = input.value.trim();
        let rule = ValidateRules[input.name];
        if (!rule) return;
        let errormessage = input.nextElementSibling;
        if (!value.match(rule.regex)) {
            if (errormessage) errormessage.textContent = rule.errormessage;
            input.style.border = "3px solid red";
            wronginput++;
        } else {
            input.style.border = "3px solid green";
            if (errormessage) errormessage.textContent = "";
        }
    });
    return wronginput;
}
