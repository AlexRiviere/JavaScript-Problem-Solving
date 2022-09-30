//Uppercase Check 


/*
**Problem**
=>objective: given a string, return true if all the alphabetic chars are uppercase. false if not. ignore the chars that are not alphabetic

=>input: string

=>output: boolean

=>rules:

=>explicit	- ignore non alphabetic chars

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**


**Algorithm**
- iterate over the letters of the string
  - if this letter is a letter and is not uppercase
    - return false
- if you make it through the full iteration, return true. 

*/

// function isUppercase(string) {
//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i].match(/[A-Z]/i) && string[i].match(/[a-z]/)) return false; 
//   }
//   return true;
// }

// console.log(isUppercase('t')         === false);
// console.log(isUppercase('T')         === true);
// console.log(isUppercase('Four Score')=== false);
// console.log(isUppercase('FOUR SCORE')=== true);
// console.log(isUppercase('4SCORE!')   === true);
// console.log(isUppercase('')          === true);













//Delete Vowels

/*
**Problem**
=>objective: given an array of strings, return the array of strings without any vowels

=>input: array of strings

=>output: array of strings

=>rules:

=>explicit	- remove all vowels from strings

=>implicit/edge cases - keep case, remove vowels of all cases


**Data Structure**


**Implementation Notes**
- transformation
- `replace` regex matching upper/lowercase vowels, replacing with empty string (remember to use g)

**Algorithm**
- iterate over the given `stringArray`, transforming each element
  - replace the vowels with empty strings
- return the transformed array

*/

// function removeVowels(stringArray) {
//   return stringArray.map(string => {
//     return string.replace(/[aeiou]/gi, '');  
//   }); 
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]








//Lettercase Counter

/*
**Problem**
=>objective: given a string, return an object with three props lowercase, uppercase, neither, with values that are counts of the types of chars in the given `string`

=>input: string

=>output: object 

=>rules:

=>explicit	- 

=>implicit/edge cases - empty string, still returns objects with 0s for all the counts


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `result`, assign to object literal with the 3 needed properties
- iterate over the letters in the given `string`
  - if the letter is uppercase, increment the uppercase property of `result`
  - else if the letter is lowercase, increment the lowercase property of `result`
  - else increment the neither property of `result`
- return `result`

*/

// function letterCaseCount(string) {
//   let result = {
//     lowercase: 0,
//     uppercase: 0,
//     neither: 0,
//   };
  
//   for (let i = 0; i < string.length; i += 1) {
//     if (/[a-z]/.test(string[i])) {
//       result.lowercase += 1; 
//     } else if (/[A-Z]/.test(string[i])) {
//       result.uppercase += 1;
//     } else {
//       result.neither += 1; 
//     }
//   }
//   return result;
// }

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }












// Capitalize Words
/*
**Problem**
=>objective: given a string, return the string with the first char of every word capitalized, the rest of the word in lowercase

=>input: string

=>output: string

=>rules:

=>explicit	- a word is any sequence of non-whitespace chars

=>implicit/edge cases - if a word begins with a symbol, just don't capitalize it, but still return the rest of the word lowercased


**Data Structure**
- array, slices of strings

**Implementation Notes**
- transform an array of words
- if you call `toUpperCase` or `toLowerCase` on a non-letter, it just returns the calling value unchanged

**Algorithm**
- declare variable `words`, assign to given `string` being split at the spaces
- transform `words` by iterating over the elements, for each element
  - return the return value from passing the `word` to the `capitalize` helper function
  
helper function
- capitalize
  - given a `string`, return the `string` with its first letter capitalized and the rest of the letters lowercased

*/

// function capitalize(string) {
//   return string[0].toUpperCase() + string.slice(1).toLowerCase(); 
// }

// function wordCap(string) {
//   let words = string.split(' ');
//   let cappedWords = words.map(function(word) {
//     return capitalize(word);
//   });
//   return cappedWords.join(' ');
// }

// console.log(wordCap('four score and seven')   === "Four Score And Seven");
// console.log(wordCap('the javaScript language')=== "The Javascript Language");
// console.log(wordCap('this is a "quoted" word')=== 'This Is A "quoted" Word');









//Swap Case

