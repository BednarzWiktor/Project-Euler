// What is the sum of the digits of the number 21000?
'use strict'

console.time('euler'); // initialise timer

const input = [1000, 2];

// WARNING - subject to bugfixing (eg. 9**4 and more returns wrong answer)
const main = (limit, base) => {
  let array = [base];
  for (let i=2; i<=limit; i++) {
    let remainder = 0;
    for (let j=array.length-1; j>=0; j--) {
      if ((array[j]*base)+remainder<10) {
        array[j] = (array[j]*base)+remainder;
        remainder = 0;
      } else {
        let oldRemainder = remainder;
        remainder = parseInt((array[j]*base).toString()[0]);
        array[j] = (array[j]*base)%10+oldRemainder;
      }
    }
    if (remainder!==0) {
      remainder = remainder.toString();
      for (let x=remainder.length-1; x>=0; x--) {
        array.unshift(parseInt(remainder[x]));
      }
    }
  }
  return array;
}

console.log(main(input[0], input[1]).reduce((sum, num) => sum+=num, 0));
console.timeEnd('euler');
