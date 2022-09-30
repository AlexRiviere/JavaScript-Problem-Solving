"use strict";

/*
**Problem**
=>objective: given an integer, return the sum of its digits

=>input: integer

=>output: integer (sum of the `integer`'s digits)

=>rules:

=>explicit	-	no loops, use method calls

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `numAsString`, assign to coerced `num`
- split `numAsString` into chars, iterate over the chars with `reduce()`, initial value 0
  - convert each `char` to a number and add it to the initial value

*/

// function sum(num) {
//   let numAsString = String(num);
//   return numAsString.split('').reduce((sum, char) => {
//     return sum + Number(char);
//   }, 0);
// }

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45



//Alphabetical Numbers

/*
**Problem**
=>objective: given an array of integers between 0 and 19, return a new array sorted based on the english word

=>input: array of integers

=>output: new array of integers sorted

=>rules:

=>explicit	-	new array, do not mutate the argument

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare `numbersAsWords`, assign to array with words for index numbers
- declare `arrCopy`, assign to copy of array
- return `arrCopy` sorted for words of the integers

*/

// function alphabeticNumberSort(arr) {
//   const numbersAsWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//   let arrCopy = [...arr];
//   return arrCopy.sort((a, b) => {
//     if (numbersAsWords[a] < numbersAsWords[b]) {
//       return -1;
//     } else if (numbersAsWords[a] > numbersAsWords[b]) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// }

// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));

// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]






/*
**Problem**
=>objective: given two array args, return a new array with the products of all possible combinations of the pairs that exist between the two arrays. return the new array sorted in ascending order

=>input: two arrays

=>output: one array sorted with all products of possible combinations of the initial arrays

=>rules:

=>explicit	-	neither argument is an empty array, sort return value in ascending order

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**
- each number in the first array needs to be multipled by each number in the second array

**Algorithm**
- declare variable `result`, assign to empty array
- iterate over the elements of the first array
  - for each element, iterate over all the elements in teh second array, multiply this element * that element, store the answer in the `result` array
- sort the `results` array


- max abstraction
  - declare variable `result`, assign to empty array
  - iterate over the elements of the first `arr1`
    - pass the current element and the whole second `arr2` to `multEachBy`
    - concatenate the elements of the return value from ^^ to results
  - return `result` sorted in ascending order
  
  - declare function `multEachBy`, accepts an array and a number as arguments
    - map over the array, multiplying each element by the `number` argument and return the new array

*/

// function multiplyAllPairs(arr1, arr2) {
//   let result = [];
//   arr1.forEach(int => {
//     let products = multEachBy(arr2, int);
//     result.push(...products);
//   });
//   return result.sort((a, b) => a - b);
// }

// function multEachBy(array, int) {
//   return array.map(elem => elem * int);
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]




// Sum of Sums

/*
**Problem**
=>objective: given an array of numbers, return the sum of the first + (first + second) + (first + second + third) 

=>input: array

=>output: sum

=>rules:

=>explicit	-  the array always has at least one number

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**
- we can iterate up to the number of elems, slice from the 0 index to this index, abstract the summation of that slice

**Algorithm**
- declare variable `totalSum`, assign to 0
- iterate over the elements in the given `array` and their `index`
  - declare variable `slice`, assign to return value from slice `array` from 0 to this index
  - declare variable localSum , assing to return value from pass this `slice` to `sumArray` helper function 
  - add `localSum` to `totalSum` 
- return `totalSum`

*/

// function sumOfSums(array) {
//   let totalSum = 0;
//   array.forEach((num, index) => {
//     let localSum = sumArray(array.slice(0, index + 1));
//     totalSum += localSum;
//   });
//   return totalSum;
// }

// function sumArray(array) {
//   return array.reduce((sum, int) => sum + int); 
// }


// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35







//Leading Substrings

/*
**Problem**
=>objective: given a string argument, return a list of all possible substrings that start with the first letter, order the list short to long

=>input: a string

=>output: an array of strings

=>rules:

=>explicit	- 	output is ordered short to long

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `result`, assign to empty array
- iterate over the indexes of the string (for/in)
  - from 0 to the current index, slice the string 
  - push the slice to `result`
- return result
*/

// function leadingSubstrings(string) {
//   let result = [];
//   for (let index in string) {
//     result.push(string.slice(0, Number(index) + 1));
//   }
//   return result;
// }


// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]








// All Substrings

/*
**Problem**
=>objective: given a string, return an array with all possible substrings from the given `string`. The order of the list should be in index order first (where the char's index is found), then short to long

=>input: string

=>output: array of strings, ordered by index then length

=>rules:

=>explicit	- 	use `leadingSubstrings`

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `result`, assign to empty array
- for loop to iterate over indexes of the `string`
  - pass a slice of the `string` from this index to the end of the string to `leadingSubstrings`
  - push the elements of the return value of ^^ to `result` 
- return `result`

*/

