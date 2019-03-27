// Find the sum of all the multiples of 3 or 5 below 1000.
'use strict'

console.time('euler'); // initialise timer

const input = 1000;

const main = (num) => {
  let output = 0;
  for (let i=0; i<num; i++) { i%3===0 || i%5===0 ? output+=i : null}
  return output;
};

console.log(main(input));
console.timeEnd('euler');
