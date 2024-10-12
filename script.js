console.log("Helloooo Warudo");

const value = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = value[Math.floor(Math.random() * value.length)]
    return console.log(choice)
}

function getHumanChoice() {
    let choice = prompt('Rock, Paper, Scissors:')
    if (value.includes(choice.toLowerCase())) {
        return console.log(choice.toLowerCase())
    } else {getHumanChoice()}
}


getComputerChoice()
