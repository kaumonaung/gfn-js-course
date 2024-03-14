const { add, subtract, multiply, divide } = require('./math');

console.log('Addition:', add(5, 3)); // => 8
console.log('Subtraction:', subtract(10, 4)); // => 6
console.log('Multiplication:', multiply(7, 2)); // => 14
console.log('Division:', divide(20, 4)); // => 5
console.log('Division by zero:', divide(10, 0)); // Test division by zero
