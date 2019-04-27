var inquirer = require('inquirer');
var chalk = require('chalk');
var Word = require('./word');

var words = ['Adenine', 'Guanine', 'Helicase', 'Phosphate', 'Sulphate Bond', 'Gene']
var randWord = words[Math.floor(Math.random() * words.length)];
var word = new Word(randWord);
var guessesLeft = 6;

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
    ${displayWord.join(" ")}
  `);

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
    word.guess(answer.letter);
    if (word.guessedCorrectly() === false) {
      play();
    }
    if (word.letterGuessed() === false) {
      guessesLeft --;
      console.log(`Guess left: ${guessesLeft}`);
    }
  });
}

initialPrint();
play();

