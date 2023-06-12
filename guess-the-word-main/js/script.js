const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const inputLetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        // console.log(letter)
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
} 

placeholder(word);

guessLetterButton.addEventListener("click", function (event) {
    event.preventDefault();
    const guess = inputLetter.value;
    // console.log(guess);
    inputLetter.value = "";
    message.innerText = "";
    const goodGuess = checkInput(guess);
    console.log(goodGuess);
    if (goodGuess) {
        makeGuess(goodGuess);
    }
})


const checkInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;  
    if (input.length === 0) {
        message.innerText = "Please enter a letter";
    } else if (input.length > 1) {
        message.innerText = "Please only enter one letter";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a normal letter!";
    } else {
        return input;
    }      
}

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You've already guessed that one bub!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
}

const showGuessedLetters = function () {
 guessedLettersElement.innerHTML = "";
    guessedLetters.createElement("li");
}