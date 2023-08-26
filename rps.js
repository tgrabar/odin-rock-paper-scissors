// global counters for win/lose/tie
let gamesWon = 0;
let gamesLost = 0;
let gamesTied = 0;

game();

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
        // return undefined for invalid selection, to be checked in game() function
        default: {
            alert('Invalid selection. Please enter rock, paper, or scissors.');
            return;
        }
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

    return result;
}

function game() {
    // play 5 rounds; ties count as a round
    for(let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
        let playerSelection;
        // get player input, prompt again until valid
        while (playerSelection === undefined) {
            playerSelection =  getPlayerChoice();
        }

        console.log(playRound(playerSelection, getComputerChoice()));
    }
    // display final results
    if(gamesWon === gamesLost)
        console.log('Final result: It\'s a tie!');
    else if (gamesWon < gamesLost)
        console.log('Final result: You lose!');
    else
        console.log('You win!');

    console.log('Player: ' + gamesWon + ', Opponent: ' + gamesLost + ', Ties: '+ gamesTied);
}