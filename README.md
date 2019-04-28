# wordguess_constructors
Constructor Wordguess is a command-line game that uses consructor functions

## Overview

![Word Guess Cli](/readMe/game.gif)


## Node Packages

1. `inquirer` - used to prompt the user for a letter guess

2. `chalk` - used to stylize the output


## JS Files

* **Letter.js**: Contains a constructor, Letter. This constructor will display an underlying character or a blank placeholder (underscore), depending on whether or not the user has guessed the letter. 

* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. 

* **index.js**: Contains the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it
  * Prompts the user for each guess and keeps track of the user's remaining guesses
