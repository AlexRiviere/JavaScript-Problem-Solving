// UnGroup Data In an Object
// https://edabit.com/challenge/NcRsSwrJbMm4dRbCk

/*
**Problem**
=>objective: given an array of objects (students grouped by teacher) return an array of objects (one object per student)

=>input: 
	- array of objects
	  - each object
	    - teacher ---> string;
	     - data   ---> array;
	                      - objects (aka students)
	                           - name            ---> string
	                           - emergencyNumber ---> string
	                           - alergies        ---> array of strings
	                           - age             ---> number
	- different data type? -- > return null
	- empty array? --> return an empty array
	- array of empty objects? --> return an empty array 
	- sparse? --> filter it first then proceed normally

=>output: 
	- null / empty array
	- array of objects
	  - each object represents a student with the keys that were in their object in the input
	    - teacher
	    - name
	    - Enumber
	    - age
	    - alergies

=>requirements:

=>explicit  - given an array of objects that represent teachers and their students, return an array of objects that represent students 

=>implicit  - 

=> test/edge cases - 
  
[{teacher: "", data: [{student}, {student}, {student}]}, teacher: "", data: [{student}, {student}, {student}]}, teacher: "", data: [{student}, {student}, {student}]}]

element 0 index
- return array of student objects with keys teacherm=, name and any other data included in the input
- []
- {teacher: "", data: [{student}, {student}, {student}]}
- data: [{student}, {student}, {student}]
- loop through the students 
- {}
- populate the `student` object with the student's data and the teacher
- add it to the result array


=> Mental Model: Describe the solution in 1-2 sentences. 
- iterate over the objects in teh array
  - crafting and adding their student objects to the result array

**Data Structure**
- input: array of objects
- output: an array of objects

**Implementation Notes**


**Algorithm**
- declare variable `studentArray`, assign to an empty array
- iterate over the elements the given `teacherArray`
  - iterate over the elements of the `data` array
    - declare variable `studentData`, assign to an object containing whatever data is found in this current student object
    - add one more key 'teacher' to the `studentData` object, assign to the teacher's name
    - push `studentData` onto `studentArray`
- return `studentArray`

**Check algorithm against test cases

*/

"use strict";

// function ungroupStudents(teacherArray) {
//   let studentArray = [];
//   teacherArray.forEach(teacherObj => {
//     teacherObj.data.forEach(studentObj => {
//       let studentData = {teacher: teacherObj.teacher, ...studentObj};
//       studentArray.push(studentData);
//     });  
//   });
//   return studentArray;
// }

// console.log(ungroupStudents([
//     {
//       teacher: 'Ms. Car',
//       data: [
//         {
//           name: 'James',
//           emergencyNumber: '617-771-1082',
//         },
//         {
//           name: 'Alice',
//           alergies: ['nuts', 'carrots'],
//         },
//       ],
//     },
//     {
//       teacher: 'Mr. Lamb',
//       data: [
//         {
//           name: 'Aaron',
//           age: 3,
//         },
//       ],
//     },
//   ]));


// console.log(ungroupStudents([
//     {
//       teacher: 'Ms. Sherman',
//       data: [
//         {
//           name: 'Carmen',
//           feildTripConsentSlipSigned: false,
//         },
//       ],
//     },
//     {
//       teacher: 'Mr. Shoe',
//       data: [
//         {
//           name: 'Braden',
//           favoriteBook: 'Where the Wild Things Are',
//         },
//         {
//           name: 'Angelo',
//           playsSports: true,
//         },
//       ],
//     },
//   ]));








//Crop Fields

/*
**Problem**
=>objective: given a 2D array

=>input: 
	- 2D array, with equal sized rows
	- varying row sizes, varying number of rows
	- empty array?
	- sparse array
	- "w" on its own, ---> return true
	- "c" on its own ---> return false

=>output: 
	- boolean true/false

=>requirements:

=>explicit  - each water source hydrates the 8 tiles around it
              - the element at index - 1 and index + 1 from the "w"
              - the element in the previous row at this index, index - 1, index + 1
              - the element in the next row at this index, index - 1, index + 1
            - to return true, each crop needs to be hydrated
              - every "c" needs to be in the 8 tiles around a "w"
              - every "c" needs to be covered by a "w"

=>implicit  - do i literally change them or do I short circuit by checking each "c"

=> test/edge cases - 

cropHydrated([
  [ "w", "c" ],
  [ "w", "c" ],
  [ "c", "c" ]
]) ➞ true
- every "c" has at least one "w" one space away



cropHydrated([
  [ "c", "c", "c" ]
]) ➞ false
// There isn"t even a water source.

cropHydrated([
  [ "c", "c", "c", "c" ],
  [ "w", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "w", "c", "c" ]
]) ➞ false

=> Mental Model: Describe the solution in 1-2 sentences. 
- iterate over each element of each row
  - if its w, skip it
  - if its c, check if there is a w one spot away
    - if there is, continue
    - if there isnt, return false
- return true

**Data Structure**
- input: nested array, keep it and iterate through it

**Implementation Notes**


**Algorithm**
- iterate over the elements of the given `cropField` (needs a for loop)
  - iterate over the elements of `cropRow` (needs a for loop)
    - if its a "w", continue
    - if its a "c"
      - if `isWClose` returns true;
        - continue
      - otherwise, return false;
- return true

helper function `isWClose` given `cropField`, current row / index
  - return true if there is a "w" one spot away
  - if there is a "w" in the previous row at this index, index - 1 or index + 1
  - if there is a "w" in this row at index - 1, or index + 1
  - if there is a "w" in the next row at this index, index - 1, index  + 1



**Check algorithm against test cases


*/
// "use strict";

// function isWaterClose(cropField, cropRow, cropIdx) {
//   let startCropIdx = cropIdx - 1 < 0 ? 0 : cropIdx - 1;
//   let prevRow = cropRow === 0 ? [] : cropField[cropRow - 1].slice(startCropIdx, cropIdx + 2)
//   let currentRow = cropField[cropRow].slice(startCropIdx, cropIdx + 2);
//   let nextRow = cropRow === cropField.length - 1 ? [] : cropField[cropRow + 1].slice(startCropIdx, cropIdx + 2);
//   let allSurroundingCrops = [...prevRow, ...currentRow, ...nextRow];
//   return allSurroundingCrops.includes('w');
// }

// function cropHydrated(cropField) {
//   for (let cropRow = 0; cropRow < cropField.length; cropRow += 1) {
//     for (let crop = 0; crop < cropField[0].length; crop += 1) {
      
//       let currentCrop = cropField[cropRow][crop];
      
//       if (currentCrop === 'w') continue;
//       if (isWaterClose(cropField, cropRow, crop)) continue;
//       return false;      
//     }
//   }
//   return true;
// }

// console.log(cropHydrated([
//   [ "w", "c" ],
//   [ "w", "c" ],
//   [ "c", "c" ]
// ]) === true);
// // ➞ true
// // - every "c" has at least one "w" one space away



// console.log(cropHydrated([
//   [ "c", "c", "c" ]
// ]) === false);
// // // ➞ false
// // // There isn"t even a water source.

// console.log(cropHydrated([
//   [ "c", "c", "c", "c" ],
//   [ "w", "c", "c", "c" ],
//   [ "c", "c", "c", "c" ],
//   [ "c", "w", "c", "c" ]
// ]) === false);
// // // ➞ false


// console.log(cropHydrated([
//   [ "c", "c", "c" ],
//   [ "w", "w", "c" ],
//   [ "c", "c", "c" ],
//   [ "w", "w", "c" ],
//   [ "c", "c", "c" ],
//   [ "c", "c", "c" ],
//   [ "c", "w", "c" ]
// ]) === true);

// console.log(cropHydrated([
//   [ "c", "c", "c" ],
//   [ "w", "w", "c" ]
// ]) === true);

// console.log(cropHydrated([
//   [ "c", "c", "w", "w", "c", "c", "c" ],
//   [ "c", "w", "c", "w", "w", "c", "w" ],
//   [ "w", "w", "c", "w", "c", "c", "c" ]
// ]) === true);














//Nearest Chapter

/*
**Problem**
=>objective: given an array representing a book, return the chapter number as a string of the chapter that is nearest to the page you're on

=>input: 
	- an object representing a book, a page number (integer)
	- can i get a page number after the last chapter? yes ---> return the last chapter, add a test case
	- empty object? Different data type? no argument?
	- book with no chapters?
	- a page that comes before the first chapter?

=>output: 
	- chapter string

=>requirements:

=>explicit  - if two chapters are equidistant, return the chapter with the higher page number
            - all page numbers in the dictionary will be valid integers
            

=>implicit  - 

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- iterate over the chapter numbers, save how far each one is from the given `pageNumber`
- filter for the mins
- if there are 2, return the second one

**Data Structure**
- input: object, integer
- array of objects to store the chapter name and distance from the page number
- return string

**Implementation Notes**


**Algorithm**
- declare variable `chaptersAndDistances`, assign to return value from --> iterate over the keys of the `bookChapters` object using transformation
  - for each, return an object with the chapter name, its distance from `pageNumber`, and the page on which that chapter starts
- declare variable `closestChapters`, filter `chaptersAndDistances` for the minimum distances
- if `closestChapters` length is 1
  - return the chapter name 
- if `closestChapters` length is 2
  - return the chapter name of the chapter with the higher page number

**Check algorithm against test cases

*/

// "use strict";

// function nearestChapter(bookChapters, pageNumber) {
//   let chaptersAndDistances = Object.keys(bookChapters).map(chapter => {
//     return {
//       name: chapter,
//       page: bookChapters[chapter],
//       distance: Math.abs(bookChapters[chapter] - pageNumber),
//     };
//   });
//   let minimumDistance = Math.min(...chaptersAndDistances.map(obj => obj.distance));
//   let closestChapters = chaptersAndDistances.filter(chapterobj => { 
//     return chapterobj.distance === minimumDistance; 
//   });
//   if (closestChapters.length === 1) return closestChapters[0].name;
//   return closestChapters[closestChapters.length - 1].name;
// }



// console.log(nearestChapter({"Chapter 1": 1, "Chapter 2": 15, "Chapter 3": 37}, 10) === "Chapter 2");
// console.log(nearestChapter({"New Beginnings" : 1, "Strange Developments" : 62, "The End?" : 194, "The True Ending" : 460}, 200) === "The End?");
// console.log(nearestChapter({"Chapter 1a" : 1, "Chapter 1b" : 5}, 3) === "Chapter 1b");
// console.log(nearestChapter({"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50, "Chapter 1d" : 100}, 75) === "Chapter 1d");

// console.log(nearestChapter({"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50, "Chapter 1d" : 100, "Chapter 1e" : 200}, 150) === "Chapter 1e");
// console.log(nearestChapter({"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50, "Chapter 1d" : 100, "Chapter 1e" : 200}, 74) === "Chapter 1c");
// console.log(nearestChapter({"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50, "Chapter 1d" : 100, "Chapter 1e" : 200, "Chapter 1f" : 400}, 300) === "Chapter 1f");
// console.log(nearestChapter({"Chapter Four": 46, "Chapter Five": 54}, 50) === "Chapter Five");
// console.log(nearestChapter({"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50, "Chapter 1d" : 100, "Chapter 1e" : 200, "Chapter 1f" : 400}, 500) === "Chapter 1f");








// Column With Maximum Sum

/*
**Problem**
=>objective: given an array of numbers and a group size, return the column number with the greatest sum

=>input: 
	- an array of numbers and a group size (integer)
  - empty array? ---> return 0
  - sparse array?
  - will the number of elements in the array always be able to be evenly divided by the group size? ---> no in this case, fill the last column with 0s and perform the function normally
  - array always filled with numbers? 
=>output: 
	- the 'column' with the highest sum 

=>requirements:

=>explicit  - if two or more columns have the same sum, return the one with the lowest column number

=>implicit  - column numbers start at 1 not 0

=> test/edge cases - 


=> Mental Model: Describe the solution in 1-2 sentences. 
- split up the array into equal sized groups, (nested Array)
  - iterate over each group's elements and based on their index, add that value to a result array
  - iterating over the indexes of the result array at the same time
  
- group elements in the same group in an array, then map over the array reducing each gropu to a sum
  - i'd have to iterate over all the elements anyway

- dont split it, iterate over it doing the same thing as ^^^, adding it to the proper index in the result array


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare a variable `sums`, assign to an empty array
- declare a variable `sumsIndex`, assign to 0
- for loop through the values of the given `arrOfNums`
  - if there is a value at `sumsIndex` in `sums`
    - add this number to it
  - otherwise, assign this number to it
  - if incrementing `sumsIndex` makes it equal to the given `groupSize`, make it 0
    - otherwise, increment it by 1
- declare variable `maxSum`, assign to the max number in `sums`
- return the return value from getting the index of `maxSum` in sums added to 1 (because columns start at 1)

**Check algorithm against test cases


*/
"use strict";

// function createSumsArray(arrayOfNumbers, groupSize) {
//   let sums = [];
//   let sumsIndex = 0;
//   arrayOfNumbers.forEach(number => {
//     sums[sumsIndex] ? sums[sumsIndex] += number : sums[sumsIndex] = number; 
//     sumsIndex = sumsIndex + 1 === groupSize ? 0 : sumsIndex += 1
//   });
//   return sums;
// }

// function colWithMaxSum(arrayOfNumbers, groupSize) {
//   if (arrayOfNumbers.length === 0) return 0;
//   let sums = createSumsArray(arrayOfNumbers, groupSize);
//   let maxSum = Math.max(...sums);
//   return sums.indexOf(maxSum) + 1;
// }

// console.log(colWithMaxSum([14, 9, 19, 6, 13, 13, 3, 2, 12], 3) === 3)
// console.log(colWithMaxSum([1, 13, 15, 5, 16, 1, 4, 9, 20], 3) === 2)
// console.log(colWithMaxSum([15, 4, 6, 10, 6, 4], 2) === 1)
// console.log(colWithMaxSum([7, 9, 13, 16, 17, 1, 10, 6, 3, 19, 6, 10, 8, 18, 20, 4], 8) === 7)
// console.log(colWithMaxSum([4, 18, 14, 16, 7, 7, 20, 14, 9, 4, 8, 16, 1, 12, 18, 13], 2) === 2)
// console.log(colWithMaxSum([5, 7, 2, 12, 20, 7, 1, 12, 8, 7, 12, 8], 3) === 2)
// console.log(colWithMaxSum([18, 16, 6, 4, 18, 20, 9, 8, 1, 14, 20, 16], 4) === 2)
// console.log(colWithMaxSum([5, 4, 20, 8, 8, 18], 2) === 1)
// console.log(colWithMaxSum([2, 9, 12, 9, 17, 6, 8, 9, 8, 18, 2, 4], 2) === 2)
// console.log(colWithMaxSum([15, 2, 16, 19, 3, 1, 15, 13, 19, 16, 2, 16], 3) === 1)
// console.log(colWithMaxSum([4, 6, 18, 13, 19, 2, 7, 13, 19, 16, 12, 20, 17, 12, 4, 7], 8) === 5)
// console.log(colWithMaxSum([10, 8, 6, 2, 2, 2, 18, 17, 17, 20, 17, 17], 6) === 1)
// console.log(colWithMaxSum([3, 9, 14, 7, 6, 13, 9, 10, 1, 5, 10, 17, 16, 6, 3, 18], 4) === 4)
// console.log(colWithMaxSum([2, 7, 8, 17, 15, 3], 3) === 2)
// console.log(colWithMaxSum([8, 8, 6, 4, 8, 16, 4, 16, 18, 20, 20, 7], 2) === 2)
// console.log(colWithMaxSum([19, 15, 1, 10, 2, 8], 6) === 1)
// console.log(colWithMaxSum([5, 20, 8, 3, 5, 15], 3) === 2)
// console.log(colWithMaxSum([10, 12, 15, 14, 17, 4, 18, 12, 17, 18, 18, 12], 4) === 3)
// console.log(colWithMaxSum([5, 9, 12, 12, 7], 5) === 3)
// console.log(colWithMaxSum([3, 18, 8, 15, 9, 15, 12, 8, 11, 5, 10, 8], 6) === 2)
// console.log(colWithMaxSum([3, 18, 8, 15, 9, 15, 12, 8, 11, 5, 10, 8], 5) === 2)
// console.log(colWithMaxSum([], 5) === 0)








//Validating Set In a Game

/*
**Problem**
=>objective: given an array of three cards, return true if the cards form a set, false if they don't

=>input: 
	- an array of 3 'card' objects
  - empty array?
  - card objects don't have all their properties?
  - can a property have two values?
  - are there more values than what is given?
  - can we get more or less than 3 'cards'?
  
=>output: 
	- boolean true or false

=>requirements:

=>explicit  - three cards form a set if each of the cards is identical or completely different
              - aspects in which cards can differ
                  - color, number, shade, shape
              - aspects options
                - color: red, purple, green
                - number: 1, 2, 3
                - shade: empty, lined, full
                - shapes: squiggle, oval, diamond
            - a set is an array of 3 cards (objects) that have properties and values 
            

=>implicit  - its still a set if some properties are all the same and other properties are all different 
            - you can never have a property with 2 of the same things, it has to either have a count of 1 or a count of 3

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- extract a list of values for each property with no duplicates
- assert that each list of properties has a length of 1 or 3

**Data Structure**
- input: array of objects
- nested array of values for each property [[red][1, 2, 3][full, full][]]
- output: boolean

**Implementation Notes**


**Algorithm**
- declare variable `arrayOfValues`, an array with four nested arrays in it
- iterate over the objects in the given `arrayOfCards`
  - add the value associate with color to the first nested array in `arrayOfValues`, unless it already exists
  - etc for the rest of the properties
- [[][][][]]
- return the return value that comes back from asserting that every nested array has a length of either 1 or 3

**Check algorithm against test cases


*/
// "use strict";

// function createArrayOfValues(arrayOfCards) {
// let arrayOfValues = [[], [], [], []];
//   arrayOfCards.forEach(card => {
//     if (!arrayOfValues[0].includes(card.color)) arrayOfValues[0].push(card.color);   
//     if (!arrayOfValues[1].includes(card.number)) arrayOfValues[1].push(card.number);
//     if (!arrayOfValues[2].includes(card.shade)) arrayOfValues[2].push(card.shade);
//     if (!arrayOfValues[3].includes(card.shape)) arrayOfValues[3].push(card.shape);
//   });
//   return arrayOfValues;
// }

// function isSet(arrayOfCards) {
//   let arrayOfValues = createArrayOfValues(arrayOfCards);
//   return arrayOfValues.every(listOfValues => listOfValues.length === 3 || listOfValues.length === 1);
// }



// console.log(isSet(
// [{color: "red", number: 1, shade: "lined", shape: "squiggle"}, 
// {color: "red", number: 1, shade: "lined", shape: "diamond"}, 
// {color: "red", number: 1, shade: "lined", shape: "squiggle"}]
// ) === false);

// console.log(isSet(
// [{color: "red", number: 1, shade: "lined", shape: "squiggle"}, 
// {color: "red", number: 1, shade: "lined", shape: "diamond"}, 
// {color: "red", number: 1, shade: "lined", shape: "oval"}]
// ) === true);

// console.log(isSet(
// [{color: "red", number: 1, shade: "empty", shape: "squiggle"}, 
// {color: "red", number: 1, shade: "lined", shape: "diamond"}, 
// {color: "red", number: 1, shade: "lined", shape: "oval"}]
// ) === false);

// console.log(isSet(
// [{color: "red", number: 1, shade: "empty", shape: "squiggle"}, 
// {color: "red", number: 2, shade: "lined", shape: "diamond"}, 
// {color: "red", number: 3, shade: "full", shape: "oval"}]
// ) === true);

// console.log(isSet(
// [{color: "green", number: 1, shade: "empty", shape: "squiggle"}, 
// {color: "green", number: 2, shade: "empty", shape: "diamond"}, 
// {color: "green", number: 3, shade: "empty", shape: "oval"}]
// ) === true);

// console.log(isSet(
// [{color: "purple", number: 1, shade: "full", shape: "oval"}, 
// {color: "green", number: 1, shade: "full", shape: "oval"}, 
// {color: "red", number: 1, shade: "full", shape: "oval"}]
// ) === true);

// console.log(isSet(
// [{color: "purple", number: 3, shade: "full", shape: "oval"}, 
// {color: "green", number: 1, shade: "full", shape: "oval"}, 
// {color: "red", number: 3, shade: "full", shape: "oval"}]
// ) === false);

// console.log(isSet(
// [{color: "red", number: 1, shade: "empty", shape: "squiggle"}, 
// {color: "red", number: 2, shade: "lined", shape: "diamond"}, 
// {color: "purple", number: 3, shade: "full", shape: "oval"}]
// ) === false);













/*
**Problem**
=>objective: given a string of numbers (starting with the count) , return the number of number pairs there are embeddd in the string

=>input: 
	- a space-separated string of numbers 
	- empty string?
	- fractional numbers? NaN? no arg?
	- punctuation/symbols?

=>output: 
	- number of number pairs in the string

=>requirements:

=>explicit  - the first number in the string is the count, dont count it when you are counting pairs 

=>implicit  - if you have 4 10s, thats two pairs

=> test/edge cases - 

number_pairs("7 1 2 1 2 1 3 2") ➞ 2
// (1, 1), (2, 2)

number_pairs("9 10 20 20 10 10 30 50 10 20") ➞ 3
// (10, 10), (20, 20), (10, 10)

number_pairs("4 2 3 4 1") ➞ 0
// Although two 4's are present, the first one is discounted.

=> Mental Model: Describe the solution in 1-2 sentences. 
- get the numbers into an array without the first count 
  - get a unique set of numbers, get a count of each unique number, divide the count by 2 rounded down (3 / 2 = 1.5 = 1 pair)
  - sum 
  
- do a while loop, on only the first element of the array
  - if it has a match, increment the `count` and delete this element and its match
- return the count

**Data Structure**
- array to hold the numbers of the string

**Implementation Notes**


**Algorithm**
- declare variable `numbers`, assign to the string, split then sliced from the first element
- declare variable `pairsCount`, assign to 0;
- while loop, condition: `numbers` length is greater than 1
  - declare variable `matchIndex`, assign to the match index of this element or -1
  - if first element has a match, increment `pairsCount`
    - remove the match from the `numbers` array
  - no matter what, remove this element from the numbers array
- return `pairsCount`

**Check algorithm against test cases

*/


