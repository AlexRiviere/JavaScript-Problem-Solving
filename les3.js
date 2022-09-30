// An example problem: Comparing Version Numbers

/*
**Problem**
=>objective: write a function that takes any two version numbers and compares them , returning 1, - 1 or 0 depending on if the first or second version is bigger

=>input: 
	- two version numbers as strings? (since they need more than one decimal sometimes)
  - possible that the input contains characters other than digits and ., 
=>output: 
	- 1, -1 or 0
	- 1 if version1 (the first argument?) > v2
	- -1 if v2 > v1, 
	- 0 if v1 === v2
	- null if one of the version numbers is invalid
	
=>requirements:

=>explicit - need to validate that we have valid inputs

=>implicit - version numbers can look different but be the same
           - the important numbers are the ones left-most
           - starting from the left, if a number has a higher digit in the same spot as the other number, that first number is larger. 

=> test/edge cases - 
console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1', '0.1') === 1);
console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1', '1.0.0.0.0.0.0.0.0') === 0);
console.log(compareVersions('1.2', '1.2.0.0') === 0);
console.log(compareVersions('1.2', '1.2.1') === -1);
console.log(compareVersions( '1.18.2', '13.37') === -1);
console.log(compareVersions('1', '1.23') === -1);
console.log(compareVersions('1.5', '1.3') === 1);
console.log(compareVersions('1.3.1', '1.3') === 1);
console.log(compareVersions('1.3.1', '1.3?a') === null);


=> Questions - 

=> Mental Model: try to solve the problem in 1-2 sentences. If you can't its too big. 
- split the strings at the dots, compare the versions starting from the first index, 
  - if v1 is bigger, return 1 etc etc
- the real issue comes when they are equal up to a point, then one version doesn't have any more digits
- or they are equal, but one has an extra '.0' or a few

**Data Structure**
- use an array to store the digits

**Implementation Notes**
- validate both version numbers before starting
- can we sanitize all numbers from ending in '.0', removing them to make sure all numbers are on the same playing field? --- use regex if you do this
- we can kind of short circuit since its impossible for another version number to be bigger if one of the numbers (starting) from the left is not as big as the other
- remember they are strings and will have to be coerced to nums


**Algorithm**
helper function `isValidVersionNum`
  - given a possible version number, return true if its valid, false otherwise
  - confirm that the version number is composed of numbers and dots only (regex)

helper function `removeExtraZeroes`
  - given a version number, remove the extra '.0's from the end of the string
  - replace the '.0s' at the end of the string with empty spaces
  - return the cleaned up version number
  
main function `compareVersions`
  - if `isValidVersionNum` is false for either input, return `null`
  - declare variable `cleanVNum1` and `cleanVNum2`, assign to the return value that comes from their respective arguments being passed to `removeExtraZeroes`, split at the dots
  - loop over integers from 0 to the larger length of the two cleaned up numbers, incrementing by 1
    - compare the numbers (coerced nums) at those indexes of the respective arrays
    - v1 > v2, return 1
    - v1 a number, v2 undefined, return 1
    - v2 > v1, return -1
    - v1 undefined, v2 a number, return -1
    - v1 === v2, continue/do nothing
  - if you get through the loop, return 0
*/

// function isValidVersionNum(version) {
//   return /^\d+(\.\d+)*$/.test(version) //|| Number.isInteger(Number(version));
// }

// function removeExtraZeroes(version) {
//   return version.replace(/(\.0)+$/, '');
// }

// function compareVersions(version1, version2) {
//   if (!(isValidVersionNum(version1) && isValidVersionNum(version2))) return null;
//   let cleanVers1 = removeExtraZeroes(version1).split('.').map(str => Number(str));
//   let cleanVers2 = removeExtraZeroes(version2).split('.').map(str => Number(str));
//   let length = cleanVers1.length > cleanVers2.length ? cleanVers1.length : cleanVers2.length;
//   for (let i = 0; i < length; i += 1) {
//     let v1 = cleanVers1[i];
//     let v2 = cleanVers2[i];
//     if (v1 > v2 || (v1 > 0 && v2 === undefined)) {
//       return 1;
//     } else if (v2 > v1 || (v2 > 0 && v1 === undefined)) {
//       return -1; 
//     }
//   }
//   return 0;
// }

