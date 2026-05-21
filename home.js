const English = document.getElementById("en-btn");
English.style.textDecoration = "underline";
const Italian = document.getElementById("it-btn");
const Dutch = document.getElementById("nl-btn");

const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const projects = document.getElementById("projects-btn");
const journeys = document.getElementById("journeys-btn");

const whoAmI = document.getElementById("who-am-i");
const birthday = document.getElementById("birthday");
const birthplace = document.getElementById("birthplace");
const education = document.getElementById("education");
const nationality = document.getElementById("nationality");
const languages = document.getElementById("languages");
const copyright = document.getElementById("copyright");

addEventListener("click" , (e) => {
    if(e.target === English){
        English.style.textDecoration = "underline";
        Italian.style.textDecoration = "none";
        Dutch.style.textDecoration = "none";
        whoAmI.textContent = "Who am I?";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Projects";
        journeys.innerHTML = "My Journeys";
        birthday.innerHTML = "<strong>Birthday:</strong> November 22nd, 2010";
        birthplace.innerHTML = "<strong>Birthplace:</strong> Bergamo, Italy";
        education.innerHTML = "<strong>Education:</strong> High-school, IT, Istituto Politecnico di Grumello D.M. (BG) [2024 - ongoing]";
        nationality.innerHTML = "<strong>Nationality:</strong> Italian, Dutch";
        languages.innerHTML = "<strong>Languages I speak:</strong> Italian, English";
        copyright.textContent = "© 2026 Luca Pezzera. All rights reserved.";
    } else if(e.target === Italian){
        whoAmI.textContent = "Chi sono?";
        English.style.textDecoration = "none";
        Italian.style.textDecoration = "underline";
        Dutch.style.textDecoration = "none";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Progetti";
        journeys.innerHTML = "I Miei Viaggi";
        birthday.innerHTML = "<strong>Compleanno:</strong> 22 Novembre 2010";
        birthplace.innerHTML = "<strong>Luogo di nascita:</strong> Bergamo, Italia";
        education.innerHTML = "<strong>Istruzione:</strong> Scuola superiore, IT, Istituto Politecnico di Grumello D.M. (BG) [2024 - in corso]";
        nationality.innerHTML = "<strong>Cittadinanza:</strong> Italiana, Olandese";
        languages.innerHTML = "<strong>Lingue che parlo:</strong> Italiano, Inglese";
        copyright.textContent = "© 2026 Luca Pezzera. Tutti i diritti riservati.";
    } else if(e.target === Dutch){
        Italian.style.textDecoration = "none";
        English.style.textDecoration = "none";
        Dutch.style.textDecoration = "underline";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Projecten";
        journeys.innerHTML = "Mijn Reizen";
        whoAmI.textContent = "Wie ben ik?";
        birthday.innerHTML = "<strong>Verjaardag:</strong> 22 November 2010";
        birthplace.innerHTML = "<strong>Geboorteplaats:</strong> Bergamo, Italië";
        education.innerHTML = "<strong>Opleiding:</strong> Middelbare school, IT, Istituto Politecnico di Grumello D.M. (BG) [2024 - lopend]";
        nationality.innerHTML = "<strong>Burgerschap:</strong> Italiaans, Nederlands";
        languages.innerHTML = "<strong>Talen die ik spreek:</strong> Italiaans, Engels";
        copyright.textContent = "© 2026 Luca Pezzera. Alle rechten voorbehouden.";
    }
})