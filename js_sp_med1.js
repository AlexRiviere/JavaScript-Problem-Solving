//Rotation Part 1

/*
**Problem**
=>objective: given an array, move the first element to the end of the array, dont modify the original array

=>input: 
	- anything other than an array, return undefined
	- empty array? return an empty array

=>output: 
	- new array, rotated
	- undefined
	- empty array

=>requirements:

=>explicit  - do not modify the original array
            - move the first element to the end of teh array
            - return a new array or a copy of the original array

=>implicit  - the second element, becomes the first element, all the rest of the elements shift one place (index) lower, and the original first element is tacked on to the end
            - if its only 1 element, return a new array with only that one element
            - array can be made up of any data type, even objects or arrays
            - leave nested objects alone, just move the whole object not anything inside of the object

=> test/edge cases - 

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- return a slice of the original array (without the first element) concatenated with the original first element 

**Data Structure**
- arrays

**Implementation Notes**


**Algorithm**
- if the input is not an array, return `undefined`
- if the array is empty or has 1 element, return a copy
- return the array slice from the 1 index to the rest, concatenated with the first element 

**Check algorithm against test cases


*/

// function rotateArray(array) {
//   if (!Array.isArray(array)) return undefined;
//   if (array.length <= 1) return array.slice(0);
//   return array.slice(1).concat(array[0]);
// }

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
// const array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]







/*
**Problem**
=>objective: given an integer and a number, return an integer with the `number` last digits rotated by one digit, moving the first digit to the end, and all other digits to the left

=>input: 
	- two integers
	- different data types? no argument? too many args?
	- 0? negative number? fractional number? NaN? Infinity?
	- `digitsToRotate` > the number of digits in the `integer`? --> rotate the whole number
	- `n` is 0, rotate nothing

=>output: 
	- undefined if either input is not an integer
	- otherwise, an integer, with digits rotated

=>requirements:

=>explicit  - rotate the rightmost `n` digits, by one place, to the left, so that the first of this slice of digits ends up as the last and all other digits are moved left by one place

=>implicit  - rotating the last digit does nothing, rotating the last two digits flips them 
            - if `n` is larger that the length of the integer, you rotate the whole number

=> test/edge cases - 

=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- slice the last `n` digits, rotate them, combine them with the first part of the number

**Data Structure**
- arrays of strings

**Implementation Notes**


**Algorithm**
- guard clauses
- declare a variable `digits`, the given `number` coerced to a string and split for each string digit
- declare variable `sliceToBeRotated`, splice `digits` from -n (splice(-n))
- declare variable `rotatedSlice` to `sliceToBeRotated` sliced from 1) concatenated with its first element
- return digits.concatenated with `rotatedSlice`, join the resulting array and coerce it to a number data type

**Check algorithm against test cases


*/


// function rotateRightmostDigits(number, n) {
//   if (n === 0 || n === 1) return number;
//   if (!Number.isInteger(number) || !Number.isInteger(n)) return undefined;
//   if (n < 0) return undefined;
// // - return digits.concatenated with `rotatedSlice`, join the resulting array and coerce it to a number data type
//   let digits = String(number).split('');
//   let sliceToBeRotated = digits.splice(-n);
//   let rotatedSlice = sliceToBeRotated.slice(1).concat(sliceToBeRotated[0])
//   return Number(digits.concat(rotatedSlice).join(''));
// }


// console.log(rotateRightmostDigits(735291, 2)===       735219);
// console.log(rotateRightmostDigits(735291, 3)===       735912);
// console.log(rotateRightmostDigits(735291, 4)===       732915);
// console.log(rotateRightmostDigits(735291, 5)===       752913);
// console.log(rotateRightmostDigits(735291, 6)===       352917);
// console.log(rotateRightmostDigits(735291, 7)===       352917);
// console.log(rotateRightmostDigits(735291, 100)===       352917);
// // guard clause handles
// console.log(rotateRightmostDigits(735291, 1)===       735291);
// console.log(rotateRightmostDigits()===       undefined);
// console.log(rotateRightmostDigits('a', 7)===       undefined);
// console.log(rotateRightmostDigits(89, 'p')===       undefined);
// console.log(rotateRightmostDigits(501, 0)===       501);
// console.log(rotateRightmostDigits(501, -1)===       undefined);









// Rotation Part 3

