// What is the value of the first triangle number to have over five hundred divisors?
'use strict'

console.time('euler'); // initialise timer

const input = 500;

// return next successive triangular number
const genNextTriangular = (index, prevValue) => prevValue+index;

// return count of divisors for provided number
const getDivisorsCnt = num => {

    let divisors = 1; // each number is divisible by 1 (duh)
    let factor = 2; // candidate for prime factor of `n`

    // ff `num` is not prime then it must have one factor
    // which is <= `sqrt(num)`, so we try these first:
    while (factor*factor <= num) {
        if (num%factor===0) {
            // **factor** is a prime factor of **num**, determine the exponent:
            let exponent = 0;
            do {
                num /= factor;
                exponent++;
            } while (num%factor===0)
            // **factor^exponent** is one term in the prime factorization of **num**,
            // this contributes as factor **exponent + 1**:
            divisors*=exponent+1;
        }
        factor=factor==2 ? 3 : factor+2 // Getting next possible prime factor
    }
    // in the end **num** is either 1 or a prime number
    // if it's prime - it contributes a factor 2:
    if (num>1) {
        divisors*=2;
    }

    return divisors;
}

const main = input => {
  let i = 1, // index of current triangular number
      triangular = 1, // current triangular number
      divisors = 1; // num of divisors for first triangular number

  while (divisors<input) {
    i++;
    triangular = genNextTriangular(i, triangular);
    divisors = getDivisorsCnt(triangular);
  }
  return triangular
}

console.log(main(input));
console.timeEnd('euler');
