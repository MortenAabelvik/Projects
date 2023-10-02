'use strict';

function getCorNum(max = 20, min = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function displayMessage(message) {
    document.querySelector('.message').textContent = message
}

let correctNumber = getCorNum();
let score = 20;
let finished = 0;

document.querySelector('.check').addEventListener(
    'click', 
    function () {
        const guess = Number(document.querySelector('.guess').value)

        if (!guess) {
            displayMessage("Insert a number 😍");
        }
        else if (guess > 20 || guess < 1) {
            displayMessage("⚡ Remeber that a guess must be between 1 and 20 🔥");  
        }
        else {
            if (guess === correctNumber) {
                if (finished === 1) {
                    displayMessage("You have already guessed correctly 👸 Click the Again button to play again"); 
                }
                else {
                    finished = 1
                    let highScore = document.querySelector('.highscore').textContent;
    
                    displayMessage("Correct guess!! 👸");
                    document.querySelector('.number').textContent = correctNumber;
                    document.querySelector('.score').textContent = score;
                    document.querySelector('body').style.backgroundColor = '#60b347';
                    document.querySelector('.number').style.width = '30rem';
                    
                    if (score > highScore) {
                        document.querySelector('.highscore').textContent = score;
                    }
                }   
            }
            else {
                score--; 
                displayMessage(guess > correctNumber ?  "Guess to high 😆": "Guess to low 😲");
            }
        }
    }
);

document.querySelector('.again').addEventListener(
    'click', 
    function () {
        correctNumber = getCorNum();
        score = 20
        finished = 0

        displayMessage("Start guessing...");
        document.querySelector('.number').textContent = "?";
        document.querySelector('.score').textContent = 20;
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    }
);