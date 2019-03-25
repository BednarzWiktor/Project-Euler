// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

'use strict'

const input = 20;

// If a number needs to be divided by a consecutive sequence starting from 1 up to some natural number,
// then we need only to divide by higher half of the set, other operations are redundant
//
// return array of consecutive divisors
const consecutiveDivisors = (limit) => {
  const adjusted = limit%2===0 ? limit/2+1 : limit/2+.5;
  let output = [];
  for (let i=adjusted; i<=limit; i++) {
    output.push(i)
  }
  return output
}

// Check if all items of provided sequence are even divisors of tested number
//
// return boolean
const checkDivisions = (divisors, number) => {
  const orgLength = divisors.length,
        filtered = divisors.filter((divisor) => number%divisor===0).length;

  return filtered===orgLength ? true : false;
}

// check every number from limit up, with the interval of limit
const main = (limit) => {
  let i = limit
  while (!checkDivisions(consecutiveDivisors(limit), i)) {
    i+=limit;
  }
  return i
}

console.log(main(input));
