function getComputerChoice() {
    // Get random number between 0-2 and return the result as a string
    switch (Math.floor(Math.random() * 3)) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
        default: return 'Rock';
    }
}

function getPlayerChoice() {
    let playerChoice = prompt('Choose Rock, Paper, or Scissors', '');

    // Check for one of the three valid choices, case-insensitive
    switch (playerChoice.toUpperCase()) {
        case 'ROCK': return 'Rock';
        case 'PAPER': return 'Paper';
        case 'SCISSORS': return 'Scissors';
        default: return null;
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);