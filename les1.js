// let count = [1, 2, 3, 4, 5];

// function iterate(array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i]); 
//   }
// }

// function logger(number) {
//   console.log(number);
// }

// iterate(count, logger);



// function myForEach(array, func) {
//   for (let i = 0; i < array.length; i += 1) {
//     func(array[i]); 
//   }
// }

// let min = Infinity;
// let getMin = value => (min = value <= min ? value : min);
// myForEach([4, 5, 12, 23, 3], getMin);
// console.log(min);                        // 3


// function myFilter(array, func) {
//   let result = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (func(array[i])) {
//       result.push(array[i]); 
//     }
//   }
//   return result;
// }

// let isPythagoreanTriple = function (triple) {
//   return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
// };

// console.log(myFilter([{ a: 3, b: 4,  c: 5 },
//           { a: 5, b: 12, c: 13 },
//           { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// // returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]


// function multiplesOfThreeOrFive(values) {
//   // ...
// }

// function isMultipleOfThreeOrFive(value) {
//   return value % 5 === 0 || value % 3 === 0;
// }

// multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]);  // [ 3, 5, 18, 15 ]



// function myMap(array, func) {
//   let result = [];
//   array.forEach(elem => result.push(func(elem)));
//   return result;
// }

// let plusOne = n => n + 1;
// console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]



// function getBooksTitle(books) {
//   return myMap(books, getTitle);
// }

// let books = [
//   {
//     title: 'JavaScript and JQuery: Interactive Front-End Web Development',
//     author: 'Jon Ducket',
//     edition: '1st',
//   },
//   {
//     title: 'Eloquent JavaScript: A Modern Introduction to Programming',
//     author: 'Haverbeke',
//     edition: '2nd',
//   },
//   {
//     title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
//     author: 'Jennifer Niederst Robbins',
//     edition: '4th',
//   },
// ];

// function getTitle(book) {
//   return book['title'];
// }

// console.log(getBooksTitle(books));
// // console output
// [
//   "JavaScript and JQuery: Interactive Front-End Web Development",
//   "Eloquent JavaScript: A Modern Introduction to Programming",
//   "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
// ]

// given an array, a function and optionally an initial value, iterate over the elements of the given `array`, passing each element to the callback function and adding the return value to the sum. If you're given an initial value, make that the sum initially, and start with the first element, if you're not given an initial value, make the first element the sum and start at the second index 

// function myReduce(array, func, initial) {
//   let sum = initial || array[0];
//   for (let i = initial !== undefined ? 0 : 1; i < array.length; i += 1) {
//     sum = func(sum, array[i]);
//   }
//   return sum;
// }

// let smallest = (result, value) => (result <= value ? result : value);
// let sum = (result, value) => result + value;

// console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
// console.log(myReduce([5, 12, 15, 1, 6], sum, 10));           // 49



// function longestWord(words) {
//   return myReduce(words, longest);
// }

// function longest(result, currentWord) {
//   return currentWord.length >= result.length ? currentWord : result;
// }

// console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"




// function myOwnEvery(array, func) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (!func(array[i])) return false; 
//   }
//   return true;
// }

// let isAString = value => typeof value === 'string';
// // console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true



// function areAllNumbers(array) {
//   return myOwnEvery(array, isANumber);
// }

// function isANumber(value) {
//   return typeof value === 'number' && !Number.isNaN(value);
// }

// console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
// console.log(areAllNumbers([1, 5, 6, 7, 1]));              // true
// console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false


// function totalArea(arrOfRectangles) {
//   return arrOfRectangles.reduce(calcAreaAddToTotal, 0);
// }

// function calcAreaAddToTotal(total, arr) {
//   return total + (arr[0] * arr[1]); 
// }

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];


// console.log(totalArea(rectangles));    // 141



// function totalArea(arrOfRectangles) {
//   let arrOfAreas =  arrOfRectangles.map(arr => arr[0] * arr[1]);
//   return arrOfAreas.reduce((total, area) => total + area);
// }

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalArea(rectangles));    // 141

// function totalSquareArea(rectangles) {
//   let onlySquares = rectangles.filter(arr => arr[0] === arr[1]);
//   let areas = onlySquares.map(arr => arr[0] * arr[1]);
//   return areas.reduce((sum, area) => sum + area);
// }

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalSquareArea(rectangles));    // 121


//passed in an array of objects, return an array of objects with only id and title key/value pairs. keep only releases with id and title 
// abstraction: map over the objects in the array, if the object has both id and title, return an object with those two things, otherwise, return null
// filter out the nulls in the array and return it

