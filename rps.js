function getComputerChoice() {
    // Get random number between 0-2 and return the result as a string
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
        default: return "Rock";
    }
}

console.log(getComputerChoice());