// "use strict";

// function numberPairs(numberString) {
//   let numbers = numberString.split(' ').slice(1);
//   let pairsCount = 0;
  
//   while (numbers.length > 1) {
//     let matchIndex = numbers.indexOf(numbers[0], 1);
//     if (matchIndex !== -1) {
//       pairsCount += 1;
//       numbers.splice(matchIndex, 1);
//     }
//     numbers.shift();
//   }
  
//   return pairsCount;
// }

// console.log(numberPairs("7 1 2 1 2 1 3 2") === 2);
// console.log(numberPairs("9 10 20 20 10 10 30 50 10 20") === 3);
// console.log(numberPairs("4 2 3 4 1") === 0);
// console.log(numberPairs("13 10 20 20 10 10 30 50 10 20 50 50 30 20") === 6);
// console.log(numberPairs("10 1 2 5 6 5 2 1 7 8 1") === 3);
// console.log(numberPairs("16 2 3 5 11 1 11 5 7 9 13 17 3 8 7 2 1") === 6);
// console.log(numberPairs("6 1 2 2 4 3 4") === 2);













// Combining two objects into one, sum like values

/*
**Problem**
=>objective: given two objects, combine the objects into one object. For properties with the same name, sum the values

=>input: 
	- 2 objects with a variable number of properties
	- empty objects?
	- values always are intgers?
	- nested objects in the object?
	- more or less than 2 objects?
	- value is 00

=>output: 
	- object with all properties from both object inputs with value combined for those with properties with the same name

=>requirements:

=>explicit  - 

=>implicit  - 

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- iterate over the keys in both objects
  - if it exists in the new object already, skip it
  - if it exists in the other object, sum them and add them to the new object
  - otherwise, add it to the new object
  
- combine all keys in one array, iterate over them
  - if it exists in one and not the other, add it to the new object
  - if it exists in both, sum them and add the value to the new object

**Data Structure**
- an array to hold the keys for each object (2 arrays)


**Implementation Notes**


**Algorithm**
- declare variable `allKeys`, assign to an array with the keys from each `user` passed in
- declare variable `combinedObject`, assign to an empty object
- iterate over `allKeys`
  - if both `user` objects have this key, sum them and add the pair to `combinedObject`
  - otherwise, add whichever one has it to the `combinedObject`, (value = obj1[key] || obj2[key]
- return `combinedObject`

**Check algorithm against test cases


*/

// "use strict";

// function combine(user1, user2) {
//   let allKeys = Object.keys({...user1, ...user2});
//   let combinedObject = {};
//   allKeys.forEach(key => {
//     if (user1[key] !== undefined && user2[key] !== undefined) {
//       combinedObject[key] = user1[key] + user2[key];
//       return;
//     }
//     combinedObject[key] = user1[key] || user2[key];
//   });
//   return combinedObject;
// }

// const test1User1Income = {
//   softwareDeveloping: 70000,
//   rental: 10000,
// };

// const test1User2Income = {
//   teaching: 40000,
//   rental: 12000,
// };

// const test1Answer = {
//   rental: 22000,
//   teaching: 40000,
//   softwareDeveloping: 70000,
// };

// console.log(combine(test1User1Income, test1User2Income));

// const test2User1Income = {
//   softwareDeveloping: 70000,
//   pizzaDeliverying: 6000,
//   rental: 10000,
// };

// const test2User2Income = {
//   teaching: 40000,
//   rental: 12000,
// };

// const test2Answer = {
//   pizzaDeliverying: 6000,
//   rental: 22000,
//   teaching: 40000,
//   softwareDeveloping: 70000,
// };

// console.log(combine(test2User1Income, test2User2Income));

// const test3User1Income = {
//   softwareDeveloping: 70000,
//   pizzaDeliverying: 6000,
//   sellingGarlic: 6000,
//   rental: 10000,
// };

// const test3User2Income = {
//   rental: 12000,
//   sellingGarlic: 32000,
// };

// const test3Answer = {
//   pizzaDeliverying: 6000,
// 	rental: 22000,
//   sellingGarlic: 38000,
//   softwareDeveloping: 70000,
// };

// console.log(combine(test3User1Income, test3User2Income));

// const test4User1Income = {
//   softwareDeveloping: 70000,
//   pizzaDeliverying: 6000,
//   sellingGarlic: 6000,
//   rental: 10000,
// };

// const test4User2Income = {
//   rental: 0,
//   sellingGarlic: 32000,
// };

// const test4Answer = {
//   pizzaDeliverying: 6000,
// 	rental: 10000,
//   sellingGarlic: 38000,
//   softwareDeveloping: 70000,
// };

// console.log(combine(test4User1Income, test4User2Income));



// const test5User1Income = {
//   softwareDeveloping: 70000,
//   pizzaDeliverying: 6000,
//   sellingGarlic: 6000,
//   rental: 0,
// };

// const test5User2Income = {
//   rental: 0,
//   sellingGarlic: 32000,
// };

// const test5Answer = {
//   pizzaDeliverying: 6000,
// 	rental: 10000,
//   sellingGarlic: 38000,
//   softwareDeveloping: 70000,
// };

// console.log(combine(test5User1Income, test5User2Income));
















// Switch On Gravity

/*
**Problem**
=>objective: given a 2D array, return a new array with gravity switched off

=>input: 
	- a nested array
	- can be as little as one column wide
	- empty?
	- all blocks? stays the same
	- all hyphens? stays the same
	- all the same length?

=>output: 
	- nested array with 'blocks' sent to the bottom row, if there is already a 'block' it is stacked in the same row

=>requirements:

=>explicit  - each block falls individually
            - the blocks are represented by hashtags
            - air is hyphens
            - given a nested array with varying array lengths, but all rows have the same length
            - 

=>implicit  - 

=> test/edge cases - 


	["-", "#", "#", "-"],
	["-", "-", "-", "-"],
	["-", "-", "-", "-"],
	["-", "-", "-", "-"]
	4 rows
	- - - - 
	- - - - 
	- - - -
	- # # - 
array blocks in each	  0    0    0     0
build from the bottom take from ^^, decrement after use 


, [
	["-", "-", "-", "-"],
	["-", "-", "-", "-"],
	["-", "-", "-", "-"],
	["-", "#", "#", "-"]
])




, [
	["-", "-", "-", "-"],
	["-", "-", "#", "-"],
	["-", "#", "#", "-"]
])




, [
	["-", "-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-", "-"],
	["-", "#", "-", "#", "#", "-"],
	["#", "#", "#", "#", "#", "-"]
])




, [
	["-", "-", "-", "-", "-", "-"],
	["-", "#", "-", "#", "-", "-"],
	["-", "#", "-", "#", "#", "-"],
	["#", "#", "#", "#", "#", "-"]
])



, [
	["-", "-", "-", "-"],
	["-", "#", "#", "-"],
	["#", "#", "#", "-"]
])



, [
	["-"],
	["-"],
	["#"],
	["#"]
])



, [
	["#"],
	["#"],
	["#"],
	["#"]
])

=> Mental Model: Describe the solution in 1-2 sentences. 
- somehow end up with an array of block counts for each row
- then build the rows one by one, subtracting blocks from correponding indexes in the count array

- can i mutate?
- if I can, i'd iterate over the input if its a block check the rows underneath it for blocks and transfer the blocks down

**Data Structure**
- input is an array
- an array to hold the counts
- output is an array we are building from the bottom

**Implementation Notes**


**Algorithm**
- declare variable `blockCountArray`, assign to an empty array
- for loop over the indexes from 0 to the last one in the first row
  - declare variable `blockCount`, assign to 0
  - for each index, **check each row for a block**
    - for loop from 0 to # of rows in the given `airSpace`
      - if there is a block '#' in this row at this column, increment `blockCount`
  - push `blockCount` to `blockCountArray`
- declare variable `endResult`
- for loop from last row index to 0
  - declare variable `row`, assign it to an empty variable 
  - iterate over `blockCountArray`
    - if the value at this index in `blockCountArray` is 0, push a '-' to `row`
    - otherwise, push a '#' and decrement `blockCountArray` at this index
  - assign `endResult` at the index from the for loop to `row`
- return `endResult`



**Check algorithm against test cases


*/
// "use strict";

// function switchGravityOn(airSpace) {
//   let blockCountArray = [];
//   for (let column = 0; column < airSpace[0].length; column += 1) {
//     let blockCount = 0;
//     for (let row = 0; row < airSpace.length; row += 1) {
//       if (airSpace[row][column] === '#') blockCount += 1;
//     }
//     blockCountArray.push(blockCount);
//   }
//   let endResult = [];
//   for (let rowNum = airSpace.length - 1; rowNum >= 0; rowNum -= 1) {
//     let row = [];
//     blockCountArray.forEach((count, index) => {
//       if (count === 0) {
//         row.push('-');
//       } else {
//         row.push('#');
//         blockCountArray[index] -= 1;
//       }
//     });
//     endResult[rowNum] = row;
//   }
//   return endResult;
// }

// console.log(switchGravityOn([
// 	["-", "#", "#", "-"],
// 	["-", "-", "-", "-"],
// 	["-", "-", "-", "-"],
// 	["-", "-", "-", "-"]
// ]
// ));

// console.log(switchGravityOn([
// 	["-", "#", "#", "-"],
// 	["-", "-", "#", "-"],
// 	["-", "-", "-", "-"],
// ]
// ));

// console.log(switchGravityOn([
// 	["-", "#", "#", "#", "#", "-"],
// 	["#", "-", "-", "#", "#", "-"],
// 	["-", "#", "-", "-", "-", "-"],
// 	["-", "-", "-", "-", "-", "-"]
// ]
// ));

// console.log(switchGravityOn([
// 	["-", "#", "#", "#", "#", "-"],
// 	["#", "-", "-", "#", "#", "-"],
// 	["-", "#", "-", "-", "-", "-"],
// 	["-", "#", "-", "#", "-", "-"]
// ]
// ));

// console.log(switchGravityOn([
// 	["-", "#", "#", "-"],
// 	["-", "-", "#", "-"],
// 	["#", "#", "-", "-"],
// ]
// ));

// console.log(switchGravityOn([
// 	["#"],
// 	["-"],
// 	["#"],
// 	["-"]
// ]
// ));

// console.log(switchGravityOn([
// 	["#"],
// 	["#"],
// 	["#"],
// 	["#"]
// ]
// ));










// Get notes distribution

/*
**Problem**
=>objective: given an array of student objects, return an object that counts and combines the counts of the notes of all students

=>input: 
	- array of objects
	- not an array? empty array? sparse array? array with object properties?  
	- not objects? empty objects?
  - fractional numbers for notes?
  - empty array for notes?
  - if all `notes` invalid, return an empty object
  - will `notes` always exist?, will it always be an array


=>output: 
	- an object, `noteNumbers` are property names, values are counts

=>requirements:

=>explicit  - valid notes are 1, 2, 3, 4, 5
            - all invalid notes should not be counted in the distribution

=>implicit  - the note numbers become the `noteCount` property names

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- iterate over the given array, then iterate over the notes of each student
  - if its valid, add it to the count of the  result object

- extract all notes into one array, iterate over that creating the result object

**Data Structure**
- input: array of objects
- output: an object

**Implementation Notes**


**Algorithm**
- declare variable `noteCount`
- iterate over the given `studentList` (each element is an object)
  - iterate over the value associated with the `notes` property
    - if its a number between 1-5 inclusive (we are skipping anything else)
      - if it exists in `noteCount` already, increment it
      - otherwise, add it to `noteCount`
- return `noteCount`

**Check algorithm against test cases


*/
// "use strict";

// function getNotesDistribution(studentArray) {
//   let noteCount = {};
//   studentArray.forEach(student => {
//     student.notes.forEach(note => {
//       if (Number.isInteger(note) && note >= 1 && note <= 5) {
//         noteCount[note] ? noteCount[note] += 1 : noteCount[note] = 1 
//       }
//     });  
//   });
//   console.log(noteCount);
// }



// getNotesDistribution([
//   {
//     "name": "Steve",
//     "notes": [5, 5, 3, -1, 6]
//   },
//   {
//     "name": "John",
//     "notes": [3, 2, 5, 0, -3]
//   }
// ]);
// // { 5: 3, 3: 2, 2: 1 }

// getNotesDistribution([
//   {
//     "name": "Steve",
//     "notes": [5, 5, 3, -1, 6]
//   }
// ]);
// // { 5: 2, 3: 1 }

// getNotesDistribution([
//   {
//     "name": "Steve",
//     "notes": [5, 5, 3, -1, 6]
//   },
//   {
//     "name": "John",
//     "notes": [-3, 12, 51, 10, -3]
//   }
// ]);

// // { 5: 2, 3: 1 }

// getNotesDistribution([
//   {
//     "name": "Steve",
//     "notes": [-5, 15, 31, -1, 16]
//   },
//   {
//     "name": "John",
//     "notes": [-3, 12, 51, 10, -3]
//   }
// ]);

// // {}


// getNotesDistribution([
//   {
//     "name": "Steve",
//     "notes": [5, 5, 3, -1, 6, 3, 4, 3]
//   },
//   {
//     "name": "John",
//     "notes": [3, 2, 5, 0, -3, 8]
//   }
// ]);
// // { 5: 3, 4: 1, 3: 4, 2: 1 }


// getNotesDistribution([
//   {
//     "name": "Steve",
//     "notes": [5, 5, 3, -1, 6, 3, 4, 3, 'a']
//   },
//   {
//     "name": "John",
//     "notes": [3, 2, 5, 0, -3, 8]
//   }
// ]);
// // { 5: 3, 4: 1, 3: 4, 2: 1 }

// console.log('Answers: ', { 5: 3, 3: 2, 2: 1 }, { 5: 2, 3: 1 }, { 5: 2, 3: 1 }, {}, { 5: 3, 4: 1, 3: 4, 2: 1 }, { 5: 3, 4: 1, 3: 4, 2: 1 });













// Find the Lowest Neighbor

/*
**Problem**
=>objective: 

=>input: 
	- array, 2 integers
	- whats the smallest/largest array I can get?
	- what if the integers are invalid or the point to somethiing off the map? invalid coordinates
	- empty array? sparse array?

=>output: 
	- either the value at the given coordinate, or the value of the lowest neighbor of the value at the given coordinate

=>requirements:

=>explicit  - array passed in will by symetrical
            - check all neighbors of the given element
            - if none of the values of the neighbor elements are lower than the value at the given coordinate, return the value at the given coordinate
            - neighbors are horizontal, vertical and diagonal
            - arguments are arr, x, y   
              - x is the row
              - y is the column

=>implicit  - rows and columns are 0 indexed
            - neighbors are the (at most) 8 surrounding elements in the matrix
            - coordinates need to be integers that are within the bounds of the given array

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- validate the input
- get the value of the coordinate
- check the value against all neighbor values
- return the lowest value of them all

- as long as we have all values together (array), we can just return the min

**Data Structure**


**Implementation Notes**


**Algorithm**
- if the coordinates are not integers or they are outside the bounds of the array, return 'invalid coordinates'
- declare variable `allValues`, assign to an array that contains the value of the given coordinates
- declare variable `rowBefore`, assign to the row that comes before the given row coordinate
  - if the given row coordinate is 0, this will be an empty array
- declare variable `rowAfter`, assign to the row that comes after the given row coordinate
  - if the given row coordinate is the last row, this will be an empty array
- declare variable `rowOf`, assign to the row that the coordinates point to 
- declare variable `valuesInAllNeighborRows`, assign to a nested array of ^^^
- declare variable `startIndex`, this will be the column number provided - 1 but if that gives you a negative number, make it 0
- declare variable `endIndex`, this will be column number + 1 but if that is outside the bounds, make it the last index
- iterate over `valuesInAllNeighborRows`
  - slice each from `startIndex` to `endIndex`, push the resulting array to `allValues`
- return the minimum value of `allValues`

**Check algorithm against test cases


*/
// "use strict";

// function lowestElement(array, row, col) {
//   if (!Number.isInteger(row) || !Number.isInteger(col)) return 'invalid coordinates';
//   if  (row >= array.length || col >= array[0].length) return 'invalid coordinates';
//   if (row < 0 || col < 0) return 'invalid coordinates';
  
//   let allValues = [];
//   let rowBefore = array[row - 1] || [];
//   let rowAfter = array[row + 1] || [];
//   let rowOf = array[row]
//   let valuesInAllNeighborRows = [rowBefore, rowAfter, rowOf];
//   let startIndex = col === 0 ? col : col - 1;
//   let endIndex = col + 1 === array[0].length ? col : col + 1;
    
//   valuesInAllNeighborRows.forEach(row => {
//     allValues.push(...row.slice(startIndex, endIndex + 1));  
//   });
//   return Math.min(...allValues);  
// }





// console.log(lowestElement([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ], 1, 1) === 1);

// console.log(lowestElement([
//   [9, 8, 7],
//   [0, -1, -3],
//   [-5, -9, 54]
// ], 0, 0) === -1);

// console.log(lowestElement([
//   [9, 8, 7],
//   [0, -1, -3],
//   [-5, -9, 54]
// ], 1, 1) === -9);

// console.log(lowestElement([
//   [9, 8, 7],
//   [0, -1, -3],
//   [-5, -9, 54]
// ], 0, 2) === -3);

// console.log(lowestElement([
//   [9, 8, 7],
//   [0, -1, -3],
//   [-5, -9, 54]
// ], 2, 0) === -9);


// console.log(lowestElement([
//   [9, 8, 7],
//   [0, -1, -3],
//   [-5, -9, 54]
// ], 2, 8) === 'invalid coordinates');


// console.log(lowestElement([
//   [9, 8, 7],
//   [0, -1, -3],
//   [-5, -9, 54]
// ], 2, 'a') === 'invalid coordinates');


// console.log(lowestElement([[0, 3, 6], [1, 4, 7], [2, 5, 8]], 2, 2) === 4)
// console.log(lowestElement([[50, 30, 10],[42, 69, 420],[9000, 3,16]], 0, 0) === 30)
// console.log(lowestElement([[50, 60, 10], [52, 69, 420], [9000, 3, 16]], 0, 0) === 50)
// console.log(lowestElement([[1, 2], [5, 7]], 0, 1) === 1)
// console.log(lowestElement([[-2, -5, -500, 49501], [1004, 10502, -5061, 19303], [40012, 487190, 39430, 13899], [3, 1, 4, 1]], 2, 3) === -5061)
// console.log(lowestElement([
// [19831,28749,24518,17394,27108,5225,6364,15589,26819,31116,28619,11994,29522],
// [8085,3830,30895,14278,25618,24468,4699,11170,14285,7192,2047,103,3869],
// [25597,31040,5731,30661,21884,31530,10397,7185,10131,9652,23531,15687,7552],
// [22904,23005,27418,3460,23282,24394,9181,13518,30687,27163,12421,30071,28679],
// [26532,16610,17834,15336,5328,1715,27350,2233,22427,11371,21222,4427,1176],
// [15341,20427,18294,17264,7162,31376,4957,18252,26738,14736,13519,16289,401],
// [4715,15902,17209,2463,11790,9922,4878,4896,22598,4876,31027,3908,28095],
// [19733,7754,15226,29971,19651,16257,24347,6701,1772,30533,32515,11569,10449],
// [28263,15747,6673,4970,8378,14935,11686,3462,27395,19280,4862,8650,25926],
// [210,211,16031,17341,26186,2987,12156,2862,2672,17382,19941,2442,25680],
// [16450,14102,1493,28835,31657,15958,11709,24089,31635,172,8742,28835,25742],
// [14299,18513,16751,5122,16143,4445,6108,4413,26544,23135,21403,3593,1715],
// [32427,3989,13205,7985,27546,28512,12391,31227,21441,22071,23511,3424,18955]
// ], 10, 2) === 211)










// Area of Overlapping Rectangles

/*
**Problem**
=>objective: given two rectangles, return the area of overlap between them

=>input: 
	- two arrays, each representing a rectangle
	  - each array will have two objects, each with coordinates representing the opposite angles of the rectangles

=>output: 
	- the area of the overlap of the rectangles

=>requirements:

=>explicit  - coordinates can be positive or negative integers
            - not all examples have overlaps

=>implicit  - input gives you the bottom left and top right corner of the rectangle

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- get the coordinates (width and height) for which the rectangles overlap
- subtract one from each
- multiple the number of overlapping elements for the width * the number of overlapping elements for the height

**Data Structure**
- array for both spans

**Implementation Notes**


**Algorithm**
- declare variable `widthSpans`, assign to empty array 
- declare variable `heightSpans`, assign to empty array 
- iterate over the first rectangle array
  - declare variable `firstWidthSpans`, assign to empty array
  - declare variable `firstHeightSpans`, assign to empty array 
  - for the first x to the second x
    - push the numbers (inclusive) to `firstWidthSpans`
  -for the first y to the second y
    - push the numbers (inclusive) to `firstHeightSpans
  - push firstheight to height, first width to width
- same thing for second triangle
- pass both `widthSpans` and `heightSpans` to a helper function that will return the similar elements in both arrays
- get the length of each, subtract 1 then return the product


helper function `similarElements`
- takes two arrays
- declare count = 0
- iterates over the first, counting how many elements are in the second
- return the count

**Check algorithm against test cases


*/

// "use strict";

// function getSpansFromCoordinates(rect, axis) {
//   let range = [];
//   for (let i = rect[0][axis]; i <= rect[1][axis]; i += 1) {
//     range.push(i);
//   }
//   return range;
// }

// function getSimilarElements(arr1, arr2) {
//   let count = 0;
//   arr1.forEach(elem => {
//     if (arr2.includes(elem)) count += 1;  
//   });
//   return count;
// }

// function overlappingRectangles(rect1, rect2) {
//   let widthSpans = [];
//   let heightSpans = [];
//   widthSpans.push(getSpansFromCoordinates(rect1, 'x'), getSpansFromCoordinates(rect2, 'x'),);
//   heightSpans.push(getSpansFromCoordinates(rect1, 'y'), getSpansFromCoordinates(rect2, 'y'),);
//   let similarElementsCounts = [getSimilarElements(widthSpans[0], widthSpans[1]), getSimilarElements(heightSpans[0], heightSpans[1])].map(count => {
//     if (count === 0) return count;
//     return count - 1;
//   });
//   return similarElementsCounts[0] * similarElementsCounts[1];
// }

