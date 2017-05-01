var prompt = require('prompt-sync')();

function getUserChoice() {
  var userInput = prompt("Choose from rock, paper or scissors: ");
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock') {
    return userInput;
  } else if (userInput === 'paper') {
    return userInput;
  } else if (userInput === 'scissors') {
    return userInput;
  } else if (userInput === 'bomb') {
    return userInput;
  } else {
    console.log ('Sorry, I did not understand your choice. Make sure to only type one of the given options.');
  }
}

function getComputerChoice() {
  var choice = Math.floor(Math.random() * 3);
  var choices = ['rock', 'paper', 'scissors'];
  
  return choices[choice];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Tie! You both win!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'You win!';
    } else {
      return 'The computer wins!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You win!';
    } else {
      return 'The computer wins!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You win!';
    } else {
      return 'The computer wins!';
    }
  } else if (userChoice === 'bomb') {
    return 'You win!';
  }
}

function playGame() {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  
  if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    console.log('You chose ' + userChoice + ' and the computer chose ' + computerChoice + '.');
  } else if (userChoice === 'bomb') {
  	
	}
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();