// const readline = require('readline');
// 
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


class Game {
  constructor() {
    this.towers = [[3, 2, 1], [], []];
  }
  
  static promptMove(startTowerIdx, endTowerIdx) {
    // prints the stacks, 
    console.log(this.towers);
    // for (let i = 0; i < towers.length; i++) {
    //   console.log(this.towers[i] + '\n');
    // }
    // and (2) asks the user where 
    // they want to move a disc to/from.
  }
}

Game.promptMove();




// addNumbers(0, 5, function(sum) {
//   console.log(`The sum is ${sum}!`);
//   reader.close();
// });