// console.log(overlappingRectangles(
//   [{ x: 2, y: 1 }, { x: 5, y: 5 }],
//   [{ x: 3, y: 2 }, { x: 5, y: 7 }]
// ) === 6);
// // 1st rectangle: width spans from 2-5, height from 1-5
// // 2nd rectangle: width spans from 3-5, height from 2-7
// // overlap width --> 3, 4, 5 --> 5 - 3 == 2
// // overlap height --> 2, 3, 4, 5 --> 5 - 2 === 3
// // 2 * 3 6
// // if there's no overlap, one or both will be 0

// console.log(overlappingRectangles(
//   [{ x: 2, y: -9 }, { x: 13, y: -4 }],
//   [{ x: 5, y: -11 }, { x: 7, y: -2 }]
// ) === 10);

// console.log(overlappingRectangles(
//   [{ x: -8, y: -7 }, { x: -4, y: 0 }],
//   [{ x: -5, y: -9 }, { x: -1, y: -2 }]
// ) === 5);


// // With overlaps
// console.log(
//   overlappingRectangles(
//     [{ x: 2, y: 1 }, { x: 5, y: 5 }],
//     [{ x: 3, y: 2 }, { x: 5, y: 7 }]
//   ) ===
//   6
// );
// console.log(
//   overlappingRectangles(
//     [{ x: 2, y: -9 }, { x: 13, y: -4 }],
//     [{ x: 5, y: -11 }, { x: 7, y: -2 }]
//   ) ===
//   10
// );
// console.log(
//   overlappingRectangles(
//     [{ x: -8, y: -7 }, { x: -4, y: 0 }],
//     [{ x: -5, y: -9 }, { x: -1, y: -2 }]
//   ) ===
//   5
// );
// console.log(
//   overlappingRectangles(
//     [{ x: -11, y: 2 }, { x: -1, y: 6 }],
//     [{ x: -8, y: 2 }, { x: -4, y: 9 }]
//   ) ===
//   16
// );
// console.log(
//   overlappingRectangles(
//     [{ x: -4, y: -6 }, { x: 1, y: 1 }],
//     [{ x: -2, y: -2 }, { x: 3, y: 4 }]
//   ) ===
//   9
// );
// console.log(
//   overlappingRectangles(
//     [{ x: -3, y: -3 }, { x: 3, y: 3 }],
//     [{ x: -1, y: -1 }, { x: 1, y: 1 }]
//   ) ===
//   4
// );

// // Without overlaps
// console.log(
//   overlappingRectangles(
//     [{ x: 1, y: 1 }, { x: 4, y: 4 }],
//     [{ x: 4, y: 4 }, { x: 6, y: 6 }]
//   ) ===
//   0
// );
// console.log(
//   overlappingRectangles(
//     [{ x: 1, y: 1 }, { x: 4, y: 3 }],
//     [{ x: 4, y: 4 }, { x: 6, y: 6 }]
//   ) ===
//   0
// );
// console.log(
//   overlappingRectangles(
//     [{ x: 1, y: 1 }, { x: 3, y: 3 }],
//     [{ x: 4, y: 4 }, { x: 6, y: 6 }]
//   ) ===
//   0
// );












// Diagonalize Matrices

// Write a function that diagonally orders numbers in a n x n matrix, depending on which of the four corners you originate from: upper-left (ul), upper-right (ur), lower-left (ll), lower-right (lr).


/*
**Problem**
=>objective: given a matrix size and a starting corner, return a nested array with diagonally ordered elements

=>input: 
  - integer, a string representing one of the corners (ul, ur, ll, lr) // (u/l l/r)
  - negative, infinity, NaN, fractional ---> 'invalid matrix size'
  - corner --> 'invalid originating corner'
  - n is 0? ---> return an array with on element, a nested empty array 
  - n is 1 ---> return an array with one element, a nested array with 0


=>output: 
  - nested array of numbers (integers) starting with zero from the `corner`, incrementing by 1 to 

=>requirements:

=>explicit  - diagonally ordered

=>implicit  - 3 --> 4 (x 2 - 2???)
            - 4 --> 6
            - 5 --> 8
            -    ul --- > ul ---> normal
                ul --- > ur ---> reverse each inner array
                ul --- > ll ---> reverse the outer array
                ul --- > lr ---> reverse each inner and outer array

// Examples

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- get what the ul version would look like
- transform it based on what the actual corner is 

**Data Structure**
- nested array 

**Implementation Notes**


**Algorithm**
- given `matrixSize`, `corner`
- guard clauses
- declare variable `matrix`, assign to an empty array 
- for loop from 0 to `matrixSize` - 1, `start`
  - declare variable `row`, assign to return value from passing in `start` and `matrixSize` to helper function `createRange`
  - push the `row` to `matrix`
- switch statement
  - ul --> return ul
  - ur --> return `matrix` with inner arrays reversed
  - ll --> return `matrix` reversed
  - lr --> return `matrix` with inner arrays reversed, then itself reversed

helper function `createRange`
  - given `start` and `matrixSize`, need to return an arary with element from start to matrixSize - 1
  - declare variable `range`, assign to empty array 
  - for loop from `start` to `matrixSize` non-inclusive
    - push each index to `range`
  - return `range`

**Check algorithm against test cases

*/

// function diagonalize(matrixSize, corner) {  
//   if (!Number.isInteger(matrixSize) || matrixSize < 0) return 'invalid matrix size';
//   if (!/^[ul][lr]$/.test(corner)) return 'invalid originating corner';
//   if (matrixSize === 0) return [[]];
//   // if (matrixSize === 1) return [[0]];

//   let matrix = [];
//   for (let start = 0; start < matrixSize; start += 1) { 
//     let row = createRange(start, matrixSize);
//     matrix.push(row);
//   }
//   switch(corner) {
//     case 'ul': return matrix;
//     case 'ur': return matrix.map(row => row.reverse());
//     case 'll': return matrix.reverse();
//     case 'lr': return matrix.map(row => row.reverse()).reverse();
//   }
// }

// function createRange(start, size) {
//   let range = [];
//   for (let i = start; i < size + start; i += 1) {
//     range.push(i);
//   }
//   return range;
// }

// console.log(diagonalize(3, "ll"));
// //   [2, 3, 4],
// //   [1, 2, 3],
// //   [0, 1, 2]
// // ]

// console.log(diagonalize(3, "ul"));
// //   [[0, 1, 2],
// //   [1, 2, 3],
// //   [2, 3, 4]]


// console.log(diagonalize(4, "ur"));
// // [ [3, 2, 1, 0], 
// //   [4, 3, 2, 1],
// //   [5, 4, 3, 2],
// //   [6, 5, 4, 3] ]

// console.log(diagonalize(3, "ll"));
// // [ [2, 3, 4], 
// //   [1, 2, 3], 
// //   [0, 1, 2] ]

// console.log(diagonalize(4, "ur"));
// //   [3, 2, 1, 0],
// //   [4, 3, 2, 1],
// //   [5, 4, 3, 2],
// //   [6, 5, 4, 3]
// // ]



// console.log(diagonalize(5, "lr"));
// //   [8, 7, 6, 5, 4],
// //   [7, 6, 5, 4, 3],
// //   [6, 5, 4, 3, 2],
// //   [5, 4, 3, 2, 1],
// //   [4, 3, 2, 1, 0]
// // ]

// console.log(diagonalize(5, "l") === 'invalid originating corner');
// console.log(diagonalize(5.2, "lr") === 'invalid matrix size');
// console.log(diagonalize(0, "lr")); // [[]]
// console.log(diagonalize(1, "lr")); // [[0]]




// Premier League Champions

// Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.

// How to Calculate Points and Goal Difference
// team = { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

// Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
// Goal Difference = scored - conceded = 88 - 20 = 68


/*
**Problem**
=>objective: given an array of objects representing teams, return the winning team name

=>input: 
  - array of objects (representing teams)
    - each team has properties: name, wins, loss, draws, scored, conceded
  - match points and goal difference
  - empty array? empty objects? missing properties? ---> 'invalid data'
  - three teams or more have the highest number of points? 
  - one team? 

=>output: 
  - string representing the winning team name

=>requirements:

=>explicit  - given an array of objects, calculate the points for each team 
            - if there is a tie, its broken with goal difference
            - w 3 points, draw 1 point, loss is 0 points
            - goal difference is scored - conceded

=>implicit  - 

=> test/edge cases - 


=> Mental Model: Describe the solution in 1-2 sentences. 
- check who won on points
- if there are two, check who won on goal difference
- print out the winners


**Data Structure**
- input: array of objects
- arrays to store points /iterate over the objects
- output: string

**Implementation Notes**


**Algorithm**
- pass `teams` array to `isValidData`, return 'invalid data' if false
- declare variable `teamsWithPoints`, pass `teams` array to `calculateTeamsData`
- declare variable `maxPoints`, assign to highest points in `teamsWithPoints`
- declare variable `highestPointTeams`, filter the `teams` array for those with the highest points
- if `highestPointTeams` length is 1, return the name of the team
- declare variable `maxGoalDifference`, assign to highest goal difference in `highestPointTeams`
- declare variable `winningTeams`, filter `highestPointTeams` for those iwth the highest goal difference
- print `winningTeams` -- pass to `printWinners`

helper function `isValidData`
  - - empty array? empty objects? missing properties? ---> 'invalid data'

helper function `calculateTeamsData`
  - given an array of teams
  - iterate over each team, transforming the objects into properties: name, points, goalDifference

helper function `printWinners`
  - if the length is 1, print the name of the first
  - if the length is 2 print the name of the first 'and' second
  - 3 or more, first', ' second 'and' third

**Check algorithm against test cases

"use strict";
*/
// function isValidData(teamData) {
//   if (teamData.length === 0) return false;
//   if (Object.keys(teamData[0]).length !== 6) return false;
//   return teamData.every(team => {
//     let properties = ['name', 'wins', 'loss', 'draws', 'scored', 'conceded'];
//     return properties.every(prop => Object.keys(team).includes(prop));  
//   });  
// }

// function champions(teamsArray) {
//   if (!isValidData(teamsArray)) return 'invalid data';
//   let teamsWithPoints = calculateTeamsData(teamsArray);
//   let maxPoints = Math.max(...teamsWithPoints.map(team => team.points));
//   let highestPointTeams = teamsWithPoints.filter(team => team.points === maxPoints);
//   if (highestPointTeams.length === 1) return formatWinners(highestPointTeams);
//   let maxGoalDifference = Math.max(...teamsWithPoints.map(team => team.goalDifference));
//   let winningTeams = highestPointTeams = teamsWithPoints.filter(team => team.goalDifference === maxGoalDifference);
//   return formatWinners(winningTeams);
// }

// function formatWinners(teamsArray) {  
//   switch(teamsArray.length) {
//     case 1: return teamsArray[0].name;
//     case 2: return teamsArray[0].name + ' and ' + teamsArray[1].name;
//     default: 
//       return teamsArray.slice(0, teamsArray.length - 1).map(team => team.name).join(', ') + ' and ' + teamsArray[teamsArray.length - 1].name; 
//   }
// }

// function calculateTeamsData(teamsArray) {
//   return teamsArray.map(team => {
//     return {
//       name: team.name,
//       points: (team.wins * 3) + (team.draws * 1),
//       goalDifference: team.scored - team.conceded,
//     };
//   });
// }


// console.log(champions([{}, {}]) === 'invalid data');
// console.log(champions([{ name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }, { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88}]) === 'invalid data'); // missing conceded

// console.log(champions([{ name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }, { name: "Arsenal", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }]) === 'Manchester United and Arsenal'); // match points and goal difference

// console.log(champions([
//   {
//     name: "Manchester United",
//     wins: 30,
//     loss: 3,
//     draws: 5,
//     scored: 88,
//     conceded: 20,
//   },
//   {
//     name: "Arsenal",
//     wins: 24,
//     loss: 6,
//     draws: 8,
//     scored: 98,
//     conceded: 29,
//   },
//   {
//     name: "Chelsea",
//     wins: 22,
//     loss: 8,
//     draws: 8,
//     scored: 98,
//     conceded: 29,
//   },
//   ]) === 'Manchester United')




// console.log(champions([{ name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }, { name: "Arsenal", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 15 }]) === 'Arsenal'); // match points and goal difference

// console.log(champions([{ name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }, { name: "Arsenal", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }, { name: "Brighton", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }]) === 'Manchester United, Arsenal and Brighton');

// console.log(champions([{ name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }]) === 'Manchester United');


















// Given a grid of numbers, return a grid of the Spotlight Sum of each number. The spotlight sum can be defined as the total of all numbers immediately surrounding the number on the grid, including the number in the total.

// Notes
// Note that all numbers have a spotlight sum, including numbers on the edges.
// All inputs will be valid grid (all rows will have the same length).

/*
**Problem**
=>objective: 

=>input: 
  - nested array of numbers
  - can be one nested array, --- > return it as is
  - a grid with uneven rows ---> return invalid grid
  - a grid with nested arrays with non-number elements ---> invalid grid
  - a grid with non array element ---> invalid grid
  - fractional?
  - empty array ---> return empty array
  - 

=>output: 
  - a new array with numbers replaced with spotlight sums

=>requirements:

=>explicit  - all inputs are valid grids
            - all numbers have a spotlight sum
            - 

=>implicit  - don't mutate the grid
            - edges wont add 8 numbers, just add the neighbors

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- iterate over all elements of the nested arrays, get the neighbors, add the sum and transform the passed array

**Data Structure**
- input/output: nested arrays

**Implementation Notes**
guard clauses
  - a grid with uneven rows ---> return invalid grid
  - a grid with nested arrays with non-number elements ---> invalid grid
  - a grid with non array element ---> invalid grid

**Algorithm**
- if every row is not the same length, return invalid grid
- if any element of any row is not an integer, return invalid grid
- if the array passed in has elements that are not an array, return invalid grid
- empty array returns empty array
- array with nested empty array returns itself

- return : iterate (transformation) over the element of the array (w index)
  - iterate (transformation) over the elements of the nested array (w index)
    - for each element, pass `coordinates` of this value and the original array to `spotlightSum`, and return the return value

helper method `spotlightSum`
  - given row number, index, initial array
  - declare variable `startIndex`, assign to given `index` - 1 or 0 if its 0
  - declare variable `endIndex`, assign to given `index + 1`, or itself if adding 1 is equal to the array element length
    - declare variable `prevRow`, assign to a slice of the previous row from `startIndex` to `endIndex`, or [] if this row is row 0
    - declare variable `currentRow`, assign to a slice of this row from  from `startIndex` to `endIndex`
    - declare vairable `nextRow`, assing to a slice of the next row from `startIndex` to `endIndex`, or [] if the current row is the last row
    - declare variable `allValues`, assign to an array combining all the values of prevRow, currentRow, nextRow
    - return the sum of `allValues`

**Check algorithm against test cases

"use strict";
*/

// function spotlightSum(row, column, grid) {
//   let startIndex = column === 0 ? 0 : column - 1;
//   let endIndex = column + 1 === grid[0].length ? column : column + 1;
//   let prevRow = row === 0 ? [] : grid[row - 1].slice(startIndex, endIndex + 1);
//   let currentRow = grid[row].slice(startIndex, endIndex + 1);
//   let nextRow = row === grid.length - 1 ? [] : grid[row + 1].slice(startIndex, endIndex + 1);
//   return [...prevRow, ...currentRow, ...nextRow].reduce((sum, integer) => sum + integer);
// }

// function spotlightMap(grid) {
//   if (grid.length === 0) return [];
//   if (grid[0].length === 0) return [[]];
//   let rowLength = grid[0].length;
//   if (!grid.every(row => row.length === rowLength)) return 'invalid grid'; 
//   if (grid.some(row => row.some(elem => !Number.isInteger(elem)))) return 'invalid grid';
//   if (grid.some(elem => !Array.isArray(elem))) return 'invalid grid';

//   return grid.map((row, rowIndex) => {
//    return row.map((integer, colIndex) => {
//     return spotlightSum(rowIndex, colIndex, grid);
//    }); 
//   });
// }



// console.log(spotlightMap([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]));
// //  ➞ [
// //   [12, 21, 16],
// //   [27, 45, 33],
// //   [24, 39, 28]
// // ]

// console.log(spotlightMap([
//   [2, 6, 1, 3, 7],
//   [8, 5, 9, 4, 0]
// ]));
// //  ➞ [
// //   [21, 31, 28, 24, 14],
// //   [21, 31, 28, 24, 14]
// // ]

// console.log(spotlightMap([[3]]));
// //  ➞ [[3]]


// console.log(spotlightMap([[3], [1, 2]]) === 'invalid grid');
// console.log(spotlightMap([[3], ['a']]) === 'invalid grid');
// console.log(spotlightMap([{a: 'a'}, 'a']) === 'invalid grid');
// console.log(spotlightMap([]));
// console.log(spotlightMap([[]]));















// // Splitting Objects Inside an Array

// // You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.

// // Examples
// // splitBunches([
// //   { name: "grapes", quantity: 2 }
// // ]) ➞ [
// //   { name: "grapes", quantity: 1 },
// //   { name: "grapes", quantity: 1 }
// // ]


// // splitBunches([
// //   { name: "currants", quantity: 1 },
// //   { name: "grapes", quantity: 2 },
// //   { name: "bananas", quantity: 2 }
// // ]) ➞ [
// //   { name: "currants", quantity: 1},
// //   { name: "grapes", quantity: 1 },
// //   { name: "grapes", quantity: 1 },
// //   { name: "bananas", quantity: 1 },
// //   { name: "bananas", quantity: 1 }
// // ]
// // Notes
// // The input array will never be empty.
// // Objects will always have a name and quantity over 0.
// // The returned object should have each fruit in the same order as the original.

// /*
// **Problem**
// =>objective: given an array of objects (representing fruit), return a new array with an object for each singgular fruit

// =>input: 
//   - an array of objects (properties: name, quantity)
//   - empty/sparse array?
//   - array with other elements other than objects?
//   - quantity 0?
//   - objects
//   - two of the same name?' 
//   - improper property name

// =>output: 
//   - array of objects, all with quantity 1, split up from the original array which was grouped

// =>requirements:

// =>explicit  - split up grouped fruits
//             - 

// =>implicit  - everything has quantity 1 in the returned array

// => test/edge cases - 

// => Mental Model: Describe the solution in 1-2 sentences. 
// - iterate over the objects in the array
//   - push an object to a result array quantity number of times
// - return result array

// **Data Structure**
// - input: an array of objects

// **Implementation Notes**
// - validate that all the passed in objects have exactly two properties name and quantity
// - quantity > 0

// **Algorithm**
// - guard clauses
//   - validate that every object in the `bunches` array has quantity > 0
//   - validate that every object in the bunches array has two properties, name and quantity,
//   - otherwise, return `invalid`
// - declare variable `splitArray`, assign to an empty array
// - iterate over the elements of the `bunches` array (forEach)
//   - for loop, from 1 to `quantity` 
//     - push to `splitArray`, an object with the same name but quantity = 1
// - return `splitArray`

// **Check algorithm against test cases

// "use strict";
// */

// function splitBunches(bunches) {  
//   if (!bunches.every(fruit => {
//    let keys = Object.keys(fruit).sort();
//    let realKeys = ['name', 'quantity'];
//    return keys[0] === realKeys[0] && keys[1] === realKeys[1] && keys.length === 2;
//   })) return 'invalid';
//   if (bunches.some(fruit => fruit.quantity <= 0)) return 'invalid';

//   let splitArray = [];
//   bunches.forEach(fruit => {
//     for (let time = 1; time <= fruit.quantity; time += 1) {
//       splitArray.push({ name: fruit.name, quantity: 1 });
//     }
//   });
//   return splitArray;
// }

// console.log(splitBunches([
//   { name: "grapes", quantity: 2 }
// ])); 

// // ➞ [
// //   { name: "grapes", quantity: 1 },
// //   { name: "grapes", quantity: 1 }
// // ]


// console.log(splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 }
// ])); 

// // ➞ [
// //   { name: "currants", quantity: 1},
// //   { name: "grapes", quantity: 1 },
// //   { name: "grapes", quantity: 1 },
// //   { name: "bananas", quantity: 1 },
// //   { name: "bananas", quantity: 1 }
// // ]


// console.log(splitBunches([
//   { name: "currants", quantity: 1 },
// ]));


// console.log(splitBunches([
//   { name: "currants", quantity: 0 },
// ]) === 'invalid');


// console.log(splitBunches([
//   { name: "currants" },
// ]) === 'invalid');


// console.log(splitBunches([
//   { name: "currants", uantity: 1 },
// ]) === 'invalid');


// console.log(splitBunches([
//   { nam: "currants", quantity: 0 },
// ]) === 'invalid');






// // Identical Row and Column

// // Write a function that returns true if there exists a row that is identical to a column in a 2-D matrix, otherwise false.

// /*
// **Problem**
// =>objective: given a 2d matrix, return true if there is at least one column that matches a row, false otherwise. 

// =>input: 
//   - square matrix (2D array)
//   - non-square matrix --- returns false
//   - empty array ---> returns false
//   - array with non integer elements? ---> N/A
//   - array with 1 x 1 dimensions? ---> return true
//   - sparse array? array with object properties? array with non-array nested elements? ---> N/A

// =>output: 
//   - boolean representing whether there is a row and column that are identical

// =>requirements:

// =>explicit  - 

// =>implicit  - identical means it matches left to right for rows, top to bottom for columns

// => test/edge cases - 

// => Mental Model: Describe the solution in 1-2 sentences. 
// - extract the columns into another nested array
// - test to see if any rows in the new aarray match the passed in array

// **Data Structure**
// - input: nested array
// - during: nested array for column matrix
// - output: boolean

// **Implementation Notes**


// **Algorithm**
// - if the given `matrix` is not square, return false
// - if the given `matrix` is empty, return false
// - declare variable `columnMatrix`, assign to empty array 
// - for loop from 0 to length of the first `matrix` element
//   - push an empty array to `columnMatrix` on each loop
// - iterate over `matrix` with index (rowNumber)
//   - iterate over each row with index (columnNumber)
//     - push this value to the corresponding array (that matches `columnNumber`) in `columnMatrix`
// - for loop over `columnMatrix`
//   - pass the row we are iterating over and the given `matrix` to helper function `matchesRow`
//   - if that returns true, return true
//   - otherwise, keep iterating
// - if you make it through without early returning true, return false

