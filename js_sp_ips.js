// 1000 Lights

/*
**Problem**
=>objective: given the total number of switches, return an array of the lights that are on after `n` repetitions

=>input: 
	- integer, total number switches
	- diff data type? two arguments? no arguments?
	- 0, negative, NaN, infinity

=>output: 
	- an array of the lights that are on after `n` repetitions -- where is `n` coming from?

=>requirements:

=>explicit  - each switch starts off
            - on the first pass, every switch is toggled -- therefore, every switch is on
            - on the second pass, every 2nd switch is toggled -- switch number 2, 4, 6 or indexes 1, 3, 5
            - whichever pass/round it is, that is the interval at which we are toggling switches
            - for all rounds, the switches that gets toggled are evenly divisible by the round number
            - you repeat the process until you've gone through `n` rounds/passes
            - return an array of the switches that are on after the last round
            - the round number is inclusive

=>implicit  - we are doing `n` rounds, and `n` is the total number of switches
            - the lights before the current round number are not changed because it'll start toggling after them
            - any input other than a positive integer, return `null`
            - how to determine whether a position will be on or off after `n` rounds
              - how many numbers from 1 to `n` is the position divisible by
                - if you're divisible by an odd number of roundNums, you're on
                - otherwise, you're off
`            
=> test/edge cases -
console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(3)); // [1]
console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(1)); // [1]
console.log(lightsOn(0) === []);
console.log(lightsOn(NaN) === null);
console.log(lightsOn('a') === null);
console.log(lightsOn(-1) === null);
console.log(lightsOn(1.4) === null);

switch numbers  [1 2 3]
before round 1  [f f f]
after round 1   [o o o]
after round 2   [o f o]
after round 3   [o f f]

switch numbers  [1 2 3 4 5]
before round 1  [f f f f f] 
after round 1   [o o o o o]
after round 2   [o f o f o]
after round 3   [o f f f o]
after round 4   [o f f o o]
after round 5   [o f f o f]


=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- create the bank of switches
- run through each round toggling the switches
- return an array of the on switches

**Data Structure**
- array of booleans (true/false)

**Implementation Notes**
- careful with indexes/ off by one

**Algorithm**
- guard clause(s) for invalid input
  - return null for anything that isn't a positive integer

- declare variable `bank`, assign to an empty array
  - for loop, from 1 to `n`, push `false` to `bank`
  
- for loop from 1 to `n`, `round`
  - iterate over the whole bank
    - for each element, if the (index + 1) is evenly divisible by the round number, switch the element's boolean value
- return the value returned by `bank` being passed to `returnOnSwitchPositions`

helper function `returnOnSwitchPositions`, given `bank`
- declare variable `onPositions`, map over the `bank`, converting elements that are `true` to their index + 1
- filter the `onPositions` for numbers and return it

**Check algorithm against test cases


*/

"use strict";

// function returnOnSwitchPositions(bank) {
//   let onPositions = bank.map((lightSwitch, idx) => {
//     if (lightSwitch) return idx + 1;
//     return undefined;
//   }); 
//   return onPositions.filter(position => position);
// }

// function lightsOn(switches) {
//   if (!Number.isInteger(switches) || switches < 0) return null; 
//   if (switches === 0) return [];
  
//   let bank = [];
//   for (let i = 1; i <= switches; i += 1) {
//     bank.push(false); 
//   }
  
//   for (let round = 1; round <= switches; round += 1) {
//     bank.forEach((lightSwitch, idx) => {
//       if ((idx + 1) % round === 0) bank[idx] = !bank[idx]; 
//     }); 
//   }
//   return returnOnSwitchPositions(bank);
// }

// function howManyMultiples(position, rounds) {
//   let numOfMultiples = 0;
//   for (let round = 1; round <= rounds; round += 1) {
//     if (position % round === 0) numOfMultiples += 1;
//   }
//   return numOfMultiples % 2 !== 0 ? true : false
// }

