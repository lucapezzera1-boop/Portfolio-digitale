const introduction = document.getElementById("intro");

const passions = [
    "coding.", 
    "programming.", 
    "learning languages.", 
    "rubik's cubes.",
    "gaming.",
    "history.",
    "padel.",
];
let currentIndex = 0;

const passionSpan = document.getElementById("passion-text");

function cyclePassions() {
    passionSpan.classList.add("fade-effect");

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % passions.length;
        passionSpan.textContent = passions[currentIndex];
    }, 300);

    setTimeout(() => {
        passionSpan.classList.remove("fade-effect");
    }, 600);
}

setInterval(cyclePassions, 2500);