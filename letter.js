class Letter {
  constructor(char) {
    this.char = char;
    if (char === " ") {
      this.isVisible = true
    }
    else {
      this.isVisible = false;
    }
  }

  displayed() {
    if (this.isVisible) {
      return this.char;
    } else {
      return "_";
    } 
  }
  
  guess(answer) {
    if (this.char.toLowerCase() === answer.toLowerCase()) {
      this.isVisible = true;
      // letterGuessed();
    }

  }

  leterGuessed() {
    var letterGuessed = true;
    return letterGuessed;
  }
}

module.exports = Letter;