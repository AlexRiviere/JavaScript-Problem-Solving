// Word Ladder

// let ladder = ''
// ['head', 'heal', 'teal', 'tell', 'tall', 'tail'].map(word => {
//   if (ladder !== '') {
//     ladder += '-'
//   }

//   ladder += word
// })

// console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// Why does this throw an error?

//Something to do with calling an array iteration method on an array literal instead of calling it on a variable that is pointing to an arary



// Reserved Keywords

// const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
//   'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
//   'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
//   'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
//   'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
//   'with', 'yield'];

// function isReserved(name) {
  
//   for (let i = 0; i < RESERVED_KEYWORDS.length; i += 1) {
//     if (name ===  RESERVED_KEYWORDS[i]) return true;
//   }
//   return false;
// }

// console.log(isReserved('monkey')); // false
// console.log(isReserved('patch'));  // false
// console.log(isReserved('switch')); // should be: true

// The issue here is no matter what, `forEach` finishes its iteration. It cannot early return. We can use a for loop instead. 


// Random Recipe Generator

// // Picks n random elements from an array,
// // and returns a new array with those elements.
// function random(array, n) {
//   if (n === undefined) {
//     n = 1;
//   }

//   const elements = array.slice();
//   const randomElements = [];

//   while (n > 0 && elements.length > 0) {
//     const randomIndex = Math.floor(Math.random() * elements.length);
//     const randomElement = elements[randomIndex];

//     randomElements.push(randomElement);
//     elements.splice(randomIndex, 1);
//     n--;
//   }

//   return randomElements;
// }

// // Ingredients

// const ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
//   'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

// const spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
//   'poppy seed', 'cumin'];

// const extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// // Name

// const adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
// const firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
// const secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// // Generate!

// const dishName = random(adjective).concat(random(firstNoun)).concat(random(secondNoun));
// const dish = random(ingredients, 3).concat(random(spices, 2)).concat(random(extras, 1));

// console.log(`How about: ${dishName.join(' ')}`);
// console.log(`You need: ${dish.join(', ')}`);

// one issue is that we are returning an array from `random` then using it as an operand in `+` which will turn it into a string and you can't call `join` on a string









//Task List

// const todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
//             'call plumber', 'feed fido', 'get gas',  'organize closet'];

// function addTask(task) {
//   if (todos.includes(task)) {
//     console.log('That task is already on the list.');
//   } else {
//     todos.push(task);
//   }
// }

// function completeTasks(n = 1) {
//   let tasksComplete = 0;

//   while (todos.length > 0 && tasksComplete < n) {
//     console.log(`${todos[0]} complete!`);
//     todos.splice(0, 1);
//     // delete todos[0]; // can we use this on an array?
//     tasksComplete++;
//   }

//   if (todos.length === 0) {
//     console.log('All tasks complete!');
//   } else {
//     console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
//   }
// }

// function displayTaskList() {
//   console.log(`ToDo list (${todos.length} tasks):`)
//   console.log('---------------------');

//   for (let i = 0; i < todos.length; i++) {
//     console.log(`-- ${todos[i]}`);
//   }
// }

// // Utilizing our task manager

// addTask('oil change');
// addTask('dentist');
// addTask('homework');

// completeTasks(3);
// displayTaskList();

// Not sure but using `delete` on an array seems to have some weird side effects. It doesn't move other things down?






//Range


// function range(start, end) {
//   if (end === undefined) {
//     end = start;
//     start = 0;
//   }
//   const range = [];

//   for (let element = start; element <= end; element++) {
//     range.push(element);
//   }

//   return range;
// }


// // Examples

// console.log(range(10, 20));
// console.log(range(5));

// Here we are trying to use recursion without a baseline condition. we need two different names for the range funciton or a conditional test to see if an end argument was passed in





// Member Directory

// const memberDirectory = {
//   'Jane Doe': '323-8293',
//   'Margaret Asbury': '989-1111',
//   'Callum Beech': '533-9090',
//   'Juanita Eastman': '424-1919',
// };

// function isValidName(name) {
//   return (/^[a-z]+ [a-z]+$/i).test(name);
// }

