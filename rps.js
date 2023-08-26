function getComputerChoice() {
    // get random number between 0-2 and return the result as a string
    switch (Math.floor(Math.random() * 3)) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
        default: return 'Rock';
    }
}

function getPlayerChoice() {
    let playerChoice = prompt('Choose Rock, Paper, or Scissors', '');

    // check for one of the three valid choices, case-insensitive
    switch (playerChoice.toUpperCase()) {
        case 'ROCK': return 'Rock';
        case 'PAPER': return 'Paper';
        case 'SCISSORS': return 'Scissors';
        default: return null;
    }
}

function playRound(playerSelection, computerSelection) {
    let result;

    // check for ties first
    if (playerSelection === computerSelection)
        result = 'It\'s a tie!';
    // check loss conditions
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')
    )
        result = 'You lose!';
    else
        result = 'You win!';
    
    // display what players chose
    result += ` (You chose: ${playerSelection}, Opponent chose: ${computerSelection}\)`;

    return result;
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));