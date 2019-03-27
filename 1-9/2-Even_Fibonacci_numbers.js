// Find the sum of even numbers in the Fibonacci sequence which don't exceed 4mil
'use strict'

console.time('euler'); // initialise timer

const input = 4*10**6;

// Create sequence of Fibonacci numbers up to the provided limit
const createFibonacci = (limit) => {
  let i = 1;
  let output = [1];
  while(i<limit) {
    output.push(i);
    i = output[output.length-2] + output[output.length-1];
  }
  return output;
}

const main = (sequence) => {
  return sequence.reduce((sum, num) => num%2===0 ? sum+num : sum, 0);
}

console.log(main(createFibonacci(input)));
console.timeEnd('euler');