// function isValidPhone(phone) {
//   return (/^\d{3}-\d{4}$/).test(phone);
// }

// function validMemberInfo(name, phone) {
//   return isValidName(name) && isValidPhone(phone);
// }

// function addMember(name, phone) {
//   if (validMemberInfo(name, phone)) {
//     memberDirectory[name] = phone;
//   } else {
//     console.log('Invalid member information.');
//   }
// }

// addMember('Laura Carlisle', '444-2223');
// addMember('Rachel Garcia', '232-1191');
// addMember('Earl 5mith', '331-9191');

// console.log(memberDirectory);

// \w in a regex includes numbers and _, 






//Molecules

// function valence(element) {
//   switch (element) {
//     case 'H': return 1;
//     case 'C': return 4;
//     case 'N': return 5;
//     case 'O': return 6;
//     // omitting the rest
//   }
// }

// function valenceOfMolecule(...args) {
//   let sum = 0;

//   args.forEach(atom => {
//     const match   = /([a-zA-Z]+)([0-9]*)/.exec(atom);
//     const element = match[1];
//     const number  = parseInt(match[2]) || 1;

//     sum += number * valence(element);
//   });

//   return sum;
// }

// // Example

// console.log('Number of valence electrons');
// console.log('---------------------------');
// console.log(`Water:     ${String(valenceOfMolecule('H2', 'O'))}`);
// console.log(`Propane:   ${String(valenceOfMolecule('C3', 'H8'))}`);
// console.log(`Vitamin C: ${String(valenceOfMolecule('C6', 'H8', 'O6'))}`);
// console.log(`Caffeine:  ${String(valenceOfMolecule('C8', 'H10', 'N4', 'O2'))}`);

// // Expected output:
// // Number of valence electrons
// // ---------------------------
// // Water:     8
// // Propane:   20
// // Vitamin C: 68
// // Caffeine:  74




//Glory!



// Standard role-playing dice, ranging from 4 faces to 20,
// specified in terms of minimum and maximum face value.
// const d4  = {min: 1, max: 4};
// const d6  = {min: 1, max: 6};
// const d8  = {min: 1, max: 8};
// const d10 = {min: 0, max: 9};
// const d12 = {min: 1, max: 12};
// const d20 = {min: 1, max: 20};

// function roll({max, min}) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Toss one or more dice and sum up their face values.
// function toss(...args) {
//   const dice = Array.prototype.slice.call(args); // probably dont need to do this 
//   return dice.map(roll).reduce((sum, value) => sum + value);
// }

// // Standard target roll tossing a 20-sided die,
// // with optional bonus and penalty dice.
// // Used to determine whether a character wanting to perform an action
// // succeeds or fails, based on whether the sum of the dice is higher
// // or lower than the relevant character trait.
// // (See below for examples.)
// function targetRoll(characterValue, bonus = {min: 0, max: 0}, penalty = {min: 0, max: 0}) {
//   let result = toss(d20, bonus, penalty);
//   // Normalize in case bonus or penalty push result out of the D20 range.
//   result = Math.max(1, result);
//   result = Math.min(20, result);

//   console.log(`--> ${result}`);

//   switch (result) {
//     case 1: 
//       automaticFail();
//       break;
//     case 20: 
//       automaticSuccess();
//       break;
//     default: result >= characterValue ? success() : fail();
//   }
// }

// function success() {
//   console.log('Your character succeeds.');
// }

// function fail() {
//   console.log('Your character fails.');
// }

// function automaticSuccess() {
//   console.log('Your character succeeds without effort. Glory!');
// }

// function automaticFail() {
//   console.log('Meagre attempt. Your character fails miserably.');
// }

// // Example character.
// const myCharacter = {
//   name: 'Jenkins',
//   strength: 4,
//   constitution: 6,
//   education: 11,
//   luck: 3,
//   sanity: 9,
// };

// // Example rolls:

// // Jenkins wants to break in a door with brute force,
// // so he has to roll against his strength value.
// targetRoll(myCharacter.strength);