/*
**Problem**
=>objective: given a `string`, return the `string` with every letter's case swapped, and the non-letters left alone

=>input: string

=>output: string

=>rules:

=>explicit	- leave non letters alone, swap all letters

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**
- iterate over the letters themselves
- abstract the actual swapping

**Algorithm**
- declare variable `result`, assign to empty string
- iterate over the letters of the given `string`
  - declare variable `letter`, assign to the letter that we are iterating over
  - if its a letter, 
    - pass letter to the `swapLetter` helper function, which will return its case swapped
    - reassign `letter` to ^^^ this return value
  - no matter what, concatenate the `letter` to the `result`
- return `result`

helper function 
- `swapLetter`
  - given a letter, return the letter with its case swapped
  - if the letter is uppercase, return lowercase
  - if the letter is lowercase, return uppercase
  - test with regex?

*/

// function swapLetter(letter) {
//   if (/[A-Z]/.test(letter)) return letter.toLowerCase();
//   if (/[a-z]/.test(letter)) return letter.toUpperCase();
// }

// function swapCase(string) {
//   let result = '';
//   for (let i = 0; i < string.length; i += 1) {
//     let char = string[i];
//     if (/[a-z]/i.test(char)) {
//       char = swapLetter(char); 
//     }
//     result += char;
//   }
//   return result;
// }

// console.log(swapCase('CamelCase')        === "cAMELcASE");
// console.log(swapCase('Tonight on XYZ-TV')=== "tONIGHT ON xyz-tv");






//Staggered Caps

/*
**Problem**
=>objective: given a `string`, return a `string` with characters in even indexes capitalized, odd indexes lowercased

=>input: string

=>output: string with staggered capitalization

=>rules:

=>explicit	- non-alphabetic chars should not be changed, but count them 
            - so if there is a space, the two chars on the opposite sides of the space should be in the same case 

=>implicit/edge cases - 


**Data Structure**
- array

**Implementation Notes**
- array transformation

**Algorithm**
- split the `string` into chars, transform the array returned, for each char
  - if hte index is odd, capitalized, it
  - other wise, lowercase it
- join the tranformed array

*/

// function staggeredCase(string) {
//   return  string
//     .split('')
//     .map(function trans(char, idx) {
//       if (idx % 2 === 0) return char.toUpperCase();
//       return char.toLowerCase();
//       })            
//       .join('');
// }

// console.log(staggeredCase('I Love Launch School!') === "I LoVe lAuNcH ScHoOl!");
// console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");
// console.log(staggeredCase('ignore 77 the 4444 numbers') === "IgNoRe 77 ThE 4444 nUmBeRs");









//Staggered Caps Part 2

/*
**Problem**
=>objective: given a `string`, return the string with staggered case, where every other letter is a different case

=>input: string

=>output: string with staggered cases

=>rules:

=>explicit	- ignores non-alphabetic chars

=>implicit/edge cases - so if there is a space between two letters, they will not be the same case


**Data Structure**
- array

**Implementation Notes**
- we need some kind of on/off switch

**Algorithm**
- the test needs to change
- declare variable `upperCase`, assign to true
  - when we are testing
  - if the char is a letter
    - and if uppercase is true
      - set uppercase to false
      - return the letter uppercase
    - if uppercase is false
      - set uppercase to true
      - return the lowercase letter
*/


// function staggeredCase(string) {
//   let uppercase = true;
//   return  string
//     .split('')
//     .map(function trans(char, idx) {
//       if (/[A-Z]/i.test(char)) {
//         if (uppercase) {
//           uppercase = false;
//           return char.toUpperCase();
//         } else {
//           uppercase = true;
//           return char.toLowerCase();
//         }
//       }
//       return char;
//       })            
//       .join('');
// }



// console.log(staggeredCase('I Love Launch School!')    === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase('ALL CAPS')                 === "AlL cApS");
// console.log(staggeredCase('ignore 77 the 444 numbers')=== "IgNoRe 77 ThE 444 nUmBeRs");





// How Long Are You

/*
**Problem**
=>objective: given a string, return an array with every word of the string, followed by the word's length 

=>input: string

=>output: array of strings with the words from the given `string` and their length

=>rules:

=>explicit	- if the argument is empty or there is no argument passed, return an empty array

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**


**Algorithm**
- guard clause for empty or undefined argument
- split the `string` into words, transform the returned array

*/


// function wordLengths(string) {
//   if (!string) return [];
//   return string.split(' ').map(word => word + ' ' + word.length);
// }

// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []







//Search Word Part 1

/*
**Problem**
=>objective: given a word and a string of text, return an integer that represents the count of how many times the `word` appeared in the `text`

=>input: two strings

=>output: integer

=>rules:

=>explicit	- some words will include periods and commas

=>implicit/edge cases - case insensitive


**Data Structure**


**Implementation Notes**
- we may need a `stripWord` helper method that strips words of periods and commas

**Algorithm**
- declare variable `count`, assign to 0
- declare variable `words`, assign to the given `text` split at the spaces
- iterate over `words`, for each `word
  - strip the word of its punctuation by passing it to `stripWord` helper function
  - if the lowercase version of the returned value of ^^^ matches the given `word`input, increment `count`
- return `count`

helper function
- `stripWord`
  - replace all commas and periods with empty strings
*/

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// function stripWord(word) {
//   return word.replace(/[.,?]/g, '') 
// }