// helper function `matchesRow`, given a matrix and a row, returns true if that row matches one of the rows in the matrix
//   - iterating over the `matrix`, do some match the given `row`?
//     - for loop from 0 to row length, 
//       - if `matrix` at this index and `row` at this index match, continue
//       - otherwise return false
//     - if you make it through return true

// **Check algorithm against test cases

// "use strict";
// */

// function matchesRow(row, matrix) {
//   return matrix.some(matrixRow => {
//     for (let index = 0; index < matrixRow.length; index += 1) {
//       if (matrixRow[index] === row[index]) continue;
//       return false;
//     }
//     return true;
//   });
// }

// function createColumnMatrix(matrix) {
//   let columnMatrix = [];
//   for (let colNumber = 0; colNumber < matrix[0].length; colNumber += 1) {
//     columnMatrix.push([]);
//   }
  
//   matrix.forEach((row, rowNumber) => {
//     row.forEach((value, columnNumber) => {
//      columnMatrix[columnNumber].push(value); 
//     });
//   });
//   return columnMatrix;
// }

// function hasIdentical(matrix) {
//   if (matrix.length === 0) return false;
//   if (matrix.length !== matrix[0].length) return false;
  
//   let columnMatrix = createColumnMatrix(matrix);

//   for (let row = 0; row < columnMatrix.length; row += 1) {
//     if (matchesRow(columnMatrix[row], matrix)) return true;
//   }
//   return false;
// }

// console.log(hasIdentical([
//   [1, 2, 3, 4],
//   [2, 4, 9, 8],
//   [5, 9, 7, 7],
//   [6, 8, 1, 0]
// ]) === true);

// console.log(hasIdentical([
//   [4, 4, 4, 4],
//   [2, 4, 9, 8],
//   [5, 4, 7, 7],
//   [6, 4, 1, 0]
// ]) === true);

// console.log(hasIdentical([
//   [4, 4, 4, NaN],
//   [2, 4, 9, 8],
//   [5, 4, 7, 7],
//   [6, NaN, 1, 0]
// ]) === true);

// console.log(hasIdentical([
//   [4, 4, 9, 4],
//   [2, 1, 9, 8],
//   [5, 4, 7, 7],
//   [6, 4, 1, 0]
// ]) === false);

// console.log(hasIdentical([
//   [4, 4],
//   [2, 1]
// ]) === false);

// console.log(hasIdentical([
//   [4, 2],
//   [2, 1]
// ]) === true);

// console.log(hasIdentical([
//   [4, 2, 0],
//   [2, 1]
// ]) === false);

// console.log(hasIdentical([
//   [4]
// ]) === true);

// console.log(hasIdentical([]) === false);




















// // Standard Competition Ranking

// // Standard competition ranking (also known as "1224" ranking) assigns the same rank to matching values. Rank numbers are increased each time, so ranks are sometimes skipped. If we have 5 scores (the highest score having a rank of 1):

// // No matching values:



// // // Second and third scores are equal, so rank "3" is skipped.
// // Given an object containing the names and scores of 5 competitors, and a competitor name, return the rank of that competitor after applying competition ranking.
// // Notes
// // The highest score has a rank value of 1.

// /*
// **Problem**
// =>objective: 

// =>input: 
//   - object of competitors, string of a name of one of the competitors
//   - object? empty object? nested objects? 
//   - empty string? name that doesn't exist? ---> return 'invalid'
//   - are the competitors always in order? ---> no
//   - always 5 competitors? ---> no, sometimmes less or more, sometimes 1

// =>output: 
//   - rank of the name of the string passed in (using 1224 ranking)
//   - invalid

// =>requirements:

// =>explicit  - highest score is a rank of 1

// =>implicit  - 

// => test/edge cases - 

// // Scores = [99, 98, 97, 96, 95]
//               1,  2,  3,  4,  5

// // Rank = 1,  2,  3,  4,  5
// // With matching values:

// // Scores = [99, 98, 98, 96, 95]
//               1,  2,  2,  index + 1, 4, 5
//               if it doesnt match the last one, add one
//               - if it does, make it the same
//               - if the last two are the same, thsi one is index + 1

// // Rank = 1,  2,  2,  4,  5




// competition_rank({Kate: 92, Carol: 92, Jess: 92, Bruce: 92, Scott: 100}
// Mental Model: Describe the solution in 1-2 sentences. 
// - iterating over the entries in descending order, add a rank to their array
//   - if this is the name we are looking for, return the rank

// **Data Structure**
// - input: object
// - temp: nested array
// - output: number integer

// **Implementation Notes**


// **Algorithm**
// - if the name given is not in the object, return invalid
// - declare variable `orderedCompetitors`, assign to an array of object entries ordered by score
// - iterate over the nested array `orderedCompetitors`
//   - first get the rank
//     - if its index 0, rank is 1
//     - if this score matches the previous score, give the same rank
//       - otherwise, the rank is this index + 1
//     - add the rank
//   - if the name matches the one we are looking for, return the rank

// **Check algorithm against test cases

// "use strict";
// */

// function competitionRank(competitorsObject, name) {
//   if (!Object.keys(competitorsObject).includes(name)) return 'invalid';
//   let orderedCompetitors = Object.entries(competitorsObject).sort((a, b) => {
//     return b[1] - a[1];
//   });

//   for (let index = 0; index < orderedCompetitors.length; index += 1) {
//     let rank = 0;
    
//     if (index === 0) {
//       rank = 1;
//     } else if (orderedCompetitors[index][1] === orderedCompetitors[index - 1][1]) {
//       rank = orderedCompetitors[index - 1][2]
//     } else {
//       rank = index + 1;
//     }

//     orderedCompetitors[index][2] = rank;
//     // console.log(orderedCompetitors);
//     if (name === orderedCompetitors[index][0]) return rank;
//   }
// }



// console.log(competitionRank({
//   George: 96,
//   Emily: 95,
//   Susan: 93,
//   Jane: 89,
//   Brett: 82
//   }, "Jane") === 4);

// console.log(competitionRank({
//   Kate: 92,
//   Carol: 92,
//   Jess: 87,
//   Bruce: 87,
//   Scott: 84
//   }, "Bruce")=== 3);

// console.log(competitionRank({
//   Kate: 92,
//   Carol: 92,
//   Jess: 87,
//   Bruce: 87,
//   Scott: 84
//   }, "Scott")=== 5);

// console.log(competitionRank({
//   Kate: 92,
//   Carol: 92,
//   Jess: 87,
//   Bruce: 87,
//   Scott: 84
//   }, "Kate")=== 1);


// console.log(competitionRank({
//   Kate: 92,
//   Carol: 92,
//   Jess: 92,
//   Bruce: 92,
//   Scott: 92,
//   }, "Bruce")=== 1);

// console.log(competitionRank({
//   Kate: 92,
//   }, "Bruce")=== 'invalid');

// console.log(competitionRank({
//   Kate: 92,
//   Carol: 92,
//   Jess: 92,
//   Bruce: 92,
//   Scott: 92,
//   }, "")=== 'invalid');

// console.log(competitionRank({
//   Kate: 92,
//   Carol: 92,
//   Jess: 92,
//   Bruce: 92,
//   Scott: 100,
//   }, "Scott")=== 1);

// console.log(competitionRank({
//   Kate: 92,
//   Carol: 92,
//   Jess: 92,
//   Bruce: 92,
//   Scott: 100,
//   }, "Kate")=== 2);





// // All Pairs that Sum to target

// // Create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order: [smaller, larger].

// // // Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]
// // Notes
// // If no pairs are found, return an empty array [].
// // You are only allowed to use each number once in a pair.

// /*
// **Problem**
// =>objective: 

// =>input: 
//   - array of numbers, a target number
//   - sparse array ----> yes,
//   - empty array ----> yes, return an empty array
//   - array with different data types? ---> no
//   - array with object properties? ---> no
//   - NaN? return []


// =>output: 
//   - empty array
//   - an array with nested arrays of pairs of numbers that add up to the target number
//   - each pair is sorted, and the pairs themselves are sorted by the first number

// =>requirements:

// =>explicit  - no pairs? return empty array 
//             - can only use each number once in a pair

// =>implicit  - 

// => test/edge cases - 


// => Mental Model: Describe the solution in 1-2 sentences. 
// - iterate over each number (sorted input)
//   - iterate over each potential match for each number,
//     - if they make a pair, add them to the result array
// - return the result array

// **Data Structure**
// - input: array
// - output: array, nested arrays, 

// **Implementation Notes**


// **Algorithm**
// - if the given `arrayOfNumbers` is empty, return an empty array
// - if the given `arrayOfNumbers` has any non-number element, return an empty array
// - declare a variable `pairs`, assign to an empty array
// - iterate over `arrayOfNumbers`, sorted in ascending order (for loop to the second to last element)
//   - for each number, do a for loop from the next index, to the last index of `arrayOfNumbers`
//     - add the values and if they add to the `target`, push an array of both numbers to `pairs`
// - return `pairs`

// **Check algorithm against test cases

// "use strict";
// */

// function allPairs(arrayOfNumbers, target) {
//   if (arrayOfNumbers.length === 0) return [];
//   if (!arrayOfNumbers.every(elem => Number.isInteger(elem))) return [];
//   if (arrayOfNumbers.some(elem => Number.isNaN(elem))) return [];

//   let pairs = [];
//   arrayOfNumbers.sort((a, b) => a - b);
//   for (let index = 0; index < arrayOfNumbers.length - 1; index += 1) {
//     for (let pairIndex = index + 1; pairIndex < arrayOfNumbers.length; pairIndex += 1) {
//       if (arrayOfNumbers[index] + arrayOfNumbers[pairIndex] === target) {
//         pairs.push([arrayOfNumbers[index], arrayOfNumbers[pairIndex]]);
//       }
//     }
//   }
//   return pairs;
// }


// console.log(allPairs([2, 4, 5, 3], 7));       // ➞ [[2, 5], [3, 4]]
// console.log(allPairs([5, 3, 9, 2, 1], 3));    // ➞ [[1, 2]]
// console.log(allPairs([4, 5, 1, 3, 6, 8], 9)); // ➞ [[1, 8], [3, 6], [4, 5]]
// let a = [4, 5, 1, 3, 6, 8];                   
// a.length = 100;
// a[60] = 55;
// console.log(allPairs(a, 9));                  // ➞ [[1, 8], [3, 6], [4, 5]]
// console.log(allPairs([], 9));                 // []
// console.log(allPairs(['a'], 9));                 // []
// console.log(allPairs([1, 2, 3, NaN], 9));                 // []




/*

Distance to Nearest Vowel
Write a function that takes in a string and for each character, returns the distance to the nearest vowel in the string. If the character is a vowel itself, return 0.

*/

/*
**Problem**
=>objective: given a `string`, return an array that contains integers representing each character's distance from the nearest vowel

=>input: 
  - string
  - empty string? ---> return null
  - anything other than string ---> return null; 
  - no vowel ? ---> always a vowel
  - treat non-letters the same as letters

=>output: 
  - array of integers (representing the distances away from the closest vowel)

=>requirements:

=>explicit  - if the char is a vowel, return 0
          

=>implicit  - two vowels same distance, just return the distance
            - 'distance' is the absolute difference between the current letter's index and the nearest vowel's index

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- split and iterate over the characters of the given `string`
  - for each letter, find the nearest vowel, calculate the distance

- finding all vowel indexes, storing in an array
  - for each character, return the smallest difference when comparing the current index to all of the vowel's indexes

**Data Structure**
- input: string
- temp: array 
- ouptut: array or null

**Implementation Notes**


**Algorithm**
- if the passed in `string` is not a string or it's empty, return null
- declare variable `vowelIndexes`, assign it to an empty array 
- iterate over the characters in `string`, if we iterate over a vowel, push the index to `vowelIndexes`
- return the return value that comes from the transformation over the split `string` (with indexes)
  - for each letter, transform the `vowelIndexes` to the absolute difference between this index and their index
  - return the minimum from ^^^

**Check algorithm against test cases

"use strict";
*/

// function distanceFromVowel(string) {
//   if (typeof string !== 'string' || string.length === 0) return null;
//   let vowelIndexes = [];
//   for (let index = 0; index < string.length; index += 1) {
//     // if (['a', 'e', 'i', 'o', 'u'].includes(string[index])) vowelIndexes.push(index);
//     if (/[aeiou]/i.test(string[index])) vowelIndexes.push(index);
//   }
//   return string.split('').map((char, idx) => {
//     let distances = vowelIndexes.map(distance => Math.abs(idx - distance));
//     return Math.min(...distances);
//   });
// }


// console.log(distanceFromVowel('') === null);
// console.log(distanceFromVowel([]) === null);
// console.log(distanceFromVowel({a: 'a'}) === null);
// console.log(distanceFromVowel('oooo'))// [0, 0, 0, 0]);
// console.log(distanceFromVowel('sight'))// === [1, 0, 1, 2, 3]);
// console.log(distanceFromVowel('.i?h/'))// === [1, 0, 1, 2, 3]);
// console.log(distanceFromVowel('.i?h6'))// === [1, 0, 1, 2, 3]);
// console.log(distanceFromVowel('eaten'))// === [0, 0, 1, 0, 1]);
// console.log(distanceFromVowel('word'))// === [1, 0, 1, 2]);
// console.log(distanceFromVowel('wOrd'))// === [1, 0, 1, 2]);












// function matrixes(input) {
//   if (!input.every(subArr => Array.isArray(subArr))) {
//     return null;
//   }
//   let leng = input.length;

//   if (!input.every(subArr => subArr.length === leng)) {
//     return null;
//   } 

//   let columns = [[], [], [], []];

//   input.forEach(subArr => {
//     subArr.forEach((num, idx) => {
//       columns[idx].push(num);
//     })
//   })
//   console.log(columns);
// }

// console.log(matrixes([
//   [1, 2, 3, 4],
//   [2, 4, 9, 8],
//   [5, 9, 7, 7],
//   [6, 8, 1, 0]
// ])) // true













/*
Single Letter Swaps
Given an array of strings and an original string, write a function to output an array of boolean values - true if the word can be formed from the original word by swapping two letters only once and false otherwise.

Examples
validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")
➞ [true, true, false, false]

// Swap "A" and "B" from "ABCDE" to get "BACDE".
// Swap "A" and "E" from "ABCDE" to get "EBCDA".
// Both "BCDEA" and "ACBED" cannot be formed from "ABCDE" using only a single swap.

validateSwaps(["32145", "12354", "15342", "12543"], "12345")
➞ [true, true, true, true]

validateSwaps(["9786", "9788", "97865", "7689"], "9768")
➞ [true, false, false, false]

algorithm
- declare variable `allPossibleWords`, assign to passing the `originalWord` to a helper function `listAllWords`
- iterate (transformation) over the given `arrayOfWords`, checking to see if each word is included in `allPossibleWords`

helper function `listAllWords`
- declare variable `result`, assign to empty array 
- iterate over the chars of the given `word` (with `firstIndex`) (for loop  to the second to last letter)
  - for each char, iterate over the indexes from the next one to the last one (with `secondIndex`
    - swap the chars at `firstIndex` and `secondIndex`
    - add the new word to `result`
- return result

*/

// function validateSwaps(arrayOfWords, originalWord) {
//   let allPossibleWords = listAllWords(originalWord);
//   return arrayOfWords.map(word => allPossibleWords.includes(word));
// }

// function listAllWords(word) {
//   let result = [];
//   for (let firstIndex = 0; firstIndex < word.length - 1; firstIndex += 1) {
//     for (let secondIndex = firstIndex + 1; secondIndex < word.length; secondIndex += 1) {
//       let chars = word.split('');
//       [chars[firstIndex], chars[secondIndex]] = [chars[secondIndex], chars[firstIndex]];
//       result.push(chars.join(''));
//     }
//   }
//   return result;
// }

// console.log(validateSwaps(['BACDE', 'EBCDA', 'BCDEA', 'ACBED'], 'ABCDE'));// [true, true, false, false])
// console.log(validateSwaps(['32145', '12354', '15342', '12543'], '12345'));// [true, true, true, true])
// console.log(validateSwaps(['9786', '9788', '97865', '7689'], '9768'));// [true, false, false, false])
// console.log(validateSwaps(['123', '321', '132', '13', '12'], '213'));//  [true, false, false, false, false])
// console.log(validateSwaps(['123', '1234', '1235'], '12'));// [false, false, false])
// console.log(validateSwaps(['123', '123', '123'], '133'));// [false, false, false])
// console.log(validateSwaps(['132', '321', '213'], '123'));// [true, true, true])








// // Rearrange the Sentence
// // Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.

// /*
// **Problem**
// =>objective: given a setence with words that have embedded numbers, return the sentence with the words in the order of their embedded numbers but without the embedded numbers themselves

// =>input: 
//   - string, each word (single space separated) has a number embedded in it
//   - not string? --> return null
//   - symbols? --> yes, treat them like chars
//   - empty string? ---> return empty string
//   - more than single digit integer? --> yes  
//   - just a number? --> no

// =>output: 
//   - string with words in the order of their embedded number, without their embedded number

// =>requirements:

// =>explicit  - 

// =>implicit  - preserve case
//             - number can be at any point in the word

// => test/edge cases - 


// => Mental Model: Describe the solution in 1-2 sentences. 
// - arrange the words first
// - remove the numbers
// - return the string

// - remove the number, store it in a nested array, sort by the nested array, transform to just the word, join it 

// **Data Structure**
// - input: string
// - temp: array
// - output: string

// **Implementation Notes**


// **Algorithm**
// - if the `string` is not a string, return null
// - if the `string` is empty or only has spaces, return and empty string
// - declare variable `wordsSorted`, assign to the return value from splitting the string at the single spaces, sorting the `words` by the number embedded in them
// - return the return value from transforming `wordsSorted`, remove the number from each word, join the array

// **Check algorithm against test cases

// "use strict";
// */

// function extractNumber(word) {
//   let number = word.match(/\d+/)[0];
//   return Number(number);
// }

// function rearrange(string) {
//   if (typeof string !== 'string') return null;
//   if (string.replace(/\s/, '').length === 0) return '';
//   let wordsSorted = string.split(' ').sort((a, b) => {
//     return extractNumber(a) - extractNumber(b);
//   });
//   return wordsSorted.map(word => word.replace(/\d+/, '')).join(' ');
// }

// console.log(rearrange("is2 Thi1s T4est 3a") === "This is a Test");
// console.log(rearrange([]) === null);
// console.log(rearrange("is2 Thi1s T4est. 3a") === "This is a Test.");
// console.log(rearrange("") === "");
// console.log(rearrange("is22 Thi1s T40est 33a") === "This is a Test");
// console.log(rearrange("T4est") === "Test");
// console.log(rearrange(" ") === "");
// console.log(rearrange("my2 1hi na3me ale5x is4") === "hi my name is alex");
// console.log(rearrange("there1000 don'3t go70") === "don't go there");







// Abbreviations Unique?
// // You are given two inputs:

// // An array of abbreviations.
// // An array of words.
// // Write a function that returns true if each abbreviation uniquely identifies a word, and false otherwise.

// /*
// **Problem**
// =>objective: 

// =>input: 
//   - two arrays, first abbreviations, second words
//   - if one input is not an array --> return null
//   - if one array is not same size as teh other ---> return null
//   - elements of the arrays, other than strings? ---> return null
//   - abbreviation or word is an empty array or only has space characters? ---> return null
//   - the abbreviation is the word? --> its possible
//   - elements of the arrays, case? ---> has to match
//   - elements of the arrays, made up of non-letters? --> yes

// =>output: 
//   - boolean true or false, representing whether all of the abbreviations uniquely id a word

// =>requirements:

// =>explicit  - abbreviations are singular, need to uniquely id a word

// =>implicit  - 

// => test/edge cases - 



// => Mental Model: Describe the solution in 1-2 sentences. 
// - return false if not ALL of the abbreviations match exactly 1 word

// **Data Structure**


// **Implementation Notes**


// **Algorithm**
// - if one input is not an array, return null
// - if the inputs length is not the same, return null
// - if the inputs elements are not all strings, return null
// - if any element in either input is an empty string, return null 
// - iterate over given `abbreviations` (for loop)
//   - get a count of how many words in the `wordList` this abbreviation matches
//   - if it is not exactly one and that one is the oen in the same index, early return false
// - if you get through the for loop, return true


// **Check algorithm against test cases

// "use strict";
// */

// function uniqueAbbrev(abbreviations, words) {
//   if (!Array.isArray(abbreviations) || !Array.isArray(words)) return null;
//   if (abbreviations.length !== words.length) return null;
//   if (!abbreviations.concat(words).every(word => {
//     return typeof word === 'string' && word.length > 0;
//    })) return null;

//   for (let index = 0; index < abbreviations.length; index += 1) {
//     let count = words.filter(word => {
//       return abbreviations[index] === word.slice(0, abbreviations[index].length);
//     }).length;
    
//     if (count !== 1 || abbreviations[index] !== words[index].slice(0, abbreviations[index].length)) return false;
//   }
//   return true;
// }

// console.log(uniqueAbbrev(["ho", "h", "ha"], 5) === null);
// console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy", 'a']) === null);
// console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", {}]) === null);
// console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", ""]) === null);
// console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) === false);
// console.log(uniqueAbbrev(["hou", "hop", "ha"], ["house", "hope", "happy"]) === true);
// console.log(uniqueAbbrev(["hou", "ha", "hop"], ["house", "hope", "happy"]) === false);
// console.log(uniqueAbbrev(["9", "12", "123"], ["908", "12456", "123"]) === false);
// console.log(uniqueAbbrev(["hou", "hop", "ha"], ["house-", "hope1", "ha.ag"]) === true);
// console.log(uniqueAbbrev(["hou", "hop", "po"], ["house-", "hope1", "ha.ag"]) === false);




// Write a function that divides an array into chunks such that the sum of each chunk is <= n. Start from the left side of the array and move to the right.

// Spaces count as one character.
// Trim beginning and end spaces for each word bucket (see final example).
// If buckets are too small to hold a single word, return an empty array: []
// The final goal isn't to return just the words with a length equal (or lower) to the given n, but to return the entire given phrase bucketized (if possible). So, for the specific case of "by" the only word with a proper length, the phrase can't be bucketized, and the returned array has to be empty.

