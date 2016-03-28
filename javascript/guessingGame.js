/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
		winningNumber

var previousGuesses = [];

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
  // Returns a random number between 1 - 100
	return Math.floor(Math.random() * 100 + 1);
}

// Fetch the Players Guess

function playersGuessSubmission(){
	var guess = $("#victim-guess");
	playersGuess = +guess.val();
	guess.val("");
	checkGuess();
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number

function checkGuess(){
	var message;
	if (playersGuess === winningNumber) {
		//player wins
		console.log("win!");
	} else {
		if ($.inArray(playersGuess, previousGuesses) == -1) {
			previousGuesses.push(playersGuess);
			message = "Your weak attempts are just making The Octowl angry"
		} else {
			message = "The Octowl is amused as you repeat yourself in desperation"
		}
		$('#mockery').text(message);
	}
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */
$(document).ready(function(){
	winningNumber = generateWinningNumber();
  $("#guess").click(playersGuessSubmission);
});
