// Merge Object Properties:
// Merge the properties of two objects into a single
// object using the spread operator.

// const person = { name: 'John', age: 25 };
// const contact = { phone: '123-456-7890', email: 'john@example.com' };
// Expected Output: { name: 'John', age: 25, phone: '123-456-7890', email: 'john@example.com' }
const person = { name: "John", age: 25 };
const concat = { phone: "123-456-7890", email: "johnn@example.com" };

//Spread operator works on the elements.
const output = { ...person, ...concat };
console.log(output);
