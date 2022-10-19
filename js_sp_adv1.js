//Madlibs Revisited

/*
**Problem**
=>objective: write a function that takes a `template` argument which is text with the words 'noun', 'adj', 'verb', 'adverb'. And replace those words with random words from the list of those types of words. 

=>input: 
	- A string with parts of speech instead of actual words

=>output: 
	- a string that replaces those parts of speech with words from the word list

=>requirements:

=>explicit  - build the list of nouns, verbs, adj and adverbs directly into the program
            - read the input text and place random words of the appropriate type into the text and return the result. 

=>implicit  - 

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- split the string, iterating over each word if it matches a regex, replace it with the appropriate random word from the corresponding list
- join the elements of the array to form a string

**Data Structure**
- array to store the words

**Implementation Notes**
- use some kind of identifier (+) around the parts of speech so they can be easily replaced. 

**Algorithm**
- split the given `template` at the spaces, iterate over the `words` with transformation
  - if a portion of the word matches `+chars+`, then pass the word and its match to the helper function `getRandomWord`, return what is returned from the helper function
  - otherwise, just return the word as is
- join the returned array with spaces and return it

helper function `getRandomWord`
- given a `word` and a `match`, return the word with the match replaced with a random word of the corresponding type of speech
- store the arrays of words at the top of this function, then pass them into `getRandomElement`
- switch statement value is the match
  - case noun --> replace match with random noun, return the new `word`
  - case verb --> replace match with random verb, return the new `word`
  - etc
  
helper function `getRandomElement`
- given an array, return a random element from the array
- save the index number, Math.floor(Math.random() * (arr.length));
- return the element at that index number

**Check algorithm against test cases


*/
"use strict";

// function getRandomElement(array) {
//   let randomIndex = Math.floor(Math.random() * (array.length));
//   return  array[randomIndex];
// }

// function getRandomWord(word, partOfSpeech) {
//   let adjectives =['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
//   let nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
//   let verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
//   let adverbs = ['easily', 'lazily', 'noisily', 'excitedly'];
//   let whichList;
  
//   switch(partOfSpeech) {
//     case '+adj+':
//       whichList = adjectives;
//       break;
//     case '+noun+':
//       whichList = nouns;
//       break;
//     case '+verb+':
//       whichList = verbs;
//       break;
//     case '+adv+':
//       whichList = adverbs;
//       break;    
//   }
//   return word.replace(partOfSpeech, getRandomElement(whichList));
// }

// function madlibs(template) {
//   return template.split(' ').map(word => {
//     let partOfSpeech = word.match(/\+[a-z]+\+/i);
//     if (partOfSpeech === null) return word;
//     return getRandomWord(word, partOfSpeech[0]);
//   }).join(' '); 
// }


// let template1 = "The +adj+ brown +noun+ +adv+ +verb+ the +adj+ yellow +noun+, who " + 
//               "+adv+ +verb+ his +noun+ and looks around."
// console.log(madlibs(template1));
// let template2 = "The +noun+ +verb+ the +noun+'s +noun+."
// console.log(madlibs(template2));






//Transpose 3 X 3


/*
**Problem**
=>objective: given an array with three arrays nested with three elements in each nested array, return a new array with the elements of the original array transposed. 

=>input:
  - perfect nested array with 3x3 dimensions
	- diff data type? no arg? --> return null
  - a sparse array? ---> not possible
  - an empty array? ---> return an empty array 

=>output: 
	- null
	- empty array
	- new array with transposed elements

=>requirements:

=>explicit  - do not mutate the original array 
            - the transpose of a 3x3 matrix is the matrix that results from exchanging rows and columns of the original matrix

=>implicit  - the first row of the result matrix is ogMatrix[0][0], ogMatrix[1][0], ogMatrix[2][0]
            - the second row is ogMatrix[0][1], ogMatrix[1][1], ogMatrix[2][1]
            - third row ogMatrix[0][2], ogMatrix[1][2], ogMatrix[2][2],
ogMatrix[0][0], ogMatrix[1][0], ogMatrix[2][0] // all 0 for second
ogMatrix[0][1], ogMatrix[1][1], ogMatrix[2][1] // all 1 for second
ogMatrix[0][2], ogMatrix[1][2], ogMatrix[2][2] // all 2 for second

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- set up the result array
- loop through 0-2
  - loop through 0-2
    - pushing the elements of the OG array to the new array

**Data Structure**
- an array to hold the result

**Implementation Notes**


**Algorithm**
- declare a variable `result`, assign to an array with three nested empty arrays as elements
- for loop i from 0 - 2
  - for loop j from 0 - 2
    - pushing to the i array in `result`, the OG[j][i]
- return result

**Check algorithm against test cases


*/
// "use strict";

