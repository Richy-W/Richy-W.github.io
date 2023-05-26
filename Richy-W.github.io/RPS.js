const compChoiceDisplay = document.getElementById('comp-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultsDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
const CountW = document.getElementById('wins');
const CountL = document.getElementById('lose');
const GetDraw = document.getElementById('draw');
let userChoice;
let compChoice;
let result;
var winCount = 0;
var loseCount = 0;
var drawCount = 0;

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateCompChoice()
    getResult()
}))

function generateCompChoice() {
    const randoNumb = Math.floor(Math.random() * 3) + 1

    if (randoNumb === 1) {
        compChoice = 'Rock';
    }
    
    if (randoNumb === 2) {
        compChoice = 'Paper';
    }
    
    if (randoNumb === 3) {
        compChoice = 'Scissors';
    }

    compChoiceDisplay.innerHTML = compChoice;

}

function getResult() {


    if(compChoice === userChoice) {
    result = 'Draw!';
    drawCount ++;
    };

    if(compChoice === 'Rock' && userChoice === 'Scissors') {
    result = 'You Lose!';
    loseCount ++;
    };

    if(compChoice === 'Scissors' && userChoice === 'Paper') {
    result = 'You Lose!';
    loseCount ++;
    };

    if(compChoice === 'Paper' && userChoice === 'Rock') {
    result = 'You Lose!';
    loseCount ++;
    };

    if(compChoice === 'Rock' && userChoice === 'Paper') {
    result = 'You Win!';
    winCount ++;
    }

    if(compChoice === 'Scissors' && userChoice === 'Rock') {
    result = 'You Win!';
    winCount ++;
    };

    if(compChoice === 'Paper' && userChoice === 'Scissors') {
    result = 'You Win!';
    winCount ++;
    };

    resultsDisplay.innerHTML = result;
    CountW.innerHTML = winCount;
    CountL.innerHTML = loseCount;
    GetDraw.innerHTML = drawCount;
    
}
