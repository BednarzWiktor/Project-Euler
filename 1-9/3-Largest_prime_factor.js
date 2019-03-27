// Find largest prime factor of a numbers
'use strict'

console.time('euler'); // initialise timer

const input = 600851475143;

// Test if number is prime
const isPrime = (num) => {
  for (let i=2; i<num; i++) {
        if (num%i===0) {
            return false;
        }
    }
  return num>1; // fix for case of 1
}

// Check each natural number factor starting from the largest one (num/2) down to the smallest factor
const main = (num) => {
  let i = 2;
  while (i<num/2) {
    if (num%i===0) {
      if (isPrime(num/i)) {
        return num/i;
        break
      }
    }
    i++;
  }
}

console.log(main(input));
console.timeEnd('euler');
