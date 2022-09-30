// // Ch 3 Prac Probs

// //1
// let firstName = 'Alex';
// let lastName = 'Riviere';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // 2
// console.log(firstName.concat(lastName));

// //3
// let array = fullName.split(' ');
// console.log(array);

// //4
// let language = 'JavaScript';
// let idx = language.indexOf('S');
// console.log(idx);

// //5
// let charCode = language.charCodeAt(idx);
// console.log(charCode);

// //6
// console.log(String.fromCharCode(charCode));

// //7
// console.log(language.lastIndexOf('a'));

// //8
// let a = 'a';
// let b = 'b';
// console.log(a > b);
// b = 'B';
// console.log(a > b);

// //9
// let aIndex = language.indexOf('a');
// let vIndex = language.indexOf('v');
// // console.log(language.substr(aIndex, 4));
// // console.log(language.substr(vIndex, 4));

// //10
// console.log(language.substring(aIndex, 4));
// console.log(language.substring(vIndex, 4));

// //11
// let fact1 = 'JavaScript is fun';
// let fact2 = 'Kids like it too';
// let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
// console.log(compoundSentence);

// //12
// console.log(fact1[0]);
// console.log(fact2[0]);

// //13
// let pi = 22 /7;
// let piString = String(pi);
// console.log(piString.lastIndexOf('14'));

// //14
// let boxNumber = (356).toString();
// console.log(boxNumber);

// //15
// boxNumber = parseInt(boxNumber, 10);
// console.log(typeof boxNumber);
// boxNumber = String(boxNumber);
// console.log(typeof boxNumber);

//16
// let rlSync = require('readline-sync');
// let name = rlSync.question('What is your name? ');
// if (name.endsWith('!')) {
//   let nameWithoutExclamation = name.slice(0, -1);
//   console.log(`HELLO ${nameWithoutExclamation}. WHY ARE WE SCREAMING?`); 
// } else {
//   console.log(`Hello ${name}.`); 
// }








//Ch 5 Reverse a String

// function reverse(string) {
//   return string.split('').reverse().join('');
// }

// console.log(reverse('hello'));                  // returns "olleh"
// console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"





//Ch 6 Acronym 

// function acronym(string) {
//   let arrayOfWords = string.split(/[^a-zA-Z]/).filter(word => word);
//   return arrayOfWords.map(word => word[0].toUpperCase()).join('');
// }


// function acronym(string) {
//   let parsedStringWords = string.replace(/-/g, ' ').split(' ');
//   return parsedStringWords.map(word => word[0].toUpperCase()).join('');
// }

// console.log(acronym('Portable Network Graphics')              === "PNG");
// console.log(acronym('First In, First Out')                    === "FIFO");
// console.log(acronym('PHP: HyperText Preprocessor')            === "PHP");
// console.log(acronym('Complementary metal-oxide semiconductor')=== "CMOS");
// console.log(acronym('Hyper-text Markup Language')             === "HTML");





//Email Validation

// must be exactly one @
// local is letters and digits only, at least one
// domain part must include at least one dot between components, components must have letters only at least one

// function validateDomain(domain) {
//   let domainSplit = domain.split('.');
//   if (domainSplit.length === 1) return false;
//   return domainSplit.every(component => component.match(/^[A-Za-z]{1,}$/))
// }

// function validateLocal(local) {
//   return local.match(/^[A-Za-z0-9]{1,}$/)
// }

// function isValidEmail(email) {
//   let emailSplitAtAt = email.split('@');
//   if (emailSplitAtAt.length !== 2) return false;
//   if (validateDomain(emailSplitAtAt[1]) && validateLocal(emailSplitAtAt[0])) {
//     return true; 
//   }
//   return false;
// }
// isValidEmail('HELLO123@baz')


// console.log(isValidEmail('Foo@baz.com.ph')   === true);
// console.log(isValidEmail('Foo@baz@com.ph')   === false);
// console.log(isValidEmail('Foo@mx.baz.com.ph')=== true);
// console.log(isValidEmail('foo@baz.com')      === true);
// console.log(isValidEmail('foo@baz.ph')       === true);
// console.log(isValidEmail('HELLO123@baz')     === false);
// console.log(isValidEmail('foo.bar@baz.to')   === false);
// console.log(isValidEmail('foo@baz.')         === false);
// console.log(isValidEmail('foo_bat@baz')      === false);
// console.log(isValidEmail('foo@bar.a12')      === false);
// console.log(isValidEmail('foo_bar@baz.com')  === false);
// console.log(isValidEmail('foo@bar.....com')  === false);
// console.log(isValidEmail('foobar.....com') === false);






