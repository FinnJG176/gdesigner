let randomNumber = Math.floor(Math.random() * 100) + 1

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton")
const feedback = document.getElementById("feedback")

guessButton.addEventListener("click", function () {
    let userGuess = Number(guessInput.value);
    console.log("userGuess, randomnumber", userGuess, randomNumber)

    if (userGuess > 100 || guessInput < 0) {
        feedback.textContent = "Out of range! Make sure it's between 1 and 100."
        feedback.style.color = "red";
    } else if (userGuess > randomNumber) {
        feedback.textContent = "Too high!";
        feedback.style.color = "red";
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Too low!"
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Exactly right! Refresh the page to play again."
        feedback.style.color = "green";
    }
});