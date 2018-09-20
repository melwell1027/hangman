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

var guessesRemaining = 10;
var wins = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var currentWordText = document.getElementById("currentword-text");
var guessesRemainingText = document.getElementById("guessesRemaining");
var guessesText = document.getElementById("guesses");
var winsText = document.getElementById("winsText");


// choose random word
var computerWord = words[Math.floor(Math.random() * words.length)];
console.log(computerWord);

var splitWord = computerWord.split('');    


var asterisk = []




for(var i = 0; i < splitWord.length; i++){
    asterisk[i] = "* ";
}

if (guessesRemaining === -1){
    alert("You Lose!");
}

// check to see if user user guess is a letter in the computer word

function letterCheck () {
    var userGuess = event.key.toUpperCase();
    for (i = 0; i < splitWord.length; i++){
        if (userGuess === splitWord[i]){
            console.log("hello"); // replace matched characters
            asterisk[i] = splitWord[i];
        }
    }
}


function reduceGuesses(){
// for (i = 0; i < guessesRemaining.length; i--);
    guessesRemaining--;
    if (guessesRemaining === 0){
        alert("You lose!");
    }
}


// create a variable to store user input
document.onkeyup = function(event){
    pressAny.innerHTML = "<br>";
    
    
    
    
    // check to see if letter exists in array
    
    letterCheck();
    reduceGuesses();
    
    
    
    
    // create variable for guesses remaining
    
    
    
    
    
    // Display the randomly chosen word on screen
    guessesText.textContent += (event.key + " ");
    currentWordText.textContent = asterisk.join("");
    guessesRemainingText.textContent = guessesRemaining;
    winsText.textContent = wins;
}




 
// Reduce guesses by one per guess

// When word is filled in increase wins by 1

// Reduce guesses by 1 when guess is incorrect

// Alert

