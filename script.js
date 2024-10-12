console.log("Helloooo Warudo");

const value = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = value[Math.floor(Math.random() * value.length)]
    return choice
}

function getHumanChoice() {
    let choice = prompt('Rock, Paper, Scissors:')
    if (value.includes(choice.toLowerCase())) {
        return choice.toLowerCase()
    } else {getHumanChoice()}
}

let humanScore = 0, computerScore = 0

function playRound(humanChoice, computerChoice) {
    console.log('You chose ' + humanChoice + ' and computer chose ' + computerChoice)
    if (humanChoice == computerChoice) {
        console.log("It's a tie.") // human and computer have the same choices
    } else if (humanChoice == 'rock' && computerChoice == 'scissors' ||
        humanChoice == 'scissors' && computerChoice == 'paper' ||
        humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You Win!') //human beats computer
    } else {console.log('You Lose!')} //human loses to computer
}

const computer = getComputerChoice();
const human = getHumanChoice();

playRound(human, computer);