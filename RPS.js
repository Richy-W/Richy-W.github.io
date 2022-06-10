const compChoiceDisplay = document.getElementById('comp-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultsDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let compChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateCompChoice()
    getResult()
}))

function generateCompChoice() {
    const randoNumb = Math.floor(Math.random() * 3) + 1

    if (randoNumb === 1) {
        compChoice = 'Rock'
    }
    
    if (randoNumb === 2) {
        compChoice = 'Paper'
    }
    
    if (randoNumb === 3) {
        compChoice = 'Scissors'
    }

    compChoiceDisplay.innerHTML = compChoice

}

function getResult() {
    if(compChoice === userChoice)
    result = 'Draw!'

    if(compChoice === 'Rock' && userChoice === 'Scissors')
    result = 'You Lose!'

    if(compChoice === 'Scissors' && userChoice === 'Paper')
    result = 'You Lose!'

    if(compChoice === 'Paper' && userChoice === 'Rock')
    result = 'You Lose!'

    if(compChoice === 'Rock' && userChoice === 'Paper')
    result = 'You Win!'

    if(compChoice === 'Scissors' && userChoice === 'Rock')
    result = 'You Win!'

    if(compChoice === 'Paper' && userChoice === 'Scissors')
    result = 'You Win!'

    resultsDisplay.innerHTML = result
}
