// global counters for win/lose/tie
let gamesWon = 0;
let gamesLost = 0;
let gamesTied = 0;

const rpsBtn = document.querySelectorAll(".rpsbtn");

rpsBtn.forEach((btn) =>
        btn.addEventListener("click", () => {
            playRound(btn.dataset.choice, getComputerChoice())
            }
));

// game();

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
        gamesTied++;
    }        
    // check loss conditions
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')
    ) {
        result = 'You lose!';
        gamesLost++;
    }
        
    else {
        result = 'You win!';
        gamesWon++;
    }
    
    // display what players chose
    result += ` (You chose: ${playerSelection}, Opponent chose: ${computerSelection}\)`;
    console.log(result);
    return result;
}