// console.log(compareVersions('0.1', '1') === -1);
// console.log(compareVersions('1', '0.1') === 1);
// console.log(compareVersions('1', '1.0') === 0);
// console.log(compareVersions('1', '1.0.0.0.0.0.0.0.0') === 0);
// console.log(compareVersions('1.2', '1.2.0.0') === 0);
// console.log(compareVersions('1.2', '1.2.1') === -1);
// console.log(compareVersions( '1.18.2', '13.37') === -1);
// console.log(compareVersions('1', '1.23') === -1);
// console.log(compareVersions('1.5', '1.3') === 1);
// console.log(compareVersions('1.0.5', '1.1.3') === -1);
// console.log(compareVersions('1.3.1', '1.3') === 1);
// console.log(compareVersions('1.3.1', '1.3?a') === null);
// console.log(compareVersions('.1.3.1', '1.3') === null);

// console.log(compareVersions('1', '1')       === 0);
// console.log(compareVersions('1.1', '1.0')    === 1);
// console.log(compareVersions('2.3.4', '2.3.5')=== -1);
// console.log(compareVersions('1.a', '1')      === null);
// console.log(compareVersions('.1', '1')       === null);
// console.log(compareVersions('1.', '2')       === null);
// console.log(compareVersions('1..0', '2.0')   === null);
// console.log(compareVersions('1.0', '1.0.0')  === 0);
// console.log(compareVersions('1.0.0', '1.1')  === -1);
// console.log(compareVersions('1.0', '1.0.5')  === -1);










// Problem 1

// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

/*
**Problem**
=>objective: given a `string`, which is a user entered phone number, return the string cleaned up without any spaces, dashes, dots or parentheses

=>input: 
	- valid phone number with 10 digits (with or without extra chars like dots, dashes, spaces, parentheses etc)
	- valid phone number with 11 digits that starts with 1
	- invalid phone number with 11 digits that doesn't start with 1
	- invalid phone number with > 11 digits 
	- invalid phone number with less than 10 digits
  - can we receive any other data types?
  - empty string?
  - multiple or extra args?
  
=>output: 
	- return the string with just the numbers 
	- for invalid numbers, return a string of 10 '0's

=>requirements:

=>explicit - clean up the string, removing all non-number chars and returning either the string cleaned up or a string of 10 '0's if the number is invalid after having been cleaned up

=>implicit - 

=> test/edge cases - 

=> Questions - 

=> Mental Model:  
- check for empty string or non string inputs
- strip the number of all non digit characters
- test the strippedNumber (helper function)
  - if its length is 10 exactly, return it 
  - if its length is 11 exactly and its first char is 1, return it without the first digit
  - other that these two situations, we are returning the 10 '0's 

**Data Structure**
- input is a string, options would be string or array. I'm keeping it as a string

**Implementation Notes**
- remember the g in the regex

**Algorithm**
- create a guard clause to return an empty string if the argument is an empty string or not a string
- declare variable `numsOnly`, assign to return value of replacing all the non-number values in the given `number` with empty strings
- if `numsOnly` length is 10, 
  - return `numsOnly`
- else if `numsOnly` length is 11 and the char at index 0 is '1'
  - return a slice of `numsOnly` starting from index 1, going to the end of the string
- return 10 '0's, (`repeat()`)?

*/

// function cleanNumber(number) {
//   if (number === '' || typeof number !== 'string') return '';
//   let numsOnly = number.replace(/[^\d]/g, '');
//   let numOfDigits = numsOnly.length;
//   if (numOfDigits === 10) {
//     return numsOnly; 
//   } else if (numOfDigits === 11 && numsOnly[0] === '1') {
//     return numsOnly.slice(1); 
//   }
//   return '0'.repeat(10);
// }



// console.log(cleanNumber('732-986-0395') === '7329860395');
// console.log(cleanNumber('732.986.0395') === '7329860395');
// console.log(cleanNumber('732 986 0395') === '7329860395');
// console.log(cleanNumber('(732) 986 0395') === '7329860395');
// console.log(cleanNumber('1732-986-0395') === '7329860395');
// console.log(cleanNumber('1732-986-03985') === '0000000000');
// console.log(cleanNumber('732-986-03985') === '0000000000');
// console.log(cleanNumber('1732-986-5') === '0000000000');
// console.log(cleanNumber('') === '');
// console.log(cleanNumber(' ') === '0000000000');
// console.log(cleanNumber(90) === '');















// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

// The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

// Counting from the rightmost digit and moving left, double the value of every second digit
// For any digit that thus become 10 or more, subtract 9 from the result
// 1111 becomes 2121
// 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
// Add all these digits together
// 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
// 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
// If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

