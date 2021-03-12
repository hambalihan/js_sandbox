// Create some arrays
const numbers = [21,29,93,84,82,33,3];
const numbers2 = new Array(21,32,33,94,84,22,5);
const fruit = ['Banana', 'Apple', 'Durian', 'Chili',];
const mixedData = [2, 'Alcaster', true, undefined, null, new Date(), {a:1, b:1}];
const stringExample = 'this is a string';

let val;

// Get array length
val = numbers.length;
// Check if its array
val = Array.isArray(numbers);
// Get a single value
val = numbers[3];
val = numbers[0];
// Insert into array (will replace array with index = 2)
numbers[2] = 100;
// Find index of the value
val = numbers.indexOf(33);

// MUTATING ARRAY
// Add on the end of the array
// numbers.push(39);
// // Add on the front of the array
// numbers.unshift(22);
// // Remove end of the array
// numbers.pop();
// // Remove front of the array
// numbers.shift();
// // Splice removing by index of the number (starting, ending);
// numbers.splice(1,5);
// // Reverse (changing from first to last and vice versa)
// numbers.reverse();

// Concatination of array
val = numbers.concat(numbers2);

// Sorting array
val = fruit.sort();
// val = numbers.sort();

// // Sorting using comparison to sort it right by numbers value
// val = numbers.sort(function(a, b){
//   return a - b;
// });

// // Reverse sorting by its value
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Create function to get first number less than 32
function under30(num){
  return num < 30;
};

val = numbers.find(under30);

function over30(num){
  return num > 30;
};

val = numbers.find(over30);


console.log(numbers);
console.log(val);