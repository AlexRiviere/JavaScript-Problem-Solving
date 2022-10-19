// Lettercase Percentage Ratio

/*
**Problem**
=>objective: given a `string`, return an object with three properties: perc of lower, upper and neither chars

=>input: 
	- a string
	- a different data type? no argument? two many args?
	- a string of all neither
	- all upper
	- all lower
	- empty string?
	- do we count spaces? yes

=>output: 
	- an object with lowercase, uppercase and neither as keys, and strings representing the percentage of each that make up the given `string`
	- each percentage is rounded to 2 decimal places

=>requirements:

=>explicit  - the string will always contain at least one letter

=>implicit  - spaces count as neither

=> test/edge cases - 

=> Questions - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- iterate over the chars, if its upper add one to upper, lower to lower, etc
- iterate over the object, converting each count to a percetage using the length of the string passed in, remember to format correctly

**Data Structure**
- object to hold the counts
- array to iterate over the `chars` in the given `string`
- array to iterate over the keys of the object holding the counts

**Implementation Notes**
- a.match(/\d+\.\d{2}/)

**Algorithm**
- declare variable `counts`, assign to an object with three property names lowercase, uppercase, and neither, all associated with a value of 0
- split the given `string` for each char, iterate over each char, for each char
  - if its uppercase (>= 'A' <='Z'), add 1 to counts.uppercase
  - else if its lowercase (>= 'a' <='z'), add 1 to counts.lowercase
  - otherwise, add 1 to counts.neither
- store the object keys from `count` in an array, iterate over the array
  - divide the count by the length of the given `string`
  - format the number to have 2 decimal places
  - turn the number into a string and make that the new value with which the key being iterated over is associated
- return `counts`
  
**Check algorithm against test cases


*/

"use strict";

// function letterPercentages(string) {
// - split the given `string` for each char, iterate over each char, for each char
//   - if its uppercase (>= 'A' <='Z'), add 1 to counts.uppercase
//   - else if its lowercase (>= 'a' <='z'), add 1 to counts.lowercase
//   - otherwise, add 1 to counts.neither
// - store the object keys from `count` in an array, iterate over the array
//   - divide the count by the length of the given `string`
//   - format the number to have 2 decimal places
//   - turn the number into a string and make that the new value with which the key being iterated over is associated
// - return `counts`

//   let counts = {
//     lowercase: 0,
//     uppercase: 0,
//     neither: 0,
//   };
  
//   string.split('').forEach(char => {
//     if (char >= 'A' && char <= 'Z') {
//       counts.uppercase += 1;
//     } else if (char >= 'a' && char <= 'z') {
//       counts.lowercase += 1;
//     } else {
//       counts.neither += 1; 
//     }
//   });
  
//   Object.keys(counts).forEach(key => {
//     counts[key] = formatStringPercentage(counts[key], string.length);
//   });
//   return counts;
// }

// function formatStringPercentage(count, stringLength) {
//   return String((count / stringLength * 100).toFixed(2));
// }

// console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
// console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
// console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
// console.log(letterPercentages('AIO'));
// // { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }
// console.log(letterPercentages('poi'));
// // { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }
// console.log(letterPercentages('   '));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }















//Triangle sides

