// Add func:
const add = (a, b) => a + b;

//Subtract func: 
const subtract = (a, b) => a - b;

// Multiply func:
const multiply = (a, b) => a * b;

// Divide func:
const divide = (a, b) => b === 0 ? "Error: Cannot divide by 0" : a / b;

console.log(add(3, 5));
console.log(subtract(10, 4));
console.log(multiply(4, 7));
console.log(divide(10, 2));
console.log(divide(10, 0));
console.log(divide(144, 2));