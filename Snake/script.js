const map = document.querySelector('.map');
const punti = document.querySelector('.punteggio');

let score = 0
let gameInterval;
let nomeUtente = "";
let snake = [{ x: 2, y: 8 }, { x: 1, y: 8 }];
let dirX = 0;
let dirY = 0;

let fruitX = 5;
let fruitY = 5;

nomeUtente = prompt("Benvenuto! Inserisci il tuo nome:");
if (nomeUtente === null || nomeUtente === "") {
    nomeUtente = "Snake";

}
points()

function points(){
    score++
    punti.innerHTML = `🍎: ${score}`
}

function draw() {
    map.innerHTML = '';

    const fruttoElement = document.createElement('div');
    fruttoElement.className = 'frutto';
    fruttoElement.innerText = '🍎';
    fruttoElement.style.gridColumn = fruitX;
    fruttoElement.style.gridRow = fruitY;
    map.appendChild(fruttoElement);

    snake.forEach((segment, index) => {
        const snakePart = document.createElement('div');
        snakePart.className = 'player';
        snakePart.style.gridColumn = segment.x;
        snakePart.style.gridRow = segment.y;

        const opacity = 1 - (index / snake.length) * 0.7;
        snakePart.style.opacity = opacity;

        map.appendChild(snakePart);
    });

    if(snake.length === 149){
        alert("Hai vinto!!!");
        snake = [{ x: 2, y: 8 }];
        dirX = 0; dirY = 0;
    }
}

function fruitRandom() {
    let collision;
    do {
        collision = false;
        fruitX = Math.floor(Math.random() * 10) + 1;
        fruitY = Math.floor(Math.random() * 15) + 1;

        snake.forEach(segment => {
            if (segment.x === fruitX && segment.y === fruitY) {
                collision = true;
            }
        });
    } while (collision);
}

function startGame() {
    clearInterval(gameInterval);

    const speed = 150 - (score * 2);
    gameInterval = setInterval(move, Math.max(speed, 30)); // Math.max keeps it from hitting 0ms
}

function move() {
    if (dirX === 0 && dirY === 0) return;

    const head = { x: snake[0].x + dirX, y: snake[0].y + dirY };

    const tailCollision = snake.some(segment => segment.x === head.x && segment.y === head.y);

    if (head.x < 1 || head.x > 10 || head.y < 1 || head.y > 15 || tailCollision) {
        alert(`Game Over, ${nomeUtente}, riprova!`);
        checkHighScore(score, nomeUtente);
        location.reload(); 
        score = 0;
        snake = [{ x: 2, y: 8 }];
        dirX = 0; dirY = 0;
        fruitRandom();
        draw();
        return;
    }

    snake.unshift(head);

    if (head.x === fruitX && head.y === fruitY) {
        fruitRandom();
        points();
    } else {
        snake.pop();
    }

    draw();
}
function changeDir(direzione) {
    if (direzione === 'up' && dirY !== 1) { 
        dirX = 0; dirY = -1; 
    }
    else if (direzione === 'down' && dirY !== -1) { 
        dirX = 0; dirY = 1; 
    }
    else if (direzione === 'left' && dirX !== 1) { 
        dirX = -1; dirY = 0; 
    }
    else if (direzione === 'right' && dirX !== -1) { 
        dirX = 1; dirY = 0; 
    }
}

function checkHighScore(score, name) {
    const highScores = JSON.parse(localStorage.getItem('snakeHighScores')) || [];
    
    const newScore = { score, name };
    
    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    
    localStorage.setItem('snakeHighScores', JSON.stringify(highScores));
    
    displayHighScores();
}
function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem('snakeHighScores')) || [];
    const list = document.getElementById('highScoresList');
    
    list.innerHTML = highScores
        .map(score => `<li>${score.name}: <strong>${score.score}</strong></li>`)
        .join('');
}

window.addEventListener('keydown', (e) => {
    if ((e.key === 'ArrowUp' || e.key === 'w') && dirY !== 1) { dirX = 0; dirY = -1; }
    if ((e.key === 'ArrowDown' || e.key === 's') && dirY !== -1) { dirX = 0; dirY = 1; }
    if ((e.key === 'ArrowLeft' || e.key === 'a') && dirX !== 1) { dirX = -1; dirY = 0; }
    if ((e.key === 'ArrowRight' || e.key === 'd') && dirX !== -1) { dirX = 1; dirY = 0; }
});
displayHighScores()
fruitRandom();
draw();
startGame();