/*
**Problem**
=>objective: given three number arguments, return a string representing the triangle's classification or invalid

=>input: 
	- three numbers, can be integers or fractional
	- if any input that is not a number > 0, return  'invalid'

=>output: 
	- a string either representing the classification of the triangle or 'invalid'

=>requirements:

=>explicit  - in an equilateral triangle, all sides are of equal length
            - in an isosceles triangle, two sides are equal, the third is different
            - in a scalene triangle, all sides are different
            - to be valid, the sum of the lengths of the two shortest sides must be greater than the length of the longest side && every side must have a length > 0

=>implicit  - 

=> test/edge cases - 
console.log(triangle(3, 3, 3)===   "equilateral");
console.log(triangle(3, 3, 1.5)=== "isosceles");
console.log(triangle(1, 1, 1.5)=== "isosceles");
console.log(triangle(3, 4, 5)===   "scalene");
console.log(triangle(0, 3, 3)===   "invalid");
console.log(triangle(3, 1, 1)===   "invalid");
console.log(triangle(3, '3', 1.5)=== "invalid");

=> Mental Model: Describe the solution in 1-2 sentences. 
- test that its valid
- test it for the class according to the rules laid out
  - sorting the sides will help

**Data Structure**
- array to store the triangle sides

**Implementation Notes**


**Algorithm**
- declare variable `sides`, assign to an array of the three arguments passed in, sorted from smallest to largest
- if any sides are not numbers that are > 0, return invalid
- if the two smaller sides summed is < largest side, return invalid
- if all three sides are the same
  - return 'equilateral'
- else if none of the three sides are teh same
  - return 'scalene'
- else 
  - return 'isosceles'

**Check algorithm against test cases


*/

// "use strict";

// function triangle(side1, side2, side3) {
//   let sides = [side1, side2, side3].sort((a, b) => a - b);
//   if (!sides.every(side => typeof side === 'number' && side > 0)) return 'invalid';
//   if (sides[0] + sides[1] <= sides[2]) return 'invalid';
//   if (sides[0] === sides[1] && sides[1] === sides[2]) {
//     return 'equilateral'; 
//   } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
//     return 'isosceles';  
//   } else {
//     return 'scalene'; 
//   }
// }

// console.log(triangle(3, 3, 3)===   "equilateral");
// console.log(triangle(3, 3, 1.5)=== "isosceles");
// console.log(triangle(1, 1, 1.5)=== "isosceles");
// console.log(triangle(3, 4, 5)===   "scalene");
// console.log(triangle(0, 3, 3)===   "invalid");
// console.log(triangle(3, 1, 1)===   "invalid");
// console.log(triangle(3, '3', 1.5)=== "invalid");









// Tri-Angles

/*
**Problem**
=>objective: given three angles of a triangle, return the type of triangle or invalid

=>input: 
	- three numbers
	- different data type? less than 3? more than 3?
	- these numbers have to be integers, no floating point 
	- assume they are in degrees

=>output: 
	- class of triangle or invalid

=>requirements:

=>explicit  - right triangle has exactly one right angle
            - acute, all angles are less than 90
            - obtuse, one angle is > 90
            - validity
              - sum of the angles must be 180
              - every angle > 0

=>implicit  - 

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- check if the triangle is valid
- check which class the triangle is

**Data Structure**
- array for the arguments

**Implementation Notes**


**Algorithm**
- declare variable `angles`, assign to an array with all the angles passed in as arguments
- if the sum of all the angles is not 180, return invalid
- if any of the angles is <= 0, return invalid
- if any of the angles are 90
  - return 'right'
- if every angle is < 90
  - return 'acute'
- otherwise, return 'obtuse'

**Check algorithm against test cases


*/

// "use strict";

// function triangle(angle1, angle2, angle3) {
//   let angles = [angle1, angle2, angle3];
//   if (angles.reduce((sum, angle) => sum + angle) !== 180) return 'invalid';
//   if (angles.some(angle => angle <= 0)) return 'invalid';
//   if (angles.some(angle => angle === 90)) {
//     return 'right'; 
//   } else if (angles.every(angle => angle < 90)) {
//     return 'acute'; 
//   } else {
//     return 'obtuse'; 
//   }
// }

// console.log(triangle(60, 70, 50)=== "acute");
// console.log(triangle(30, 90, 60)=== "right");
// console.log(triangle(120, 50, 10)==="obtuse");
// console.log(triangle(0, 90, 90)===  "invalid");
// console.log(triangle(50, 50, 50)=== "invalid");





//Unlucky Days

