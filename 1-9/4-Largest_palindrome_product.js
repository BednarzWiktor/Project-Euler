// Find the largest palindrome made from the product of two multiplied 3-digit numbers
'use strict'

console.time('euler'); // initialise timer

// Create reversed string
const reverse = (string) => {
  let output = '';
  for (let i=string.length-1; i>=0; i--) {
   output+=string[i];
  }
  return output;
}

// Check if number is palindrome
const isPalindrome = (num) => {
  let string = num.toString(10);
  let reversed = reverse(string);
  return string===reversed ? true : false
}

// Double loop through all 3-digit numbers and return highest found palindrome of two multiplied 3-digit numbers
//
// Subject to optimisation - too many redundant operations
// Main function could be optimised to terminate when the length of parsed product is lower than cached palindrome.
const main = () => {
  let cache = 0;
  for (let i=999; i>99; i--) {
    for (let j=999; j>99; j--) {
      if (isPalindrome(i*j)) {
        i*j>cache ? cache=i*j : cache=cache
      }
    }
  }
  return cache
}

console.log(main());
console.timeEnd('euler');