// function lightsOn(switches) {
//   if (!Number.isInteger(switches) || switches < 0) return null; 
//   if (switches === 0) return [];
  
//   let bank = [];
//   for (let i = 1; i <= switches; i += 1) {
//     bank.push(i); 
//   }
  
//   return bank.filter(position => howManyMultiples(position, switches));
// }





// console.log(lightsOn(5)); // [1, 4]
// console.log(lightsOn(3)); // [1]
// console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// console.log(lightsOn(1)); // [1]
// console.log(lightsOn(0));
// console.log(lightsOn(NaN) === null);
// console.log(lightsOn('a') === null);
// console.log(lightsOn(-1) === null);
// console.log(lightsOn(1.4) === null);









// Caesar Cipher

/*
**Problem**
=>objective: given two arguments (a string, an integer), return a string whereby each letter in the string is encoded to another letter `key` places away (can wrap around the alphabet)

=>input: 
	- wrong data type, not enough args, too  many args
	- empty string, => empty string
	- negative? NaN, inifinity 

=>output: 
	- string encoded, or null, or empty string

=>requirements:

=>explicit  - the cipher only encrypts letters, any other characters are left as is
            - the substituted letters are in the same case as the OG letter
            - if the key value goes over the bounds of the alphabet, wrap around the remaining spots 

=>implicit  - if your key is 0, return the same `plaintext`
            - we are encoding only 
            - case stays the same

=> test/edge cases - 
console.log(caesarEncrypt('A', 0)===        "A");
console.log(caesarEncrypt('A', 3)===        "D");
console.log(caesarEncrypt('y', 5)===        "d");
console.log(caesarEncrypt('a', 47)===       "v");
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25)=== "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5)=== "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?=== Wrong?', 2); "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");
console.log(caesarEncrypt('', 47) === "");
console.log(caesarEncrypt(47) === null);
console.log(caesarEncrypt('asdf', -47) === null);
console.log(caesarEncrypt('asdf', NaN) === null);
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
console.log(caesarEncrypt('CAT', 8) === 'KIB');
console.log(caesarEncrypt('CaT', 8) === 'KiB');
console.log(caesarEncrypt('?><,./', 8) === '?><,./');

=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- iterate over the chars of the string
  - if its a char, shift it
  - else, return it as is
- return the new string

**Data Structure**
- just iterate over the string, and build a new string
- split the char, iterate over an array, join the array

**Implementation Notes**
- for the shifting
  - ascii values
  - an array of lowerase letters
  - 'abcdefghijklmnopqrstuvwxyz'
  - declare an index variable
    - for loop from 1 to the key
      - each time increase the `index`, if the index is > 25, make it 0
    
**Algorithm**
- guard clause(s)
  - first input has to be a string,
    - if its empty, return the empty string
    - otherwise return null
  - second input has to be an integer >= 0
    - if its 0, return the string as is
    - otherwise, return `null`
- declare variable `chars`, assign to the string, split at each char
- decalre variable `charsShifted` map over `chars`, for each `char`
  - pass the `char` to `shiftChar` and return the return value
- join 

helper function `shiftChar`
- if `char` is not a letter, return it as is
- declare variable `uppercase`, assign to false;
- if the char is uppercase, assign `uppercase` to `true`
- declare variable shiftedLetter`, assign to the return value from passing the lowercase `char` and the `key` to `shiftLetter`
- if `uppercase` is true, make the `shiftedLetter` uppercase and return it
  - otherwise, return the `shiftedLetter`
  
helper function `shiftLetter`
- given a `char` (lowercase letter) and `key`, return the `char` shifted that many keys
- declare a constant `arrayOfLetters` assign to an array of lowercase letters as strings
- declare a variable `index`, assign it to the given `char`'s index in `arrayOfLetters`
- for loop from 1 to `key`
  - if `index` + 1 > 25, make `index` 0 and continue
  - otherwise, increment `index` by 1
- return the `char` at the end you end up with `index`


**Check algorithm against test cases


*/