//Matching Parentheses

/*
**Problem**
=>objective: given a string, return true if the parentheses are properly balanced

=>input: string

=>output: boolean

=>rules:

=>explicit	- 	each pair starts with '('

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `balance`, assign to 0
- iterate over the letters in the given `string`
  - if a letter is a '(', add 1 to `balance`
  - if a letter is a ')', subtract 1 to `balance`
  - if `balance` is ever < 0, return false
- return the return value from comparing balance to 0
*/

// function isBalanced(string) {
//   let balance = 0;
//   for (let char of string) {
//     if (char === '(') balance += 1;
//     if (char === ')') balance -= 1;
//     if (balance < 0) return false;
//   }
//   return balance === 0;
// }

// console.log(isBalanced('What (is) this?')     === true);
// console.log(isBalanced('What is) this?')      === false);
// console.log(isBalanced('What (is this?')      === false);
// console.log(isBalanced('((What) (is this))?') === true);
// console.log(isBalanced('((What)) (is this))?')=== false);
// console.log(isBalanced('Hey!')                === true);
// console.log(isBalanced(')Hey!(')              === false);
// console.log(isBalanced('What ((is))) up(')    === false);







// Sentiment Analysis 1





let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

/*
**Problem**
=>objective: given a text excerpt, return a summary of the positive and negative words

=>input: string

=>output: string

=>rules:

=>explicit	- count and keep track of which positive words are used in the text	

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**


**Algorithm**
- helper function `stripWord`
  - given a `string`, return a `string` having removed all non-alphabetic characters, and lowercase

- helper function `printPositiveWords`, given array of positive words
  - prints the required output
  
- helper function `printNegativeWords`, given array of negative words
  - prints the required output

- declare variable `words`, assign to the `text` split at the spaces
- declare variable `positiveWordsUsed`, assign to empty array
- declare variable `negativeWordsUsed`, assign to empty array
- iterate over `words`
  - declared variable `strippedLowerCasedWord`, assign to return value from passing `word` to `stripWord()`
  - if `strippedLowerCasedWord` is included in the `positiveWords` array
    - push `strippedLowerCasedWord` to the `positiveWordsUsed`, unless it is there already
  - if `strippedLowerCasedWord` is included in the `negativeWords` array
    - push `strippedLowerCasedWord` to the `negativeWordsUsed`, unless it is there already
- pass `positiveWordsUsed` to `printPositiveWords()`
- pass `negativeWordsUsed` to `printNegativeWords()`
- print sentiment statement using the lengths of the words arrays to determine whether you should use 'Negative' or 'Positive' for the last word
*/


// let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
// let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];
// let positiveRegex = /\bfortunes?\b|\bdream(s|t|ed)?\b|love(s|d)?\b|respect(s|ed)?\b|\bpatien(ce|t)?\b|\bdevout(ly)?\b|\bnobler?\b|\bresolut(e|ion)?\b/gi;
// let negativeRegex = /\bdie(s|d)?\b|\bheartached?\b|death|despise(s|d)?\b|\bscorn(s|ed)?\b|\bweary\b|\btroubles?\b|\boppress(es|ed|or('s)?)?\b/gi;


// function sentiment(text) {
//   let positiveWordsUsed = [];
//   let negativeWordsUsed = [];
  
//   let words = text.split(/(\s|-)/).filter(word => word.match(/[a-z]/i));
//   words.forEach(word => {
//     let wordStripped = stripWord(word).toLowerCase();
//     if (wordStripped.match(positiveRegex)) {
//         positiveWordsUsed.push(wordStripped);
//     }
//     if (wordStripped.match(negativeRegex)) {
//         negativeWordsUsed.push(wordStripped);
//     }
//   });
//   printWords(positiveWordsUsed, 'positive');
//   printWords(negativeWordsUsed, 'negative');
  
//   let sentiment = calcSentimentWord(positiveWordsUsed.length - negativeWordsUsed.length);
//   console.log(`The sentiment of the text is ${sentiment}`);
// }

// function calcSentimentWord(score) {
//   if (score < 0) {
//     score = -1 
//   } else if (score > 0) {
//     score = 1; 
//   } else {
//     score = 0; 
//   }
  
//   switch(score) {
//     case -1:
//       return 'Negative';
//     case 1: 
//       return 'Positive';
//     case 0: 
//       return 'Neutral';
//   }
// }

// function printWords(words, sentiment) {
//   console.log(`There are ${words.length} ${sentiment} words in the text.`);
//   console.log(`${sentiment[0].toUpperCase() + sentiment.slice(1)} sentiments: ${words.join(', ')}\n`);
// }

