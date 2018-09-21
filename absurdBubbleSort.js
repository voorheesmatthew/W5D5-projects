const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question (`Is ${el1} > ${el2}?`, function(answer) {
    const yesNo = answer;
  
    return (yesNo === "yes") ? callback(true) : callback(false);
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan === true) {
        console.log("We are here!");
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
        // innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      } else {
        console.log("We are there?");
        madeAnySwaps = false;
        // innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }   
  // return arr; ????
}


innerBubbleSortLoop([1, 3, 2, 5, 4], 0, false, function(callback) {
  console.log(`Your answer is: ${callback}`);
  reader.close();
});