/*
**Problem**
=>objective: given a `numString`, return true if the number is valid according to the Luhn Formula, false if not

=>input: 
	- string number
	- empty string
	- string without any digits, only non-digits
	- string with digits and non-digits
	- data type
	- no argument?
	- given number with only 1 digit
	- given 0
	- negative number
	- infinity?
	- fractional number

=>output: 
	- boolean 
	- if invalid input ( a string with absolutely no digits ) , return an empty string '';
	
	
=>requirements:

=>explicit - a number is valid according to the Luhn formula if
              - starting from the ones column, every other digit is doubled, then every transformed digit is added and the total ends in a 0 (can be divided by 10 with no remainder)
                - if the doubled number is > 10, subtract 9 from it
              - otherwise, it is not a Luhn formula number
=>implicit - 

=> test/edge cases - 

=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- Let's strip the number of any non-digit characters. 
  - if there aren't any numbers left, return an empty string
- Iterate over the numbers from the right, doubling every second digit, then add the resulting number to a total
- check that that total ends in 0

**Data Structure**
- given a string
- array (transform strings to numbers, use their indexes, reduce)
- return a boolean

**Implementation Notes**


**Algorithm**
- declare a variable `numsOnlyString`, assign to the return value from stripping the given `numString` of non-numeric chars (regex)
- if the length of `numsOnlyString` is 0, return empty string
- declare variable `newDigits`, assign this to the return value from splitting the `numsOnlyString` (each char), reverse the returned array, mapping over each char in teh reversed array,
  - for each char, 
    - convert the char to a number
    - if the index is odd, pass it to `doubleItLessThan10`
- declare variable `total`, assign to reduced (summed) `newDigits` array
- return from the function the return value from passing `total` to `isFinalTotalLuhn`

helper function 
- `doubleItLessThan10`
  - given a one digit number, return the number doubled
  - if the doubled number > 10, subtract 9

helper function 
- `isFinalTotalLuhn`
  - given a total, return true if it ends in 0, false otherwise

**Check algorithm against test cases



Write a function that can add a check digit to make the number valid per the Luhn formula and return the original number plus that digit. This should give '2323 2005 7766 3554' in response to '2323 2005 7766 355'. 



*/

// function doubleItLessThan10(number) {
//   let doubled = number * 2;
//   if (doubled >= 10) doubled -= 9;
//   return doubled;
// }

// function isValidLuhn(numString) {
//   let numsOnlyString = numString.replace(/\D/g, '');
//   if (numsOnlyString.length === 0) return '';
  
//   let newDigits = numsOnlyString
//                     .split('')
//                     .reverse()
//                     .map((digitString, index) => {
//                       number = Number(digitString);
//                       if (index % 2 === 1) return doubleItLessThan10(number);
//                       return number;
//                     });
  
//   let total = newDigits.reduce((sum, digit) => sum + digit);
//   return total % 10 === 0;
// }



// console.log(isValidLuhn('1111') === false);
// console.log(isValidLuhn('8763') === true);
// console.log(isValidLuhn('8-7b6a3') === true);
// console.log(isValidLuhn('8.7.6r3') === true);
// console.log(isValidLuhn('3') === false);
// console.log(isValidLuhn('0') === true);
// console.log(isValidLuhn('asdf') === '');
// console.log(isValidLuhn('2323 2005 7766 3554') === true);







// Write a function that can add a check digit to make the number valid per the Luhn formula and return the original number plus that digit. This should give '2323 2005 7766 3554' in response to '2323 2005 7766 355'. 


/*
**Problem**
=>objective: given a number, if it is a valid Luhn number return it as it is, if it isn't return the number with a check digit that would make the Luhn number valid

=>input: 
	- either a valid or invalid Luhn number
	- diff data type/ no input/ extra input?
	- 0? empty string
	- negative num

=>output: 
	- either the same argument given or the same arg with a digit appended
=>requirements:

=>explicit - return a string, append a check digit which makes the number valid according to the Luhn formula

=>implicit - 

=> test/edge cases - 

=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- if the number is valid, return it (use other solution for this)
- otherwise, split the numbers, add/double them as if they were one index over, get the remainder when divided by 10. evaluate 10 - that remainder, and assign that to the last digit
  - return the new number with the checkDigit appended

**Data Structure**
- array 

**Implementation Notes**
- really this is all about making sure the added up numbers can be divided by 10 evenly
- what we have to watch for is if we know its invalid, and we are going to add a number, the current indexes are going to be moved one over

**Algorithm**
- if the argument passed to `isValidLuhn` return false, 
  - declare variable `result` split the arg into chars, reverse the chars, map over the chars
    - convert each one to a number, 
    - if the index is even, pass it to `doubleItLessThan10` and return the return value
  - declare variable `checkDigit`, assign to 10 minus the remainder of the sum of all the elements of `result` divided by 10
  - join the elements of `result` as a string with no spaces, then append 
- else
  - return the number itself


**Check algorithm against test cases


*/