/*
**Problem**
=>objective: 

=>input: 
  - string, number
  - empty string? --> return null
  - number is less than the length of a single word --> return empty array

=>output: 
  - null
  - empty array number is less than a singlel word
  - an array of strings

=>requirements:

=>explicit  - spaces count as one character
            - if buckets are too small to hold a single word, return an empty array 

=>implicit  - each chunk can only have full words
            - trim spaces before and after bucketized words
            - moving from left to right

=> test/edge cases - 



=> Mental Model: Describe the solution in 1-2 sentences. 
- splitting the given `string` in words, iterating over the array testing to see if the current word can be added to a bucket, 
  - if it can't, push the bucket to a result array
  - if it can, add it to the bucket

**Data Structure**
- input: string, number
- temp: array (of words)
- output: array

**Implementation Notes**


**Algorithm**
- declare variable `buckets`, assign to an empty array
- declare variable `words`, assign to an array of the words in the string
- declare variable `bucket`, assign to an empty string
- while loop (condition `words` length greater than 0)
  - if adding the first element of `words` to `bucket`, forces bucket to be greater than the given `number`
    - push `bucket` to `buckets` array 
    - reassign `bucket` to an empty string
    - concatenate the first element in `words` to `bucket`
    - otherwise
    - just concatenate the first `element` of `words` to `bucket` with a space, 
  - shift off the first element of `words`
- push `bucket` to `buckets` 
- return `buckets` array


  **Check algorithm against test cases

"use strict";
*/


// function bucketize(string, number) {
//   if (typeof string !== 'string' || !Number.isInteger(number)) return null;
//   if (string.length === 0) return null;
//   if (string.split(' ').map(word => word.length).some(size => size > number)) return [];
  
//   let buckets = [];
//   let words = string.split(' ');
//   let bucket = '';
  
//   while (words.length > 0) {
//     let possibleBucket = bucket + ' ' + words[0];
//     if (possibleBucket.length > number) {
//       buckets.push(bucket);
//       bucket = '';
//       bucket = words[0];
//     } else {
//       bucket = bucket.length === 0 ? words[0] : possibleBucket;
//     }
//     words.shift();
//   }

//   buckets.push(bucket);
//   return buckets;
// }

// console.log(bucketize("she sells sea shells by the sea", 10));
// // ➞ ["she sells", "sea shells", "by the sea"]

// console.log(bucketize(" she sells sea shells by the sea", 10));
// // // ➞ ["she sells", "sea shells", "by the sea"]

// console.log(bucketize("the mouse jumped over the cheese", 7));
// // // ➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

// console.log(bucketize("fairy dust coated the air", 20));
// // // ➞ ["fairy dust coated", "the air"]

// console.log(bucketize("a b c d e", 2));
// // // ➞ ["a", "b", "c", "d", "e"]

// console.log(bucketize("a b c d e", []) === null);
// console.log(bucketize({}, 2) === null);
// console.log(bucketize("the mouse jumpeddddddddddd over the cheese", 7)); // []












// Majority Vote
// Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).

// Notes
// The frequency of the majority element must be strictly greater than 1/2.
// If there is no majority element, return null.
// If the array is empty, return null.

/*
**Problem**
=>objective: 

=>input: 
  - an array
  - empty array --> return null
  - elements are any primitive value (strings, booleans, numbers, null, undefined)

=>output: 
  - the majority element
  - null if no majority or if array is empty

=>requirements:

=>explicit  - majority vote is an element that occurs > array length / 2 times (so 2/3, 3/4, NOT 2/4)
            - no majority element, return null
            - if the array is empty, return null

=>implicit  - case matters, 'a' !== "A" 

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- console.log(majorityVote(["A", "A", "A", "B", "C", "A"]) === "A");
- iterate over a unique set of elements, getting the count for each
  - if any count is over length / 2, return that element
- if you get thruogh the whole iteration, return null

**Data Structure**
- input: array
- temp: array to store unique elements
- output: primitive or null 

**Implementation Notes**

**Algorithm**
main function `majorityVote`
  - if the array is empty, return null
  - declare variable `uniqueElements`, assign to the return value from passing the given `array` to helper function `listUniqueElements`
  - (for loop) iterate over the elements of `uniqueElements`
    - declare variable `count`, assign to the return value from passing the `array` and this element to helper function `countOccurences` 
    - if count greater than the original array length / 2, return the element you are currently iterating over
  - return null;

helper function `listUniqueElements` --> given an array, return it with only unique elements
- declare variable `unique`, assign to an empty array
- iterate over the elements of `array`, 
  - if it exists in `unique`, continue
  - otherwise, push it to `unique`
- return `unique`

helper function `countOccurences` --> given an array and element, return the number of times the element occurs in the array
- declare variable `count`, assign to 0
- iterate over the given array
  - if this element matches the given `element`, increment count


**Check algorithm against test cases

"use strict";
*/

// function majorityVote(array) {
//   if (array.length === 0) return null;
//   let uniqueElements = listUniqueElements(array);
//   for (let uniqueIndex = 0; uniqueIndex < uniqueElements.length; uniqueIndex += 1) {
//     let count = countOccurences(array, uniqueElements[uniqueIndex]);
//     if (count > (array.length / 2)) return uniqueElements[uniqueIndex];
//   }
//   return null;
// }

// function countOccurences(array, searchElement) {
//   let count = 0;
//   array.forEach(arrayElem => {
//     if (arrayElem === searchElement) count += 1;
//   });
//   return count;
// }


// function listUniqueElements(array) {
//   let unique = [];
//   array.forEach(element => {
//     if (!unique.includes(element)) unique.push(element);
//   });
//   return unique;
// }


// console.log(majorityVote(["A", "A", "B"]) === "A");
// console.log(majorityVote(["A", "A", "A", "B", "C", "A"]) === "A");
// console.log(majorityVote(["A", "B", "B", "A", "C", "C"]) === null);
// console.log(majorityVote(["Aa", "Ba", "Ba", "Aa", "C", "C", "Aa", "Aa", "Aa"]) === "Aa");
// console.log(majorityVote([null, "Ba", "Ba", null, "C", "C", null, null]) === null);
// console.log(majorityVote([null, "Ba", "Ba", null, undefined, undefined, null, null]) === null);
// console.log(majorityVote([]) === null);
// console.log(majorityVote([true, "Ba", "Ba", true, "C", "C", true, true, true]) === true);










// Battleship field

// // Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// // Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.

// // Before the game begins, players set up the board and place the ships accordingly to the following rules:
// // There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
// // Each ship must be a straight line, except for submarines, which are just single cell.
// // The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.
// /*
// **Problem**
// =>objective: 

// =>input: 
//   - a 10 by 10 nested array, with 0s and 1s as its elements

// =>output: 
//   - boolean true or false depending on whether the field is valid

// =>requirements:

// =>explicit  - one single battleship (4 cells)
//             - 2 cruisers (3 cells)
//             - 3 destroyers (2 cells)
//             - 4 submarines (1 cell)
//             - each ship is a straight line (it spans the # of cell columns or the # of cells rows)
//             - ships cannot overlap or be in contact with any other ship , neither by edge nor by corner (20 cells are covered, no more no less // no one cell should have another cell in a diagonal spot // if two cells are part of the same boat, they should only touch each other, not any other cells)
//             - the field must have the perfect number of each type of ship

// =>implicit  - 4 + 6 + 6 + 4 = 20 cells need to be covered, no more, no less

// => test/edge cases - 


// => Mental Model: Describe the solution in 1-2 sentences. 

// **Data Structure**


// **Implementation Notes**


// **Algorithm**

// // given a nested array, row and column, return false if the coordinate has a 1 in the diagonal
// // - get a list of the diagonal coordinates that exist
//       - diagonals array
// //    - if the previous row exists
//         // - if the next col exists
//         //   - add it to the diagonals array
//         // - if the prev col exists
//              - add it to the diagonals array
//       - if the next row exists
//         - if the next col exists
//           - add it to the diagonals array
//         - if the prev col exists
//           - add it to the diagonals array

// // - check to see if they include 1
// - validate that 20 spots are covered exactly
// - validate that no ship has a diagonal cell
// - get an array of the coordinates of all the ones
// - declare variable `ships`, assign to an empty array 
// - while loop (condition array has elements left)
//   - for the first element of the array
//   - declare variable `horizontal`, filter the array for the 1s in the same row (not more than 3 away)
//   - declare variable `vertical`, filter the array for the 1s in the same column (not more than 3 away)
//   // - horizontal = [[0,2], [0, 3]]
//   // - vertical = [[0,0], [1, 0], [2, 0], [3, 0]]
//   - pass each `horizontal` array and `vertical` array to `cellsInARow`, which will return the coordinates that are touching each other and touching the OG coordinate
//     - this returns an array of the coordinates that are in a row with the original coordinate
//     - push the count + 1 (for the ogcoordinate) to `ships`
//     - delete this coordinate and the touching coordinates from the array of all 1 coordinates
// - validate that `ships` has exactly one 4, two 3s, three 2s, four 1s
//   - if it does, return true
//   - else, return false


// helper function `matches`, given two arrays, return true if they have the same elements in the same order

// helper Function `cellsInARow`, given `array`, `direction`, `originalCoordinate`
//   - return the coordinates that are touching each other and the OG coordinate
//   - declare variable `touchingCoordinates`, assign to an empty array
//   - if the direction is `horizontal`
//     - for loop from the OG coordinate, to [x, y + arraylength]
//       - declare variable `coordinate`, assign to an array similar to the originalCoordinate but its y is incremented
//       - if this coordinate exists in the passed in array, push it to `touchingCoordinates`
//       - otherwise, early return `touchingCoordinates`
//   - else if the direction is `vertical`
//     - for loop from the OG coordinate to [x + arraylength, y]
//       - declare variable `coordinate`, assign to an array similar to the `originalCoordinate` but x is incremented
//       - if this coordinate exists in the passed in array, push it to `touchingCoordindates`
//       - otherwise, early return `touchingCoordinates`
//   - return `touchingCoordinates`

// **Check algorithm against test cases

// "use strict";
// */

// /*
// - while loop (condition array has elements left)
//   - declare variable `ship`, assign to array with nested array of the first element of the array `allCoordinatesOfOnes`
//   - for the first element of the array        
//       - if the element to the right of this element is a 1
//         - collect the next subsequent coordinates that are 1 into `ship`
//       - if the element below these coordinates is a 1
//         - collect the next lower subsequent coordinates that are 1 into `ship`
//     - push the count of `ship` to `ships`
//     - delete all coordinates in `ship` from `allCoordinatesOfOnes`
// // - validate that `ships` has exactly one 4, two 3s, three 2s, four 1s
// //   - if it does, return true
// //   - else, return false
// */

// // given two arrays, remove the elements of the second from the first (they have nested arrays)
// // - declare variable `newArr`, assign to empty array 
// // - iterate over the elements in the array
// //   - iterate over the elements in used
// //     - if the elem in the array matches the elem in used at any point, don't add it to `newArr`
// //     - if it never matches, add it to `newArr`


// function twoArraysMatch(first, second) {
//   return first.every((elem, index) => elem === second[index]);
// }

// function removedUsedElems(list, used) {
//   return list.filter(elem => {
//     !used.some(usedElem => twoArraysMatch(usedElem, elem));
//   });
// }

// console.log(removedUsedElems([[5, 6], [0, 1], [1, 1]], [[1, 1], [0, 1]]));


// function validateBattlefield(field) {
//   if (!twentySpotsCoveredNoDiagonals(field)) return false;
//   let ships = [];
//   let allCoordinatesOfOnes = listAllCoordinatesOfOnes(field);

//   while (allCoordinatesOfOnes.length > 0) {
//     let currentCoordinate = allCoordinatesOfOnes[0];
//     let ship = [currentCoordinate];
//     let coordinateToTheRight = [currentCoordinate[0], currentCoordinate[1] + 1];
//     let coordinateBelow = [currentCoordinate[0] + 1, currentCoordinate[1]];
    
//     if (field[coordinateToTheRight[0]][coordinateToTheRight[1]] === 1) {
//       ship.push(coordinateToTheRight);
//       let index = coordinateToTheRight[1] + 1;
//       while (field[coordinateToTheRight[0]][index] === 1) {
//         ship.push([coordinateToTheRight[0], index]);
//         index += 1;
//       }
//     }
//     // if (field[coordinateBelow[0]][coordinateBelow[1]] === 1) {
//     //   console.log(coordinateBelow);
//     //   ship.push(coordinateBelow);
//     // }
//     ships.push(ship);
//     allCoordinatesOfOnes = removedUsedElems(allCoordinatesOfOnes, ship);
//     console.log(ship);
//   }

//   return ships;
// }

// function listAllCoordinatesOfOnes(field) {
//   let coordinates = [];
//   for (let row = 0; row < field.length; row += 1) {
//     for (let column = 0; column < field[0].length; column += 1) {
//       if (field[row][column] === 1) coordinates.push([row, column]);
//     }
//   }
//   return coordinates;
// }

// function hasDiagonal(field, row, col) {
//   let diagonalValues = [];
//   if (field[row - 1]) {
//     if (field[row - 1][col + 1]) diagonalValues.push(field[row - 1][col + 1]);
//     if (field[row - 1][col - 1]) diagonalValues.push(field[row - 1][col - 1]);
//   }
//   if (field[row + 1]) {
//     if (field[row + 1][col + 1]) diagonalValues.push(field[row + 1][col + 1]);
//     if (field[row + 1][col - 1]) diagonalValues.push(field[row + 1][col - 1]);
//   }
//   return diagonalValues.includes(1);
// }

// function twentySpotsCoveredNoDiagonals(field) {
//   let count = 0;
//   for (let row = 0; row < field.length; row += 1) {
//     for (let column = 0; column < field[0].length; column += 1) {
//       if (field[row][column] === 1) {
//         count += 1;
//         if (hasDiagonal(field, row, column)) return false;
//       }
//     }
//   }
//   return count === 20;
// }



// console.log(validateBattlefield([
//   [1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//   [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ]))// === true);

// console.log(validateBattlefield([
//   [1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ]) === false);

// console.log(validateBattlefield([
//   [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
//   [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//   [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ]) === false);





// // similar to interview question, given two arrays, count how many times one appears in the other

// /*
// **Problem**
// =>objective: 

// =>input: 
//   - two arrays

// =>output: 
//   - integer, count of how many times the second array is found in the nested arrays of the first

// =>requirements:

// =>explicit  - 

// =>implicit  - 

// => test/edge cases - 


// => Mental Model: Describe the solution in 1-2 sentences. 


// **Data Structure**


// **Implementation Notes**


// **Algorithm**
// - iterate over the elements in the first array
//   - pass each to `matches`, if it returns true, increment the count
// - return the count

// - matches
//   - gets two 1D arrays, needs to return boolean true/false representing whether the second array's elements can be found in the first array, in proper order
//   - array of indexes of where in the first array the first element of the second array can be found, we can iterate over those, slice those for the proper length, and check to see if they match the second array exactly

// - isPerfectMatch(two arrays of equal length) 
//   - return true if every element is the same at every index

// **Check algorithm against test cases

// "use strict";
// */

// function isPerfectMatch(arr1, arr2) {
//   return arr2.every((elem, index) => elem === arr1[index]);
// }

// function matches(array, partialArr) {
//   let firstElementMatchIndexes = array.map((element, index) => {
//     if (element === partialArr[0]) return index;
//   });
//   firstElementMatchIndexes = firstElementMatchIndexes.filter(index => index !== undefined);
//   if (firstElementMatchIndexes.length === 0) return false;
  
//   for (let index = 0; index < firstElementMatchIndexes.length; index += 1) {
//     if (isPerfectMatch(array.slice(firstElementMatchIndexes[index], firstElementMatchIndexes[index] + partialArr.length), partialArr)) return true;
//   }

//   return false;
// }

// function countOccurences(array, partialArr) {
//   if (partialArr.length === 0) return 1;
//   let count = 0;
//   array.forEach(nestedArr => {
//     if (matches(nestedArr, partialArr)) count += 1;
//   });
//   return count;
// }


// console.log(countOccurences([[1, 2, 3], [2, 1]], [1, 2]))// === 1);
// console.log(countOccurences([[1, 2, 3], [1, 2], [1, 3, 4, 1, 2]], [1, 2]))// === 3);
// console.log(countOccurences([[1, 2, 3]], []))// === 1);
// console.log(countOccurences([[1, 2, 3], [1, 2]], [1, 2]))// === 2);
// console.log(countOccurences([], [1, 2]))// === 0);
// console.log(countOccurences([[1, 2, 3]], [5, 6]))// === 0);











// First Reoccurence Index



// function recurIndex(string) {
//   let recurringChar = {};
//   let charCount = {};
//   if (typeof string !== 'string' || string.length === 0) return recurringChar;
//   for (let strIndex = 0; strIndex < string.length; strIndex += 1) {
//     if (charCount[string[strIndex]]) {
//       charCount[string[strIndex]].push(strIndex);
//       recurringChar[string[strIndex]] = charCount[string[strIndex]];
//       return recurringChar;
//     } else {
//       charCount[string[strIndex]] = [strIndex];
//     }
//   }
//   return recurringChar;
// }

// console.log(recurIndex("DXTDXTXDTXD") )// {"D": [0, 3]}
// console.log(recurIndex("YXZXYTUVXWV") )// {"X": [1, 3]}
// console.log(recurIndex("YZTTZMNERXE") )// {"T": [2, 3]}
// console.log(recurIndex("AREDCBSDERD") )// {"D": [3, 7]}
// console.log(recurIndex("") )// {}
// console.log(recurIndex(null) )// {}
// console.log(recurIndex('nul') )// {}








// Basic Statistics: Mode
// // The mode of a group of numbers is the value (or values) that occur most often (values have to occur more than once). Given a sorted array of numbers, return an array of all modes in ascending order.

// // Examples

// /*
// **Problem**
// =>objective: 

// =>input: 
//   - array of integers
//   - empty array --> return empty array
//   - possible that there is no mode ---> return empty array
//   - if all values occur no more than 1 time ---> return empty array
//   - primitive values, not necessarily integers
//   - not always sorted

// =>output: 
//   - all modes in ascending order

// =>requirements:

// =>explicit  - return an array of all modes in ascending order (of the number not the count)

// =>implicit  - mode is the number(s) with the highest count
//             - if the counts are 2, 3, 4 only those with count 4 are included in the mode
//             - count must be > 1 for it to be a mode

// => test/edge cases - 

// => Mental Model: Describe the solution in 1-2 sentences. 
// - get the counts into an object
// - get the max count
// - get the property names associated with that max count
// - sort those names 

// **Data Structure**
// - object to store the counts

// **Implementation Notes**


// **Algorithm**
// - if the given `array` is empty, return an empty array
// - declare variable `counts`, assign to an empty array
// - iterate over the elements in `array`
//   - if this element exists in `counts` already, increment its value
//     - the way to check this is if it in included in a transformed array of `counts` where we only have the first element of each nested array (count.map(arr => arr[0]).includes(this element)
//   - otherwise, 
//     - push a nested array with this element as the first element and the number 1 as the second element
// - declare variable `maxCount`, assign to the maximum number in nested arrays in `counts` that is in the 1 index of the nested arrays
// - if `maxCounts` is 1, return an empty array
// - filter `counts` for the nested arrays with the `maxCount`, map over those so that they are just their value not their counts, sort the returning array and return it

// helper function `existsInCounts`, given a nested array and a target, return true if the target is one of the first elements in one of the nested arrays
//   - get an array of all the first elements
//   - check if that array includes the target

// **Check algorithm against test cases

// "use strict";
// */

// function indexInCounts(counts, target) {
//   let allFirstElems = counts.map(nestedArr => nestedArr[0]);
//   return allFirstElems.indexOf(target);
// }

// function mode(array) {
//   if (array.length === 0) return [];
//   let counts = [];
//   array.forEach(arrayElement => {
//     let indexOfElementInCounts = indexInCounts(counts, arrayElement);
//     if (indexOfElementInCounts !== -1) {
//       counts[indexOfElementInCounts][1] += 1;
//     } else {
//       counts.push([arrayElement, 1]);
//     }
//   });
//   let maxCount = Math.max(...counts.map(nestedArr => nestedArr[1]));
//   if (maxCount === 1) return [];
//   return counts.filter(nestedArr => {
//                   return nestedArr[1] === maxCount;
//                   })
//                .map(nestedArr => nestedArr[0]);
// }




// console.log(mode([1, 2, 2, 2, 3, 6, '6', 7, 9]) );// [2]
// console.log(mode([]) );// []
// console.log(mode([4, 5, 6, 7, 9, 10]) );// []
// console.log(mode([4, 5, 6, 6, 6, 7, 7, 9, 10]) );// [6]
// console.log(mode([4, 5, 5, 6, 7, 8, 8, 9, 9]) );// [5, 8, 9]
// console.log(mode([1, 2, 2, 3, 6, 6, 7, 9]) );// [2, 6]
// console.log(mode([2, 2, 3, 6, 6, 7, 9, 1]) );// [2, 6]










// // Deep Arithmetic
// // Write a function that takes an array of strings of arbitrary dimensionality ([], [][], [][][], etc.) and returns the sum of every separate number in each string in the array.

// // Notes
// // Numbers in strings can be negative, but will all be base-10 integers.
// // Negative numbers may directly follow another number.
// // The hyphen or minus character ("-") does not only occur in numbers.
// // Arrays may be ragged or empty.

// /*
// **Problem**
// =>objective: 

// =>input: 
//   - an array of strings or nested arrays with strings or more deeply nested arrays with string elements
//   - og array or nested arrays can be sparse or empty
//   - 

// =>output: 
//   - 

// =>requirements:

// =>explicit  - adding every separate number in each string in the array
//             - numbers can be negative
//             - negative number can follow another number

// =>implicit  - 

// => test/edge cases - 

// console.log(sum(["1", "five", "2wenty", "thr33"]) === 36);
// // 1 + 0 + 2 + 33 === 36
// // console.log(sum([["1X2", "t3n"],["1024", "5", "64"]]) === 1099);
// // 1 + 2 + 3 + 1024 + 5 + 64 === 1099
// console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) === 759);
// // 1 + 10 + 3 + 738 + 0 + 1 + 4 + 3 - 1 === 759
// console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"10-1s0"]]) === 769);
// console.log(sum([[["1"], "10v3", [], [[[[]]]]], ["738h"], [["s0"], ["1mu4ch3"],"10-1s0"]]) === 769);



