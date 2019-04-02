// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
'use strict'

console.time('euler'); // initialise timer

const limit = 1000;

const dictionary = {
  to10: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
  to20: ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
  to100: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
  special: ['and', 'hundred']
}

// return string of number description in written english
const translate = num => {
  let phrase = [];
  if (!(num<0) && !(num>1000)) {
    const string = num.toString(); // cache number in string format for ease of access single digits
    if (num<=10) { // 1-10
      num===10 ? phrase.push(dictionary.to10[9]) : phrase.push(dictionary.to10[parseInt(string[0])-1]);
    } else if (num<20) { // 11-19
      phrase.push(dictionary.to20[parseInt(string[1])-1]);
    } else if (num<100) { // 20-99
      phrase.push(dictionary.to100[parseInt(string[0]-2)]);
      phrase.push(dictionary.to10[parseInt(string[1])-1]);
    } else if (num<1000) { // 100-999
      phrase.push(dictionary.to10[parseInt(string[0])-1] + dictionary.special[1]);
      if (string[1]==='0') {
        if (string[2]!=='0') { // full hundred
          phrase.push(dictionary.special[0] + dictionary.to10[parseInt(string[2])-1]);
        }
      } else if (string[1]==='1') {
        if (string[2]==='0') { // full hundred + 10
          phrase.push(dictionary.special[0] + dictionary.to10[9]);
        } else { // full hundred + 11-19
          phrase.push(dictionary.special[0] + dictionary.to20[parseInt(string[2]-1)]);
        }
      } else { // full hundred + 20-99
        phrase.push(dictionary.special[0] + dictionary.to100[parseInt(string[1]-2)]);
        phrase.push(dictionary.to10[parseInt(string[2])-1]);
      }
    } else if (num===1000) { // 1000
        phrase.push('onethousand');
    }
  }
  return phrase.join('');
}

const main = limit => {
  let counter = 0;
  for (let i=1; i<=1000; i++) {
    counter+=translate(i).length;
  }
  return counter;
}

console.log(main(limit));
console.timeEnd('euler');