/*
**Problem**
=>objective: given a `number`, pass it through rounds of rotation (left rotation -- first digit becomes last) starting from the first (the whole number) going to the second to last digit (which will rotate the last two numbers). 

=>input: 
	- integer
	- different data type? no arg? too many args?
	- negative? 0? fractional? NaN, infinity
	- anything other than an integer, return undefined
	- 1 digit integer, return it as is
	- an integer with 0 as its second digit - rotate and drop the zero

=>output: 
	- undefined
	- rotated number

=>requirements:

=>explicit  - rotate the whole number, then rotate that number from the second digit, then rotate that number from the third digit, all the way to the second to last digit. always keeping the beginning of the number 

=>implicit  - 

=> test/edge cases - 

=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- take slices of the integer from incrementing starting indexes
- rotate the slice, and save the first number to a result
- remove the first number 
- repeat until your at the last number, 

**Data Structure**
- array of strings (numbers)

**Implementation Notes**


**Algorithm**
- guard clauses
- declare variable `result`, assign to empty string
- declare variable `digits`, assign to coercing given `number` to a string then splitting the string at each char
- for loop from 0 to length of `digits`
  - rotate `digits`
    - slice from 1 concat to first element
  - splice the first digit and add it to `result`
- return result coerced to a number

**Check algorithm against test cases


*/

// "use strict";

// function maxRotation(number) {
//   if (!Number.isInteger(number) || number < 0) return undefined; 
//   if (String(number).length === 1) return number;
  
//   let result = '';
//   let digits = String(number).split('');
//   for (let i = 0; i < String(number).length; i += 1) {
//     digits = digits.slice(1).concat(digits[0]);
//     result += digits.shift();
//   }
//   return Number(result);
  
// }

// console.log(maxRotation(735291)===           321579);
// console.log(maxRotation(35)===               53);
// console.log(maxRotation(105)===              15);// -- the leading zero gets dropped
// console.log(maxRotation(8703529146)===       7321609845);
// console.log(maxRotation(870)===       780);
// // guard clauses
// console.log(maxRotation(3)===                3);
// console.log(maxRotation(0)===                0);
// console.log(maxRotation()=== undefined);
// console.log(maxRotation(null)=== undefined);







// Stack Machine Interpretation

/*
**Problem**
=>objective: Write a function that takes a list of commands, and uses them as a program in a stack-and-register type of program

=>input:
	- a string with spaces delimiting either the commands or the integers (pos or neg)

=>output: 
	- printing what is in the register when command `PRINT` is evaluated

=>requirements:

=>explicit  - all operations are integer operations
            - if the command is an integer, place that value in the register, don't  touch the stack
            - otherwise, do the command

=>implicit  - 

=> test/edge cases - 

=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- for each command
  - if its an integer, store it
  - otherwise, do the command

**Data Structure**
- array for the stack
- an array for the list of commands

**Implementation Notes**


**Algorithm**
- declare variable `stack`, assign to empty array
- declare variable `register`, assign to 0
- declare variable `commands`, assign to given `program`, split at the spaces
- iterate over `commands`
  - if its an integer, store it in the register
  - switch statement for different commands

**Check algorithm against test cases


*/
"use strict";


// function minilang(program) {
// //   - declare variable `stack`, assign to empty array
// // - declare variable `register`, assign to 0
// // - declare variable `commands`, assign to given `program`, split at the spaces
// // - iterate over `commands`
// //   - if its an integer, store it in the register
// //   - switch statement for different commands
//   let stack = [];
//   let register = 0;
//   let commands = program.split(' ');
//   commands.forEach(command => {
//     if (Number.isInteger(Number(command))) register = Number(command); 
//     switch (command) {
//       case 'PUSH':
//         stack.push(register);
//         break;
//       case 'ADD':
//         register = stack.pop() + register;
//         break;
//       case 'SUB':
//         register = register - stack.pop();
//         break;
//       case 'MULT':
//         register = stack.pop() * register;
//         break;
//       case 'DIV':
//         register = Math.round(register / stack.pop());
//         break;
//       case 'REMAINDER':
//         register = register % stack.pop();
//         break;
//       case 'POP':
//         register = stack.pop();
//         break;
//       case 'PRINT':
//         console.log(register);
//         break;      
//     }
//   });
// }


// minilang('PRINT');
// 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)










