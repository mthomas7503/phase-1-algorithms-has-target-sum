function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for(let j =i + 1; j < array.length; j++){
      let sum = array[i] + array[j]
      if (sum === target) {return true};
      }
  }
  return false
}

/* 
  O(n^2)
*/

/* 
The function will take and array and a target value
  It will compare the sum of any two numbers in the array against the target valuee
    if they match, return true
*/

/*
  As we are needing to run through the array and need to compare every value against the others, we need to create a loop within a loop with the first loop starting the iteration through the array and grabbing one element and the second loop grabbing another element in the array. and so on
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
