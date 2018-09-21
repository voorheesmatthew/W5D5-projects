const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('Give us a number?' , function(numString){
      const answer = parseInt(numString);
      sum += answer;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    return completionCallback(sum);
  }
}

addNumbers(0, 5, function(sum) {
  console.log(`The sum is ${sum}!`);
  reader.close();
});