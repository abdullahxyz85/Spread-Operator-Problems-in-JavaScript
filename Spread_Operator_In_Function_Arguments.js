// Spread in Function Arguments:
// Write a function sum that takes any number of arguments
// and returns their sum.
// Use the spread operator to pass an array of numbers as arguments.

// const numbers = [5, 10, 15];
// sum(...numbers); // Should return 30
//Spread operator is also used to pass multiple arguments in array.

const numbers = [5, 10, 15, 20, 35, 78, 96];

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(...numbers));
