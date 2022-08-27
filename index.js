function hasTargetSum(array, target) {
  const seenNumbers = new Set(); 
  for (const number of array) {
    const complement = target - number;

    
    if (seenNumbers.has(complement)) return true;

    
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  runtime: 0(n^2)
  space: o(n)
*/

/* 
  Add your pseudocode here
  iterate through the array using for loop
  for each of the current value idenitify a compliment that will add to the target
  iterate through the remaining numbers 
  check for compliment
  return true or false 
*/

/*
  Add written explanation of your solution here
  iterate through the array using for loop
  for each of the current value idenitify a compliment that will add to the target
  iterate through the remaining numbers 
  check for compliment
  return true or false 
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
