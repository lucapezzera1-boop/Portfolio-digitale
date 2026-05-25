const English = document.getElementById("en-btn");
English.style.textDecoration = "underline";
const Italian = document.getElementById("it-btn");
const Dutch = document.getElementById("nl-btn");

const Title = document.getElementById("title");
const MyProjects = document.getElementById("MyProjects");

const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const projects = document.getElementById("projects-btn");
const journeys = document.getElementById("journeys-btn");

const sitoText = document.getElementById("website");
const buttonProject = document.querySelectorAll("#btn-project");
const snake = document.getElementById("snek");

const copyright = document.getElementById("copyright");


addEventListener("click" , (e) => {
    if(e.target === English){
        English.style.textDecoration = "underline";
        Italian.style.textDecoration = "none";
        Dutch.style.textDecoration = "none";
        Title.innerHTML="My Online Portfolio";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Projects";
        journeys.innerHTML = "My Journeys";
        MyProjects.innerHTML = "My Projects!";
        
        sitoText.innerHTML = "This is my original Website!"
        snake.innerHTML = "This is a snake-like game!"
        buttonProject.forEach(button => {
            button.innerHTML = "Try it now!";
        });
        
        copyright.textContent = "© 2026 Luca Pezzera. All rights reserved.";
    } else if(e.target === Italian){
        English.style.textDecoration = "none";
        Italian.style.textDecoration = "underline";
        Dutch.style.textDecoration = "none";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Progetti";
        Title.innerHTML="Il Mio Portfolio Online";
        journeys.innerHTML = "I Miei Viaggi";
        MyProjects.innerHTML = "My Progetti!";
        
        sitoText.innerHTML = "Questo é il mio sito originale!"
        snake.innerHTML = "Questo é un gioco simile a snake!"

        buttonProject.forEach(button => {
            button.innerHTML = "Provalo subito!";
        });
        
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
        MyProjects.innerHTML = "Mijn Projecten!";
        
        sitoText.innerHTML = "Dit is mijn oorspronkelijke website!"
        snake.innerHTML = "Dit is een spel dat lijkt op Snake!"
        buttonProject.forEach(button => {
            button.innerHTML = "Probeer het nu!";
        });
        
        
        copyright.textContent = "© 2026 Luca Pezzera. Alle rechten voorbehouden.";
    }
})