// function searchWord(word, text) {
//   const regex = new RegExp(`\\b${word}\\b`, 'gi');
//   const matches = text.match(regex);

//   return matches ? matches.length : 0;
// }

// console.log(searchWord('qui', text));      // 3







//Search Word Part 2

/*
**Problem**
=>objective: given a word and some text, return the text with every occurrence of the `word` highlighted

=>input: word and text

=>output: text with `word`s highlighted

=>rules:

=>explicit	- highlight with two asterisks, and change all letters of the word to uppercase

=>implicit/edge cases - when the word has punctuation 


**Data Structure**


**Implementation Notes**


**Algorithm**
- can we just do one big replace?

*/


// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
// function replacer(match) {
//   return `**${match.toUpperCase()}**`  
// }

// function searchWord(word, text) {
//   const regex = new RegExp(`(\\b${word}\\b)`, 'gi');
//   return text.replace(regex, replacer); 
// }

// console.log(searchWord('sed', text));







// function foo(list) {
//   return list.map(function (word) {
//       return word.match(/[aeiou]/gi) || [];
//     }).reduce(function (acc, letterList) {
//       return acc + letterList.length;
//     }, 0);
// }

// console.log(foo(['cart', 'truck', 'cart', 'train']));
// console.log(foo(['apple', 'banana', 'orange']));
// console.log(foo(['a', 'b', 'c']));
// console.log(foo(['a', 'e', 'i', 'o', 'u']));







/*
**Problem**
=>objective: given an odd `integer`, log a four pointed diamond to the console that has a integer x integer grid

=>input: odd integer

=>output: logged diamond

=>requirements:

=>explicit - logged diamond needs four points, on integer x integer grid

=>implicit - the middle row always has the `integer` number of stars
           - rows only have odd numebrs of stars, 1, 3, 5, 7
           - stars are always in the middle of the rows, padded with spaces on the right and left
           - we iterate from 1 UP to the middle row, then down to 1 

=> test/edge cases - given integer 1
                   - negative integer?

=> Questions - 

**Data Structure**


**Implementation Notes**
- if you know the number of stars, you can back into the number of spaces
- guard clause for 1?
- spaces = (integer - stars) / 2
- a row is spaces + stars + spaces
- can we break it into two parts? top and bottom?

**Algorithm**
main function
- guard clause, if `integer` is 1, print one star and return 
- pass integer to `printTopOfDiamond`
- pass integer to `printBottomOfDiamond`

helper function `printTopOfDiamond`
  - declare variable `numOfStars`, assign to 1
  - loop from 1 to the given `integer`, on each iteration
    - declare variable `spaces`, assign to (`integer` - `numOfStars`) / 2
    - log a ' ' repeats `spaces` times concat `numOfStars` repeated `numOfStars` concat ' ' repeats `spaces` times
    - increment `numOfStars`
    
helper function `printBottomOfDiamond`
  - declare variable `numOfStars`, assign to integer - 2
  - loop from `integer` - 2 to 1, on each iteration, decrementing ecah time by 2
    - declare variable `spaces`, assign to (`integer` - `numOfStars`) / 2
    - log a ' ' repeats `spaces` times concat `numOfStars` repeated `numOfStars` concat ' ' repeats `spaces` times
    - increment `numOfStars`

*/

// function diamond(integer) {
//   if (integer === 1) {
//     console.log('*');
//     return;
//   }
//   printTopOfDiamond(integer);
//   printBottomOfDiamond(integer);
// }

// function printTopOfDiamond(integer) {
//   for (let numOfStars = 1; numOfStars <= integer; numOfStars += 2) {
//     printRow(integer, numOfStars);
//   }
// }

// function printBottomOfDiamond(integer) {
//   for (let numOfStars = integer - 2; numOfStars >= 1; numOfStars -= 2) {
//     printRow(integer, numOfStars);
//   }
// }

// function printRow(totalStars, thisRowStars) {
//   let spaces = (totalStars - thisRowStars) / 2;
//   console.log(`${' '.repeat(spaces)}${'*'.repeat(thisRowStars)}${' '.repeat(spaces)}`);
// }

// diamond(1);
// diamond(3);
// diamond(9);






