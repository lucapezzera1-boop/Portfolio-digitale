const English = document.getElementById("en-btn");
English.style.textDecoration = "underline";
const Italian = document.getElementById("it-btn");
const Dutch = document.getElementById("nl-btn");

const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const projects = document.getElementById("projects-btn");
const journeys = document.getElementById("journeys-btn");

const CitiesVisited = document.getElementById("citiesVisited")
const MyJournyes = document.getElementById("journeys")

const Italy = document.getElementById("italianDesc");
const Germany = document.getElementById("germanDesc");
const Switzerland = document.getElementById("swissDesc");
const Netherlands = document.getElementById("dutchDesc");
const Ireland = document.getElementById("irishDesc");
const France = document.getElementById("frenchDesc");

const Italia = document.getElementById("italy");
const Germania = document.getElementById("germany");
const Svizzera = document.getElementById("switzerland");
const PaesiBassi = document.getElementById("holland");
const Irlanda = document.getElementById("ireland");
const Francia = document.getElementById("france");

addEventListener("click" , (e) => {
    if(e.target === English){
        English.style.textDecoration = "underline";
        Italian.style.textDecoration = "none";
        Dutch.style.textDecoration = "none";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Projects";
        journeys.innerHTML = "My Journeys";

        CitiesVisited.innerHTML = "Cities visited";
        MyJournyes.innerHTML = "My Journeys";
        
        Italy.innerHTML = "Italy. My home";
        Germany.innerHTML = "Germany. Last visited: 2025";
        Switzerland.innerHTML = "Switzerland. Last visited: 2025";
        Netherlands.innerHTML = "Netherlands. Last visited: 2025";
        Ireland.innerHTML = "Ireland. Last visited: 2025";
        France.innerHTML = "France. Last visited: 2016";
        
        Italia.innerHTML = " 🇮🇹 Italy ";
        Germania.innerHTML = " 🇩🇪 Germany";
        Svizzera.innerHTML = " 🇨🇭 Switzerland";
        PaesiBassi.innerHTML = " 🇳🇱 Netherlands";
        Irlanda.innerHTML = " 🇮🇪 Ireland";
        Francia.innerHTML = "🇫🇷 France";
        
        copyright.textContent = "© 2026 Luca Pezzera. All rights reserved.";
    } else if(e.target === Italian){
        English.style.textDecoration = "none";
        Italian.style.textDecoration = "underline";
        Dutch.style.textDecoration = "none";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Progetti";
        journeys.innerHTML = "I Miei Viaggi";
        
        CitiesVisited.innerHTML = "Cittá visitate";
        MyJournyes.innerHTML = "I Miei Viaggi";
        
        Italy.innerHTML = "Italia. Casa mia";
        Germany.innerHTML = "Germania. Ultima visita: 2025";
        Switzerland.innerHTML = "Svizzera. Ultima visita: 2025";
        Netherlands.innerHTML = "Paesi bassi. Ultima visita: 2025";
        Ireland.innerHTML = "Irlanda. Ultima visita: 2025";
        France.innerHTML = "Francia. Ultima visita: 2016";
        
        Italia.innerHTML = " 🇮🇹 Italia ";
        Germania.innerHTML = " 🇩🇪 Germania";
        Svizzera.innerHTML = " 🇨🇭 Svizzera";
        PaesiBassi.innerHTML = " 🇳🇱 Paesi bassi";
        Irlanda.innerHTML = " 🇮🇪 Irlanda";
        Francia.innerHTML = "🇫🇷 Francia";
        
        copyright.textContent = "© 2026 Luca Pezzera. Tutti i diritti riservati.";
    } else if(e.target === Dutch){
        Italian.style.textDecoration = "none";
        English.style.textDecoration = "none";
        Dutch.style.textDecoration = "underline";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Projecten";
        journeys.innerHTML = "Mijn Reizen";
        
        CitiesVisited.innerHTML = "Steden bezocht";
        MyJournyes.innerHTML = "Mijn Reizen";
        
        Italy.innerHTML = "Italië. Mijn thuis";
        Germany.innerHTML = "Duitsland. Laatste bezoek: 2025";
        Switzerland.innerHTML = "Zwitserland. Laatste bezoek: 2025";
        Netherlands.innerHTML = "Nederland. Laatste bezoek: 2025";
        Ireland.innerHTML = "Ierland. Laatste bezoek: 2025";
        France.innerHTML = "Frankrijk. Laatste bezoek: 2016";
        
        Italia.innerHTML = " 🇮🇹 Italië ";
        Germania.innerHTML = " 🇩🇪 Duitsland";
        Svizzera.innerHTML = " 🇨🇭 Zwitserland";
        PaesiBassi.innerHTML = " 🇳🇱 Nederland";
        Irlanda.innerHTML = " 🇮🇪 Ierland";
        Francia.innerHTML = "🇫🇷 Frankrijk";
        
        copyright.textContent = "© 2026 Luca Pezzera. Alle rechten voorbehouden.";
    }
})