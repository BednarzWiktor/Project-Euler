// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
'use strict'

const input = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450',
      range = 13;

// return multiplication product of provided substring
const getProduct = (string) => {
  return string
          .split('')
          .reduce((product, num) => product*num, 1);
}

// return largest product of substrings of a main string in the length of provided range
const main = (input, range) => {
  let maxProduct = 0;
  for (let i=0; i<=(input.length-range); i++) {
    let cache = input.slice(i, i+range);
    // check if cached substring doesn't contain 0
    if (!cache.includes('0')) {
      getProduct(cache)>maxProduct ? maxProduct=getProduct(cache) : null;
    }
  }
  return maxProduct;
}

console.log(main(input, range));
