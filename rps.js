const score = {
    gamesWon: 0,
    gamesLost: 0,
    gamesTied: 0,
    gamesPlayed: function() {
        return this.gamesWon + this.gamesLost + this.gamesTied;
    }
};

const rpsBtn = document.querySelectorAll(".rpsbtn");
const resetBtn = document.querySelector('.reset-btn');
const scoreDisplay = document.querySelector('.score-display');
const resultsLog = document.querySelector('.results-log');
const wins = document.querySelector('.wins');
const losses = document.querySelector('.losses');
const ties = document.querySelector('.ties');

rpsBtn.forEach((btn) =>
        btn.addEventListener("click", () => {
            playRound(btn.dataset.choice, getComputerChoice())
            }
));

resetBtn.addEventListener("click", resetScore);

function getComputerChoice() {
    // get random number between 0-2 and return the result as a string
    switch (Math.floor(Math.random() * 3)) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
        default: return 'Rock';
    }
}

function playRound(playerSelection, computerSelection) {
    // game over after 5 wins/losses
    if (score.gamesWon >= 5 || score.gamesLost >= 5) return;

    // check for ties first
    if (playerSelection === computerSelection) {
        updateScore('gamesTied');
        addResult('Tie', playerSelection, computerSelection);
    }        
    // check loss conditions
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')
    ) {
        updateScore('gamesLost');
        addResult('Loss', playerSelection, computerSelection);
    }        
    else {
        updateScore('gamesWon');
        addResult('Win', playerSelection, computerSelection);
    }
    return;
}

function updateScore(result) {
    score[result]++;
    wins.textContent = `Player: ${score.gamesWon}`;
    losses.textContent =  `Computer: ${score.gamesLost}`;
    ties.textContent = `Ties: ${score.gamesTied}`;
}

function addResult(gameResult, playerSelection, computerSelection) {
    const resultText = document.createElement('div');
    resultText.classList.add('result-' + gameResult.toLowerCase());
    resultText.textContent = `Game ${score.gamesPlayed()}: ` + gameResult + ` (You chose: ${playerSelection}, Opponent chose: ${computerSelection}\)`;
    resultsLog.appendChild(resultText);
    
    if(score.gamesWon === 5 || score.gamesLost === 5) addWinner();
}

function addWinner() {
    const resultText = document.createElement('div');
    if (score.gamesWon === 5)
        resultText.textContent = 'You win!';
    else
        resultText.textContent = 'Computer wins!';
    resultsLog.appendChild(resultText);
}

function resetScore() {
    score.gamesWon = 0;
    score.gamesLost = 0;
    score.gamesTied = 0;
    wins.textContent = `Player: 0`;
    losses.textContent =  `Computer: 0`;
    ties.textContent = `Ties: 0`;
    resultsLog.replaceChildren();
    return;
}