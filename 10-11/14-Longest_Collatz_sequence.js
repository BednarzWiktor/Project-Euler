// Which starting number, under one million, produces the longest chain of Collatz sequence?
'use strict'

const input = 10**6;

const addBinary = (a, b) => {
    let i = a.length-1,
        j = b.length-1,
        remainder = 0,
        sum = "";
    while (i >= 0 || j >= 0) {
        let m = i<0 ? 0 : a[i] | 0,
            n = j<0 ? 0 : b[j] | 0;
        remainder += m + n; // sum of two digits
        sum = remainder%2 + sum; // string concat
        remainder = remainder/2 | 0; // remove decimals,  1 / 2 = 0.5, only get 0
        i--;
        j--;
    }

    return remainder!==0 ? sum=`${remainder}${sum}` : sum // if remainder is other than 0, prepend it to the sum
}

const genCollatz = (num) => {
  let binary = num.toString(2),
      collatz = {},
      counter = 0;

  while (binary!=='1') {
    collatz[binary] = counter;
    if (binary[binary.length-1]==='1') {
      binary = addBinary(`${binary}1`, binary);
      counter++
    } else {
      const previous = binary;
      binary = binary.replace(/[0]$/, '');
      counter++
    }
  }
  return collatz
}

const main = (input) => {
  let maxSequence = 0,
      output = 0;
  for (let i=input-1; i>=input/10; i--) {
    if (genCollatz(i)>maxSequence) {
      maxSequence = genCollatz(i);
      output = i;
    }
  }
  return output
}

console.log(genCollatz(10));
