const score = {
    gamesWon: 0,
    gamesLost: 0,
    gamesTied: 0
};

const rpsBtn = document.querySelectorAll(".rpsbtn");
const resetBtn = document.querySelector('.reset-btn');
const scoreDisplay = document.querySelector('.score-display');
const resultsLog = document.querySelector('.results-log');

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
    let result;

    // check for ties first
    if (playerSelection === computerSelection) {
        result = 'It\'s a tie!';
        updateScore('gamesTied');
    }        
    // check loss conditions
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')
    ) {
        result = 'You lose!';
        updateScore('gamesLost');
    }
        
    else {
        result = 'You win!';
        updateScore('gamesWon');
    }
    
    // display what players chose
    result += ` (You chose: ${playerSelection}, Opponent chose: ${computerSelection}\)`;
    console.log(result);
    console.log(score);
    
    return result;
}

function updateScore(result) {
    score[result]++;
    scoreDisplay.textContent = `Player: ${score.gamesWon}, Computer: ${score.gamesLost}, Ties: ${score.gamesTied}`;
}

function resetScore() {
    score.gamesWon = 0;
    score.gamesLost = 0;
    score.gamesTied = 0;
    scoreDisplay.textContent = `Player: ${score.gamesWon}, Computer: ${score.gamesLost}, Ties: ${score.gamesTied}`;
    return
}