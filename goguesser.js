
const difficulty = document.getElementById("difficulty");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const feedback = document.getElementById("feedback");
const levelInput = document.getElementById("level");
const kaChing = new Audio('snd/kaching.mp3');
const tries = document.getElementById("tries")

let maxNum = 10
let randomNumber = Math.floor(Math.random() * maxNum) + 1
let maxTry = 10
let curTry = maxTry
let userguess = 0

function setDifficulty() {
    if (difficulty.value === "easiest") {
        maxNum = 10;
    }
    else if (difficulty.value === "easy") {
        maxNum = 50;
        maxTry = 15;
    }
    else if (difficulty.value === "inter") {
        maxNum = 100;
        maxTry = 25;
    }
    else if (difficulty.value === "hard") {
        maxNum = 500;
        maxTry = 30;
    }
    else if (difficulty.value === "expert") {
        maxNum = 1000;
        maxTry = 50;
    }
    else if (difficulty.value === "impos") {
        maxNum = 2000;
        maxTry = 55;
    }
    randomNumber = Math.floor(Math.random() * maxNum) + 1
    feedback.textContent = "New difficulty selected"
    feedback.style.color = "blue"
}  

function compareGuess() {
    let userguess = Number(guessInput.value);
    console.log("userGuess, randomnumber", userguess, randomNumber)
    if (userguess > maxNum || userguess < 0) {
        feedback.textContent = "Out of range! Make sure it's between 1 and " + maxNum + "."
        feedback.style.color = "red";
    } else if (userguess > randomNumber) {
        feedback.textContent = "Too high!";
        feedback.style.color = "red";
    } else if (userguess < randomNumber) {
        feedback.textContent = "Too low!"
        feedback.style.color = "red";
    } else {
        guessButton.disabled = true;
        feedback.textContent = "Correct! Refreshing in 5 seconds"
        feedback.style.color = "green"
        // kaChing.play();
        //     setTimeout(function() {
        //         location.reload(true)
        //     }, 5000 );
        // } 
    }
    curTry -= 1
    tries.textContent = (-(curTry - maxTry)) + " try/tries used up! " + curTry + " try/tries left!"
    tries.style.color = "green"
    if (curTry <= 3) {
        tries.style.color = "red"
    }
    if (curTry === 0) {
        guessButton.disabled = true;
        tries.textContent = "Sorry, you didn't make it. Refreshing in 5 seconds"
        setTimeout(function() {
            location.reload(true)
        }, 5000 );
    }
}


difficulty.addEventListener('change', setDifficulty);
guessButton.addEventListener('click', compareGuess);

if (userguess === randomNumber || curTry === 0) {
    guessButton.removeEventListener("click", compareGuess)
} 
// If we win or the guesses = 0, 
// Turn off compareGuess
// wait 5 seconds
// refresh
// EXEC

