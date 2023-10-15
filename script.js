let currentPlayer = 1;
let currentScore = 0;
let scores = [0, 0];
let gameActive = true;

function switchPlayer() {
    currentScore = 0;
    document.getElementById("current-score").textContent = currentScore;
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    document.getElementById("current-player").textContent = currentPlayer;
}

function rollDice() {
    if (!gameActive) return;
    const dice = Math.floor(Math.random() * 6) + 1;
    const diceElement = document.getElementById("dice");
    diceElement.textContent = dice;
    
    if (dice !== 1) {
        currentScore += dice;
        document.getElementById("current-score").textContent = currentScore;
    } else {
        switchPlayer();
    }
}

function hold() {
    if (!gameActive) return;
    scores[currentPlayer - 1] += currentScore;
    document.getElementById("score-" + currentPlayer).textContent = scores[currentPlayer - 1];
    if (scores[currentPlayer - 1] >= 100) {
        document.getElementById("winner").textContent = "Joueur " + currentPlayer + " a gagné!";
        document.querySelector(".alert").style.display = "block";
        gameActive = false;
    } else {
        switchPlayer();
    }
}

function newGame() {
    initGame();
    document.getElementById("dice").textContent = "-";
    document.querySelector(".alert").style.display = "none";
}

document.getElementById("roll-dice").addEventListener("click", rollDice);
document.getElementById("hold").addEventListener("click", hold);
document.getElementById("new-game").addEventListener("click", newGame);

function initGame() {
    currentPlayer = 1;
    currentScore = 0;
    scores = [0, 0];
    gameActive = true;
    document.getElementById("current-score").textContent = currentScore;
    document.getElementById("current-player").textContent = currentPlayer;
    document.getElementById("score-1").textContent = "0";
    document.getElementById("score-2").textContent = "0";
    document.getElementById("winner").textContent = "";
}

initGame();