// function substrings(string) {
//   let result = [];
//   for (let i = 0; i < string.length; i += 1) {
//     result.push(...leadingSubstrings(string.slice(i)));  
//   }
//   return result;
// }


// function leadingSubstrings(string) {
//   let result = [];
//   for (let index in string) {
//     result.push(string.slice(0, Number(index) + 1));
//   }
//   return result;
// }

// console.log(substrings('abcde'));




// Palindromic Substrings


/*
**Problem**
=>objective: given a string, return an array of palindromes that come from substrings in the string, sorted by order of appearance

=>input: string

=>output: array of palindromes

=>rules:

=>explicit	- 	case counts, punctuation counts, so it has to be exactly a palindrome

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `allSubstrings`, assign to return value of passing `string` to `substrings`
- return the return value from calling `filter` on `allSubstrings`
  - return true if `substring` forwards is exactly the same as it is reversed
  - use helper function `reverseString`

*/

// function reversedString(string) {
//   return string.split('').reverse().join(''); 
// }

// function palindromes(string) {
//   let allSubstrings = substrings(string).filter(substring => substring.length !== 1);
//   return allSubstrings.filter(substring => {
//     return substring === reversedString(substring);  
//   });
// }

// function substrings(string) {
//   let result = [];
//   for (let i = 0; i < string.length; i += 1) {
//     result.push(...leadingSubstrings(string.slice(i)));  
//   }
//   return result;
// }


// function leadingSubstrings(string) {
//   let result = [];
//   for (let index in string) {
//     result.push(string.slice(0, Number(index) + 1));
//   }
//   return result;
// }

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]
// console.log(palindromes('hello-madam-did-madam-goodbye'));
// console.log(palindromes('knitting cassettes'));






//Grocery List

/*
**Problem**
=>objective: given an array of arrays with strings in index 0 and numbers in index 1, return an array with the strings repeated the number of times that shared the array with them

=>input: 2d array

=>output: 1d array with multiples

=>rules:

=>explicit	- 	

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `result`, assign to empty array
- iterate over the given `arrayOfArrays`
  - for loop, 1 to second element of array
    - push the string to `result`
- return `result`

*/

// function buyFruit(arrayOfArrays) {
//   let result = [];
//   arrayOfArrays.forEach((arr => {
//     for (let i = 1; i <= arr[1]; i += 1) {
//       result.push(arr[0]); 
//     }
//   }));
//   return result;
// }

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));








// Inventory Item Transactions
/*
**Problem**
=>objective: given an idnumber, and a list of transactions (an array of objects with keys id, movement, quantity), return an array with only the transactions of the id number passed in

=>input: idNumber, transactions array of objects

=>output: array of transactions that match the given `idNumber`

=>rules:

=>explicit	- 	

=>implicit/edge cases - invalid id number, no transactions given, transactions given in another format, 


**Data Structure**


**Implementation Notes**


**Algorithm**
- filter the `transactions` for ones that match the `idNumber`

*/


// function transactionsFor(idNumber, transactions) {
//   return transactions.filter(transaction => transaction.id === idNumber);
// }

// const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                       { id: 105, movement: 'in',  quantity: 10 },
//                       { id: 102, movement: 'out', quantity: 17 },
//                       { id: 101, movement: 'in',  quantity: 12 },
//                       { id: 103, movement: 'out', quantity: 15 },
//                       { id: 102, movement: 'out', quantity: 15 },
//                       { id: 105, movement: 'in',  quantity: 25 },
//                       { id: 101, movement: 'out', quantity: 18 },
//                       { id: 102, movement: 'in',  quantity: 22 },
//                       { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]




// Inventory Item Availability

/*
**Problem**
=>objective: given two args, idNumber and an array of transaction objects, return true or false for if the item is available. 

=>input: idNumber, transactions array

=>output: boolean

=>rules:

=>explicit	- use the other function, movenent out is negative

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**
- If you add the quantity with movement in minus the quantity with movement out, return true if that is > 0

**Algorithm**
- declare variable `onlyID`, assign to return value of passing both args to `transactionsFor`
- declare variable `sum`, assign to ---- reduce `onlyID`
  - if the movment is out
    - subtract the quantity from `total`, and return total
  - otherwise
    - add the quantity to `total`, return total
- return a comparison of sum > 0 

*/

function sumQuantity(idArray) {
  return idArray.reduce((total, transactionObj) => {
    if (transactionObj.movement === 'out') {
      return total - transactionObj.quantity;
    } else {
      return total + transactionObj.quantity;
    }
  }, 0); 
}

function isItemAvailable(idNumber, transactions) {
  let onlyID = transactionsFor(idNumber, transactions);
  let sum = sumQuantity(onlyID);
  return sum > 0;
}


function transactionsFor(idNumber, transactions) {
  return transactions.filter(transaction => transaction.id === idNumber);
}
const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true