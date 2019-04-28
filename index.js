var inquirer = require('inquirer');
var chalk = require('chalk');
var Word = require('./word');

var words = ['Adenine', 'Guanine', 'Helicase', 'Phosphate', 'Sulphate Bond', 'Gene']
var randWord = words[Math.floor(Math.random() * words.length)];
var word = new Word(randWord);
var guessesLeft = 6;
var letterBank = [];

function initialPrint() {
  var displayWord = [];
  for (var i = 0; i < randWord.length; i++) { 
    if(randWord[i] === " ") {
      displayWord.push(" ");
    }
    else {
      displayWord.push("_");
    }
  };

  console.log(`  
    ${chalk.yellow.bold(displayWord.join(" "))}
  `);

}

function checkWord(answer) {
  for(i=0; i<randWord.length; i++) {
    if(randWord[i].toLowerCase() === answer.letter.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function checkLetterBank(answer) {
  for(i=0; i<letterBank.length; i++) {
    if(letterBank[i] === answer.letter) {
      return true;
    }
  }
  letterBank.push(answer.letter)
  return false;
}

function play() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'letter',
      message: 'Guess a letter!'
    }
  ])
  .then(function(answer) {

    if(checkLetterBank(answer) === true) {
      console.log(`
      ${chalk.red.bold("You already tried that letter!")}
      `);
      play();
      return;
    }
    
    word.guess(answer.letter);

    if (checkWord(answer) === false) {
      guessesLeft --;
      console.log(`
      ${chalk.red('Newp! You have ')}${chalk.yellow.bold(guessesLeft)}${chalk.red(' guesses left!')}
      `);
    }
    else {
      console.log(`
        CORRECT!!!!
      `)

    };


    if (word.guessedCorrectly() === false && guessesLeft > 0) {
      play();
    }
    else if (guessesLeft === 0){
      console.log(`${chalk.yellow("Game Over! The word was ")} ${chalk.green.bold(randWord)}`) 
    }
    else {
      console.log(`${chalk.green.bold("You win!!!")}`);
    }
  });
}

initialPrint();
play();