/*
**Problem**
=>objective: given a year as an argument, return the number of Friday's whose date was 13 in that year. 

=>input: 
	- a year

=>output: 
	- a number (count of Friday the 13)

=>requirements:

=>explicit  - the year will be greater than 1752

=>implicit  - count the Fridays where the date was also the 13th, or count the days that were 13, and it was also friday

=> test/edge cases - 


=> Mental Model: Describe the solution in 1-2 sentences. 
- 

**Data Structure**


**Implementation Notes**
- get the first day whose date was 13 of the year 
- new Date(`Jan 13 ${year}`);
- date.getDay() if it returns 6, its friday
- a.setMonth(a.getMonth() + 1) // go to the next month
- a.getFullYear() // returns the current year

**Algorithm**
- declare variable `count`, assign to 0
- declare variable `current13th`, assign to a date object Jan 13th of the given year
- while loop
  - while the year of the `current13th` matches the `year` given as an argument
    - check if its a friday, if it is, increment `count`
    - increment the month on `current13th`
- return `count`

**Check algorithm against test cases


*/
// "use strict";

// function fridayThe13ths(year) {
//   let count = 0;
//   let current13th = new Date(`Jan 13 ${year}`);
//   while (current13th.getFullYear() === year) {
//     if (current13th.getDay() === 5) count += 1;
//     current13th.setMonth(current13th.getMonth() + 1)
//   }
//   return count;
// }



// console.log(fridayThe13ths(1986)=== 1);
// console.log(fridayThe13ths(2015)=== 3);
// console.log(fridayThe13ths(2017)=== 2);








// Next Featured Number Higher than a Given Value

/*
**Problem**
=>objective: given an integer, return the next featured number greater than the integer

=>input: 
	- integer representing the starting point for featured numbers

=>output: 
	- next possible featured number

=>requirements:

=>explicit  - a featured number is 1) an odd number 2) multiple of 7, 3) with all of its digits occuring exactly once
            - the largest possible number is 9876543201

=>implicit  - 

=> test/edge cases - 


=> Mental Model: Describe the solution in 1-2 sentences. 
- starting from one higher than the given number, 
  - if this number is a featured number, return it
  - otherwise, increase and test again
  - if you get to 9876543201, return the sentence

**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `candidate`, assign to 1 + given `n`
- while loop 
  - condition is `candidate` is less than the highest featured number
  - if passing `candidate` to `isFeaturedNumber` returns true
    - return the candidate
  - increment `candidate`
- return the failure sentence

helper function `isFeaturedNumber`
- given a number, returns true if it is a featured number
- declare variable `odd`, assign to the result of an odd number test
- declare variable `multipleOf7`, assign to the result of an multiple of 7 test
- declare variable `uniqueDigits`, assign to the result of coercing the number to a string and splitting it at each digit then iterating over each digit (with index and array using `every`)
  - we want to verify that every digit is not found in the rest of the array (from this digit to the end)
- return the result of a logical comparison for `odd`, `multipleOf7` and `uniqueDigits`


**Check algorithm against test cases


*/

// "use strict";

// function featured(number) {
//   let candidate = number + 1;
//   while (candidate % 7 !== 0) {
//     candidate += 1; 
//   }
  
//   while (candidate <= 9876543201) {
//     if (isFeaturedNumber(candidate)) return candidate;
//     candidate += 7;
//   }
//   return "There is no possible number that fulfills those requirements.";
// }

// function isFeaturedNumber(number) {
//   let odd = number % 2 === 1;
//   let multipleOf7 = number % 7 === 0;
//   let uniqueDigits = String(number).split('').every((digit, idx, arr) => {
//     return arr.slice(idx + 1).indexOf(digit) === -1;  
//   });
//   return odd && multipleOf7 && uniqueDigits;
// }

