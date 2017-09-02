

    // Create an array that holds the alaphabet letters that the user will guess
    var alphaLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Declare and initialize the variables: wins, losses, and guesses left in the round)
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// Create an array that holds the user's guesses so far
var guessesSoFar = []

// Make a random choice from the array of alphabet letters. The random choice is the computer's pick.
var computerPick = alphaLetters[Math.floor(Math.random() * alphaLetters.length)];

// This is the function that detects events and runs whenever the user presses a key.
document.onkeyup = function(event) {

    // Determine which key was pressed by the user
    var userGuess = event.key;

    // Add the user's guesses to the array that holds the user's guesses so far
    guessesSoFar.push(userGuess)


    // console.log info here to check progress

    // This logic determines the outcome of each round:
    // If the user's guess matches the computer pick, then add a point for wins and reset the guesses left to 10.
    if (userGuess === computerPick) {
        wins++;
        guessesLeft-- && guessesLeft > 0;
    }
    // If the user's guess does not match the computer pick, then add a point to losses (max 10), and subtract a point from the number of guesses left.
    else if {
        losses++;
        guessesLeft-- && guessesLeft > 0;
    } 

    else (guessesLeft === 0) {
    guessesLeft = 10;
    guessesSoFar = [];

}

// Create a variable to hold the HTML that displays and keeps track of the user's wins, losses, and guesses left
var html =

    "<p>Wins: " + wins + "</p>"
	"<p><Losses: " + losses + "</p>"
	"<p>Guesses Left: " + guessesLeft + "</p>"
	"<p>Your Guesses So Far: " + guessesSoFar + "</p>"

// Set the inner HTML contents of the #guessing-game div to our html string
document.querySelector("#results").innerHTML = html;

