// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
'use strict'

console.time('euler'); // initialise timer

const input = 1000;

// return array of possible Pythagorean triplet for provided Euclid's formula variable m
const tripletGen = (m) => {
  let output = [];

  for (let n=1; n<m; n++) {
    const a = m*m - n*n,
          b = 2*m*n,
          c = m*m + n*n;
    output.push([a,b,c]);
  }
  return output
}

// return the triplet that satisfies condition **a+b+c = input** or return null if there's none
const verify = (input) => {
  let m=2; // initial m for Euclid's formula

  while (true) {
    let sumsOfTriplets = tripletGen(m).map(triplet => triplet.reduce((acc, num) => acc+=num, 0)); // array of sums of all the triplets for given **m**

    if (sumsOfTriplets.includes(input)) { // if there's a match, return the matched triplet and break
      return tripletGen(m)[sumsOfTriplets.findIndex(sum => sum===input)];
      break;
    } else if (Math.min(...sumsOfTriplets)>input) { // if minimum value of triplet sum for given **m** exceeds input, return null and break
      return null;
      break;
    }
    m++;
  }
}

// return the a*b*c product if verified triplet exists, or return a failure message
const main = () => {
  return verify(input)!==null ? verify(input).reduce((acc, num) => acc=acc*num, 1) : `no triplet that satisfies the a+b+c=input condition found`;
}


console.log(main());
console.timeEnd('euler');
