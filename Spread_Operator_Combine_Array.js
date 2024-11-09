// Combine Arrays:
// Combine the following arrays into one array using the spread operator.

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// Expected Output: [1, 2, 3, 4, 5, 6]
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

//(...) this sign is the spread operator.Spread operator is also used to concat the array.
let output = [...array1, ...array2];
console.log(output);