// function caesarEncrypt(plainText, key) {
//   if (typeof plainText !== 'string') return null;
//   if (plainText.length === 0) return '';
//   if (!Number.isInteger(key) || key < 0) return null;
//   if (key === 0) return plainText;
//   let charsShifted = plainText.split('').map(char => {
//     return shiftChar(char, key);  
//   });  
//   return charsShifted.join('');
// }

// function shiftChar(char, key) {
//   if (/[^a-z]/i.test(char)) return char;
//   let uppercase = char.toUpperCase() === char;
//   let shiftedLetter = shiftLetter(char.toLowerCase(), key);
//   shiftedLetter = uppercase ? shiftedLetter.toUpperCase() : shiftedLetter;
//   return shiftedLetter
// }

// function shiftLetter(char, key) {
//   const arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//   let index = arrayOfLetters.indexOf(char);
//   for (let i = 1; i <= key; i += 1) {
//     if ((index + 1) > 25) {
//       index = 0;
//       continue;
//     }
//     index += 1
//   }
//   return arrayOfLetters[index];
// }

// console.log(caesarEncrypt('A', 0)===        "A");
// console.log(caesarEncrypt('A', 3)==        "D");
// console.log(caesarEncrypt('y', 5)===        "d");
// console.log(caesarEncrypt('a', 47)===       "v");
// console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25)=== "ZABCDEFGHIJKLMNOPQRSTUVWXY");
// console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5)=== "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");
// console.log(caesarEncrypt('There are, as you can see, many punctuations. Right? Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv? Ytqpi?");
// console.log(caesarEncrypt('', 47) === "");
// console.log(caesarEncrypt(47) === null);
// console.log(caesarEncrypt('asdf', -47) === null);
// console.log(caesarEncrypt('asdf', NaN) === null);
// console.log(caesarEncrypt('CAT', 8) === 'KIB');
// console.log(caesarEncrypt('CaT', 8) === 'KiB');
// console.log(caesarEncrypt('?><,./', 8) === '?><,./');






//Vigenere Cipher

/*
**Problem**
=>objective: given some `plainText` and a `keyword`, return the `plaintext` encoded according to the requirements of the Vigenere Cipher. 

=>input: 
	- different data type? No args? Extra args?
	- either is empty? 
	- just symbols?
	- no letters for `keyword`
	- different cases for both plaintext and keyword
	- keyword is longer than the word itself

=>output: 
	- null for different data types than expected
	- empty string for empty stirng input (either)
	- symbols treat normally
	- no letters for keyword return null or any symbols at all
	- keep case for plaintext, keyword case doesn't actually matter

=>requirements:

=>explicit  - each letter in the `keyword` represents a shift value for its corresponding letter in the plaintext
            - the shift value is equivalent to the index of the letter in the alphabet (case insensitive) a and A are both 0
            - to match shift values in the `keyword` with letters in the `plaintext`, match the first letter with the first shift value, then move the sceond and second, if you get to the end of the `keyword`, start over again at the next letter. Skip over non letters but include them in your result
            - each letter in the `plaintext` is shifted the number of spaces that corresponds with its matching letter in the `keyword`
            - if the keyword is n letters, the plaintext letters are matched with those letters repeating
=>implicit  - punctuation is not included in counting and matching the letters with their shift values, but it is included in the result
            - case is kept in the result 

=> test/edge cases - 


plaintext:  Theres noroom onthis boat
shift:      turkey turkey turkey turk
values:   19 20 17 10 4 24
ciphertext: M


=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- Iterate over the letters in the plaintext
  - match up each letter with its corresponding shift value
  - shift it and append it to a result string
- return the string

- looping back around over the `keyword` values
- skipping the non-alphabetic characters
- the actual caesar cipher

**Data Structure**
- array -- map and join
- array for the shift values

- keep it as a string and just iterate over the chars
  - append to a result string

  
**Implementation Notes**
- make the keyword lowercase from the beginning

**Algorithm**
- guard clause(s)
- declare variable `plaintextChars`, assign to the `plaintext` arg split for each char
- const for an array of lowercase letters
- declare variable `shiftValues`, assign to `keyword`, lowercased, split for each char, map over transforming chars to their corresponding index in the alphabet
- declare variable `shiftValueCounter`, assign to 0;
- declare variable `result` string, assign to empty string
- declare variable `cipherText`, forloop over `plainTextChars`
  - if the char is not a letter, add it to `result`
  - add to `result`, the return value from passing the char and its shift value to a `caesarCipher` function
  - adjust shift value for the next loop
    - if `shiftValueCounter` === `shiftValues.length` - 1, reassign it to 0
      - otherwise, just increment it
- return `cipherText` joined with no spaces


helper function `caesarCipher`
- given a `char` and a `key`, shift the `char` that many keys
- declare variable `uppercase`, assign to ternary operator checking the char
- declare variable `endAsciiValue`, assign to ternary operator checking `uppercase`, if it is 90 else 122
- declare variable `beginningAsciiValue`, assign to ternary operator checking `uppercase`, if it is 65 else 97
- declare variable `currentAsciiValue`, assign to the ascii value of the `char`
- declare variable `newAsciiValue`, assign to `currentAsciiValue` + `key`
- if newAsciiValue > `endAsciiValue`, reassign to `newAsciiValue % 26 + beginningAsciiValue`
- return char at `newAsciiValue`

**Check algorithm against test cases


*/