// => Mental Model: Describe the solution in 1-2 sentences. 
// - extract all elements that are not arrays (flatten the array)
// - iterate over the elements
//   - extract the numbers from those elements, add them to another array
// - sum the new array

// **Data Structure**
// - given an array 
// - array to store the extracted numbers

// **Implementation Notes**
// - string.match(/-?\d+/g) -- will give you array of matches

// **Algorithm**
// main function 
// - declare variable `flattenedArray`, assign to the return value from passing the given `array` to `flatten` helper function
// - declare variable `numbers`, assign to an empy array
// - iterate over `flattendedArray`, for each element
//   - extract the numbers from the string, push them to `numbers` (spread syntax)
// - return the sum of the `numbers` array

// helper function `flatten` given an array, with unlimited nested arrays, return all elements that are not arrays (recursive)
// - declare variable `flattenedArray`, assign to an empty array
// - iterate over the elements of the given `array`
//   - if the element is not an array, add it to `flattenedArray`
//   - otherwise, 
//     - pass this element to `flatten`

// **Check algorithm against test cases

// "use strict";
// */

// function flatten(array) {
//   let flattenedArray = [];
//   array.forEach(element => {
//     if (!Array.isArray(element)) {
//       flattenedArray.push(element);
//     } else {
//       flattenedArray.push(...flatten(element));
//     }
//   });
//   return flattenedArray;
// }

// function sum(array) {
//   let flattenedArray = array.flat(Infinity);
//   let numbers = [];
//   flattenedArray.forEach(string => {
//     let extractedNumbers = string.match(/-?\d+/g);
//     if (extractedNumbers !== null) {
//       extractedNumbers = extractedNumbers.map(stringNumber => Number(stringNumber));
//       numbers.push(...extractedNumbers);
//     }
//   });
//   return numbers.reduce((sum, num) => sum + num);
// }

// console.log(sum(["1", "five", "2wenty", "thr33"]) === 36);
// // 1 + 0 + 2 + 33 === 36
// // console.log(sum([["1X2", "t3n"],["1024", "5", "64"]]) === 1099);
// // 1 + 2 + 3 + 1024 + 5 + 64 === 1099
// console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) === 759);
// // 1 + 10 + 3 + 738 + 0 + 1 + 4 + 3 - 1 === 759
// console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"10-1s0"]]) === 769);
// console.log(sum([[["1"], "10v3", [], [[[['3a']]]]], ["738h"], [["s0"], ["1mu4ch3"],"10-1s0"]]) === 772);


// Diamond Sum
// Given an nxn grid of consecutive numbers, return the grid's Diamond Sum. The diamond sum is defined as the sum of the numbers making up the diagonals between adjacent sides.

/*
**Problem**
=>objective: 

=>input: 
  - an odd number representing the number of items in each fictional array row, and the number of rows total (n x n)
  - if it is not an odd integer > 0 --> return null;
  - if its 1 ---> return 1

=>output: 
  - the sum of the diamond pattern
  - the sum of the middle number in the top row
    - then the two (before and after the middle) in the next row
    - the the two before and after the previous two in the next row
    - when you hit hte middle row (or the values you are getting are the first and last index), starting moving in, so at the indexs after and before the two previous ones 

=>requirements:

=>explicit  - the numbers in the grid are consecutive
            - diamond sum is the sum of the numbers making up the diagonals between adjacent sides

=>implicit  - first and last row are always middle number
            - middle row is always first and last number
            - numbers start at 1
            - the first diamond number is n / 2 rounded up (3 / 2 = 1.5 rounded to 2)

=> test/edge cases - 

console.log(diamondSum(1) === 1);
// [1]
console.log(diamondSum({}) === null);
console.log(diamondSum(-3) === null);
console.log(diamondSum(4) === null);
console.log(diamondSum(3) === 20);

// [
//   [1, _, 3],
//   [_, 5, _],
//   [7, _, 9]
// ]

// // The numbers behind the underscores make up the Diamond Sum.
// // 2 + 4 + 6 + 8 = 20
2 + 2 + 2 + 2
console.log(diamondSum(5) === 104);

// [
//   [1, 2, _, 4, 5],
//   [6, _, 8, _, 10],
//   [_, 12, 13, 14, _],
//   [16, _, 18, _, 20],
//   [21, 22, _, 24, 25]
// ]

// // 3 + 7 + 9 + 11 + 15 + 17 + 19 + 23 = 104
      3 + 4 + 2 + 2 + 4 + 2 + 2 + 4

console.log(diamondSum(7) === );
[
  [ 1,  2,  3,  _,  5,  6,  7],
  [ 8,  9, __, 11, __, 13, 14],
  [15, __, 17, 18, 19, __, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42],
  [43, 44, 45, 46, 47, 48, 49],
idx 0   1   2   3   4   5   6
]

first row index = 3 number 4 (+ rest of this row + beginning of next row) 4 + 3 + 3 = 10
second row index = 2, 4 number 10, get 12 
third row index = 1, 5 number 16
fourth row index = 0, 6
fifth row index = 1, 5
sixth row index = 2, 4
seventh row index = 3

=> Mental Model: Describe the solution in 1-2 sentences. 
- get an array of indexes
- something to store the numbers to be summed, array
- iterate over the array
  - if this is the first element, store the first number (n / 2 rounded up)
  - otherwise, 
    - if this number is bigger than the last number
      - add the difference between the indexes (what you are iterating over) to the last number
      - store it
    - otherwise
      - 4, 1 -- 2 + 1 + 1 = 4
      - add n - 4 and this index + 1 to the last number and store it
- then sum the numbers in storaeg

**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `arrayOfIndexes`, assign to the return value from passing `n` to `listDiamondIndexes`
- declare variables `diamondNums`, assign to an array with the first number in it (n / 2 rounded up)
- iterate over the `arrayOfIndexes` with indexes
  - if its the first one, skip it
  - if this element is bigger than the last element
    - add the difference between elements to the last element in the `diamondNums` array
  - otherwise
    - add (n - last element in this array) + this element to the last number in the `diamondNums` array
- sum` diamondNums` and return it

helper function `listDiamondIndexes` given `n` return array of diamond indexes
  - declare variable `indexes`, assign to an array of the first index (n / 2 rounded down)
  - for loop from the first index to the distance last index
    - each time pushing an array of the first index being incremented and decremented by the number we are iterating over
    - this should get you to the middle row
  - then slice the array from 0 to the second to last, reverse it, and add it to the end of `indexes`
  - return `indexes` flattened

**Check algorithm against test cases

"use strict";
*/
// function listDiamondIndexes(n) {
//   let indexes = [Math.floor(n / 2)];
//   for (let spacesAway = 1; spacesAway < n - indexes[0]; spacesAway += 1) {
//     indexes.push([indexes[0] - spacesAway, indexes[0] + spacesAway]);
//   }
//   indexes.push(indexes.slice(0, -1).reverse());
//   return indexes.flat(Infinity);
// }

// function diamondSum(n) {
//   if (!Number.isInteger(n) || n < 0 || n % 2 === 0) return null;
//   if (n === 1) return n;
//   let arrayOfIndexes = listDiamondIndexes(n);
//   let diamondNums = [Math.ceil(n / 2)];

//   arrayOfIndexes.forEach((element, index) => {
//     if (index === 0) return;  
//     let lastElement = arrayOfIndexes[index - 1];
//     let lastElementInDiamondNums = diamondNums[diamondNums.length - 1];

//     if (element > lastElement) {
//       let difference = element - lastElement;
//       diamondNums.push(difference + lastElementInDiamondNums);
//     } else {
//       let nextDiamondNumber = (n - lastElement) + element + lastElementInDiamondNums;
//       diamondNums.push(nextDiamondNumber);
//     }

//   });
//   return diamondNums.reduce((sum, num) => sum + num);
// }

// console.log(diamondSum(5) === 104);
// // indexes =     [2, 1, 3,  0,  4,  1,  3,  2]
// // diamondNums = [3, 7, 9, 11, 15, 17, 19, 23];
// // 3 + 7 + 9 + 11 + 15 + 17 + 19 + 23
// console.log(diamondSum(1) === 1);
// console.log(diamondSum({}) === null);
// console.log(diamondSum(-3) === null);
// console.log(diamondSum(4) === null);
// console.log(diamondSum(3) === 20);






// Super Strict Grading
// // Given an object literal of student names and an array of their test scores over the semester, return a list of all the students who passed the course (in alphabetical order). However, there is one more thing to mention: the pass mark is 100% in everything!

// // Notes
// // All of a student's test scores must be 100% to pass.
// // Remember to return an array of student names sorted alphabetically.

// /*
// **Problem**
// =>objective: 

// =>input: 
//   - object literal
//   - if the object is empty? --> return an empty array
//   - if no one passed? --> return an empty array
//   - can a score be > 100? --> yes, this is passing
//   - can a score be nonsense or invalid? --> yes (ex '1.3'), invalid scores are considered failing

// =>output: 
//   - an array, sorted alphabetically in ascending order, with the names of the students from the object who had all scores of 100%

// =>requirements:

// =>explicit  - the pass mark is 100 
//             - all of student's test scores must be 100% to pass
//             - return the array of student names sorted alphabetically in ascending order
//             - return a list of students who passed

// =>implicit  - given `object`, keys are student names, values are arrays of strings
//             - '5/5' -- pretty much need the first number and the last number

// => test/edge cases - 

// names = [Zara, kris, charlie, alex]
// for each name
// zara ['10/10'], verify that every score is at least 100, if it is less than 100 or invalid, return false for this name
//   - if all scores are > 100, add it to another array to store the name

// => Mental Model: Describe the solution in 1-2 sentences. 
// - iterate through each name in the array (filter for the names that return true)
//   - iterate through each score in the array associated with each name (testing whether each score is > 100)
//     - convert the string score to a number score 
//     - if it is invalid or < 100, return false
//       - a score is only valid if it is a string starting with one or more numbers then a '/' ending with one or more numbers
//     - otherwise, return true

// **Data Structure**


// **Implementation Notes**


// **Algorithm**
// - declare variable `passingStudents`, assign to the return value from extracting the keys from the given `classObj`, iterating over them (filtering)
//   - for each student, check that `every` score (value associated with this property name) is valid and > 100
//     - pass the score to `validScore` helper function, if it returns false, return false
//     - pass the score to `is100OrMore` helper function, if it returns > 100, return true, otherwise, false
// - return `passingStudents` sorted

// helper function `validScore` passed a string
//   - verify that it is a string starting with one or more numbers then a '/' ending with one or more numbers

// helper function `is100OrMore`, given a string 
//   - declare variable `numerator`, assign to the first number in the string
//   - declare variable `denominator`, assign to the second number in the string
//   - return the result of the equality comparison numerator / denominator > 100

// **Check algorithm against test cases
// */

// function is100OrMore(score) {
//   let [numerator, denominator] = score.match(/\d+/g);
//   return numerator / denominator >= 1;
// }

// function whoPassed(classObj) {
//   let students = Object.keys(classObj);
//   if (students.length === 0) return [];
//   let passingStudents = students.filter(studentName => {
//     return classObj[studentName].every(score => {
//      return isValidScore(score) && is100OrMore(score); 
//     });
//   });
//   return passingStudents.sort();
// }

// function isValidScore(score) {
//   return /^\d+\/\d+$/.test(score);
// }


// console.log(whoPassed({
//   "Zara" : ["10/10"],
//   "Kris" : ["30/30"],
//   "Charlie" : ["100.4"],
//   "Alex" : ["1/1"]
// })); // ["Alex", "Kris", "Zara"]

// console.log(whoPassed({
//   "Zara" : ["10/10"],
//   "Kris" : ["30/30"],
//   "Charlie" : ["100/100"],
//   "Alex" : ["1/1"]
// })); // ["Alex", "Charlie", "Kris", "Zara"]

// console.log(whoPassed({
//   "John" : ["5/5", "50/50", "10/10", "10/10"],
//   "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
//   "Adam" : ["8/10", "22/25", "3/5", "5/5"],
//   "Barry" : ["3/3", "20/20"]
// })); // ["Barry", "John"]

// console.log(whoPassed({
//   "Zara" : ["10/10"],
//   "Kris" : ["30/30"],
//   "Charlie" : ["105/100", "1/1"],
//   "Alex" : ["1/1"]
// })); // ["Alex", "Charlie", "Kris", "Zara"]

// console.log(whoPassed({
//   "Zach" : ["10/10", "2/4"],
//   "Fred" : ["7/9", "2/3"]
// })); // []

// console.log(whoPassed({})); // []









// Create a function that can nest a flat array to represent an incremental depth level sequence.

// Examples

// Notes
// The elements do not matter to the function, you should increment by index.
// Expect the array length to be from 2-20.

/*
**Problem**
=>objective: 

=>input: 
  - array with length between 2 - 20
  - elements are anything
  - 

=>output: 
  - a nested array 

=>requirements:

=>explicit  - the element do not matter to the function
            - increment by index
            - array length from 2 - 20

=>implicit  - each element is nested as many times as its position

=> test/edge cases - 

// incrementalDepth([1, 2]) ➞ [1, [2]]
[1, [2]]

// incrementalDepth([1, 2, 3, 4, 5]) ➞ [1, [2, [3, [4, [5]]]]]
a = [5]

[1, 2, 3, 4, 5]
a[0] = [4, [5]]

[1, [2, [3, [4, [5]]]]]

// incrementalDepth([1, 3, 2, 6]) ➞ [1, [3, [2, [6]]]]

// incrementalDepth(["dog", "cat", "cow"]) ➞ ["dog", ["cat", ["cow"]]]


=> Mental Model: Describe the solution in 1-2 sentences. 
- continuously iterating over the last element of the array (until there are only two elements left) 
  - if this element is not an array, nest it inside an array
  - if this element is an array, nest the element before this element with this element

- build it element by element, starting from the last
  - for the last one, push it to storage
  - until the first one, nest whatever is in storage with this element, push the whole thing to storage

**Data Structure**
- array to store (nested)
- array to iterate over (flat)

**Implementation Notes**


**Algorithm**
- declare variable `nestedArray`, assign to an empty array
- iterate over the elements of the given `flatArray` from the last to the first
  - just push the last element to `nestedArray`
  - for the other, 
    - reassign `nestedArray` to an array with this element as the first element, and `nestedArray` as the second
- return nestedArray

**Check algorithm against test cases
*/

// function incrementalDepth(flatArray) {
//   let nestedArray = [];
//   for (let index = flatArray.length - 1; index >= 0; index -= 1) {
//     if (index === flatArray.length - 1) {
//       nestedArray.push(flatArray[index]);
//       continue;
//     }
//     nestedArray = [flatArray[index], nestedArray];
//   }
//   return nestedArray;
// }



// console.log(incrementalDepth([1, 3, 2, 6])) // [1, [3, [2, [6]]]]

// console.log(incrementalDepth([1, 2])) // [1, [2]]
// // [1, [2]]

// console.log(incrementalDepth([1, 2, 3, 4, 5])) // [1, [2, [3, [4, [5]]]]]
// // a = [5]

// // [1, 2, 3, 4, 5]
// // a[0] = [4, [5]]

// // [1, [2, [3, [4, [5]]]]]

// console.log(incrementalDepth(["dog", "cat", "cow"])) // ["dog", ["cat", ["cow"]]]

























// You are stuck in a multi-storey car parking lot. Your task is to exit the carpark using only the staircases. Exit is always at the bottom right of the ground floor.

// Create a function that takes a two-dimensional array where:

// Free carparking spaces are represented by a 0
// Staircases are represented by a 1
// Your starting position is represented by a 2 and can be at any level of the car park.
// Exit is always at the bottom right of the ground floor.
// You must use the staircases (1) to go down a level.
// Each floor will have only one staircase apart from the ground floor which will not have any staircases.
// ... and returns an array of the quickest route out of the carpark.

// arr = [
//   [1, 0, 0, 0, 2], 
//   [0, 0, 0, 0, 0] 
// ]
// starting coordinate(0, 4) "L4"  (going from position to staircase abs difference of index) direction will be L is negative, R is positive
// after stairs coordinate(1, 1) "D1"
// // Starting from 2, move to left 4 times = "L4"
// // Go down from stairs 1 step = "D1"
// // Move to right 4 times to exit from right bottom corner = "R4"

// result = ["L4", "D1", "R4"]

// parking_exit([
//   [2, 0, 0, 1, 0],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0]
// ]) ➞ ["R3", "D2", "R1"]

// // Starting from 2, move to right 3 times = "R3"
// // Go down from stairs 2 steps = "D2"
// // Move to right 1 step to exit from right bottom corner = "R1"

// parking_exit([[0, 0, 0, 0, 2]]) ➞ []
// // You are already at right bottom corner.


// /*
// **Problem**
// =>objective: 

// =>input: 
//   - 

// =>output: 
//   - 

// =>requirements:

// =>explicit  - exit is always at the bottom right of the ground floor
//             - exit carpark at only staircases
//             - starting position is always on first row
//             - free carparking spaces are 0
//             - staircases are 1
//             - starting position is 2
//             - each floor has exactly one staircase

// =>implicit  - if you're on the bottom row, exit is last index of that row
//             - we know we're on the bottom row if there are no stairs (1)
//             - if you go down the stairs, and you don't need to move to find the stairs at this level, increment the last thing you pushed
//             - can't start at stairs on first row

// => test/edge cases - 





// => Mental Model: Describe the solution in 1-2 sentences. 
// - array to store the directions
// - iterate over the rows
//   - if its the first row, middle row(s), last row, pass to helper functions
//   - if the middle row(s) helper function returns D1, and the last element pushed to the storage array is D1, increment, 
//     - otherwise push the direction and D1

// first row
//   - finding 2, finding 1 --- making the subtraction
//   - return whatever needs to get pushed, and the index which you find yourself

// middle row
//   - if you're already at the stairs, return something that tells you that
//   - otherwise, return direction to be pushed and the index of the stairs

// last row (row, index of the previous stairs)
//   - how far is this index from the last index
//     - if its on the last index, return something that tells you that
//     - otherwise, return the 'R# of indexes away'

// **Data Structure**
// - arrays

// **Implementation Notes**


// **Algorithm**
// - declare variable `directions`, assign to empty array
// - declare variable `lastIndex`, 
// - if its only one row, return the directions to the exit
// - iterate over the rows of given `carpark`
//   - if the index of this `level` is 0, pass this row to `firstRow`
//       - multiple assign `lastIndex`, `direction` to the return value (direction, lastIndex)
//       - push the direction and 'D1' to `directions`, unless its 0
//         - if its 0, increment the last element pushed to `directions`
//   - if the index of this `level` is the last index
//     - pass this row to `lastRow`, 
//       - conditional for the return value of `lastRow`
//         - if its null, push nothing
//         - push the direction
//   - otherwise, its a one of manymiddle row
//     - pass the row and lastIndex to `middleRow`
//       - multiple assign `lastIndex`, `direction` to the return value (direction, lastIndex)
//       - push the direction and 'D1' to `directions, unless its 0
//         - if its 0, increment the last element pushed to `directions`

// helper function `firstRow` given a row
//   - find the index of 2
//   - find the index of 1
//   - return an array of [return value from passing indexes to `getDirection`, index of 1];

// helper function `lastRow`, given a row, currentIndex
//   - if lastIndex is at the end of the row, return null
//   - otherwise pass the currentIndex and last possible index to `getDirection`
//     - return the direction

// helper function `getDirection`- given 2 indexes, start, end
//   - `direction` , assign to empty string
//   - get the difference
//   - if the difference is 0, return 0
//   - if difference is negative, push 'L' to `direction`
//     - otherwise, 'R'
//   - push the abs value of the difference to `direction`


// **Check algorithm against test cases
// */
// // - declare variable `directions`, assign to empty array
// // - declare variable `lastIndex`, 
// // - if its only one row, return the directions to the exit
// // - iterate over the rows of given `carpark`
// //   - if the index of this `level` is 0, pass this row to `firstRow`
// //       - multiple assign `lastIndex`, `direction` to the return value (direction, lastIndex)
// //       - push the direction and 'D1' to `directions`, 
// //   - if the index of this `level` is the last index
// //     - pass this row to `lastRow`, 
// //       - conditional for the return value of `lastRow`
// //         - if its null, push nothing
// //         - push the direction
// //   - otherwise, its a one of manymiddle row
// //     - pass the row and lastIndex to `middleRow`
// //       - multiple assign `lastIndex`, `direction` to the return value (direction, lastIndex)
// //       - push the direction and 'D1' to `directions, unless its 0
// //         - if its 0, increment the last element pushed to `directions`
// function parking_exit(carpark) {
//   let directions = [];
//   let lastIndex;
//   if (carpark.length === 1) {
//     lastIndex = carpark[0].indexOf(2);
//     let direction = lastRow(carpark[0], lastIndex); 
//     if (direction) directions.push(direction);
//     return directions;
//   }
//   carpark.forEach((level, index) => {
//     let direction;
//     if (index === 0) {
//       [lastIndex, direction] = firstRow(level);
//       directions.push(direction, 'D1');
//     } else if (index === carpark.length - 1) {
//       direction = lastRow(level, lastIndex); 
//       if (direction) directions.push(direction);
//     } else {
//       [lastIndex, direction] = middleRow(level, lastIndex);
//       if (direction) {
//         directions.push(direction);
//       } else {
//         directions[directions.length - 1] = increment(directions[directions.length - 1]);
//       }
//     }
//   });
//   return directions;
// }

// function increment(directionString) {
//   let chars = directionString.split('');
//   return chars.map((char, index) => {
//     if (index === 0) return char;
//     return Number(char) + 1; 
//   }).join('');
// }

// function firstRow(level) {
//   let start = level.indexOf(2);
//   let stairs = level.indexOf(1);
//   return [stairs, getDirection(start, stairs)];
// }

// function middleRow(level, currentIndex) {
//   let start = currentIndex;
//   let stairs = level.indexOf(1);
//   return [stairs, getDirection(start, stairs)];
// }