// function addCheckDigit(numString) {
//   if (isValidLuhn(numString)) {
//     return numString; 
//   } 
//   let result = numString.replace(/\D/gi, '').split('').reverse().map((num, idx) => {
//     num = Number(num);
//     if (idx % 2 === 0) return doubleItLessThan10(num);  
//     return num;
//   });
//   let checkDigit = 10 - (result.reduce((sum, num) => sum + num) % 10);
//   return numString + checkDigit;
// }

// console.log(addCheckDigit('2323 2005 7766 355'))// === '2323 2005 7766 3554');
// console.log(addCheckDigit('1111'))// === '11114');
// console.log(addCheckDigit('8763') === '8763');





/*
**Problem**
=>objective: given a string, return true/false if that string can be spelled adhering to the letter pair rules. 

=>input: 
	- string (with different cases)
	- data type? no input? extra input?
	- empty string?
	- string with symbols only? spaces?
	- string with words and symbols?

=>output: 
	- boolean true or false
	
=>requirements:

=>explicit - letter pairs are case insensitive
           - its true if only one letter from a pair is used, NOT BOTH
           - you can only use a pair one time

=>implicit - 

=> test/edge cases - 
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('bzjh');       // true
isBlockWord('n');       // true
isBlockWord('cap');       // false
isBlockWord('jest..??.');       // true
isBlockWord('botg');       // false
isBlockWord('jEsT');       // true

=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- iterating over each letter in the given string
  - if itself or its pair is included in the rest of the string, return false
- return true if you make it through the iteration

**Data Structure**
- store the pairs of letters in an object, 
- 2 arrays, with matches at the same index?
- object, keys are a string of both letters, values are a count
  - we can get the keys into an array, test a letter for key, return the key, then increment the count with the key
- one array of strings (lowercase letter pairs)

**Implementation Notes**
- since case doesn't matter i can just wipe the string clean of symbols and make it lower case right off the bat

**Algorithm**
- declare variable `cleanedStr`, assign to return value from removing symbols from string and making string lowercase
- declare variable `matches`, assign to an object with letter pairs as strings (lowercase), and 0 as all values
- for loop , iterating over each letter (use the counter as the index)
  - if the current letter or its match is in the slice of the rest of the word, return false
- return true if you make it through the iteration


**Check algorithm against test cases


*/

// function isBlockWord(word) {
//   let cleanedStr = word.replace(/[^a-z]/gi, '').toLowerCase();
//   let matches = ['bo', 'gt', 'vi', 'xk', 're', 'ly', 'dq', 'fs', 'zm', 'cp', 'na', 'hu', 'jw'];
//   for (let i = 0; i < cleanedStr.length - 1; i += 1) {
//     let letter = cleanedStr[i];
//     let restOfWord = cleanedStr.slice(i + 1);
//     let pair = matches.find(pair => pair.includes(letter));
//     let match = pair[0] === letter ? pair[1] : pair[0];
//     if (restOfWord.includes(letter) || restOfWord.includes(match)) return false;
//   }
//   return true;
// }


// console.log(isBlockWord('BATCH')    === true);
// console.log(isBlockWord('BUTCH')    === false);
// console.log(isBlockWord('jest')     === true);
// console.log(isBlockWord('bzjh')     === true);
// console.log(isBlockWord('n')        === true);
// console.log(isBlockWord('cap')      === false);
// console.log(isBlockWord('jest..??.')=== true);
// console.log(isBlockWord('botg')     === false);
// console.log(isBlockWord('jEsT')     === true);