// console.log(featured(12)===        21);
// console.log(featured(20)===        21);
// console.log(featured(21)===        35);
// console.log(featured(997)===       1029);
// console.log(featured(1029)===      1043);
// console.log(featured(999999)===    1023547);
// console.log(featured(999999987)=== 1023456987);
// console.log(featured(9876543186)===9876543201);
// console.log(featured(9876543200)===9876543201);
// console.log(featured(9876543201)==="There is no possible number that fulfills those requirements.");







// Sum Square - Square Sum

/*
**Problem**
=>objective: given a number, return an number that evaluates the difference between the square of the first `n` positive numbers summed minus the sum of the squares of the first `n` positive integers

=>input: 
- integer thats positive
	- diff data type? No arg?
	- negative? fractional? infinitY> NaN?
  - if the input isnt an integer or greater than 0, return null
  
=>output: 
	- null
	- difference, which will be an integer

=>requirements:

=>explicit  - get the sum of the first `n` positive integers, square it
            - get the first `n` positive integers, square each on and get the sum of those
            - do the first minus the second

=>implicit  - 

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- store the first `n` digits
- get the square of their sums, store it
- get the sum of their squares, store it
- first - second

**Data Structure**
- array for holding the first `n` positive integers

**Implementation Notes**


**Algorithm**
- guard clause for input
- declare variable `firstNPositiveIntegers`, assign to empty array
- for loop from 1 to given `number`
  - push the index to `firstNPositiveIntegers`
- declare variable `sumSquared`, assign to result from summing the `firstNPositiveIntegers` array and squaring it
- declare variable `squaresSummed`, assign to result from mapping over `firstNPositiveIntegers`, squaring each element, then summing the result
- return `sumSquared` - firstNPositiveIntegers


**Check algorithm against test cases


*/

"use strict";

// function sumSquareDifference(number) {
//   if (!Number.isInteger(number) || number <= 0) return null; 
//   let firstNPositiveIntegers = [];
//   for (let integer = 1; integer <= number; integer += 1) {
//     firstNPositiveIntegers.push(integer);
//   }
//   let sumSquared = firstNPositiveIntegers.reduce((sum, integer) => sum + integer)**2
//   let squaresSummed = firstNPositiveIntegers.map(int => int**2).reduce((sum, square) => sum + square);
//   return sumSquared - squaresSummed;
// }


// console.log(sumSquareDifference(3)===    22); //--> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10)===   2640);
// console.log(sumSquareDifference(1)===    0);
// console.log(sumSquareDifference(100)===    25164150);
// console.log(sumSquareDifference(-1)===     null);
// console.log(sumSquareDifference(1.9)===    null);
// console.log(sumSquareDifference(Infinity)=== null);








//Bubble Sort

/*
**Problem**
=>objective: sort an array in place using the bubble sort algorithm

=>input: 
	- array

=>output: 
	- the array sorted in place

=>requirements:

=>explicit  - analyze the array two consecutive elements at a time
            - if the first is greater than the second, swap the elements
            - one thing is each time go through the whole array, so if you swap compare the new to the next element
            - if you make it through the array without swapping, you're done

=>implicit  - 

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- loop through the array two elements at a time, swapping them if they are out of order until you loop through the array without swapping any elements

**Data Structure**
- array

**Implementation Notes**


**Algorithm**
- never ending while loop
  - for loop from 0 to second to last element
    - declare variable `elementsSwapped`, false
    - if this element > next element
      - swap them
      - set `swappedElements` to true
  - if `swappedElements` is false, return 

**Check algorithm against test cases


*/
"use strict";

function bubbleSort(array) {
  while(true) {
    let elementsSwapped = false;
    for (let i = 0; i <= array.length - 2; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i] ];
        elementsSwapped = true;
      }
    }
    if (!elementsSwapped) return;
  }
}



const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]



// let a = [0, 1, 2, 4]
// let b = [5];
// [a[0], a[1]] = [a[1], a[0]]
// console.log(a);
// console.log(b);