// function processReleaseData(data) {
//   let idsAndTitles = data.filter(release => release.title && release.id);
//   return idsAndTitles.map(releaseObj => {
//     return {
//       'title': releaseObj.title,
//       'id': releaseObj.id,
//     };
//   });
// }

// let newReleases = [
//   {
//     'id': 70111470,
//     'title': 'Die Hard',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 654356453,
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id:432534, time:65876586 }],
//   },
//   {
//     'title': 'The Chamber',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 675465,
//     'title': 'Fracture',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id:432534, time:65876586 }],
//   },
// ];

// console.log(processReleaseData(newReleases));

// // should return:
// // [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];



// given a string, split the string into digits, convert each digit to a number, reverse the array, map over the array and multiply each number by num*8^index, reduce the numbers in the array to a sum, convert the sum to a string and return it 


// function octalToDecimal(numberString) {
//   let digits = numberString.split('').map(str => Number(str)).reverse();
//   let sum = digits.map((digit, index) => digit * 8**index ).reduce((sum, num) => sum + num);
//   return String(sum);
// }

// console.log(octalToDecimal('1'));           // 1
// console.log(octalToDecimal('10'));          // 8
// console.log(octalToDecimal('130'));         // 88
// console.log(octalToDecimal('17'));          // 15
// console.log(octalToDecimal('2047'));        // 1063
// console.log(octalToDecimal('011'));         // 9






//Anagrams
// sort all the letters of the words in the list 
// test to see which match the sorted letters of `word`
// return an array of the matching words

// function anagram(word, list) {
//   return list.filter(listWord => {
//     return listWord.split('').sort().join() === word.split('').sort().join();
//   });
// }

// console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
// console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]






// Formatting Bands

// The band countries are wrong: all the bands should have 'Canada' as the country.
// The band name should have all words capitalized.
// Remove all dots from the band names.
// return new array, declare new array, iterate over elements of data, capitalize the name, get rid of dots, set country to Canada, add obj to new array


// let bands = [
//   { name: 'sunset rubdown', country: 'UK', active: false },
//   { name: 'women', country: 'Germany', active: false },
//   { name: 'a silver mt. zion', country: 'Spain', active: true },
// ];

// function removeDots(str) {
//   let newStr = '';
//   for (let char of str) {
//     if (char !== '.') newStr += char; 
//   }
//   return newStr;
// }

// function capitalizeEachWord(str) {
//   return str.split(' ').map(word => {
//             return word[0].toUpperCase() + word.slice(1)})        
//             .join(' ');
// }

// function processBands(data) {
//   return data.map(bandObj => {
//     bandObj.country = 'Canada';
//     bandObj.name = capitalizeEachWord(removeDots(bandObj.name));
//     return bandObj;
//   });
// }

// console.log(processBands(bands));

// // should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]






// Class Records Summary
/*
**Problem**
=>objective: given an object of students and their scores, return object summarizing the scores

=>input: object where keys are students and value are objects with student's id and scores
- each scores key is associated with an object holding the exam/exercise data

=>output: an object with two keys `studentGrades` (value an array with each grade) and `exams` (an array of objects with average, min and max keys)

=>rules:

=>explicit	-	

=>implicit/edge cases - 


**Data Structure**
- nested objects for input
- output: object {studentGrades: [array], exams: [array of objects]}

**Implementation Notes**
- maybe set up the output first
- exams array of arrays
- then iterate over the object passed in, generate the grade for each student and store it in the output (helper function for generating grade, pass in exer and exams), store the exams in the `exams` array of arrays where the first array will be all the first exams, second second exams etc
- 

**Algorithm**
- helper function, `generateGrade`, accepts two arrays, one for `exams` one for `exercises`
  - declare variable `examContribution` , calcs average of `exams`, multiplies by .65
  - declare variable `exercisesContribution` ,calcs sum of exercises, multiplies by .35
  - declare variable `total`, adds the `examContribution` and `exercisesContribution` together
  - passes `total` to helper function `formatGrade`

- helper function `formatGrade`, accepts a number, returns a string with formatted grade
  - declare variable `gradeToObject`, assign to array of arrays, each inner array has min, max and letter grade
  - iterate over the `gradeToObject`, 
    - if the grade is <= max and >= min, return the string with the total and grade
  
# - declare variable `result`, assign to an object with two keys `studentGrades` value array, `exams` value array
# - declare variable `exams`, assign to empty object
# - declare variable `studentKeys`, assign to the object keys from the given `scores`
# - use `studentKeys` to iterate over the given `scores`
  - to the `result.studentGrades` array, push the result of passing `student.exams` and `student.exercises` to `generateGrade`
  - iterate over the `student.exams` array, for each exams, store it in the `exams` object with its index as a key and if the value exists, then push the value, if not make it an array with the value as the first element
- iterate over the `exams` array
  - push a custom object with average, min and max to `result.exams`


*/
// "use strict";

