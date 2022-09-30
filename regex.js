// Basic Matching

// let str = 'strawberry';
// console.log(str.match(/(blue|black)berry/));


// Character Classes

// let str = 'The regex /[^a-z]/i matches any character that is' +
// 'not a letter. Similarly, /[^0-9]/ matches any' + 
// 'non-digit while /[^A-Z]/ matches any character' + 
// 'that is not an uppercase letter. Beware: /[^+-<]/' +
// 'is at best obscure, and may even be wrong.';
// console.log(str.match(/\[\^[a-z0-9]\-[a-z0-9]\]/gi));



//Character Class Shortcuts

// let str = 'The red d0g chases the b1ack cat.';
// console.log(str.match(/[A-Za-z]{3}/g));





//Anchors
//Quantifiers

// let str = ",123,456,789,123,345,";
// console.log(str.match(/^,(\d+,){3,6}$/g));




//Using it in JS

// function isUrl(url) {
//   return !!url.match(/^https?:\/\/\S*$/); 
// }

// console.log(isUrl('http://launchschool.com')  ===true);
// console.log(isUrl('https://example.com')      ===true);
// console.log(isUrl('https://example.com hello')===false);
// console.log(isUrl('   https://example.com')   ===false);



// function fields(string) {
//   return string.split(/( |\t|,)/).filter(field => !field.match(/( |\t|,)/) && field); 
// }

// console.log(fields("Pete,201,Student"));
// // -> ['Pete', '201', 'Student']

// console.log(fields("Pete \t 201    ,  TA"));
// // -> ['Pete', '201', 'TA']

// console.log(fields("Pete \t 201"));
// // -> ['Pete', '201']

// console.log(fields("Pete \n 201"));
// // -> ['Pete', '\n', '201']


// function mysteryMath(string) {
//   let indexOfFirstOperator = string.search(/[\+\-\*\/]/);
//   return string.slice(0, indexOfFirstOperator) + '?' + string.slice(indexOfFirstOperator + 1)
// }


// console.log(mysteryMath('4 + 3 - 5 = 2') === '4 ? 3 - 5 = 2');
// console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1') === '(4 ? 3 + 2) / 7 - 1 = 1');


// function danish(string) {
//   return string.replace(/(\bapple\b|\bblueberry\b|\bcherry\b)/, 'danish'); 
// }


// console.log(danish('An apple a day keeps the doctor away') ==='An danish a day keeps the doctor away');
// console.log(danish('My favorite is blueberry pie') ==='My favorite is danish pie');
// console.log(danish('The cherry of my eye') ==='The danish of my eye');
// console.log(danish('apple. cherry. blueberry.') ==='danish. cherry. blueberry.');
// console.log(danish('I love pineapple') ==='I love pineapple');








// function formatDate(date) {
//   let dateSplit = date.split(/\-/);
//   if (dateSplit.length === 1) return date;
//   return dateSplit.reverse().join('.');
// }

// console.log(formatDate('2016-06-17') === '17.06.2016');
// console.log(formatDate('2016/06/17') === '2016/06/17');




function formatDate(date) {
  return date.replace(/^(\d\d\d\d)([\-/])(\d\d)\2(\d\d)$/, '$4.$3.$1');
}


console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2017/05/03')); // -> '03.05.2017'
console.log(formatDate('2015/01-31')); // -> '2015/01-31' (no change)