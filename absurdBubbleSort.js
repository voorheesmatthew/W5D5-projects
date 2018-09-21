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
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        console.log("mAs = true");
        console.log(arr);
        madeAnySwaps = true;
      } 
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    return outerBubbleSortLoop(madeAnySwaps);
  } 
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      console.log(arr + "inside if!");
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      console.log(arr + "inside else");
      sortCompletionCallback(arr);
    }
  }
  
  outerBubbleSortLoop(madeAnySwaps = true);
}

absurdBubbleSort([3, 2, 1, 6, 4, 5], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});