// function formatGrade(score) {
//   let gradeToLetter = [[93, 100, 'A'], [85, 92, 'B'], [77, 84, 'C'], [69, 76, 'D'], [60, 68, 'E'], [0, 59, 'F']];
//   for (let i = 0; i < gradeToLetter.length; i += 1) {
//     let arr = gradeToLetter[i];
//     if (score >= arr[0] && score <= arr[1]) return `${score} (${arr[2]})`;  
//   }
// }

// function generateGrade(exams, exercises) {
//   let examWeight = .65;
//   let exercisesWeight = .35;
//   let examContribution = exams.reduce((sum, grade) => sum + grade) / exams.length * examWeight;
//   let exercisesContribution = exercises.reduce((sum, grade) => sum + grade) * exercisesWeight;
//   let total = examContribution + exercisesContribution;
//   return formatGrade(Math.round(total));
// }

// function generateClassRecordSummary(scores) {
//   let result = {
//     studentGrades: [],
//     exams: [],
//   };
//   let examsObject = {};
//   let studentKeys = Object.keys(scores);
//   studentKeys.forEach(studentKey => {
//     let studentObj = scores[studentKey];
//     result.studentGrades.push(generateGrade(studentObj.scores.exams, studentObj.scores.exercises));
//     studentObj.scores.exams.forEach((examScore, index) => {
//       if (examsObject[index]) {
//         examsObject[index].push(examScore);
//       } else {
//         examsObject[index] = [examScore];
//       }
//     });
//   });
  
//   let examsObjectKeys = Object.keys(examsObject);
//   examsObjectKeys.forEach(examsKey => {
//     result.exams.push({
//       average: Number((examsObject[examsKey].reduce((sum, grade) => sum + grade) / examsObject[examsKey].length).toFixed(1)),
//       minimum: Math.min(...examsObject[examsKey]),
//       maximum: Math.max(...examsObject[examsKey]),
//     });  
//   });
//   return result;
// }

// let studentScores = {
//   student1: {
//     id: 123456789,
//     scores: {
//       exams: [90, 95, 100, 80],
//       exercises: [20, 15, 10, 19, 15],
//     },
//   },
//   student2: {
//     id: 123456799,
//     scores: {
//       exams: [50, 70, 90, 100],
//       exercises: [0, 15, 20, 15, 15],
//     },
//   },
//   student3: {
//     id: 123457789,
//     scores: {
//       exams: [88, 87, 88, 89],
//       exercises: [10, 20, 10, 19, 18],
//     },
//   },
//   student4: {
//     id: 112233445,
//     scores: {
//       exams: [100, 100, 100, 100],
//       exercises: [10, 15, 10, 10, 15],
//     },
//   },
//   student5: {
//     id: 112233446,
//     scores: {
//       exams: [50, 80, 60, 90],
//       exercises: [10, 0, 10, 10, 0],
//     },
//   },
// };


// console.log(generateClassRecordSummary(studentScores));

// // returns:
// // {
// //   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
// //   exams: [
// //     { average: 75.6, minimum: 50, maximum: 100 },
// //     { average: 86.4, minimum: 70, maximum: 100 },
// //     { average: 87.6, minimum: 60, maximum: 100 },
// //     { average: 91.8, minimum: 80, maximum: 100 },
// //   ],
// // }







// isAllUnique

/*
**Problem**
=>objective: given a `string`, return true if all chars in the string are unique

=>input: string

=>output: boolean

=>rules:

=>explicit	-	ignore multiple spaces and case differences

=>implicit/edge cases - multiple spaces, case differences


**Data Structure**


**Implementation Notes**
- make it lowercase right from the start

**Algorithm**
- declare variable `lowercase`, assign to the lowercase version of the given `string`
- declare variable `letters`, assign to empy string
- iterate over the chars in `string`
  - if its a space, continue
  - if this letter is already in `letters`, return false
  - otherwise, concatenate it to `letters`

*/


// function isAllUnique(string) {
//   let lowercase = string.toLowerCase();
//   let characters = '';
//   for (let char of lowercase) {
//     if (char === ' ') continue;
//     if (characters.includes(char)) {
//       return false;
//     } else {
//       characters += char; 
//     }
//   }
//   return true;
// }

// console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
// console.log(isAllUnique('123,456,789'));                                 // false
// console.log(isAllUnique('The big apple'));                               // false
// console.log(isAllUnique('The big apPlE'));                               // false
// console.log(isAllUnique('!@#$%^&*()'));                                  // true
// console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true