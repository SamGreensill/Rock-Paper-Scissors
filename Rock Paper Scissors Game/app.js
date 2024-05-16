const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => 
    possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice(); 
        getResult();  
    })
);

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = 'rock';
    } else if (randomNumber === 1) {
        computerChoice = 'scissors';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    }

    computerChoiceDisplay.innerHTML = computerChoice; 
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
    } else if (
        (computerChoice === 'rock' && userChoice === 'paper') ||
        (computerChoice === 'paper' && userChoice === 'scissors') ||
        (computerChoice === 'scissors' && userChoice === 'rock')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    resultDisplay.innerHTML = result;
}