// // Jenkins is challenged to a drinking contest.
// // In order to determine how much he can take, he rolls against his
// // constitution. Since he just ate a huge portion of pork roast, he
// // gets a D4 bonus die.
// targetRoll(myCharacter.constitution, {min: 0, max: 4});

// // Jenkins found an ancient scroll and attempts to decipher it.
// // He has to roll against his education, in order to determine
// // whether he's able to read it.
// targetRoll(myCharacter.education);








// Grade Analysis

// function average(nums) {
//   const sum = nums.reduce((total, num) => total + num);

//   return sum / nums.length;
// }

// function median(nums) {
//   nums.sort((a, b) => a - b);

//   let median;
//   const length = nums.length;
//   if (length % 2 === 0) {
//     median = average([nums[(length / 2) - 1], nums[length / 2]]);
//   } else {
//     median = nums[Math.floor(length / 2)];
//   }

//   return median;
// }

// // Tests

// const quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
// const quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
// const quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
// const quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// // should all log 'true':
// console.log(average(quarter1ExamScores) === 86.8);
// console.log(average(quarter2ExamScores) === 86.3);
// console.log(average(quarter3ExamScores) === 83.7);
// console.log(average(quarter4ExamScores) === 88.8);

// console.log(median(quarter1ExamScores) === 89.5);
// console.log(median(quarter2ExamScores) === 89.5);
// console.log(median(quarter3ExamScores) === 87);
// console.log(median(quarter4ExamScores) === 89.5);











//Weekday Classes

// const TODAY = toDate("2018-08-05");

// function toDate(string) {
//   return new Date(`${string}T00:00:00`);
// }

// function toString(date) {
//   let month = String(date.getMonth() + 1);
//   if (month.length === 1) month = '0' + month;
//   let dateNumber = String(date.getDate());
//   if (dateNumber.length === 1) dateNumber = '0' + dateNumber;
//   return `${date.getFullYear()}-${month}-${dateNumber}`; // get year to getFullYear?
// }

// function isInThePast(date) {
//   return date < TODAY; // can you do this with dates?
// }

// function isWeekday(date) {
//   return date.getDay() >= 1 &&
//         date.getDay() <= 5;
// }

// const myCalendar = {
//   "2018-08-13": ["JS debugging exercises"],
//   "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
//   "2018-08-15": ["Read 'Demystifying Rails'"],
//   "2018-08-16": [],
//   "2018-08-30": ["Drone video project plan"],
//   "2018-09-10": ["Annual servicing of race bike"],
//   "2018-09-12": ["Study"],
//   "2018-11-02": ["Birthday Party"],
//   "2018-11-03": ["Birthday Party"],
// };

// const offeredClasses = {
//   "Back To The Future Movie Night": ["2018-07-30"],
//   "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
//   "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
//   "Mike's Hikes": ["2018-08-16"],
//   "Gordon Ramsay Master Class": ["2018-09-11", "2018-09-12"],
//   "Powerboating 101": ["2018-09-15", "2018-09-16"],
//   "Discover Parachuting": ["2018-11-02"],
// };

// function getCompatibleEvents(classes, calendar) {
//   function isAvailable(date) {
//     const dateStr = toString(date);
//     return !calendar[dateStr] || calendar[dateStr].length === 0;
//   };

//   const compatibleClasses = [];

//   Object.keys(classes).forEach(className => {
//     const classDates = classes[className].map(toDate);

//     if (classDates.some(isInThePast)) {
//       return;
//     }

//     if (classDates.filter(isWeekday).every(isAvailable)) {
//       compatibleClasses.push(className);
//     }
//   });

//   return compatibleClasses;
// }

// console.log(getCompatibleEvents(offeredClasses, myCalendar));
// // expected: ["Mike's Hikes", "Powerboating 101"]






//Pomodoro

var tasks = 10;
var checkmarks = 0;
var sessions = 0;


function pomodoro() {
  console.log('Work.');
  
  var minutes = 0;  
  while (minutes < 25) {
    minutes += 1;
    console.log('...' + minutes);
  }
  
  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log('Rest for ' + rest + ' minutes.');

  var minutes = 0;
  pomodoro();
}

pomodoro();