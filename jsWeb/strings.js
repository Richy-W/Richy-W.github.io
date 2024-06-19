"use strict";
/*-----------------------------------------------
Filename: strings.js
DATE: 04/28/2024
Author: Richard Wren
---------------------------------------------- */

const words = ["game", "mark", "point", "time"];

let selectedWord, wordLen, hiddenW, remainingL;


function initializeGame () {
    const randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex];
    wordLen = selectedWord.length;
    hiddenW = "*".repeat(wordLen);
    remainingL = wordLen;
    displayHiddenW();
}

function displayHiddenW() {
    document.getElementById("hiddenW").innerText = hiddenW;
}

function guessLetter() {
    event.preventDefault();
    let guess = document.getElementById("guessL").value.toLowerCase();
    document.getElementById("guessL").value = "";


    if(!guess){
        alert("guess a letter.");
        return;
    }
    else{
        let newHidden = "";
        let letterFound = false;

        for(let i = 0; i < wordLen; i++) {
            if (selectedWord[i] === guess) {
                newHidden += guess;
                remainingL--;
                letterFound = true;
            }
            else {
                newHidden += hiddenW[i];
            }
        }

        hiddenW = newHidden;
        displayHiddenW();

        if (remainingL === 0) {
            alert("Congratulaions You Win!!");
        }
    }
}

    window.onload = function (){
        initializeGame();
    };
try {
    let subbtn = document.getElementById("guessB");
    subbtn.addEventListener('click', guessLetter);
}
catch(e) {
    console.log("error" + e);
}
