const carte = document.querySelectorAll('.project-card');
const btnPrecedente = document.getElementById('prev-btn');
const btnSuccessivo = document.getElementById('next-btn');

let indiceAttuale = 0;

function cambiaCarta(nuovoIndice) {
    carte[indiceAttuale].classList.remove('active');
    if (nuovoIndice >= carte.length) {
        indiceAttuale = 0;
    } else if (nuovoIndice < 0) {
        indiceAttuale = carte.length - 1;
    } else {
        indiceAttuale = nuovoIndice;
    }
    carte[indiceAttuale].classList.add('active');
}
btnSuccessivo.addEventListener('click', () => {
    cambiaCarta(indiceAttuale + 1);
});
btnPrecedente.addEventListener('click', () => {
    cambiaCarta(indiceAttuale - 1);
});