//Word to Digit
/*
**Problem**
=>objective: given a string, return a string with all number words, converted to digits. preserve punctuation if its attached to a digit

=>input: 
	- a string with or without numberwords in it
	- different data type? no args? Extra args? -- return null
	- empty string? -- return empty string
	- a string with no number words?
	- a string with number words inside of other words? 'fiver' 'threesome' 'oneness' 'sixties'
	  - need to deal with ^^, not convert the number in this situation
	- a number word attached to some symbol or punctuation
	  - need to deal with this also and convert the number word
	- only single digit numbers? -- yes
	- negative? no
	- a numberword with all uppercase or capitalized?
	  - yes, need to deal with this also

=>output: 
	- null
	- new string with number words converted to digitsj

=>requirements:

=>explicit  - convert every occurence of a number word to its corresonding digit character

=>implicit  - there are certain things we need to be careful of, go through the inputs to make test cases
              - a string with number words inside of other words
              - a string with number words attached to symbols or punctuation
              - empty string
              - string with no number words to convert
              - a string with capitalized or uppercase number words -- case needs to be preserved

=> test/edge cases - 
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') === "Please call me at 5 5 5 1 2 3 4. Thanks.");
console.log(wordToDigit('Oneness is the fiver of threesomes when you're in your sixties') === 'Oneness is the fiver of threesomes when you're in your sixties');
console.log(wordToDigit('') === '');
console.log(wordToDigit('Five one six THREE tWo is the number.' === '51632 is the number.');
console.log(wordToDigit('eight') === '8');
console.log(wordToDigit('eight!') === '8!');
=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- mapping over each word
  - if it is a number word, replace the number word portion of the word, preserving the rest of the symbols
- combine the array

**Data Structure**
- array with number words in their respective index
- array to store and iterate over the words of the string passed in

**Implementation Notes**


**Algorithm**
- declare a constant variable `numberWords`, store number words in an array
- decalre a variable `words`, assign to the return value from splitting the string at the spaces
- declare variable `transformedWords`, assign to return value from mapping over `words`
  - for each `word`
    - if when stripped of all symbols and made lowercase, the `word` returns an index when searched for in the `numberWords`
      - in the original word, lowercased, replace the `word` match with its corresponding number word, preserving the punctuation around it
- return `transformedWords`, joined with spaces

**Check algorithm against test cases

*/
// "use strict";

// function transformPotentialNumberWord(word) {
//   const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//   let cleanedWord = word.replace(/[^a-z]/ig, '').toLowerCase();
//   let indexOfNumberWord = numberWords.indexOf(cleanedWord);
//   if (indexOfNumberWord !== -1) {
//     return word.toLowerCase().replace(numberWords[indexOfNumberWord], indexOfNumberWord);
//   } else {
//     return word; 
//   }
// }

// function wordToDigit(string) {
//   let words = string.split(' ');
//   let transformedWords = words.map(word => transformPotentialNumberWord(word)); 
//   return transformedWords.join(' ');
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') === "Please call me at 5 5 5 1 2 3 4. Thanks.");
// console.log(wordToDigit("Oneness is the fiver of threesomes when you're in your sixties") === "Oneness is the fiver of threesomes when you're in your sixties");
// console.log(wordToDigit('') === '');
// console.log(wordToDigit('Five one six THREE tWo is the number.') === '5 1 6 3 2 is the number.');
// console.log(wordToDigit('eight') === '8');
// console.log(wordToDigit('eight!') === '8!');









// Fibonacci Numbers (recursion)

/*
**Problem**
=>objective: given a number `n`, return the nth fibonacci number 

=>input: 
	- different data type? no arg? extra args? --> null
	- fractional? 0? negative? NaN? Infinity? --> null
	- only accepts integers greater than 0

=>output: 
	- null
	- nth fibonacci number as a number type

=>requirements:

=>explicit  - fibonacci numbers start with 1 and 1, then the next number is always the sum of the previous two numbers

=>implicit  - 

=> test/edge cases - 

=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- if n is 1 or 2, return 1
- other wise return the sum of fib(n-1) and fib(n-2)

5
fib(4) + fib(3)
fib(3) + fib(2) + || fib(2) + fib(1)
fib(2) + fib(1)

**Data Structure**


**Implementation Notes**


**Algorithm**
- if `n` is 1 or 2, return 1
- otherwise, call the function with `n - 1` and add that to calling the function with `n - 2`

**Check algorithm against test cases


*/

