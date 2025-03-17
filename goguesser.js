
const difficulty = document.getElementById("difficulty");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const feedback = document.getElementById("feedback");
const levelInput = document.getElementById("level");

let maxNum = 10
let randomNumber = Math.floor(Math.random() * maxNum) + 1

function setDifficulty() {
    if (difficulty.value === "easiest") {
        maxNum = 10;
    }
    else if (difficulty.value === "easy") {
        maxNum = 50;
    }
    else if (difficulty.value === "inter") {
        maxNum = 100;
    }
    else if (difficulty.value === "hard") {
        maxNum = 500;
    }
    else if (difficulty.value === "expert") {
        maxNum = 1000;
    }
    else if (difficulty.value === "impos") {
        maxNum = 2000;
    }
    randomNumber = Math.floor(Math.random() * maxNum) + 1
    feedback.textContent = "New difficulty selected"
    feedback.style.color = "blue"
}  

difficulty.addEventListener('change', setDifficulty);

guessButton.addEventListener("click", function () {
    let userguess = Number(guessInput.value);
    // let randomNumber = 50;
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
        feedback.textContent = "Correct! Refresh or select a different difficulty to play again."
        feedback.style.color = "green"
    }
});
        // if (prompt = "NXT") {
        //     levelInput.textContent = "You are now on Level 2 (1-1000)."
        //     let randomNumber = Math.floor(Math.random() * 1000) + 1
        //     if (userGuess > 100 || guessInput < 0) {
        //         feedback.textContent = "Out of range! Make sure it's between 1 and 1000."
        //         feedback.style.color = "red";
        //    }
        //     } else if (userGuess > randomNumber) {
        //         feedback.textContent = "Too high!";
        //         feedback.style.color = "red";
        //     } else if (userGuess < randomNumber) {
        //         feedback.textContent = "Too low!"
        //         feedback.style.color = "red";
        //     } else {
        //         prompt("You got it correct! Would you like to go back to Level 1 (BCK) or play this one (STAY)?")
        //         if (prompt = "BCK") {
        //             levelInput.textContent = "Welcome back to level 1! Guess the number (1-100):"
        //             if (userGuess > 100 || guessInput < 0) {
        //                 feedback.textContent = "Out of range! Make sure it's between 1 and 100."
        //                 feedback.style.color = "red";
        //             } else if (userGuess > randomNumber) {
        //                 feedback.textContent = "Too high!";
        //                 feedback.style.color = "red";
        //             } else if (userGuess < randomNumber) {
        //                 feedback.textContent = "Too low!"
        //                 feedback.style.color = "red";
        //             } else {
        //                 prompt("You got it correct! Would you like to advance to the next level (NXT) or play this one (1)?")
        //         }
        //     }
        //     }
        //         if (prompt = "STAY") {
        //             let randomNumber = Math.floor(Math.random() * 1000) + 1
        //             levelInput.textContent = "You're still on level 2 Guess the number (1-1000):"
        //             if (userGuess > 100 || guessInput < 0) {
        //                 feedback.textContent = "Out of range! Make sure it's between 1 and 1000."
        //                 feedback.style.color = "red";
        //             } else if (userGuess > randomNumber) {
        //                 feedback.textContent = "Too high!";
        //                 feedback.style.color = "red";
        //             } else if (userGuess < randomNumber) {
        //                 feedback.textContent = "Too low!"
        //                 feedback.style.color = "red";
        //             } else {
        //                 prompt("You got it correct! Would you like to advance to the next level (NXT) or play this one (1)?")
        //         }
        //     }
        // else if (prompt = "1") {
        //     levelInput.textContent = "You are still on Level 1"
        // }   let userGuess = Number(guessInput.value);
        // // let randomNumber = 50;
        // console.log("userGuess, randomnumber", userGuess, randomNumber)
    
        // if (userGuess > 100 || guessInput < 0) {
        //     feedback.textContent = "Out of range! Make sure it's between 1 and 100."
        //     feedback.style.color = "red";
        // } else if (userGuess > randomNumber) {
        //     feedback.textContent = "Too high!";
        //     feedback.style.color = "red";
        // } else if (userGuess < randomNumber) {
        //     feedback.textContent = "Too low!"
        //     feedback.style.color = "red";
        // } else {
        //     prompt("You got it correct! Would you like to advance to the next level (NXT) or play this one (1)?")
        // feedback.style.color = "green";
        
        // }
