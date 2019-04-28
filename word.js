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
      ${chalk.blue(word.join(' '))}
    `);

  }

  guess(char) {
    this.letters.forEach(function(answer) {
      answer.guess(char);
    });

    this.printWord();

    // if(this.letters.indexOf({ char }) !== -1) {
    //   letterGuessed = true;
    //   console.log("Correct!");
    //   return letterGuessed;
    // }
  }

  guessedCorrectly() {
    return this.letters.every(function(letter) {
      return letter.isVisible;
    });
  }

  // letterGuessed() {
  //   return 
  // }

}

module.exports = Word;
