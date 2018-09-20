// list all possible answers
var words = [
    "CHICAGO",
    "DETROIT",
    "CLEVELAND",
    "PITTSBURGH",
    "COLUMBUS",
    "BUFFALO",
    "PHILADELPHIA",
    "BOSTON",
    "NASHVILLE",
    "INDIANAPOLIS"
];

// var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessesRemaining = 0;
console.log("gr", guessesRemaining);
var wins = 0;
var userGuess = "";
var asterisk = [];
var splitWord = [];
var guessedLetters = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var currentWordText = document.getElementById("currentword-text");
var guessesRemainingText = document.getElementById("guessesRemaining");
var guessesText = document.getElementById("guesses");
var winsText = document.getElementById("winsText");

function startGame(){
    // choose random word
    var computerWord = words[Math.floor(Math.random() * words.length)];
    console.log(computerWord);
    
    splitWord = computerWord.split('');    
    
    guessesRemaining = 2;
    asterisk = [];
    guessedLetters = [];
    guessesText.textContent = "";
    
    for(var i = 0; i < splitWord.length; i++){
        asterisk[i] = "* ";
    }
    
}

// check to see if user user guess is a letter in the computer word

function checkGuessedArray() {
    console.log("uG in CGA", userGuess);
    if (guessedLetters.indexOf(userGuess) === -1) {
        guessedLetters.push(userGuess);
        guessesText.textContent += (userGuess + " ");
        console.log("gl", guessedLetters);
        letterCheck();
    } else {
        alert("You have already guessed this letter. Try again!");
    }
}

function letterCheck() {
    if (splitWord.indexOf(userGuess) === -1) {
        guessesRemaining--;
        if (guessesRemaining === -1) {
            alert("You Lose!");
            startGame();
        }
    } else {
        for (i = 0; i < splitWord.length; i++) {
            if (userGuess === splitWord[i]) {
                console.log("hello"); // replace matched characters
                asterisk[i] = splitWord[i];
                console.log(splitWord.join(""), asterisk.join(""));
                if (splitWord.join("") == asterisk.join("")){
                    console.log("in wins");
                    wins++;
                    alert("You win!");
                    startGame();
                }
            }
        }
    }
}
startGame();    
    // create a variable to store user input
    document.onkeyup = function(event){
        pressAny.innerHTML = "<br>";
        userGuess = event.key.toUpperCase();
        console.log("userGuess", userGuess);
    
    // check to see if letter exists in array
    checkGuessedArray();
    //letterCheck();
    
    
    // create variable for guesses remaining
    
    // Display the randomly chosen word on screen
    currentWordText.textContent = asterisk.join("");
    guessesRemainingText.textContent = guessesRemaining;
    winsText.textContent = wins;
}

 
// Reduce guesses by one per guess

// When word is filled in increase wins by 1

// Reduce guesses by 1 when guess is incorrect

// Alert

