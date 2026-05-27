const introduction = document.getElementById("intro");
const passionSpan = document.getElementById("passion-text");
const funFact = document.getElementById("randomFact");
const tankDescription = document.getElementById("tank-description");

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
const tankTranslations = {
    en: "Out of all the armored vehicles in military history, the Italian C2 Ariete (also known as the Ariete AMV) is by far my favorite tank. While mainstream attention usually goes to the heavy German Leopards or American Abrams, the Ariete is a true underdog that deserves way more credit. What makes it so special to me is its brilliant philosophy of design. Instead of just stacking heavy armor, the C2 upgrade focuses on high mobility and cutting-edge technology. With a massive new 1500-horsepower engine packed into a chassis that is significantly lighter than its NATO rivals, it has an incredible power-to-weight ratio. It is fast, agile, and deadly. On top of that, it's equipped with world-class Leonardo optics and a modern digital command system, making it incredibly smart on the battlefield. It's a perfect mix of aggressive aesthetics, Italian engineering, and high-tech warfare. It might be underrated by the masses, but to me, it's the ultimate modern war machine.",
    it: "Tra tutti i veicoli corazzati della storia militare, il carro armato italiano C2 Ariete (noto anche come Ariete AMV) è di gran lunga il mio preferito. Mentre l'attenzione del grande pubblico si concentra solitamente sui pesanti Leopard tedeschi o sugli Abrams americani, l'Ariete è un vero outsider che merita molta più considerazione. Ciò che lo rende così speciale per me è la sua brillante filosofia progettuale. Invece di limitarsi ad accumulare una pesante corazzatura, l'aggiornamento C2 si concentra sull'elevata mobilità e sulla tecnologia all'avanguardia. Con un nuovo motore da ben 1500 cavalli alloggiato in uno scafo significativamente più leggero rispetto ai suoi rivali NATO, vanta un incredibile rapporto peso/potenza. È veloce, agile e letale. Oltre a ciò, è equipaggiato con ottiche Leonardo di livello mondiale e un moderno sistema di comando digitale, che lo rendono incredibilmente intelligente sul campo di battaglia. È una miscela perfetta di estetica aggressiva, ingegneria italiana e guerra ad alta tecnologia. Potrebbe essere sottovalutato dai più, ma per me è la macchina da guerra moderna per eccellenza.",
    nl: "Van alle gepantserde voertuigen in de militaire geschiedenis is de Italiaanse C2 Ariete (ook bekend als de Ariete AMV) verreweg mijn favoriete tank. Hoewel de aandacht in de media meestal uitgaat naar de zware Duitse Leopards of de Amerikaanse Abrams, is de Ariete een echte underdog die veel meer erkenning verdient. Wat hem voor mij zo bijzonder maakt, is zijn briljante ontwerpfilosofie. In plaats van simpelweg zware bepantsering toe te voegen, richt de C2-upgrade zich op hoge mobiliteit en geavanceerde technologie. Met een enorme nieuwe motor van 1500 pk in een chassis dat aanzienlijk lichter is dan dat van zijn NAVO-rivalen, heeft hij een ongelooflijke vermogen-gewichtsverhouding. Hij is snel, wendbaar en dodelijk. Bovendien is hij uitgerust met hoogwaardige Leonardo-optiek en een modern digitaal commandosysteem, waardoor hij ongelooflijk slim is op het slagveld. Het is een perfecte mix van agressieve esthetiek, Italiaanse techniek en hightech oorlogsvoering. Hij wordt misschien door het grote publiek onderschat, maar voor mij is het de ultieme moderne oorlogsmachine."
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
        textNode.nodeValue = introTranslations.en;
                if(tankDescription) tankDescription.textContent = tankTranslations.en;    } else if (currentLang === "it") {
                    Italian.style.textDecoration = "underline";
                    Title.innerHTML = "Il Mio Portfolio Online";
        home.innerHTML = "Home";
        about.innerHTML = "About Me";
        projects.innerHTML = "Progetti";
        journeys.innerHTML = "I Miei Viaggi";
        funFact.innerHTML = "Un fatto casuale su di me, per favore!";
        copyright.textContent = "© 2026 Luca Pezzera. Tutti i diritti riservati.";
        textNode.nodeValue = introTranslations.it;
        textNode.nodeValue = introTranslations.it;
                if(tankDescription) tankDescription.textContent = tankTranslations.it;
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
        textNode.nodeValue = introTranslations.nl;
                if(tankDescription) tankDescription.textContent = tankTranslations.nl;
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