console.log("Helloooo Warudo");

const value = ["rock", "paper", "scissors"];

//plays 5 games of rock paper scissors
playGame()

function getComputerChoice() {
    let choice = value[Math.floor(Math.random() * value.length)]
    return choice
}



function playGame() {
    let humanScore = 0, computerScore = 0

    while(humanScore < 5 && computerScore < 5) {

    }
       
        function playRound(human, computer) {
            console.log('You chose ' + human + ' and computer chose ' + computer)
            if (human == computer) {
                console.log("It's a tie.") // human and computer have the same choices
            } else if (human == 'rock' && computer == 'scissors' ||
                human == 'scissors' && computer == 'paper' ||
                human == 'paper' && computer == 'rock') {
                humanScore++
                console.log('You Win!') //human beats computer
            } else { //human loses to computer
                computer++
                console.log('You Lose!')
            } 
        }
    
    console.log("Score:\nYou: " + humanScore + "\nComputer: " + computerScore)
}

