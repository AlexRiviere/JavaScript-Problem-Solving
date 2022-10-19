// ***Write a helper function that takes an array and an element and returns the number of occurences.

// let a = [1, 2, 3, 4, 3, 2, 3, 4, 5, 6, 1];
// console.log(count(a, 1) === 2);
// console.log(count(a, 3) === 3);
// console.log(count(a, 2) === 2);
// console.log(count(a, 4) === 2);
// console.log(count(a, 6) === 1);
// console.log(count(a, 10) === 0);

// function count(array, element) {
//   let times = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === element) times += 1;
//   }
//   return times;
// }
// // this works for primitives only, will not match arrays





// ***Write a helper function that takes an array and returns a new array without any duplicate elements.


// a = [1, 2, 1, 1, 1, 2, 3, 4, 5, 6];
// console.log(uniqueElements(a));
// b = [1, 2, 3];
// console.log(uniqueElements(b));



// function uniqueElements(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (result.includes(array[i])) continue;
//     result.push(array[i]);
//   }
//   return result;
// }






// 

// a = [1, 2, 16, 161, 11, 2, 3, 4, 5, 6];
// a.sort((a, b) => a - b);
// console.log(a);
// a.sort((a, b) => b - a);
// console.log(a);



// // ***Write a helper function that takes an array and returns a random element from that array

// a = [1, 2, 3, 4, 5, 6];

// console.log(getRandomElement(a));

// function getRandomElement(array) {
//   let randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// }