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
	// returns the difference
	return playersGuess - winningNumber;
}

// Construct a message letting the player know how far off they are

function guessMessage() {
	var difference = lowerOrHigher();
	var message = {};

	message.strength = "Your invocation is too " + ((difference < 0) ? "weak" : "strong") + ".";
	difference = Math.abs(difference);

	if (difference > 20) {
		message.distance = "That was so far off it banished some other unrelated elder beast!";
	} else if (difference > 10){
		message.distance = "You have banished...an innocent squid...";
	} else if (difference > 5) {
		message.distance = "That one was actually close!";
	} else {
		message.distance = "The Octowl feels fear for the first time in its existence!";
	}

	return message;
}

// Check if the Player's Guess is the winning number

function checkGuess(){
	var message;
	if (playersGuess === winningNumber) {
		playerWins();
	} else {
		message = guessMessage();
		if ($.inArray(playersGuess, previousGuesses) == -1) {
			previousGuesses.push(playersGuess);
		} else {
			message.distance = "The Octowl is amused as you repeat yourself in desperation"
		}
		wrongGuess(message);
	}
}

// The palyer has won the game (animation)

function playerWins() {
	//reset opacity
	$('body').removeClass('level-'+previousGuesses.length)
					 .addClass('level-0');
	//fadeout extra controls
	$('h2, .guess-controls, #reset, #hint').fadeOut(600, function(){
		//fadeout heading
		$('h1').fadeOut(600, function(){
			//change heading to win message
			$(this).text('The Ancient Octowl\n' +
			'has been banished to the ocean depths\n' +
			'There it shall slumber for a thousand years, ' +
			'dreaming of a new number that will end the world');
			$(this).html($(this).html().replace(/\n/g, '<br/>'));
			//fadein heading
			$(this).fadeIn(600, function(){
				//change text on play again button and fadein
				$('#reset').text('Battle Again!').fadeIn();
			});
		});
	});
}

// The player guessed wrong (animation)

function wrongGuess(message) {
	$('#strength').fadeOut(100, function(){
		$(this).text(message.strength).fadeIn(100);
	});
	$('#mockery').fadeOut(100, function(){
		$(this).text(message.distance).fadeIn(100);
	});
	$('body').addClass('level-'+previousGuesses.length)
					 .removeClass('level-'+(previousGuesses.length - 1));
	$('#counter').text('' + 5 - previousGuesses.length + ' More Attempts Until The Octowl Awakens')
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
