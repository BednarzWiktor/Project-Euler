// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
'use strict'

const input = 100;

// return inclusive sequence of numbers from 1 to limit
const createSequence = (limit) => {
  let output = [];
  for (let i=1; i<=limit; i++) {
    output.push(i)
  }
  return output;
}

// return sum of sequence items raised to the provided power
const sumOfSequence = (sequence, power) => {
  return sequence.reduce((sum, num) => sum+=num**power)
}

const main = (limit) => {
  const sequence = createSequence(limit),
        sumOfSquares = sumOfSequence(sequence, 2),
        squaredSum = sumOfSequence(sequence, 1)**2;

  return squaredSum-sumOfSquares;
}

console.log(main(input));