// function transpose(matrix) {
//   if (!Array.isArray(matrix)) return null;
//   if (matrix.length === 0) return [];
  
//   let result = [[], [], []];
//   for (let i = 0; i <= 2; i += 1) {
//     for (let j = 0; j <= 2; j += 1) {
//       result[i].push(matrix[j][i]);  
//       console.log(result);
//     }
//   }
//   return result;
// }


// console.log(transpose() === null);
// console.log(transpose(8) === null);
// console.log(transpose([]));
// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];

// const newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]









//Transpose MxN

/*
**Problem**
=>objective: given a matrix with at least one row and one column, return a new matrix transposed

=>input: 
	- a matrix with at least one row and one column

=>output: 
	- the given `matrix` transposed, not mutated

=>requirements:

=>explicit  - 

=>implicit  - matrix 1 row, 4 columns
              transposed matrix will have 1 column, 4 rows
              for each number, we are swapping the column # with the row #
              1 is in row 0 column 0, in transpose it is row 0 column 0
              2 is in row 0 column 1, in transpose it is row 1 column 0
              3 is in row 0 column 2, in transpose it is row 2 column 0
              etc

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- create your result array
- iterate over the elements in the matrix
  - push the elements to the result array swapping row and column numbers

**Data Structure**
- array for result

**Implementation Notes**


**Algorithm**
- declare variable `matrixColumns`, assign to the number of elements in the first nested array of the matrix
- declare variable `matrixRows`, assign to length of matrix
- declare variable `result`, assign to empty array
- for loop from 1 to `matrixColumns`
  - push empty array to `result`
- for loop 'rowNum`, 0 to `matrixRows`
  - for loop `colNum`, 0 to `matrixColumns`
    - to the result[col][row] = matrix[row][col]
- return result

**Check algorithm against test cases


*/
// "use strict";


// function transpose(matrix) {
//   let matrixColumns = matrix[0].length;
//   let matrixRows = matrix.length;
//   let result = [];
//   for (let arrayNum = 1; arrayNum <= matrixColumns; arrayNum += 1) {
//     result.push([]); 
//   }
//   for (let rowNum = 0; rowNum < matrixRows; rowNum += 1) {
//     for (let colNum = 0; colNum < matrixColumns; colNum += 1) {
//       result[colNum][rowNum] = matrix[rowNum][colNum];
//       console.log(result);
//     }
//   }
//   return result;
// }

// console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
// console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
// console.log(transpose([[1]]));                     // [[1]]
// console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]







// Rotating Matrices

/*
**Problem**
=>objective: given a matrix, the matrix 90 degrees without mutating it

=>input: 
	- matrix

=>output: 
	- matrix rotated 90 degrees

=>requirements:

=>explicit  - a 90 degree rotation is where each side of the matrix is rotated clockwise by 90 degrees

=>implicit  - the top row becomes the last column
            - the last column becomes the bottom row
            - the bottom row becomes the first column
            - the first column becomes the first row
            - matrix row numbers: in transsposed them go from high to low
            - matrix column numbers: in transposed match whatever row they are going to 

=> test/edge cases - 

1  5  8
4  7  2
3  9  6

initial
matrix[0][0] matrix[0][1] matrix[0][2]
matrix[1][0] matrix[1][1] matrix[1][2]
matrix[2][0] matrix[2][1] matrix[2][2]

rotated
matrix[2][0] at 0, 0 matrix[1][0] at 0, 1 matrix[0][0] at 0, 2
matrix[2][1] at 1, 0 matrix[1][1] at 1, 1 matrix[0][1] at 1, 2
matrix[2][2] at 2, 0 matrix[1][2] at 2, 1 matrix[0][2] at 2, 2



initial
  [3, 7, 4, 2],
  [5, 1, 0, 8],
  
rotated

matrix[1][0] matrix[0][0]
matrix[1][1] matrix[0][1]
matrix[1][2] matrix[0][2]
matrix[1][3] matrix[0][3]

[[5, 3], 
 [1, 7],
 [0, 4],
 [8, 2] ]

=> Mental Model: Describe the solution in 1-2 sentences. 


**Data Structure**


**Implementation Notes**


**Algorithm**
- make the same kind of result array as the other solutions
- loop from the last index of the first element of the matrix (`colNum`) down to 0
  - loop from 0 to length of matrix (`rowNum`)
    - push matrix[col][row] to result[`rowNum`]
- return result

**Check algorithm against test cases


*/
"use strict";