// function vigenereCipher(plaintext, keyword) {
//   if (typeof plaintext !== 'string' || typeof keyword !== 'string') return null;
//   if (plaintext.length === 0) return '';
//   if (keyword.length === 0) return plaintext;
//   if (/[^a-z]/i.test(keyword)) return null;

//   let plaintextChars = plaintext.split('');
//   const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//   let shiftValues = keyword.toLowerCase().split('').map(letter => lowercaseLetters.indexOf(letter));
//   let shiftValueCounter = 0;
//   let result = '';
  
//   for (let i = 0; i < plaintextChars.length; i += 1) {
//     let char = plaintextChars[i];
//     if (/[^a-z]/i.test(char)) {
//       result += char;
//       continue;
//     }
//     result += caesarCipher(char, shiftValues[shiftValueCounter]);
    
//     if (shiftValueCounter === shiftValues.length - 1) {
//       shiftValueCounter = 0;
//     } else {
//       shiftValueCounter += 1; 
//     }
//   }
//   return result;
// }

// function caesarCipher(char, key) {
//   let uppercase = char.toUpperCase() === char;
//   let endAsciiValue = uppercase ? 90 : 122
//   let beginningAsciiValue = uppercase ? 65 : 97
//   let newAsciiValue = char.charCodeAt(0) + key;
//   newAsciiValue = newAsciiValue > endAsciiValue ? beginningAsciiValue + (newAsciiValue - endAsciiValue - 1) : newAsciiValue
//   return String.fromCharCode(newAsciiValue);
// }

// console.log(vigenereCipher("There's no more room on this boat?!", 'turkey') === "Mbvbi'q gi dyvc kifw sl mbzc fmtn?!");
// console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!");
// console.log(vigenereCipher("Pineapples don't go on pizzas!", 'MEAT') === "Bmnxmtpeqw dhz'x gh ar pbldal!");
// console.log(vigenereCipher("Pineapples don't go on pizzas!", 'mEaT') === "Bmnxmtpeqw dhz'x gh ar pbldal!");
// console.log(vigenereCipher('we won the game', 'jersey') === 'fi ngr rqi xsqc');
// console.log(vigenereCipher('gas', 'meat') === 'ses');
// console.log(vigenereCipher(9, 10) === null);
// console.log(vigenereCipher() === null);
// console.log(vigenereCipher('', 'meat') === '');
// console.log(vigenereCipher('gas prices', '') === 'gas prices');
// console.log(vigenereCipher('gas prices', '?') === null);
// console.log(vigenereCipher('gas prices', 'meat?') === null);
// console.log(vigenereCipher('Dog', 'Rabbit') === 'Uoh');
// console.log(vigenereCipher("Pineapples don't go on pizzas!", 'A') === "Pineapples don't go on pizzas!");
// console.log(vigenereCipher("Pineapples don't go on pizzas!", 'Aa') === "Pineapples don't go on pizzas!");
// console.log(vigenereCipher("Pineapples don't go on pizzas!", 'cab') === "Riogaqrlfu dpp't hq oo riabat!");
// console.log(vigenereCipher("Pineapples don't go on pizzas!", 'cab') === "Riogaqrlfu dpp't hq oo riabat!");







