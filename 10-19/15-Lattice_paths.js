// Starting in the top left corner of a grid and ending the bottom right corner, how many such routes are there through a 20×20 grid?
'use strict'

console.time('euler'); // initialise timer

const input = [20, 20]; // provide dimensions of a grid

// return !num
const factorialize = (num) => {
  if (num<0)  { // account for negative numbers
    return -1;
  }
  else if (num===0) { // end of recursion
    return 1;
  }
  else { // recursion maintained until num===0
      return (num*factorialize(num - 1));
  }
}

// since there are only two possible directions (down, right) traversing from a corner of a grid to it's opposite corner
// always takes the same amount of steps - we end up looking for permutations of those steps:
// possible permutations = (a+b)! / a!b!
const main = (grid) => {
  return factorialize(grid[0]+grid[1]) / (factorialize(grid[0])*factorialize(grid[1]))
}

console.log(main(input));
console.timeEnd('euler');
