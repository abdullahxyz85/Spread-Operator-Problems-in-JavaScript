// Clone an Object:
// Use the spread operator to clone the following object.

// const original = { a: 1, b: 2 };
const original = { a: 1, b: 2 };

const clone = { ...original };
clone.a = 3;

console.log("Original:", original);
console.log("clone:", clone);