// function lastRow(level, currentIndex) {
//   let start = currentIndex;
//   let exit = level.length - 1;
//   return getDirection(start, exit);
// }

// function getDirection(start, end) {
//   let singleDirection = [];
//   let difference = end - start;
//   if (difference === 0) return 0;
//   difference < 0 ? singleDirection.push('L') : singleDirection.push('R');
//   singleDirection.push(String(Math.abs(difference)));
//   return singleDirection.join('');
// }


//   // helper function `getDirection`- given 2 indexes, start, end
//   // - `direction` , assign to empty string
//   // - get the difference
//   // - if the difference is 0, return 0
//   // - if difference is negative, push 'L' to `direction`
//   //   - otherwise, 'R'
//   // - push the abs value of the difference to `direction`


// let arr = [
//   [1, 0, 0, 0, 2], 
//   [0, 0, 0, 0, 0] 
// ]

// console.log(parking_exit(arr)) //= ["L4", "D1", "R4"]

// console.log(parking_exit([
//   [2, 0, 0, 1, 0],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0]
// ])); // ["R3", "D2", "R1"]

// console.log(parking_exit([
//   [2, 0, 0, 1],
//   [0, 0, 0, 1],
//   [0, 0, 0, 0]
// ])); // ["R3", "D2"]

// console.log(parking_exit([[0, 0, 0, 0, 2]])); // []

// console.log(parking_exit([[2, 0, 0, 0, 0]])); // ['R4']














// Ascending Consecutive Numbers
// // Write a function that returns true if a string consists of ascending or ascending AND consecutive numbers.

// // Notes
// // A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.


// /*
// **Problem**
// =>objective: 

// =>input: 
//   - a string of numbers
//   - fractional?
//   - negative?
//   - empty string -- return false
//   - non-string -- return null

// =>output: 
//   -  boolean or null

// =>requirements:

// =>explicit  - returns true if a string consists of ascending or ascending and consecutive numbers
//             - a number can consist of any number of digits, as long as the numbers are adjacent to each other in the string, and the string has at least two of them

// =>implicit  - are the splits always even? yes, has to be broken up evenly

// => test/edge cases - 


// => Mental Model: Describe the solution in 1-2 sentences. 
// - split by different lengths and test if it ascends

// **Data Structure**
// - array

// **Implementation Notes**


// **Algorithm**
// - if the given `string` is not a `string` return null
// - if the given `string` is an empty string, return false
// - declare variable `halfway`, assign to given `string` length / 2 rounded to the floor
// - for loop (from 1 to `halfway`) `groupSize`
//   - pass the groupSize and the string to `splitNumberString`
//   - pass the return value of ^^ to `isAscending`
//     - if `isAscending` returns true, return true
//     - otherwise, continue
// - if you make it out of the for loop without early returning, return false

// helper function `splitNumberString`, given `string` and a `groupSize`
// - declare variable `numbers`, assign to empty array
// - declare variable `group`, assign to empty string
// - for loop over the string's chars
//   - push this char to `group`
//   - if the size of the `group` matches `groupSize`, push it to `numbers` as a Number type
// - one last push of `group` to `numbers`
// - return `numbers`

// helper function `isAscending` given an array of numbers, return true if they are ascending
// - for loop over each number
//   - skip the first
//   - compare this number to the last number + 1, if its true, continue
//   - if its false, return false
// - if you make it through the for loop, return true

// **Check algorithm against test cases
// */

// function isAscending(numbersArray) {
//   for (let index = 0; index < numbersArray.length; index += 1) {
//     if (index === 0) continue;
//     if (numbersArray[index] !== numbersArray[index - 1] + 1) return false; 
//   }
//   return true;
// }

// function splitNumberString(string, groupSize) {
//   let numbers = [];
//   let group = '';
//   for (let index = 0; index < string.length; index += 1) {
//     group = group.concat(string[index]);
    
//     if (group.length === groupSize) {
//       numbers.push(Number(group));
//       group = '';
//     }
//   }
//   if (group.length > 0) numbers.push(Number(group));
//   return numbers;
// }

// function ascending(numberString) {
//   if (typeof numberString !== 'string') return null;
//   if (numberString.length === 0) return false;
//   let halfway = Math.floor(numberString.length / 2);
//   for (let groupSize = 1; groupSize <= halfway; groupSize += 1) {
//     let splitString = splitNumberString(numberString, groupSize);
//     if (isAscending(splitString)) return true;
//   }
//   return false;
// }

// console.log(ascending("232425"));// ➞ true
// // Consecutive numbers 23, 24, 25
// // halfway = 3;

// console.log(ascending("2324256"));// ➞ false
// // // No matter how this string is divided, the numbers are not consecutive.

// console.log(ascending("444445"));// ➞ true
// // // Consecutive numbers 444 and 445.

// console.log(ascending("444445") === true)
// // // split every 1 -- 4 4 4 4 4 4 5 --> can you increment through? -- no
// // // split every 2 -- 44 44 45 --> can you increment through -- no
// // // split every 3 -- 444 445 --> can you increment through -- yes, return true
// console.log(ascending("1234567") === true)
// console.log(ascending("123412351236") === true)
// console.log(ascending("57585960616263") === true)
// console.log(ascending("500001500002500003") === true)
// console.log(ascending("919920921") === true)
// console.log(ascending("2324256") === false)
// console.log(ascending("1235") === false)
// console.log(ascending("121316") === false)
// console.log(ascending("12131213") === false)
// console.log(ascending("54321") === false)
// console.log(ascending("56555453") === false)
// console.log(ascending("90090190290") === false)
// console.log(ascending("35236237238") === false)
// console.log(ascending("") === false)
// console.log(ascending([]))// === false)







// Longest Consecutive Run
// // A consecutive-run is a list of adjacent, consecutive integers. This list can be either increasing or decreasing. Create a function that takes an array of numbers and returns the length of the longest consecutive-run.

// // To illustrate:

// // longestRun([1, 2, 3, 5, 6, 7, 8, 9]) ➞ 5
// // // Two consecutive runs: [1, 2, 3] and [5, 6, 7, 8, 9] (longest).
// // Examples
// // longestRun([1, 2, 3, 10, 11, 15]) ➞ 3
// // // Longest consecutive-run: [1, 2, 3].

// // longestRun([5, 4, 2, 1]) ➞ 2
// // // Longest consecutive-run: [5, 4] and [2, 1].

// // longestRun([3, 5, 7, 10, 15]) ➞ 1
// // // No consecutive runs, so we return 1.
// // Notes
// // If there aren't any consecutive runs (there is a gap between each integer), return 1.

// // algo
// // - set max to 1
// // - declare storage
// // - declare direction
// // - iterate over the nums
// //   - if storage is empty, push this one
// //   - if storage has 1
// //     - is teh abs value of this el minus storage el 1
// //     - if yes, set the direction to the difference, store this in storage
// //     - if no, make this number the only number in storage
// //   - if storage has more than 1
// //     - does adding direction to the last num in storage get you the number you are iterating over?
// //       - if so, add it to storage
// //       - if not
// //         - set max to storage length if that is larger than the current max


// function longestRun(array) {
//   let max = 1;
//   let storage = [];
//   let direction;
//   array.forEach(number => {
    
//     if (storage.length === 0) {
//       storage.push(number);
//     } else if (storage.length === 1) {
      
//       if (Math.abs(number - storage[0]) === 1) {
//         direction = number - storage[0];
//         storage.push(number);
//       } else {
//         storage[0] === number;
//       }

//     } else {

//       if (storage[storage.length - 1] + direction === number) {
//         storage.push(number);
//       } else {
//         if (storage.length > max) {
//           max = storage.length; 
//           storage = [number];
//         }
//       }
//     }
//   });
//   if (storage.length > max) max = storage.length; 
//   return max;
// }


// console.log(longestRun([1, 2, 3, 5, 6, 7, 8, 9]) === 5);
// // // Two consecutive runs: [1, 2, 3] and [5, 6, 7, 8, 9] (longest).
// // Examples
// console.log(longestRun([1, 2, 3, 10, 11, 15]) === 3);
// // // Longest consecutive-run: [1, 2, 3].

// console.log(longestRun([5, 4, 2, 1]) === 2);
// // // Longest consecutive-run: [5, 4] and [2, 1].

// console.log(longestRun([3, 5, 7, 10, 15]) === 1);
// // // No consecutive runs, so we return 1.















// Write a function that divides an array into chunks such that the sum of each chunk is <= n. Start from the left side of the array and move to the right.

// // Examples

// // Notes
// // Use the greedy approach when solving the problem (e.g. fit as many elements you can into a chunk as long as you satisfy the sum constraint).


// /*
// **Problem**
// =>objective: 

// =>input: 
//   - array, sum (integer)
//   - empty array --> return empty array
//   - if n < any number in the array --> return null;
//   - integers of array can be negative
//   - if any array elements are not integers, return null

// =>output: 
//   - nested array whereby each array that is nested does not sum to > n

// =>requirements:

// =>explicit  - start from the left, move to the right

// =>implicit  - 

// => test/edge cases - 
// // divide([1, 2, 3, 4, 1, 0, 2, 2], 5)
// result = [[1, 2], [3], [4, 1, 0]];
// temp = [5];
// once we get past the iteration, remember to push whatever is stored in temp
// return result
// // ➞ [[1, 2], [3], [4, 1, 0], [2, 2]]

// // divide([1, 0, 1, 1, -1, 0, 0], 1)
// // ➞ [[1, 0], [1], [1, -1, 0, 0]]

// // divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3)
// // ➞ [[2, 1, 0, -1, 0, 0], [2, 1], [3]]

// divide([], 3) // []
// divide([2, 1, 0, -1, 0, 0, 2, 1, 100], 3) // return null
// divide([2, 1, 0, -1, 0, 0, 2, [], 3], 3) // return null

// => Mental Model: Describe the solution in 1-2 sentences. 
// - array for the result
// - array for the temporary group of numbers
// - iterate over the numbers in the array 
//   - if adding them to the temporary group exceeds the given `n`, push the temp group and store the current number in a new temp array
// - push the temp one more time
// - return the result

// **Data Structure**


// **Implementation Notes**


// **Algorithm**
// - declare variable `nestedArr`, assign to empty array
// - declare variable `temp`, assign to empty array
// - iterate over the `numbers` in teh given `array`
//   - if passing the temporary array plus this number and target to `isValidSum` returns true
//     - push this `number` to `temp`
//   - otherwise, 
//     - push `temp` to `nestedArr`
//     - reassign temp to an array with only this number
// - push temp one more time unless it is of 0 length
// - return `nestedArr`

// helper method `isValidSum`, given array and target
//   - return true if array sums to target or less
//   - otherwise, return false
// console.log(divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3));
// nestedArr = [[2, 1, 0, -1, 0, 0], [2, 1], [3]]
// temp = 



// **Check algorithm against test cases
// */

// function divide(array, target) {
//   if (array.length === 0) return [];
//   if (array.some(number => number > target)) return null;
//   if (!array.every(number => Number.isInteger(number))) return null;
//   let nestedArr = [];
//   let temp = [];
//   array.forEach(number => {
//     let currentSum;
//     if (temp.length === 0) {
//       currentSum = 0;
//     } else {
//       currentSum = temp.reduce((sum, num) => sum + num);
//     }

//     if (currentSum + number <= target) {
//       temp.push(number);
//     } else {
//       nestedArr.push(temp);
//       temp = [number];
//     }    
//   });
//   if (temp.length !== 0) nestedArr.push(temp);
//   return nestedArr;
// }




// console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5));
// // result = [[1, 2], [3], [4, 1, 0], [2, 2];
// // temp = [5];
// // once we get past the iteration, remember to push whatever is stored in temp
// // return result
// // ➞ [[1, 2], [3], [4, 1, 0], [2, 2]]

// console.log(divide([1, 0, 1, 1, -1, 0, 0], 1));
// // // ➞ [[1, 0], [1], [1, -1, 0, 0]]

// console.log(divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3));
// // // ➞ [[2, 1, 0, -1, 0, 0], [2, 1], [3]]

// console.log(divide([], 3)); // []
// console.log(divide([2, 1, 0, -1, 0, 0, 2, 1, 100], 3)); // return null
// console.log(divide([2, 1, 0, -1, 0, 0, 2, [], 3], 3)); // return null













// Free Range
// // Create a function which converts an ordered number array into a array of ranges (represented as strings). Note how some arrays have some numbers missing.

// // Examples
// // Notes
// // If there are no numbers consecutive to a number in the array, represent it as only the string version of that number (see example #4).
// // Return an empty array if the given array is empty.

// /*
// **Problem**
// =>objective: given an array of numbers, return an array of string ranges of those numbers

// =>input: 
//   - array of intgers
//   - not integers? --> always integers
//   - empty --> return empty array 
//   - last number no consecutive numbers
//   - first number no consecutive numbers

// =>output: 
//   - an array of string ranges
//   - empty array 

// =>requirements:

// =>explicit  - if there are no consecutive numbers to a number, just include it as itself in string form without a hyphen

// =>implicit  - numbers that are consecutive are combined into a string range with the first number first, then a hyphen then the last number
//             - numbers in between ranges are not used

// => test/edge cases - 

// => Mental Model: Describe the solution in 1-2 sentences. 
// - build the new array
// - iterating over the elements, if this one is consecutive, store it, if it isnt, push whatever is stored as a range

// **Data Structure**
// - two arrays, one to store staging area one for the result

// **Implementation Notes**


// **Algorithm**
// - if the given `array` is empty, return it
// - declare variable `ranges`, assign to an empty array 
// - declare variable `staging`, assign to an empty array
// - iterate over the `number` s in the given `array`
//   - if `staging` is empty, push this `number` to `staging`
//   - if this `number` is one more than the last number in `staging`, push it to `staging`
//   - else 
//     - push `staging` to `ranges` as a string (abstract?)
//     - reassign staging to be an array with this `number` as its only element
// - push `staging` as a string to `ranges` one last time
// - return ranges

// helper function `arrayToRangeString`, given an array return a string repsentative of the range of the array 
//   - if it has one element, return that element as a string
//   - return the first and last element interpolated into a string with a hyphen

// **Check algorithm against test cases
// */

// function arrayToRangeString(array) {
//   if (array.length === 1) return String(array[0]);
//   return `${array[0]}-${array[array.length - 1]}`;
// }

// function numbersToRanges(array) {
//   if (array.length === 0) return array;
//   let ranges = [];
//   let staging = [];
//   array.forEach(number => {
//     if (staging.length === 0 || staging[staging.length - 1] + 1 === number) {
//       staging.push(number);
//     } else {
//       ranges.push(arrayToRangeString(staging));
//       staging = [number];
//     }
//   });
//   ranges.push(arrayToRangeString(staging));
//   return ranges;
// }


// console.log(numbersToRanges([1, 2, 3, 4, 5])); // ['1-5'])
// console.log(numbersToRanges([6, 7, 8, 10, 11, 12])); // ['6-8', '10-12'])
// console.log(numbersToRanges([1, 2, 3, 6, 7, 8])); // ['1-3', '6-8'])
// console.log(numbersToRanges([1, 3, 4, 5, 6, 7, 8])); // ['1', '3-8'])
// console.log(numbersToRanges([1])); // ['1'])
// console.log(numbersToRanges([3, 4, 5, 10, 11, 12])); // ['3-5', '10-12'])
// console.log(numbersToRanges([1, 2, 3, 4, 99, 100])); // ['1-4', '99-100'])
// console.log(numbersToRanges([])); // [])

// console.log(numbersToRanges([1, 3, 4, 5, 6, 7, 8, 12])); // ["1", "3-8", "12"]
// console.log(numbersToRanges([1, 2, 3, 4, 5])); // ["1-5"]
// console.log(numbersToRanges([1])); // ["1"]
// console.log(numbersToRanges([1, 3])); // ["1", "3"]
// console.log(numbersToRanges([3, 4, 5, 10, 11, 12])); // ["3-5", "10-12"]
// console.log(numbersToRanges([1, 2, 3, 4, 99, 100])); // ["1-4", "99-100"]
// console.log(numbersToRanges([1, 3, 4, 5, 6, 7, 8])); // ["1", "3-8"]
// console.log(numbersToRanges([])); // []










// Remove the Last Vowel
// Write a function that removes the last vowel in each word in a sentence.

// Examples

// console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly.")
// === "Thos wh dar t fal miserbly cn achiev gretly.");

// console.log(removeLastVowel("Love is a serious mental disease.")
// === "Lov s  serios mentl diseas.");

// console.log(removeLastVowel("Get busy living or get busy dying.")
// === "Gt bsy livng r gt bsy dyng.");

// Notes
// Vowels are: a, e, i, o, u (both upper and lowercase).


/*
**Problem**
=>objective: given a string of words, return the string with each word having its last vowel removed

=>input: 
  - string
  - empty --> return an empty string
  - vowels can be upper or lowercase
  - words are single space separated
  - leave words without vowels as they are 
  - words that are only vowels are removed completely, but there is still a space on either side of it

=>output: 
  - string with the last vowel from each word removed

=>requirements:

=>explicit  - vowels can be upper or lowercase

=>implicit  - 'why' words with no vowels

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- iterate over the words in the string
  - iterate over the letters in each word
    - if this letter is the last vowel, remove it
    - otherwise, keep it

**Data Structure**
- array for the words in the string
- array for the letters in each `word`

**Implementation Notes**
- if we are transforming, return '' for last vowels

**Algorithm**
- split the string and iterate over the `word` s (transformation)
  - split the `word` into letters, iterate over each `letter` (transformation)
    - if this `letter` is the last vowel, return an empty string
    - otherwise, return it as it is
  - join the `letters` with no spaces
- join the `words` with a space

**Check algorithm against test cases
*/

// function removeLastVowel(string) {
//   if (string.length === 0) return '';
//   let newWords = string.split(' ').map(word => {
//     return word.split('').map((letter, index) => {
//       let restOfWord = word.slice(index + 1)
//       if (/[aeiou]/i.test(letter) && !/[aeiou]/i.test(restOfWord)) return '';
//       return letter;
//     }).join('');
//   }).join(' ');
//   return newWords;
// }



// console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly.")
// === "Thos wh dar t fal miserbly cn achiev gretly.");
// // [Those, who, dare, to, fail, miserably, etc]
// // [T, h, o, s, e]
// // [T, h, o, s, ''] --> join with no spaces
// // [w, h, ''] --> join with no spaces

// // Thos wh --> join with spaces

// console.log(removeLastVowel("Love is a serious mental disease.")
// === "Lov s  serios mentl diseas.");

// console.log(removeLastVowel("Get busy living or get busy dying.")
// === "Gt bsy livng r gt bsy dyng.");

// console.log(removeLastVowel("Get busy living or get busy dying why.")
// === "Gt bsy livng r gt bsy dyng why.");

// console.log(removeLastVowel("Get bUsy lIvIng or get busy dying.")
// === "Gt bsy lIvng r gt bsy dyng.");

// console.log(removeLastVowel("")
// === "");

// console.log(removeLastVowel("hi")
// === "h");

// console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly.") === "Thos wh dar t fal miserbly cn achiev gretly.");
// console.log(removeLastVowel("Love is a serious mental disease.") === "Lov s  serios mentl diseas.");
// console.log(removeLastVowel("Get busy living or get busy dying.") === "Gt bsy livng r gt bsy dyng.");
// console.log(removeLastVowel("If you want to live a happy life, tie it to a goal, not to people.") === "f yo wnt t liv  hppy lif, ti t t  gol, nt t peopl.");









// Given a 2D array of mines, replace the question mark with the number of mines that immediately surround it. This includes the diagonals, meaning it is possible for it to be surrounded by 8 mines maximum.

// The key is as follows:

// An empty space: "-"
// A mine: "#"
// Number showing number of mines surrounding it: "?"
// Examples

// Notes
// You will only be given 3x3 grids.
// The question mark is not limited to the centre (there may be multiple question marks).





/*
**Problem**
=>objective: given a 2D array with questions marks, replace each question mark with a number representing the number of '#' signs found in the (total) 8 possible spots around the spot where the question mark is found

=>input: 
  - 2D array (3x3)
  - arrays are always maade up of -, #, ?

=>output: 
  - a 3x3 grid with the ?s from the input replaced by their count of mines (#)

=>requirements:

=>explicit  - replacing the ? with the number of mines that immediately surround it
            - this includes diagonals

=>implicit  - for immediate surrounding -- in the same row (1 index away), in the row above and 1 index away or less, in the row below and one index away or less 

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- iterate over the elements of the nesetdArrays
  - if its not a ?, keep it
  - if it is, pass it with the complete array to the helper function which will count the mines

**Data Structure**
- nested arrray input
- output: nested array

**Implementation Notes**
- transformation 
- return the nested return value 

**Algorithm**
- return using transformation, map over the elements of the given `arrayOfMines`
  - return using tranformation, map over the `elements` of the nested arrays
    - if we are NOT iterating over a ?
      - return the element as is
    - otherwise, return the return value from passing the row number, index number and the array of mines to helper function `howManyMines` 

- helper function `howManyMines`
  - declare variable `count`, assign to 0 
  - iterate over all elements of the `arrayOfMines` (with indexes)
    - if its a mine and the index is 1 away or less from the given `index` and the row is 1 away from the given `row`, add it to the count
  - return the count


**Check algorithm against test cases
*/

// function howManyMines(row, index, arrayOfMines) {
//   let count = 0;
//   arrayOfMines.forEach((mineRow, rowNum) => {
//     mineRow.forEach((element, mineIndex) => {
//       if (element === '#' && Math.abs(index - mineIndex) <= 1 && Math.abs(row - rowNum) <= 1) count += 1;
//     });
//   });
//   return count;
// }


// function minesweeper(arrayOfMines) {
//   return arrayOfMines.map((row, rowNum) => {
//     return row.map((element, index) => {
//       if (element === '?') return String(howManyMines(rowNum, index, arrayOfMines));
//       return element;
//     });
//   });
// }


// console.log(minesweeper([
//   ["-", "#", "-"],
//   ["-", "?", "-"], 
//   ["-", "-", "-"]
// ]) );

// // ➞ [
// //   ["-", "#", "-"],
// //   ["-", "1", "-"],
// //   ["-", "-", "-"]
// // ]

// console.log(minesweeper([
//   ["-", "#", "-"], 
//   ["#", "-", "?"], 
//   ["#", "#", "-"]
// ]) );