/*
**Problem**
=>objective: given a list of numbers (string) that are always increasing, return a list of complete numbers. In the given `numbersList`, only the significant part of the next number is written, because we know its bigger than the previous number.  

=>input: 
	- other data type? no argument? more than 1 argument?
	- string with no numbers?
	- string with different separators?
	- string with letters/symbols mixed in between numbers
	- negative number? NaN? Infinity?

=>output: 
	- comma separated list of numbers, as a string

=>requirements:

=>explicit  - range limits are always inclusive

=>implicit  - the first number, is always the first number, no need to change it

=> test/edge cases - 

console.log(completeList("1, 3, 7, 2, 4, 1") === '1, 3, 7, 12, 14, 21');
console.log(completeList("1-3, 1-2" === 1, 2, 3, 11, 12);
console.log(completeList("1:5:2" === '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12');
console.log(completeList("104-2" === '104, 105, 106, 107, 108, 109, 110, 111, 112');
console.log(completeList("104-02");// === 104, 105, ... 202
console.log(completeList("545, 64:11");//  === 545, 564, 565, .. 611
console.log(completeList("2..1") === '2, 3, 4, 5, 6, 7, 8, 9, 10, 11');
console.log(completeList("3, 2, 1..4"); // 3, 12, 21, 22, 23, 24
console.log(completeList("3-2-1") === "3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21");


=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- separate the list of numbers at the commas, iterate over each portion
  - if its a number with no separator, turn it into the return value from passing the first number and this partial number to the nextNumberMaker
  - if it has a separator 
    - send it to a range maker function

- range limit maker abstraction
  - given the ranges (aka the numbers that delimit the range) and the previous number
    - iterate over the numbers using transformation, 
      - if its the first index, pass the previous number and current number to nextNumber
      - otherwise, the number at the last index and this to nextNumber
    - after that you have an array of range limits
      - iterate over it again
        - passing this and the next number to rangeMaker, adding all the return values to one array and return the array 
    
- range maker
  - given two numbers, return an array with all the numbers between the two numbers 
  
- nextNumber maker abstraction
  - given two numbers, the first is a number, the second a portion of a number
  - return the second number so that it is bigger than the first by adding subsequently larger numbers infront of it (1, 2, 3, 4 etc) until it is bigger than the first

**Data Structure**
- use an array map, iterate, 

**Implementation Notes**
- commas are jumps
- separators are ranges 
  - first number is > last calculated number, sceond number is bigger than first. Then you are incrementing by one until you get to the second number
- what to do when there are multiple separators in one portion?
  - 

**Algorithm**



    




// **Check algorithm against test cases


// - declare variable `ranges`, assign to given `numbersList` split at the commas
// - declare variable `result`, assign to empty array
// - iterate over `ranges` with forEach,
//   - if we are at index 0, push the elem at this index to the `result` array
//   - if, when split at one of the three possible delimiters, the element has a size of 1 (this means its just a number not a range), return the return value of passing the last element of the result array and current number to `nextNumber`
//   - otherwise, pass all the elements (spread out) to the `rangeMaker` function and push the elements (spread out) that are returned to the `result` array
// - return the result array, joined with commas


// helper function `nextNumber`
// - given two numbers as strings
//   - if, when converted to numbers, the second is bigger than the first, return the second as a number
//   - otherwise, prepend subsequently larger numbers to the second, then convert it to a number until it is larger than the first (1, 2, 3, 4, 5)
//   - return the new second number
  
//   helper function `rangeMaker`
//   - given the previous number as a number, and an array of ranges, return an array with all the numbers in the range
//   - iterate over the numbers using transformation,
  
//   PROBLEM for sceond test case, what if there is no previous number?
//     - if its the first index, pass the previous number and current number to nextNumber
//       - if no previous number, pass 0
//       - otherwise, pass the number at the last index and this to nextNumber
//     - after that you have an array of range limits
//       - iterate over it again
//         - passing this and the next number to rangeMaker, adding all the return values to one array and return the array 

// helper function `allNumsInRange`  
// - given two numbers, return an array with all the numbers between the two numbers 
// - declare `result` array, assign to empy array
// - for loop from first arg to second, incrementing by 1
//   - push each index to the result array
// - return result array
// */

// function allNumsInRange(startRangeStr, endRangeStr) {
//   let result = [];
//   for (let i = Number(startRangeStr); i <= Number(endRangeStr); i += 1) {
//     result.push(i); 
//   }
//   return result;
// }

// function rangeMaker(prev, limitArray) {
//   let arrayOfCompleteLimitNumbers = [];
//   limitArray.forEach((partialNum, idx) => {
//     if (idx === 0) {
//       let previousNumber = prev || 0;
//       arrayOfCompleteLimitNumbers.push(nextNum(previousNumber, partialNum));
//     } else {
//       arrayOfCompleteLimitNumbers.push(nextNum(arrayOfCompleteLimitNumbers[arrayOfCompleteLimitNumbers.length - 1], partialNum)); 
//     }
//   });
  
//   let result = [];
//   for (let i = 0; i < arrayOfCompleteLimitNumbers.length - 1; i += 1) {
//     result.push(...allNumsInRange(arrayOfCompleteLimitNumbers[i], arrayOfCompleteLimitNumbers[i + 1]));
//   }
//   return result;
// }

// function nextNum(prev, current) {
//   if (Number(current) > Number(prev)) return Number(current);
//   for (let i = 1;; i += 1) {
//     let numberToAppend = String(i);
//     let newNumber = Number(numberToAppend + current);
//     if (newNumber > Number(prev)) return newNumber;
//   }
// }

// function completeList(numbersList) {
//   let ranges = numbersList.split(', ');
//   let result = [];
//   ranges.forEach((range, idx) => {
//     let limits = range.split(/(-|:|..)/);
//     if (idx === 0) {
//       result.push(limits[0]);
//       return;
//     }
//     if (limits.length === 1) {
//       result.push(nextNum(result[result.length - 1], range));
//     } else {
//       let completeRange = rangeMaker(result[result.length - 1], limits);
//       result.push(...completeRange);
//     }
//   });
//   return result.join(', ');
// }

