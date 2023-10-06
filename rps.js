const score = {
    Win: 0,
    Loss: 0,
    Tie: 0,
    gamesPlayed: function() {
        return this.Win + this.Loss + this.Tie;
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

const choices = {
    Rock: { Rock: 'Tie', Paper: 'Loss', Scissors: 'Win' },
    Paper: { Rock: 'Win', Paper: 'Tie', Scissors: 'Loss' },
    Scissors: { Rock: 'Loss', Paper: 'Win', Scissors: 'Tie' }
}

function playRound(playerChoice, computerChoice) {
    // game over after 5 wins/losses
    if (score.Win >= 5 || score.Loss >= 5) return;

    updateScore(choices[playerChoice][computerChoice]);
    addResult(choices[playerChoice][computerChoice], playerChoice, computerChoice);
}

function updateScore(result) {
    score[result]++;
    wins.textContent = `Player: ${score.Win}`;
    losses.textContent =  `Computer: ${score.Loss}`;
    ties.textContent = `Ties: ${score.Tie}`;
}

function addResult(gameResult, playerChoice, computerChoice) {
    const resultText = document.createElement('div');
    resultText.classList.add('result-' + gameResult.toLowerCase());
    resultText.textContent = `Game ${score.gamesPlayed()}: ` + gameResult + ` (You chose: ${playerChoice}, Opponent chose: ${computerChoice}\)`;
    resultsLog.appendChild(resultText);
    
    if(score.Win === 5 || score.Loss === 5) addWinner();
}

function addWinner() {
    const resultText = document.createElement('div');
    if (score.Win === 5)
        resultText.textContent = 'You win!';
    else
        resultText.textContent = 'Computer wins!';
    resultsLog.appendChild(resultText);
}

function resetScore() {
    score.Win = 0;
    score.Loss = 0;
    score.Tie = 0;
    wins.textContent = `Player: 0`;
    losses.textContent =  `Computer: 0`;
    ties.textContent = `Ties: 0`;
    resultsLog.replaceChildren();
}