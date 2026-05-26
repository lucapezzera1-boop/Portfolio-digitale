const introduction = document.getElementById("intro");
const passionSpan = document.getElementById("passion-text");
const funFact = document.getElementById("randomFact");

const English = document.getElementById("en-btn");
const Italian = document.getElementById("it-btn");
const Dutch = document.getElementById("nl-btn");

const Title = document.getElementById("title");

const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const projects = document.getElementById("projects-btn");
const journeys = document.getElementById("journeys-btn");

const copyright = document.getElementById("copyright");

// Initialize default language styling
English.style.textDecoration = "underline";
let currentLang = "en";

// Translation dictionaries for the introduction prefix
const introTranslations = {
    en: "I am Luca Pezzera. I live in Bergamo, Italy. I am 15 years old, and I currently study at Istituto Politecnico IT highschool. I love ",
    it: "Sono Luca Pezzera. Vivo a Bergamo, Italia. Ho 15 anni e attualmente studio alla scuola superiore informatica Istituto Politecnico. Adoro ",
    nl: "Ik ben Luca Pezzera. Ik woon in Bergamo, Italië. Ik ben 15 jaar oud en ik studeer momenteel aan de IT-middelbare school Istituto Politecnico. Ik hou van "
};

// Multilingual passions list
const passions = {
    en: ["coding.", "programming.", "learning languages.", "rubik's cubes.", "gaming.", "history.", "padel."],
    it: ["coding.", "la programmazione.", "imparare le lingue.", "i cubi di rubik.", "i videogiochi.", "la storia.", "il padel."],
    nl: ["coderen.", "programmeren.", "talen leren.", "rubik's kubussen.", "gamen.", "geschiedenis.", "padel."]
};

// Multilingual facts list
const facts = {
    en: [
        "I like Mayonnaise more than Ketchup.", "My favorite pokémon is Crobat.", "I have five cats and a dog.",
        "My eyes look Blue, Gray or green depending on the lighting", "My main in Smash Bros. Melee is Marth.",
        "I never had a PlayStation, Just a Xbox and Nintendo consoles.", "My favorite pikmin is the Yellow pikmin.",
        "I am left-handed.", "My best friend is from Tunisia.", "I am learning Derja.",
        "For me cereal first, then you pour milk in the bowl.", "My favorite ice cream is stracciatella.",
        "My favorite tank is the Ariete c2."
    ],
    it: [
        "Mi piace più la maionese del ketchup.", "Il mio pokémon preferito è Crobat.", "Ho cinque gatti e un cane.",
        "I miei occhi sembrano blu, grigi o verdi a seconda della luce.", "Il mio main in Smash Bros. Melee è Marth.",
        "Non ho mai avuto una PlayStation, solo console Xbox e Nintendo.", "Il mio pikmin preferito è il Pikmin giallo.",
        "Sono mancino.", "Il mio migliore amico è della Tunisia.", "Sto imparando il Derja.",
        "Per me prima i cereali, poi versi il latte nella ciotola.", "Il mio gusto di gelato preferito è la stracciatella.",
        "Il mio carro armato preferito è l'Ariete c2."
    ],
    nl: [
        "Ik hou meer van mayonaise dan van ketchup.", "Mijn favoriete pokémon is Crobat.", "Ik heb vijf katten en een hond.",
        "Mijn ogen zien er blauw, grijs of groen uit, afhankelijk van de belichting.", "Mijn main in Smash Bros. Melee is Marth.",
        "Ik heb nooit een PlayStation gehad, alleen Xbox- en Nintendo-consoles.", "Mijn favoriete pikmin is de gele pikmin.",
        "Ik ben linkshandig.", "Mijn beste vriend komt uit Tunesië.", "Ik leer Derja.",
        "Voor mij eerst ontbijtgranen, daarna giet je pas de melk in de kom.", "Mijn favoriete ijsje is stracciatella.",
        "Mijn favoriete tank is de Ariete c2."
    ]
};

let currentIndex = 0;

// Update static text content on language switch
function updateLanguageUI() {
    // Reset decorations
    English.style.textDecoration = "none";
    Italian.style.textDecoration = "none";
    Dutch.style.textDecoration = "none";

    // Re-render intro text properly WITHOUT deleting the span node
    const textNode = introduction.childNodes[0];
    
    if (currentLang === "en") {
        English.style.textDecoration = "underline";
        Title.innerHTML = "My Online Portfolio";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Projects";
        journeys.innerHTML = "My Journeys";
        funFact.innerHTML = "Random fact about you, please!";
        copyright.textContent = "© 2026 Luca Pezzera. All rights reserved.";
        textNode.nodeValue = introTranslations.en;
    } else if (currentLang === "it") {
        Italian.style.textDecoration = "underline";
        Title.innerHTML = "Il Mio Portfolio Online";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Progetti";
        journeys.innerHTML = "I Miei Viaggi";
        funFact.innerHTML = "Un fatto casuale su di me, per favore!";
        copyright.textContent = "© 2026 Luca Pezzera. Tutti i diritti riservati.";
        textNode.nodeValue = introTranslations.it;
    } else if (currentLang === "nl") {
        Dutch.style.textDecoration = "underline";
        Title.innerHTML = "Mijn online portfolio";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Projecten";
        journeys.innerHTML = "Mijn Reizen";
        funFact.innerHTML = "Een willekeurig feitje over mij, alstublieft!";
        copyright.textContent = "© 2026 Luca Pezzera. Alle rechten voorbehouden.";
        textNode.nodeValue = introTranslations.nl;
    }
    
    // Instantly translate current passion word to match language
    passionSpan.textContent = passions[currentLang][currentIndex];
}

// Language switch listeners
addEventListener("click", (e) => {
    if (e.target === English && currentLang !== "en") {
        currentLang = "en";
        updateLanguageUI();
    } else if (e.target === Italian && currentLang !== "it") {
        currentLang = "it";
        updateLanguageUI();
    } else if (e.target === Dutch && currentLang !== "nl") {
        currentLang = "nl";
        updateLanguageUI();
    }
});

// Fun Fact Button Logic
addEventListener("click", (e) => {
    if (e.target === funFact) {
        const languageFacts = facts[currentLang];
        funFact.innerHTML = `${languageFacts[Math.floor(Math.random() * languageFacts.length)]}`;
    }
});

// Passion Words Cycling Logic
function cyclePassions() {
    passionSpan.classList.add("fade-effect");

    setTimeout(() => {
        const currentPassionsList = passions[currentLang];
        currentIndex = (currentIndex + 1) % currentPassionsList.length;
        passionSpan.textContent = currentPassionsList[currentIndex];
    }, 300);

    setTimeout(() => {
        passionSpan.classList.remove("fade-effect");
    }, 600);
}

setInterval(cyclePassions, 2500);