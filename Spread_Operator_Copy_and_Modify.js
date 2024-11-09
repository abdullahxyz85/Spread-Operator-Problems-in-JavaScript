// Copy and Modify an Array:
//  Create a new array by copying the following array
// and then adding two more elements at
// the end using the spread operator.

// const fruits = ['apple', 'banana', 'cherry'];
// Expected Output: ['apple', 'banana', 'cherry', 'orange', 'grape']
const fruits = ["apple", "banana", "cherry"];
//Spread operator is also used to copy the array and in copy of square bracket we can modify it and add more modify.

const output = [...fruits, "orange", "grape"];

console.log(output);
