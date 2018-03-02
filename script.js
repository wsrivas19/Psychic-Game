
// Define alphabet letters that computer can pick from
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Set the initial global variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// guessesSoFar is an array that will hold all the user's guesses in each round
var guessesSoFar = [ ];

// userGuess is what the user picks by pressing a key, null means it has no value
var userGuess = null;

// Have computer pick a letter and store it in letterGuessed
var letterGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterGuessed);


document.onkeyup = function(event) {

	// When user presses a key, it records it and saves to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Add the user's guess to guessesSoFar array but 
	// only if it wasn't already previously picked by the user
	// also make sure that the key user picks is within
	// the alphabet, and not any non-usable key
    
	if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
        
		// if it is a new letter then decrease remaining guesses by 1
		guessesLeft--;
	}

	// if letterGuessed is same as userGuess then record it as a win
	// and then reset guessesLeft to 9, and empty the guessesSoFar array
	// also have the computer make a new random pick
    
	if (letterGuessed == userGuess) {
		wins++;
		console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [ ];
		letterGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterGuessed);
	}

	// if guessesLeft gets to 0 then record it as a loss
	// and then reset guessesLeft to 9, and empty the guessesSoFar array
	// also have the computer make a new random pick
    
	if (guessesLeft == 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 9;
		guessesSoFar = [ ];
		letterGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far:  " + guessesSoFar + " Computer picked: " + letterGuessed);
	}

	// Displaying progress to HTML
    
	var html = "<h1>The Psychic Game</h1>" + "<h4>Guess what letter I\'m thinking of</h4>" + "<h4>Wins: " + wins + "</h4>" + "<h4>Losses: " + losses + "</h4>" + "<h4>Guesses Left: " + guessesLeft + "</h4>" + "<h4>Your guesses so far:  " + guessesSoFar + "</h4>";
	
    // place html into the game ID
	document.querySelector("#game").innerHTML = html;

}