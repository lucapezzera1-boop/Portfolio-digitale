const English = document.getElementById("en-btn");
English.style.textDecoration = "underline";
const Italian = document.getElementById("it-btn");
const Dutch = document.getElementById("nl-btn");

const Title = document.getElementById("title");
const mainTitle = document.getElementsByClassName("maintitle")[0];

const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const projects = document.getElementById("projects-btn");
const journeys = document.getElementById("journeys-btn");

const whoAmI = document.getElementById("who-am-i");
const ImLuca = document.getElementById("ImLuca");
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
        ImLuca.textContent = "I am Luca Pezzera.";
        Title.innerHTML="My Online Portfolio";
        mainTitle.innerHTML="Welcome!!!";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Projects";
        journeys.innerHTML = "My Journeys";
        birthday.innerHTML = "<strong>Date of birth::</strong> November 22, 2010";
        birthplace.innerHTML = "<strong>Birthplace:</strong> Bergamo, Italy";
        education.innerHTML = "<strong>Education:</strong> High School, IT, Istituto Politecnico di Grumello D.M. (BG) [2024 - present]";
        nationality.innerHTML = "<strong>Nationality:</strong> Italian, Dutch";
        languages.innerHTML = "<strong>Languages:</strong> Italian, English";
        copyright.textContent = "© 2026 Luca Pezzera. All rights reserved.";
    } else if(e.target === Italian){
        whoAmI.textContent = "Chi sono?";
        English.style.textDecoration = "none";
        Italian.style.textDecoration = "underline";
        Dutch.style.textDecoration = "none";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Progetti";
        ImLuca.textContent = "Sono Luca Pezzera.";
        Title.innerHTML="Il Mio Portfolio Online";
        mainTitle.innerHTML="Benvenuto/a!!!";
        journeys.innerHTML = "I Miei Viaggi";
        birthday.innerHTML = "<strong>Data di nascita:</strong> 22 novembre 2010";
        birthplace.innerHTML = "<strong>Luogo di nascita:</strong> Bergamo, Italia";
        education.innerHTML = "<strong>Istruzione:</strong> Scuola superiore, Informatica, Istituto Politecnico di Grumello D.M. (BG) [2024 - in corso]";
        nationality.innerHTML = "<strong>Nazionalità:</strong> Italiana, Olandese";
        languages.innerHTML = "<strong>Lingue:</strong> Italiano, Inglese";
        copyright.textContent = "© 2026 Luca Pezzera. Tutti i diritti riservati.";
    } else if(e.target === Dutch){
        Italian.style.textDecoration = "none";
        English.style.textDecoration = "none";
        Dutch.style.textDecoration = "underline";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Projecten";
        journeys.innerHTML = "Mijn Reizen";
        Title.innerHTML="Mijn online portfolio";
        mainTitle.innerHTML="Welkom!!!";
        ImLuca.textContent = "Ik ben Luca Pezzera.";
        
        whoAmI.textContent = "Wie ben ik?";
        birthday.innerHTML = "<strong>Geboortedatum:</strong> 22 november 2010";
        birthplace.innerHTML = "<strong>Geboorteplaats:</strong> Bergamo, Italië";
        education.innerHTML = "<strong>Opleiding:</strong> Middelbare school, IT, Istituto Politecnico di Grumello D.M. (BG) [2024 - nu]";
        nationality.innerHTML = "<strong>Nationaliteit:</strong> Italiaanse, Nederlandse";
        languages.innerHTML = "<strong>Talen:</strong> Italiaans, Engels";
        copyright.textContent = "© 2026 Luca Pezzera. Alle rechten voorbehouden.";
    }
})