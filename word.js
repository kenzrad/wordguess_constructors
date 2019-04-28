var Letter = require('./letter');
var chalk = require('chalk');

class Word {
  constructor(word) {
    this.letters = [];
    word.split('').forEach((chars) => {
      this.letters.push(new Letter(chars));
    });
  }

  printWord() {
    var word = [];
      
    this.letters.forEach(function(letter) {
      word.push(letter.displayed());
    });

    console.log(`  
    ${chalk.yellow.bold(word.join(' '))}
    `);

  }

  guess(char) {
    this.letters.forEach(function(answer) {
      answer.guess(char);
    });

    this.printWord();
  }

  guessedCorrectly() {
    return this.letters.every(function(letter) {
      return letter.isVisible;
    });
  }
}

module.exports = Word;