// console.log(completeList("1, 3, 7, 2, 4, 1") === '1, 3, 7, 12, 14, 21');
// console.log(completeList("1-3, 1-2") === '1, 2, 3, 11, 12');
// // console.log(completeList("1:5:2" === '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12'));
// // console.log(completeList("104-2" === '104, 105, 106, 107, 108, 109, 110, 111, 112'));
// // console.log(completeList("2..1") === '2, 3, 4, 5, 6, 7, 8, 9, 10, 11');
// // console.log(completeList("3, 2, 1..4") === '3, 12, 21, 22, 23, 24');
// // console.log(completeList("3-2-1") === "3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21");
// // console.log(completeList("545, 64:11"));//  === 545, 564, 565, .. 611
// // console.log(completeList("104-02"));// === 104, 105, ... 202













/*
**Problem**
=>objective: implement encoding and decoding for the rail fence cipher. 
Rail Fence Cipher -- there are rails, which are lines of dots and letters. You start at the top left, moving diagonally down to the right you accumulate the letters, when you reach the bottom, you move diagonally up to the right and repeat the process in a zig-zag until you just have a line of all letters and no dots. you finish at the end of the rail (anyrail). 
the whole thing is a fence, the rails are like the wooden horizontal pieces
- encoding function name `encode`
=>input: 
	- number of rails and a message
  - string? too many arguments? not enough args? different data types? always 3 rails?
  - empty string?
  - symbols? non letters?
  - non-odd number of rails?
  - 0 rails?
  - no 1 or 0, has to be 2 or greater
  
=>output: 
	- return the encoded string of just letters. 

=>requirements:

=>explicit  - starts downwards, starts at the top left rail in the first position

=>implicit  - this string is just the letters of each rail, in a row, so the first rails letters, the second then the third (or however many rails there are)
            - we are trying to get the letters of each rail
            - there are never two letters in the same position in multiple rails
            - the length of the rail is the length of the message
            - if the number of rails input is the same length or larger than the length of the message, return the message as is
            - 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3
            - 1, 2, 1, 2, 1, 2
            - 1, 2, 3, 4, 3, 2, 1, 2, 3, 4 
            - empty string input or no rails number returns empty string
            
            
=> test/edge cases - 


=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- create a list of `railNumber` lists
- iterate over the letters in the message
  - add the letters to their respective lists (order needs to be worked out to oscillate)
- return the lists concatenated

**Data Structure**
- array of arrays

**Implementation Notes**
- if you're at the first rail, go to the second rail
- if you're at the last rail, go to the second to last rail
- if you're at a rail in the middle, and the last rail was less than your rail, go to the higher number rail
- if you're at a rail in the middle, and the last rail was greater than your rail, go to a lower number rail

**Algorithm**
helper function `createListOfRails`, given a number
  - return an array with teh specified number of empty arrays nested inside
  - for loop from 1 to `railNumber`
  - push an empty array to `listOfRails`
  


main function
- guard clause for the last two (maybe 3) test cases
- declare variable `listOfRails`, assign to the return value from passing `railNumber` to `createListOfRails`
- declare variable `lastTwoRails`, assign to an array with [0, 1]
- split the given `message`, iterate over the chars, for each char
  - declare variable `currentRail`, assign to passing `lastTwoRails` and `railNumber` to `findCurrentRail`
  - push the `char` to the nested array that corresponds with the `currentRail`
  - adjust the `lastTwoRails` -- make the first element the second, make the last element the `currentRail`
- join each nested array of `listOfRails`, then join all the arrays together, no spaces


**Check algorithm against test cases

helper function `findCurrentRail`
- given an array with two numbers (`lastTwoRails`) and an integer (`numberOfRails`)
- if you're at the first rail (`lastTwoRails[1]` === 1), go to the second rail (return 2)
- if you're at the last rail(`lastTwoRails[1]` === numberOfRails), go to the second to last rail (return numberOfRails - 1)
- if you're at a rail in the middle, and the last rail was less than your rail, go to the higher number rail
- if you're at a rail in the middle, and the last rail was greater than your rail, go to a lower number rail
*/
// function findCurrentRail(lastTwoRails, numberOfRails) {
//   if (lastTwoRails[1] === 0) {
//     return 1;
//   } else if (lastTwoRails[1] === numberOfRails - 1) {
//     return numberOfRails - 2;
//   } else {
//     if (lastTwoRails[0] < lastTwoRails[1]) {
//       return lastTwoRails[1] + 1;
//     } else {
//       return lastTwoRails[1] - 1;
//     }
//   }
// }