// function stripWord(word) {
//   return word.replace(/[^a-zA-z']/g, ''); 
// }

// sentiment(textExcerpt);

// console output

// There are 5 positive words in the text.
// Positive sentiments: fortune, dream, respect, love, resolution

// There are 6 negative words in the text.
// Negative sentiments: die, heartache, die, death, weary, death

// The sentiment of the text is Negative.






//Mail Count






// function mailCount(emailData) {
//   // ...
// }

// mailCount(emailData);



// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
  // <script src="https://dbdwvr6p7sskw.cloudfront.net/210/files/email_data_v2.js"></script>
  // <script>
    /*
    **Problem**
    =>objective: given a long string of emails, return the count and the date range (earliest date, latest date)

    =>input: string of emails

    =>output: two logged strings, 

    =>rules:

    =>explicit	- each email is delimited by '##||##'
                - each section of each email is delimited by '#/#'
                - the date is the third section of each email

    =>implicit/edge cases - 


    **Data Structure**


    **Implementation Notes**


    **Algorithm**
      - declare variable `dates`, assign to email string being split at the '##||##', then mapping over the returned array, splitting each email into its parts and returning the 3rd (index #2) part. 
      - declare variable `count`, assign to length of `dates`
      - declare variable `datesAsTimes`, map over `dates` transforming each date to milliseconds 
      - declare variable `minimum`, assign to the minimum of `datesAsTimes`, coerced back to a date as a string (`toDateString()`) 
      - do the same for `maximum`
      - log both output strings

    */


    // function mailCount(emailData) {
  //     let dates = emailData.split('##||##').map(email => {
  //       return email.split('#/#')[2].match(/\d\d-\d\d-\d\d\d\d/)[0];
  //     });

  //     let count = dates.length;
  //     let datesAsTimes = convertStrDatesToTimes(dates);
      
  //     logCount(count);
  //     logDateRange(datesAsTimes);
  //   }

  //   function convertStrDatesToTimes(datesArray) {
  //     return datesArray.map(date => {
  //       let dateObj = new Date(date);  
  //       return dateObj.getTime();
  //     });
  //   }

  //   function logDateRange(datesAsTimesArray) {
      
  //     let firstDate = new Date(Math.min(...datesAsTimesArray));
  //     let lastDate = new Date(Math.max(...datesAsTimesArray));
      
  //     console.log(`Date Range: ${firstDate.toDateString()} - ${lastDate.toDateString()}`);
  //   }

  //   function logCount(count) {
  //     console.log(`Count of Email: ${count}`);
  //   }
  //   mailCount(emailData);

  //   // console output

  //   // Count of Email: 5
  //   // Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
  // </script>
  
  
  
  
  
  
  
  
  
  //Longest Sentence
  
  let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced.'
  // It is rather for' +
  // ' us to be here dedicated to the great task remaining' +
  // ' before us -- that from these honored dead we take' +
  // ' increased devotion to that cause for which they gave' +
  // ' the last full measure of devotion -- that we here highly' +
  // ' resolve that these dead shall not have died in vain' +
  // ' -- that this nation, under God, shall have a new birth' +
  // ' of freedom -- and that government of the people, by' +
  // ' the people, for the people, shall not perish from the' +
  // ' earth.';



/*
**Problem**
=>objective: given a long string, determine the longest sentence, print it and log how many words it has

=>input: string

=>output: logging the longest sentence in the string, and logging the num of words

=>rules:

=>explicit	- sentences end with ., !, or ?
            - sentences always begin with a word character
            - any sequence of chars that are not spaces or sentence-ending chars is a word so like '--' is a word
            - log the string exactly as it is

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**


**Algorithm**
helper function
- given a sentence, return the number of words it contains
- split it at the spaces, count the elements in the returned array

- declare variable `sentences`, assign to the given `text` split at ., ! or ?
- sort `sentences` by length of sentence or the number of elements in the array that is returned from splitting each sentence at the spaces, descending
- log the first element of `sentences`
- log the number of words of the first element of `sentences`

*/

function countWords(sentence) {
  return sentence.split(' ').length; 
}

function longestSentence(text) {
  let sentences = text.split(/[.!?] /);
  sentences.sort((a, b) => {
    return countWords(b) - countWords(a);  
  });
  console.log(sentences[0]);
  console.log(`The longest sentence has ${countWords(sentences[0])} words.`);
}

longestSentence(longText);

// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// // Assuming the last sentence is removed:

// longestSentence(longText);

// // console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.