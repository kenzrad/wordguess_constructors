class Letter {
  constructor(char) {
    this.char = char;
    this.isVisible = false;
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
    }
  }
}

module.exports = Letter;