// function rotate90(matrix) {
//   let matrixColumns = matrix[0].length;
//   let matrixRows = matrix.length;
//   let result = [];
//   for (let arrayNum = 1; arrayNum <= matrixColumns; arrayNum += 1) {
//     result.push([]); 
//   }
//   for (let rowNum = matrixRows - 1; rowNum >= 0; rowNum -= 1) {
//     for (let colNum = 0; colNum < matrixColumns; colNum += 1) {
//       result[colNum].push(matrix[rowNum][colNum]);
//     }
//   }
//   return result;
// }

// const matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// const matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8],
// ];

// const newMatrix1 = rotate90(matrix1);
// const newMatrix2 = rotate90(matrix2);
// const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

// console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]





//Merge Sorted Lists

/*
**Problem**
=>objective: given two sorted arrays, return a new array with elements from both arrays, sorted

=>input: 
	- two arrays with elements
	- one array is empty
	- different lengths
	- sparse? 
	- elements are always numbers? can they be nested elements?

=>output: 
	- a new array with elements from both arrays, sorted

=>requirements:

=>explicit  - build the array one result at a time
            - no sorting result array
            - do not mutate the input arrays

=>implicit  - 

=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- copy the two arrays
- compare the first two elements of each
  - add the lowerone to the result array
  - if one is undefined, add the other one
  
**Data Structure**
- arrays for inputs
- array for output

**Implementation Notes**

**Algorithm**
- declare variable `arr1Copy`, assign to a copy of the given `arr1`
- declare variable `arr2Copy`, assign to a copy of the given `arr2`
- declare variable `result`, assign to an empty array
- while loop, condition: both copies do not have length 0
  - compare the first elements of both arrays
    - if one is undefined
      - shift the other off the copy and push it to the `result` array
    - if the other is undefined, push the first to the `result` array
      - do the same
    - if the first > second
      - shift and push the second
    - if second > first
      - shift and push the first
    - if first === second
      - shift and push the first
- loop ends when both are empty
- then return `result`


**Check algorithm against test cases


*/
"use strict";

// function merge(arr1, arr2) {
//   let arr1Copy = arr1.slice();
//   let arr2Copy = arr2.slice();
//   let mergedArray = [];
//   while (arr1Copy.length !== 0 || arr2Copy.length !== 0) {
//     let first = arr1Copy[0];
//     let second = arr2Copy[0];
//     if (first === undefined || first > second) {
//       mergedArray.push(arr2Copy.shift());
//     } else if (second === undefined || second > first) {
//       mergedArray.push(arr1Copy.shift());   
//     } else {
//       mergedArray.push(arr1Copy.shift()); 
//     }
//     // if (arr1Copy.length === 0 && arr2Copy.length === 0) return mergedArray;
//   }
//   return mergedArray;
// }


// console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
// console.log(merge([1, 4, 5], []));             // [1, 4, 5]
// console.log(merge([1, 4, 5], [1, 3, 5]));             // [1, 1, 3, 4, 5, 5]








// Merge Sort

/*
**Problem**
=>objective: given an array, sort it using the merge sort algorithm

=>input: 
	- an array with all elements the same data type

=>output: 
	- a new array sorted

=>requirements:

=>explicit  - can use `merge` from previous exercise
            - merge sort algorithm
              - break down all arrays elements into nested subarrays
              - combine nested subarrays in sorted order
              - its recursive so it has to call itself
                - baseline condition 
                - how do you know which way you are going
                - maybe only recursion on the way back 

=>implicit  - breaking down array into sub arrays
              - split the elements in half, one half in one array, the other half in the other
                - then run through it again, breaking down each sub array into halves
                - you stop breaking it down when each nested sub array has only one element
            - building it back from nested subarrays
              - 

=> test/edge cases - 
console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
[5, 3]
[[5], [3]]
[3, 5] --> we combined the separated sub arrays

console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]
[6, 2, 7, 1, 4]
[[6, 2], [7, 1, 4]]
[[[6], [2]], [[7], [1, 4]]]
[[[6], [2]], [[7], [[1], [4]]]]
[[[2, 6]], [[7], [[1, 4]]]]
[[2, 6], [1, 4, 7]]
[1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

=> Mental Model: Describe the solution in 1-2 sentences. 

**Data Structure**


**Implementation Notes**


**Algorithm**
- helper split function 
  - iterates over the array until it is split properly
  - split the array in half and send each half recursively to the helper function 
    - baseline is that the thing passed to the split function is an array with one element that is not an array
    
- then to combine nested arrays
  - if the two elements are arrays ofarrays
    - call the combine function recursively
    - otherwise, they are arrays of elements not nested, then combine the two with the `merge` function 

**Check algorithm against test cases


*/
// "use strict";