// // // ➞ [
// // //   ["-", "#", "-"],
// // //   ["#", "-", "2"],
// // //   ["#", "#", "-"]
// // // ]

// console.log(minesweeper([
//   ["-", "#", "#"],
//   ["?", "#", "-"],
//   ["#", "?", "-"]
// ]) );

// // // ➞ [
// // //   ["-", "#", "#"],
// // //   ["3", "#", "-"],
// // //   ["#", "2", "-"]
// // // ]

// console.log(minesweeper([
//   ["-", "-", "#"],
//   ["?", "-", "-"],
//   ["-", "-", "-"]
// ]) );

// // // ➞ [
// // //   ["-", "-", "#"],
// // //   ["0", "-", "-"],
// // //   ["-", "-", "-"]
// // // ]

// console.log(minesweeper([
//   ["-", "-", "#"],
//   ["-", "-", "-"],
//   ["-", "-", "-"]
// ]) );

// // // ➞ [
// // //   ["-", "-", "#"],
// // //   ["-", "-", "-"],
// // //   ["-", "-", "-"]
// // // ]





// Books and Book Ends
// // Suppose a pair of identical characters serve as book ends for all characters in between them. Write a function that returns the total number of unique characters (books, so to speak) between all pairs of book ends.

// // The function will look like:

// // countUniqueBooks("stringSequence", "bookEnd")
// // Examples

// console.log(countUniqueBooks("AZYWABBCATTTA", "A") === 4);
// console.log(countUniqueBooks("$AA$BBCATT$C$$B$", "$") === 3);
// console.log(countUniqueBooks("ZZABCDEF", "Z") === 0);
// console.log(countUniqueBooks("ZZABCDEF", "H") === 0);
// console.log(countUniqueBooks("", "Z") === 0);

// // Notes
// // No book characters will be identical to the bookend character.
// // There will always be an even number of bookends.
// // Once a bookend is used to complete a pair, a new bookend must be found to create another pair.
// // Return 0 if bookends contain zero books.


// /*
// **Problem**
// =>objective: given a string, and a bookend, return the count of the unique characters between the bookends

// =>input: 
//   - string and a char
//   - empty string return 0
//   - 

// =>output: 
//   - count of unique 'books' between the bookends

// =>requirements:

// =>explicit  - bookends can only be used in one pair
//             - return 0 if bookends contains 0 books

// =>implicit  - book ends and chars can be symbols
//             - spaces? no spaces
//             - case sensitive? yes

// => test/edge cases - 


// => Mental Model: Describe the solution in 1-2 sentences. 
// - iterating over the chars of the string, toggling a collecting switch, if its on and it isn't already in storage, add it to storage
// - return teh count of whatever is in storage

// **Data Structure**
// - array to store unique chars
// - string iterating over the chars (for loop)

// **Implementation Notes**
// - make sure for loop condition are correct
// - iterate over all chars in the string
// - don't add duplicates to the storage
// - start with false for the switch

// **Algorithm**
// - declare variable `uniqueBooks`, assign to an empty array
// - declare variable `currentlyCollecting`, assign to `false`
// - use a for looop to iterate over the chars in the given `string`
//   - if this char is equal to the given `bookEnd`
//     - toggle `currentlyCollecting`
//   - otherwise, 
//     - if `currentlyCollecting` is true and this char is not already in `uniqueBook`s
//       - push it to `uniqueBooks`
// - return length of `uniqueBooks`
// **Check algorithm against test cases
// */

// function countUniqueBooks(stringSequence, bookEnd) {
//   let uniqueBooks = [];
//   let currentlyCollecting = false;

//   for (let index = 0; index < stringSequence.length; index += 1) {
//     let char = stringSequence[index];

//     if (char === bookEnd) {
//       currentlyCollecting = !currentlyCollecting;
//     } else if (currentlyCollecting && !uniqueBooks.includes(char)) {
//       uniqueBooks.push(char);
//     }

//   }

//   return uniqueBooks.length;
// }












// Three Sum Problem
// // Write a function that returns all sets of three elements that sum to 0.

// // Examples

// // Notes
// // The original array may contain duplicate numbers.
// // Each three-element subarray in your output should be distinct.
// // Subarrays should be ordered by the first element of the subarray.
// // Subarrays themselves should be ordered the same as the original array.
// // Return an empty array if no three elements sum to zero.
// // Return an empty array if there are fewer than three elements.



// /*
// **Problem**
// =>objective: given an array of integers, return a nested array in which each array has three numbers that all sum to zero. return all possible combinations

// =>input: 
//   - array

// =>output: 
//   - nested array

// =>requirements:

// =>explicit  - the given array may contain duplicate numbers
//             - each three element sub array in the output should be distinct
//             - sub arrays themselves should be ordered the same as the original array
//             - return an empty array if no three elements sum to 0
//             - return an empty array if there are fewer than 3 elements

// =>implicit  - 

// => test/edge cases - 


// => Mental Model: Describe the solution in 1-2 sentences. 
// - get all three number combinations that will result in 0
// - clean up any duplicates

// **Data Structure**
// - array in put
// - output: nested array

// **Implementation Notes**


// **Algorithm**
// - if the given `array` is empty, return an empty array
// - declare variable `combinations`
// - for loop over the indexes of the given `array` (firstIndex)
//   - for loop over the indexes of the given `array` (secondIndex)
//     - loop over the indexes of the given `array` (thirdIndex)
//       - if any of the indexes are the same, continue
//       - if the elements at these three indexes sum to 0
//         - and if this array is not already included (helper isNewArray(combinations, this combo))
//           - add an array of them to `possibleCombinations`
// - return `combinations`

// helper function `isNewArray`, given an array of nested arrays and one array
//   - return true if this array is not in the array of nested already
//   - if array of nested arrays length is 0, return true
//   - iterate over the elements of the nested array
//     - iterate over the elements the nested arrays
//       - if every element is the same for the given `array` at this index, return false
//   - return true if you get through that 

// **Check algorithm against test cases
// */

// function isNewArray(currentArray, newArray) {
//   if (currentArray.length === 0) return true;
//   for (let nestedArrayIndex = 0; nestedArrayIndex < currentArray.length; nestedArrayIndex += 1) {
//     if (currentArray[nestedArrayIndex].every((element, index) => {
//       return element === newArray[index];
//     })) return false;
//   }
//   return true;
// }

// function threeSum(array) {
//   if (array.length < 3) return [];
//   let combinations = [];
//   for (let firstIndex = 0; firstIndex < array.length - 2; firstIndex += 1) {
//     for (let secondIndex = firstIndex + 1; secondIndex < array.length - 1; secondIndex += 1) {
//       for (let thirdIndex = secondIndex + 1; thirdIndex < array.length; thirdIndex += 1) {
//         if (firstIndex === secondIndex || secondIndex === thirdIndex || firstIndex === thirdIndex) continue;
//         if (array[firstIndex] + array[secondIndex] + array[thirdIndex] === 0) {
//           let possibleCombination = [array[firstIndex], array[secondIndex], array[thirdIndex]];
//           if (isNewArray(combinations, possibleCombination)) { 
//             combinations.push(possibleCombination);
//           }
//         }
//       }
//     }
//   }
//   return combinations;
// }

// console.log(threeSum([0, 1, -1, -1, 2]));// ➞ [[0, 1, -1], [-1, -1, 2]]
// console.log(threeSum([0, 0, 0, 5, -5]));// ➞ [[0, 0, 0], [0, 5, -5]]
// console.log(threeSum([1, 2, 3]));// ➞ []
// console.log(threeSum([1]));// ➞ []
// console.log();
// console.log(threeSum([0, 1, -1, -1, 2])); // [[0, 1, -1], [-1, -1, 2]])
// console.log(threeSum([0, 0, 0, 5, -5])); // [[0, 0, 0], [0, 5, -5]])
// console.log(threeSum([0, -1, 1, 0, -1, 1])); // [[0, -1, 1], [0, 1, -1], [-1, 1, 0], [-1, 0, 1], [1, 0, -1]])
// console.log(threeSum([0, 5, 5, 0, 0])); // [[0, 0, 0]])
// console.log(threeSum([0, 5, -5, 0, 0])); // [[0, 5, -5], [0, 0, 0], [5, -5, 0]])
// console.log(threeSum([1, 2, 3, -5, 8, 9, -9, 0])); // [[1, 8, -9], [2, 3, -5], [9, -9, 0]])
// console.log(threeSum([0, 0, 0])); // [[0, 0, 0]])
// console.log(threeSum([1, 5, 5, 2])); // [])
// console.log(threeSum([1, 1])); // [])
// console.log(threeSum([])); // [])




















// A Product Pair
// Mubashir needs your help in the simple task of multiplication of elements in a given array.

// Create a function that takes an array of integers arr and a positive integer k and returns the minimum and maximum possible product of k elements taken from the array. If enough elements are not available in the array, return null.

// Examples



/*
**Problem**
=>objective: 

=>input: 
  - an array of integers and a positive integer
  - negative and positive numbers 

=>output: 
  - an array of the minimum and maximum possible product of k elements taken from the array
  - null if there are not enough elements in the array
  - null if the array is empty

=>requirements:

=>explicit  - returning the minimum and maximum product of `k` elements taken from the array 
            - if enough elements are not available, return null

=>implicit  - if k is less than the number of elements in the array, return null
            - if k is 1, just return the min and max from the array
            - if k matches the number of elements of the array, the min and max will be the same thing
            - you can only use each number once in the multiplication

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- ideally you end up with an array of sums from all possible combinations of `k` elements

**Data Structure**


**Implementation Notes**


**Algorithm**
- deal with empty array or too small k
- deal with k is 1
- sort the array in descending order for the largest absolute values
- declare variable `largest`, assign to the k - 1 largest absolute values spliced from ^^
- declare variable `productWithoutLastElement`, assign to the product of ^^
- declare variable `products`
- iterate over the the remaining values
  - multiply this value * `productWithoutLastElement`, add the result to products
- return the min and max from products

**Check algorithm against test cases
*/

// function productPair(array, k) {
//   let arrayCopy = array.slice();
//   if (arrayCopy.length === 0 || k > arrayCopy.length) return null;
//   if (k === 1) return [Math.min(...arrayCopy), Math.max(...arrayCopy)];
//   arrayCopy.sort((a, b) => Math.abs(b) - Math.abs(a));
//   let largest = arrayCopy.splice(0, k - 1);
//   let productWithoutLastElement = largest.reduce((product, number) => {
//     return product * number;
//   }, 1);
//   let products = [];
//   arrayCopy.forEach(number => products.push(number * productWithoutLastElement));
//   return [Math.min(...products), Math.max(...products)];
// }

// const prod = arr => arr.reduce((a, c) => a * c, 1);

// function productPair(arr, k) {
//   if (arr.length < k) return null;
//   arr.sort((a, b) => a - b);
//   // console.log(arr);
//   let [min, max] = [prod(arr.slice(0, k)), prod(arr.slice(-k))].sort((a, b) => a - b);
//   console.log(min, max); // 6, 42
//   for (let i = 0; i < k >> 1; i++) {
//     min = Math.min(min, prod([...arr.slice(0, i*2 + 1), ...arr.slice(arr.length - (k - (i*2 + 1)))]));
//     max = Math.max(max, prod([...arr.slice(0, i*2 + 2), ...arr.slice(arr.length - (k - (i*2 + 2)))]));
//   }

//   return [min || 0, max || 0];
// }


// const productPair = (arr, k) => {
//   // check if length greater than array length
//   if (k > arr.length) return null;
  
//   // sort array
//   const sorted = [...arr].sort((a, b) => a - b);

//   // find min and max product
//   const product = (a, m = 1) => a.reduce((a, n) => a * n, m) || 0,
//         min = product(sorted.slice(0, k)),
//         min2 = k === 1 ? sorted[0] : product(sorted.slice(-k + 1), sorted[0]),
//         max = product(sorted.slice(-k));
//   console.log(min, min2, max); // -2, -21, 42
//   return [Math.min(min, min2, max), Math.max(min, max)];
// }

// let arr = [1, -2, -3, 4, 6, 7]
// [-3, -2, 1, 4, 6, 7]
// console.log(productPair(arr, 2)); // [-21, 42])

// console.log(productPair([0,-1,-2,-3,-4], 2)); // [0, 12]) guard clause before result
// console.log(productPair([-1,-2,-3,-4], 2)); // [2, 12])
// console.log(productPair([-1,-2,-3,-4], 3)); // [-24, -6])
// console.log(productPair([5, 4, 3, 3, 6], 2)); // [9, 30])

// console.log();
// console.log(productPair(arr, 1)); // [-3, 7])

// console.log(productPair(arr, 3)); // [-126, 168])
// console.log(productPair(arr, 6)); // [1008, 1008])
// console.log(productPair(arr, 7)); // null)
// console.log(productPair([0,1,2,3,4], 2)); // [0, 12])
// console.log(productPair([0,-1,-2,-3,-4], 3)); // [-24, 0])
// console.log(productPair([], 2)); // null)
// console.log(productPair([0, 6, 3, 5, 4], 4)); // [0, 360])

// console.log(productPair([1, -2, -3, 4, 6, 7], 3)); // [-126, 168]
// console.log(productPair([1, -2, -3, 4, 6, 7], 2)); // [-21, 42]
// // // -3*7, 6*7
// console.log(productPair([1, -2, -3, 4, 6, 7], 1)); // [-3, 7]
// console.log(productPair([1, -2, -3, 4, 6, 7], 7)); // null
// // // There are only 6 elements in the array
// console.log(productPair([], 1)); // null

// Mubashir









// Letters Formed from the Longest Word
// Write a function that returns true if all the strings in an array can be formed by using only the characters from the longest string.

// Examples


/*
**Problem**
=>objective: given an array of strings, return true if all strings can be formed with the letters in the longest string

=>input: 
  - array of strings
  - empty array --> return null
  - array with elements other than strings --> return null
  - 2 elements have the same length and are the longest string --> use the first one
  - symbols? --> treat them normally
  - case sensitive? --> case insensitive 'A' is 'a'
  - 'mma' 'mastery' true? --> false numbers matter

=>output: 
  - boolean true/false
  - null

=>requirements:

=>explicit  - all of the strings need to be able to be formed with the letters from the longest string

=>implicit  - 

=> test/edge cases - 

countLettersLongestWord = {m: 1,
                            a: 1,
                            s: 1, 
                            t: 1,
                            e: 1,
                            r: 1, 
                            y: 1}

=> Mental Model: Describe the solution in 1-2 sentences. 
- get a count of the letters in the longest word
- compare the count of each letter of the other words to make sure that they do not exceed the count in the longest word

**Data Structure**
- object to store the count
- array to iterate over the letters of each word

**Implementation Notes**


**Algorithm**
- declare variable `longestWord`, assign it to the longest word spliced from the given `array`
- for loop to iterate over the elements of the given `array`
  - for loop to iterate over the chars of the current `element`
    - if passing the current word and currentLetter to `countLetter` is greater than passing the longest word and currentLetter to `countLetter`, return false
- return true

abstract helper method `countLetter`, given string and a letter, returns the count of the letter in the string (case insensitive)
- declare variable `count`, assign to 0
- iterate over the letters of the given `word` lowercased, 
  - if the current char is equal to the given `letter`, increment the count
- return the count

**Check algorithm against test cases
*/

// function countLetter(word, letter) {
//   // let count = 0;
//   // for (let index = 0; index < word.length; index += 1) {
//   //   if (word[index] === letter) count += 1;
//   // }
//   // return count;
//   let regex = new RegExp(`${letter}`, 'g');
//   return word.match(regex) ? word.match(regex).length : 0;
// }

// function canForm(array) {
//   if (array.length === 0) return null;
//   if (!array.every(el => typeof el === 'string')) return null;

//   let lengthOfLongestWord = Math.max(...array.map(word => word.length));
//   let longestWord = array.find(word => word.length === lengthOfLongestWord).toLowerCase();

//   for (let elementIndex = 0; elementIndex < array.length; elementIndex += 1) {
//     for (let letterIndex = 0; letterIndex < array[elementIndex].length; letterIndex += 1) {
//       let letter = array[elementIndex][letterIndex];
//       if (countLetter(array[elementIndex].toLowerCase(), letter) > countLetter(longestWord, letter)) return false;
//     }
//   }
//   return true;
// }

// console.log(canForm([]) === null);
// console.log(canForm(["may", "same", "reams", []]) === null);
// console.log(canForm(["mast", "manifest", "met", "fan"]) === true);
// console.log(canForm(["may", "master", "same", "reams"]) === false);
// console.log(canForm(["may", "same", "reams", "mastery"]) === true);
// console.log(canForm(["may", "same", "reams", "seams"]) === false);
// console.log(canForm(["may", "same.", "reams", "mastery."]) === true);
// console.log(canForm(["may", "same", "reams", "mAstery"]) === true);
// console.log(canForm(["may", "same", "reams", "mastery", "mma"]) === false);

















// Calculate Depth of Array
// // Given an array, write a function to calculate it's depth. Assume that a normal array has a depth of 1.

// // Examples

// /*
// **Problem**
// =>objective: 

// =>input: 
//   - array
//   - empty? --> depth is 1
//   - an array nested inside another array --> depth 2
//   - mutiple nested arrays inside the given array --> depth is the deepest?

// =>output: 
//   - integer that represents the depth of the given array

// =>requirements:

// =>explicit  - a normal array has a depth of 1
//             - an array nested inside another array has a depth of 2

// =>implicit  - we want the deepest depth of all the elements of the given array
//             - there is no more depth when there are no more arrays
//             - if this array contains an array, you can go a level deeper
//             - every time you find an array, add to the depth 

// => test/edge cases - 

// => Mental Model: Describe the solution in 1-2 sentences. 
// - we need the max depth of the given elements
// - recursive way -- always recieves argument and depth , returns new depth
//   - if we get a non array, return depth as it is
//   - if you get an array, increment depth and pass it and this array to teh function again

// **Data Structure**
// - input arrays

// **Implementation Notes**


// **Algorithm**
// - return max depth of calling `findDepth` on each elementof the given array

// helper function `findDepth`, given depth and arg (could be array)
// - max of doing the below to each element
//   - if we get a non array, return depth
//   - otherwise, call this function with depth incremented 

// **Check algorithm against test cases
// */
// function depth(array) {
//   if (array.length === 0) return 1;
//   return Math.max(...array.map(el => getDepth(el, 1)));
// }

// function getDepth(array, depth) {
//   // console.log(array, depth);
//   if (!Array.isArray(array)) return depth;
//   return Math.max(...array.map(element => {
//     if (!Array.isArray(element)) return depth + 1;
//     return getDepth(element, depth + 1)
//   }));
// }


// console.log(depth([1, [2, [3, 4]]]) === 3);
// console.log(depth([1, [2, 3, 4]]) === 2);
// console.log(depth([1, [2, [3, [4]]]]) === 4);
// console.log(depth([[[[[1]]]], [2, [3, [4]]]]) === 5);
// console.log(depth([]) === 1);
// console.log(depth([1, 2, 3, 4]) === 1);






// Mutations Only: Zeroes to the End
// // Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

// // Examples

// // Notes
// // You must mutate the original array.
// // Keep the relative order of the non-zero elements the same.

// /*
// **Problem**
// =>objective: given an array of elements, move the zeroes (by mutation) to the back and move everything else up to the front of the array

// =>input: 
//   - array of elements
//   - empty --> return an emtpy array 
//   - no zeroes --> keep it as is
//   - other elements besides integers? --> treat them the same
//   - string '0's --> not really 0

// =>output: 
//   - no output but we want to mutate the given array so that it changes according to the rules (zeroes at the back)

// =>requirements:

// =>explicit  - move zeroes to the back 
//             - move everything else forward
//             - mutate the original array
//             - keep the relative order of the non-zero elements

// =>implicit  - the number of zeroes stays the same
//             - we have zeroes from -number of zeroes onward
//             - array will stay the same size

// => test/edge cases - 



// => Mental Model: Describe the solution in 1-2 sentences. 
// - get the count of the 0s
// - move the nonzeroes to the front
// - get the correct number of zeroes in the back

// **Data Structure**


// **Implementation Notes**


// **Algorithm**
// - guard clause for no zeroes, all zeroes, empty array 
// - declare variable `zeroesCount`, assign to the number of zeroes in the given `array`
// - iterate over the elements of teh given array `for loop`
//   - if this element is a 0
//     - splice the next non zero element and assign it to this index
// - declare variable `zeroesNeeded`, assign to the result from subtracting `zeroesCount` minus the number of zeroes left in the array 
// - push 0 to the array `zeroesNeeded` times 

// helper function `countZeroes`
// - given an array, return the number of zeroes in the array


// **Check algorithm against test cases
// */

// function countZeroes(array) {
//   let count = 0;
//   array.forEach(element => {
//     if (element === 0) count += 1
//   });
//   return count;
// }

// function zeroesToEnd(array) {
//   let zeroesCount = countZeroes(array);
//   if (zeroesCount === 0 || zeroesCount === array.length) return array;
//   if (array.length === 0) return array;
//   for (let index = 0; index < array.length; index += 1) {
//     let element = array[index];
//     if (element === 0) {
//       let nextNonZeroElement = array.slice(index).find(el => el !== 0)
//       let nonZeroIndex = array.indexOf(nextNonZeroElement, index);
//       array[index] = array.splice(nonZeroIndex, 1)[0];
      
//     }
//   }
//   let zeroesNeeded = zeroesCount - countZeroes(array);
//   while (zeroesNeeded > 0) {
//     array.push(0);
//     zeroesNeeded -= 1;
//   }
//   return array;
// }



// console.log(zeroesToEnd([0, 's', 4])); // ['s', 4, 0]

// let a = [1, 2, 0, 0, 4, 0, 5];
// console.log(zeroesToEnd(a));
// console.log(a); //); // [1, 2, 4, 5, 0, 0, 0]

// console.log(zeroesToEnd([0, 0, 2, 0, 5])); // [2, 5, 0, 0, 0]
// console.log(zeroesToEnd([4, 4, 5])); // [4, 4, 5]
// console.log(zeroesToEnd([4, 4, '0', 5])); // [4, 4, '0', 5]
// console.log(zeroesToEnd([0, 0])); // [0, 0]
// console.log(zeroesToEnd([])); // []