// function createListOfRails(numberOfRails){
//   let result = [];
//   for (let i = 1; i <= numberOfRails; i+= 1) {
//     result.push([]); 
//   }
//   return result;
// }

// function encode(message, numberOfRails) {
//   if (message.length === 0 || !numberOfRails) return '';
//   let listOfRails = createListOfRails(numberOfRails);
//   let lastTwoRails = [-1, 0];
//   let currentRail = lastTwoRails[1];
//   message.split('').forEach(char => {
//     listOfRails[currentRail].push(char);
//     currentRail = findCurrentRail(lastTwoRails, numberOfRails);
//     lastTwoRails[0] = lastTwoRails[1];
//     lastTwoRails[1] = currentRail;
//   });
//   return listOfRails.map(lettersArray => lettersArray.join('')).join('');
// }

// console.log(encode("WEAREDISCOVEREDFLEEATONCE", 3) === 'WECRLTEERDSOEEFEAOCAIVDEN');
// console.log(encode("HIMYNAMEISPAUL", 2) === 'HMNMIPUIYAESAL');
// console.log(encode("DOROTHYISADORABLEWOWWHATAKID", 4) === 'DYROAOHIOAWWTKRTSDBEWAIOALHD');
// console.log(encode("GOONYOUGUNNERSWINTHELEAGUE", 11) === 'GLOEEOHANTGYNUOIEUWGSURNEN');
// console.log(encode("GAS", 3) === 'GAS');
// console.log(encode("", 3) === '');
// console.log(encode("ASDF") === '');







/*
**Problem**
=>objective: given a ciphertext, decode it and return the message 

=>input: 
	- a string of characters that have been encoded using the rail fence cipher
	- empty string? string with symbols? different data type? no aruments?
	- rail number -- different data type? less than 2? negative? infinity? NaN?

=>output: 
	- a decoded string

=>requirements:

=>explicit  - to decrypt a message , take the zig zag shape from the rails
            - plug in the number of spots you have in the first rail with that many letters, second rail etc
            - then read along the zig zag shape to get all the letters in the right order
            - if there are two rails, the letters are split between them
            - if there are three rails, every other letter is in the middle, the rest of the rails are split between the first and last rail
            - if there are an even number of rails, each rail has the same number of 

=>implicit  - we need to determine how many spots are in each rail
            - first one starts at 0, gets back at double the rest of the rows (so if 4 rows, 3 * 2)
            - second one starts at 1, gets back at 
            - using the indexes, 
              - 1, 2, 3, 4, 3, 2, 1, 2, 3 

=> test/edge cases - 
console.log(decode('WIREEEDSEEEACAECVDLTNROFO', 4) === 'WEAREDISCOVEREDFLEEATONCE');
console.log(decode('WAEICVRDLETNEERDSOEEFEAOC', 2) === 'WEAREDISCOVEREDFLEEATONCE');
console.log(decode('WIREEEDSEEEACAECVDLTNROFO', 4) === 'WEAREDISCOVEREDFLEEATONCE');
console.log(decode('WEAREDISCOVEREDFLEEATONCE', 5) === 'WEAREDISCOVEREDFLEEATONCE');
console.log(decode('WEAREDISCOVEREDFLEEATONCE', 28) === 'WEAREDISCOVEREDFLEEATONCE');
console.log(decode('WNEOCATERAEEDEILSFCDOEVRE', 12) === 'WEAREDISCOVEREDFLEEATONCE');
console.log(decode('WNEOCATERAEEDEILSFCDOEVRE') === '');
console.log(decode('', 12) === '');

=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- find out how many letters go in each rail
- slice off letters from the message according to ^^
- create a new string by popping off the letters in the 12321 order from each array holding the letters

**Data Structure**
- nested array of arrays

**Implementation Notes**


**Algorithm**
- guard clauses for empty and undefined numbers ,
- declare variable `listOfRails`, assign to return value from passing `numberOfRails` to `createListOfRails`
- declare variable `lastTwoRails`, assign to an array with [-1, 0]
- declare variable `currentRail`, assign to 0;
- declare variable `letters

- iterate over the index numbers of `message`
  - push a '.' to the nested array that corresponds with the `currentRail`
  - declare variable `currentRail`, assign to passing `lastTwoRails` and `railNumber` to `findCurrentRail`
  - adjust the `lastTwoRails` -- make the first element the second, make the last element the `currentRail`
  
- declare variable `lettersPerRail`, map over `listOfRails`
  - transforming each array to its length number

- declare variable `letters`, assign to the message, split for each char
- declare variable `railsWithLetters`, map over `lettersPerRail`
  - starting from 0, up to the `length`, splice from `letters`
  
helper function `readDiagonally`
  - given an array of rails and a `totalLetters` integer, read the letters diagonally and return the string
  - declare variable `result`, assign to empty string
  - declare variable `lastTwoRails`, assign to array [-1, 0]
  - declare variable `currentRail`, assign to 0;
  - for loop from 1 to `totalLetters`
    - from the `currentRail`, shift the first letter from it and append it to the `result`String
    - set the new `currentRail`
    - set the new `lastTwoRails`

**Check algorithm against test cases


- guard clauses for empty and undefined numbers ,
- declare variable `listOfRails`, assign to return value from passing `numberOfRails` to `createListOfRails`
- declare variable `lastTwoRails`, assign to an array with [-1, 0]
- declare variable `currentRail`, assign to 0;
- declare variable `letters

- iterate over the index numbers of `message`
  - push a '.' to the nested array that corresponds with the `currentRail`
  - declare variable `currentRail`, assign to passing `lastTwoRails` and `railNumber` to `findCurrentRail`
  - adjust the `lastTwoRails` -- make the first element the second, make the last element the `currentRail`
  
- declare variable `lettersPerRail`, map over `listOfRails`
  - transforming each array to its length number

- declare variable `letters`, assign to the message, split for each char
- declare variable `railsWithLetters`, map over `lettersPerRail`
  - starting from 0, up to the `length`, splice from `letters`

helper function `readDiagonally`
  - given an array of rails and a `totalLetters` integer, read the letters diagonally and return the string
  - declare variable `result`, assign to empty string
  - declare variable `lastTwoRails`, assign to array [-1, 0]
  - declare variable `currentRail`, assign to 0;
  - for loop from 1 to `totalLetters`
    - from the `currentRail`, shift the first letter from it and append it to the `result`String
    - set the new `currentRail`
    - set the new `lastTwoRails`

*/