// function merge(array1, array2) {
//   const copy1 = array1.slice();
//   const copy2 = array2.slice();
//   const result = [];

//   while (copy1.length > 0 && copy2.length > 0) {
//     result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
//   }

//   return result.concat(copy1.length === 0 ? copy2 : copy1);
// }

// function splitArray(array) {
//   if (array.length === 1 && typeof array[0] !== 'object') return array; 
//   let halfway = array.length / 2;
//   return [splitArray(array.slice(0, halfway)), splitArray(array.slice(halfway))];
// }

// function sortSplitArray(array) {
//   if (array[1] === undefined) {
//     return array;
//   }
//   if (array[0].some(Array.isArray) || array[1].some(Array.isArray)) {
//     return merge(sortSplitArray(array[0]), sortSplitArray(array[1]));
//   }
  
//   return merge(array[0], array[1]);
// }

// function mergeSort(array) {
//   let arraySplit = splitArray(array);
//   return sortSplitArray(arraySplit);
// }

// console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
// console.log(mergeSort([5, 3]));                 // [3, 5]
// console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

// console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]










//Binary Search

/*
**Problem**
=>objective: given a sorted array of elements all with the same type and a search element, return the index of the search item or -1 if it isn't found

=>input: 
	- an array and a search item

=>output: 
	- index number of the search item or -1

=>requirements:

=>explicit  - use binary search algorithm
              - get the middle value of the array
                - if its equal to the `searchItem` return the index
                - if the middle value is less than the `searchItem`
                  - throw away the lower half and middle value and start again using the top half of the data
                - if the middle value is greater than the `searchItem`, 
                  - throw away the top half and start again with the lower half

=>implicit  - how do we keep the index number if we are throwing away half of the array each time, keep track of the number you throw away.
            - this can't be recursive unless you are passing in ^^ number each time, just do it in a loop
            - if its an even number of elements, half we can round down? or up it doesnt actually matter just make sure you are not throwing away extra
            - how do we know it isnt in this array
              - if the array has 1 element left in it and it does not match the `searchItem`, return -1 
            - don't mutate the array
=> test/edge cases - 

=> Mental Model: Describe the solution in 1-2 sentences. 
- test middle and splice off half, keeping count of how many you splice from the front
- to calc final index, spliced from front + middleValue

**Data Structure**
- given an array
- probably keep it as an array

**Implementation Notes**


**Algorithm**
- declare variable `arrCopy`, assign to a copy of the given `array`
- declare variable `elementsRemovedFromFront`, assign to 0
- while loop, condition: `arrCopy` has more than 1 element
  - declare variable `middleIndex`, assign to the index in the middle of the `arrayCopy`
  - declare variable `middleValue`, assign to the value in the middle of the `arrayCopy` (arrayCopy.length / 2)
  - if `middleValue` matches the `searchItem`, return `elementsRemovedFromFront` + the index of the `middleValue`
  - if `middleValue` is less than the `searchItem`
    - splice the first half of `arrCopy`, and increment `elementsRemovedFromFront` by its length
    - continue to next loop
  - if `middleValue` is greater than the `searchItem`
    - splice `arrCopy` 's second half including the `middleValue`
- if the element in `arrCopy` is the `searchItem`, return `elementsRemovedFromFront`
  - otherwise, return -1 
    
**Check algorithm against test cases


*/
"use strict";


function binarySearch(array, searchItem) {
  let arrCopy = array.slice();
  let elementsRemovedFromFront = 0;
  
  while (arrCopy.length > 1) {
    let middleIndex = Math.floor(arrCopy.length / 2);
    let middleValue = arrCopy[middleIndex];
    
    if (middleValue === searchItem) {
      return elementsRemovedFromFront + middleIndex;
    } else if (middleValue < searchItem) {
      elementsRemovedFromFront += arrCopy.splice(0, middleIndex + 1).length;
    } else {
      arrCopy.splice(middleIndex);
    }
    
  }
  
  if (arrCopy[0] === searchItem){
    return elementsRemovedFromFront;
    } else {
      return -1;
    }
}





const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria') === 7);                   // 7
console.log(binarySearch(yellowPages, 'Apple Store') === 0);                // 0
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77) === -1);    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89) === 7);    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5) === 1);     // 1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 102) === 8);     // 8
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 102], 102) === 7);     // 7
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter') === -1);  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler') === 6);  // 6