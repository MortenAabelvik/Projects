'use strict';

let activePlayer = 0
let sum = 0
let playing = true

function rollDice() {
    return Math.floor(Math.random()*6 + 1);
}

let playerPath = function(path, player) {
    return document.querySelector(`${path}${player}`)
}

const switchPlayer = function () {
    playerPath("#current--",activePlayer).textContent = 0
    playerPath(".player--",activePlayer).classList.remove('player--active')
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerPath(".player--",activePlayer).classList.add('player--active')
    sum = 0
}

document.querySelector('.btn--roll').addEventListener(
    'click', 
    function () {
        if (playing) {
            let roll = rollDice()
            document.querySelector('.dice').src = `dice-${roll}.png`

            if (roll === 1 ) {
                switchPlayer()
            }
            else {
                sum += roll;
                playerPath("#current--",activePlayer).textContent = sum;
            }
        }
    }
)

document.querySelector('.btn--hold').addEventListener(
    'click', 
    function () {
        if (playing) {
            playerPath("#score--",activePlayer).textContent = Number(playerPath("#score--",activePlayer).textContent) + sum
            if (Number(playerPath("#score--",activePlayer).textContent) >= 100) {
                playerPath(".player--",activePlayer).classList.add('player--winner');
                playing = false;
            }
            else {
                switchPlayer()
            }
        } 
    }
)

document.querySelector('.btn--new').addEventListener(
    'click', 
    function () {
        playerPath("#score--",0).textContent = "0";
        playerPath("#score--",1).textContent = "0";
        playerPath("#current--",0).textContent = "0";
        playerPath("#current--",1).textContent = "0";
        playerPath(".player--",activePlayer).classList.remove('player--winner');
        activePlayer = 0;
        sum = 0;
        playing = true;

        if (!playerPath(".player--",activePlayer).classList.contains('player--active')) {
            playerPath(".player--",1).classList.remove('player--active');
            playerPath(".player--",0).classList.add('player--active');
        }
    }
)