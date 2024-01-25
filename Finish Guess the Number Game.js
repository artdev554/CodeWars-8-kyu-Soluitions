class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if(!this.lives) {
      throw new Error('Expect error already dead!')
      return false;
    } else if(n === this.number){
      return true
    } else {
      this.lives -= 1;
      return false;
    }
  }
}