// function readDiagonally(rails, totalLetters) {
//   let result = '';
//   let lastTwoRails = [-1, 0];
//   let currentRail = lastTwoRails[1];
//   for (let i = 1; i <= totalLetters; i += 1) {
//     result += rails[currentRail].shift();
//     currentRail = findCurrentRail(lastTwoRails, rails.length);
//     lastTwoRails[0] = lastTwoRails[1];
//     lastTwoRails[1] = currentRail;
//   }
//   return result;
// }

// function decode(message, numberOfRails) {
//   if (message.length === 0 || !numberOfRails) return '';
//   let listOfRails = createListOfRails(numberOfRails);
//   let lastTwoRails = [-1, 0];
//   let currentRail = lastTwoRails[1];
//   message.split('').forEach(char => {
//     listOfRails[currentRail].push('.');
//     currentRail = findCurrentRail(lastTwoRails, numberOfRails);
//     lastTwoRails[0] = lastTwoRails[1];
//     lastTwoRails[1] = currentRail;
//   });
//   let lettersPerRail = listOfRails.map(array => array.length);
//   let letters = message.split('');
//   let railsWithLetters = lettersPerRail.map(length => {
//     return letters.splice(0, length);  
//   });
//   return readDiagonally(railsWithLetters, message.length);
// }

// function findCurrentRail(lastTwoRails, numberOfRails) {
//   if (lastTwoRails[1] === 0) {
//     return 1;
//   } else if (lastTwoRails[1] === numberOfRails - 1) {
//     return numberOfRails - 2;
//   } else {
//     if (lastTwoRails[0] < lastTwoRails[1]) {
//       return lastTwoRails[1] + 1;
//     } else {
//       return lastTwoRails[1] - 1;
//     }
//   }
// }

// function createListOfRails(numberOfRails){
//   let result = [];
//   for (let i = 1; i <= numberOfRails; i+= 1) {
//     result.push([]); 
//   }
//   return result;
// }

// console.log(decode('WECRLTEERDSOEEFEAOCAIVDEN', 3) === 'WEAREDISCOVEREDFLEEATONCE');
// console.log(decode('WAEICVRDLETNEERDSOEEFEAOC', 2) === 'WEAREDISCOVEREDFLEEATONCE');
// console.log(decode('WIREEEDSEEEACAECVDLTNROFO', 4) === 'WEAREDISCOVEREDFLEEATONCE');
// console.log(decode('WCLEESOFECAIVDENRDEEAOERT', 5) === 'WEAREDISCOVEREDFLEEATONCE');
// console.log(decode('WEAREDISCOVEREDFLEEATONCE', 28) === 'WEAREDISCOVEREDFLEEATONCE');
// console.log(decode('WNEOCATERAEEDEILSFCDOEVRE', 12) === 'WEAREDISCOVEREDFLEEATONCE');
// console.log(decode('WNEOCATERAEEDEILSFCDOEVRE') === '');
// console.log(decode('', 12) === '');