// "use strict";

// function fibonacci(n) {
//   if (!Number.isInteger(n) || n < 1) return null;
//   if (n === 1 || n === 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(1)===  1);
// console.log(fibonacci(2)===  1);
// console.log(fibonacci(3)===  2);
// console.log(fibonacci(4)===  3);
// console.log(fibonacci(5)===  5);
// console.log(fibonacci(12)=== 144);
// console.log(fibonacci(20)=== 6765);
// console.log(fibonacci()=== null);
// console.log(fibonacci('a')=== null);








// Fibonacci (procedural)

/*
**Problem**
=>objective: given a number `n`, return the nth fibonacci number without using recursion

=>input: 
	- 

=>output: 
	- 

=>requirements:

=>explicit  - has to be non-recursive

=>implicit  - 

=> test/edge cases - 

=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- if n is 1 or 2, return 1
- store the previous 2 nums
- otherwise, starting from 2 to n
  - compute the third
  - adjust other two nums

**Data Structure**


**Implementation Notes**


**Algorithm**
- if `n` is 1 or 2, return 1
- declare variable `lastLastNumber`, assign to 1
- declare variable `lastNumber`, assign to 1
- for loop from 3 to `n`, inc by 1
  - declare variable `fibNumAtThisIndex`, assign to `lastLastNumber` + `lastNumber`
  - reassign `lastLastNumber` to `lastNumber`
  - reassign `lastNumber` to `fibNumAtThisIndex`
- return `fibNumAtThisIndex`

**Check algorithm against test cases


*/

// "use strict";


// function fibonacci(n) {
//   if (n === 1 || n === 2) return 1;
//   let lastLastNumber = 1;
//   let lastNumber = 1;
//   for (let idx = 3; idx <= n; idx += 1) {
//     let fibNumAtThisIndex = lastLastNumber + lastNumber;
//     lastLastNumber = lastNumber;
//     lastNumber = fibNumAtThisIndex;
//   }
//   return lastNumber;
// }

// console.log(fibonacci(3)=== 2);
// console.log(fibonacci(20)=== 6765);
// console.log(fibonacci(50)=== 12586269025);
// console.log(fibonacci(75)=== 2111485077978050);










// Fibonacci Numbers (Memoization)

/*
**Problem**
=>objective: fix the recursive solution so that it is more efficient by using memoization

=>input: 
	- n

=>output: 
	- 

=>requirements:

=>explicit  - memoization saves a computer value for future reuse, instead of computing it from scratch every time
            - using memoization saves calls to `fibonacci(nth - 2)` because those values were already calculated with `fibonacci(nth - 1)`
            - refactor the code to use memoization

=>implicit  - 

=> test/edge cases - 

=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- 

**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `lastFibonacci`, assign to looking it up in the object
- declare variable `lastLastFibonacci`, assign to looking it up in the object
- if the first is undefined, calculate it using recursion
- if the second is undefined, calculate it using recursion
- return `lastFibonacci` + `lastLastFibonacci`

**Check algorithm against test cases


*/
"use strict";

// function fibonacci(nth) {
//   if (nth <= 2) {
//     return 1;
//   } else {
//     return fibonacci(nth - 1) + fibonacci(nth - 2);
//   }
// }

// function fibonacci(nth) {
//   let calculatedFibs = {
//     1: 1,
//     2: 1,
//   };
//   if (calculatedFibs[nth]) return calculatedFibs[nth];
//   let lastFibonacci = calculatedFibs[nth - 1];
//   let lastLastFibonacci = calculatedFibs[nth - 2];
//   if (!lastFibonacci) lastFibonacci = fibonacci(nth - 1);
//   if (!lastLastFibonacci) lastLastFibonacci = fibonacci(nth - 2);
//   return lastFibonacci + lastLastFibonacci;
  
// }

// console.log(fibonacci(1)===  1);
// console.log(fibonacci(2)===  1);
// console.log(fibonacci(3)===  2);
// console.log(fibonacci(4)===  3);
// console.log(fibonacci(5)===  5);
// console.log(fibonacci(12)=== 144);
// console.log(fibonacci(20)=== 6765);
// console.log(fibonacci(35));