//Seeing Stars

/*
**Problem**
=>objective: given a grid length/width `n`, display (log) an 8 pointed star

=>input:
- diff data type? no arg? too many args?
- negative? 0, < 7, fractional, NaN, 
	- odd integer
	- >= 7

=>output: 
	- star
	- null -- for any input that is not an odd integer >= 7

=>requirements:

=>explicit  - 8 pointed star
            
=>implicit  - for `n`, `n` total rows, each row has 3 stars except the middle which has `n`
            - for each row except the middle
              - the space between the stars coordinates with how far that particular row is from the middle row
                - first row 0 spaces inbetween the stars, sceond 1, third 2 etc
              - the space before the first star is inversely correlated with the space between 
                - first row 2, second 1, third 0
            - top rows, middle row, bottom rows
            - top and bottom rows are mirrors of each other (can we store them and run forwards and backwards over them)
            - always 3 stars
            - each row has spaces before, 3 stars with spaces between 
            - from the first top row, the spaces before is 0, spaces between is n - 1 / 2 - 1
              - increment spaces before, decrement spaces between 

=> test/edge cases - 
star(7);
star(9);
star(0);
star('a');
star();

=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- build a data structure with the top rows
- build a data structure with the middle row
- print the top rows, print the middle row, print the top rows backwards

**Data Structure**
- an array of strings to hold the top rows
- a string to hold the middle rows


**Implementation Notes**

**Algorithm**
- guard clause
- declare variable `topRows`, assign to empty array 
- declare variable `middleRow`, assign to a string with n stars (repeat)
- declare variable `spacesBetweenStars`, assign to ((`n` - 1) / 2) - 1;
- for loop with counter as `spacesBefore`, set to 0
  - declare variable `starAndSpaces`, assign to a string holding one star and `spacesBetweenStars` many spaces
  - string interpolation to combine `spacesBefore`, with `starsAndSpaces` repeated 3 times 
  - push ^^ to `topRows`
  - decrement `spacesBetweenStars`
- loop forward over `topRows`, printing each row
- print the `middleRow`
- loop backwards over `topRows`, printing each row


**Check algorithm against test cases


*/

function displayStar(topRows, middleRow) {
  topRows.forEach(row => console.log(row));
  
  console.log(middleRow);
  
  for (let i = topRows.length - 1; i >= 0; i -= 1) {
    console.log(topRows[i]);  
  }
}

function star(n) {
  if (!Number.isInteger(n) || n < 7) return null; 
  let topRows = [];
  let middleRow = '*'.repeat(n);
  let spacesBefore = 0;
  
  for (let spacesBetweenStars = (((n - 1) / 2) - 1); spacesBetweenStars >= 0;  spacesBetweenStars -= 1) {
    let starAndSpaces = `*${' '.repeat(spacesBetweenStars)}`;
    topRows.push(`${' '.repeat(spacesBefore)}${starAndSpaces.repeat(3)}`);
    spacesBefore += 1;
  }
  
  displayStar(topRows, middleRow);
  
}

star(7);
star(9);
star(21);
star(101);
console.log(star(0));
console.log(star('a'));
console.log(star());
