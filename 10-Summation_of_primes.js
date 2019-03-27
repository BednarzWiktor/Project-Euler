// Find the sum of all the primes below two million.
'use strict'

console.time('euler'); // initialise timer

const input = 2*10**6;

// Simplified sieve of Atkin algorithm accounting for modulo 12 instead 60
const sieveOfAtkin = (limit) => {
  let output = [2, 3], // initialise prime array accounting for primes<5
      sieve = Array(limit).fill(false), // create initial array of all numbers marked as non-prime
      n; // initialise testing variable

  for (let x=1; x<=Math.sqrt(limit); x++) {
    for (let y=1; y<=Math.sqrt(limit); y++) {
      // 1 Step - quadratic with remainders [1,5]
      n = 4*x*x + y*y;
      if (n<=limit & (n%12===1 || n%12===5)) {
        sieve[n] = !sieve[n];
      }

      // 2 Step - quadratic with remainder 7
      n = 3*x*x + y*y;
      if (n<=limit & n%12==7) {
        sieve[n] = !sieve[n];
      }

      // 3 Step - quadratic with remainder 11
      n= 3*x*x - y*y;
      if (n<=limit & x>y & n%12==11) {
        sieve[n] = !sieve[n];
      }
    }
  }

  // getting rid of all the roots
  for (let i=5; i<=Math.sqrt(limit); i++) {
    if (sieve[i]) {
      for (let j=i*i; j<=limit; j+=i*i) {
        sieve[j] = false;
      }
    }
  }

  // appending the output with found primes
  for (let x=5; x<=limit; x+=2) {
    if (sieve[x]) {
      output.push(x);
    }
  }

  return output;
}

// log sum of all found primes
console.log(sieveOfAtkin(input).reduce((sum, num) => sum+=num, 0));
console.timeEnd('euler');
