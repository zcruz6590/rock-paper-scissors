//Title
console.log("Rock paper scissors game");

//variables
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let humanScore = 0, computerScore = 0;

//Game starts
playGame();

//computer choice
function getComputerChoice() {
    const value = ["rock", "paper", "scissors"];
    let choice = value[Math.floor(Math.random() * value.length)];
    return choice;
}

//checks if either one scores 5 points
function checkForWinner() {
    if (humanScore >= 5 || computerScore >= 5) {
        console.log("\nFINAL SCORE:\nPlayer: " + humanScore + "\nComputer: " + computerScore);
        if (humanScore > computerScore) {
            console.log('Player wins the game!');
        } else {
            console.log('Computer wins the game!');
        }
        // Disable buttons after the game ends
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

//plays the round after player and computer chooses an option
function playRound(human, computer) {
    console.log('Player chose ' + human + ' and computer chose ' + computer);
    if (human === computer) {
        console.log("It's a tie.");
    } else if (
        (human === 'rock' && computer === 'scissors') ||
        (human === 'scissors' && computer === 'paper') ||
        (human === 'paper' && computer === 'rock')
    ) {
        humanScore++;
        console.log('Player wins the round');
    } else {
        computerScore++;
        console.log('Computer wins the round');
    } 
    console.log('Score:\nPlayer: ' + humanScore + '\nComputer: ' + computerScore);
    checkForWinner()
}

//simulates the game
function playGame() {
    rock.addEventListener('click', () => playRound("rock", getComputerChoice()));
    paper.addEventListener('click', () => playRound("paper", getComputerChoice()));
    scissors.addEventListener('click', () => playRound("scissors", getComputerChoice()));
}    




