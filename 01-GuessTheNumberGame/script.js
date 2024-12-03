// Generate a random number between 1 and 100
let randomNumber =Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); //just if you want to know answer check console

let attempts = 0;

const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-guess');
const feedback = document.getElementById('feedback');
const restartButton = document.getElementById('restart-game');

// Function to handle user guess
function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(userGuess)) {
        feedback.textContent = "Please enter a valid number!";
    } else if(userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please guess a number between 1 and 100!";
    } else if(userGuess < randomNumber) {
        feedback.textContent = "Too low, Try again!";
    } else if(userGuess > randomNumber) {
        feedback.textContent = "Too high, Try again!";
    } else {
        feedback.textContent = `Correct! you guessed it in ${attempts} attempts :)`;
        endGame();
    }
}

// Function to handle game end
function endGame() {
    guessInput.disabled = true;
    submitButton.disabled = true;
    restartButton.classList.remove('hidden');
}

// Function to restart the game
function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber); // just if you want to know answer check console
    attempts = 0;
    guessInput.value = '';
    feedback.textContent = 'Start guessing...';
    guessInput.disabled = false;
    submitButton.disabled = false;
    restartButton.classList.add('hidden');
}

// Event Listeners
submitButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', restartGame);