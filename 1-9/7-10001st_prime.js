// What is the 10 001st prime number?
'use strict'

console.time('euler'); // initialise timer

const limit = 10001;

// Test if number is prime
const isPrime = (num) => {
  for (let i=2; i<num; i++) {
    if (num%i===0) {
        return false;
    }
  }
  return true;
}

// return nth prime: count numbers up to provided limit
const main = (limit) => {
  let counter=0,
      i=0;
  while (counter<=limit) {
    i++;
    isPrime(i) ? counter++ : null;
  }
  return i
}

console.log(main(limit));
console.timeEnd('euler');
