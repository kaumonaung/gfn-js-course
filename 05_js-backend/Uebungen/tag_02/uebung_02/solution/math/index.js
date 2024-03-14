function add(num1, num2) {
  return num1 + num2; // => Number
}

function addConsole(num1, num2) {
  console.log(num1 + num2); // => Konsole
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return 'Cannot divide by zero';
  }

  return num1 / num2;
}

module.exports = {
  add,
  addConsole,
  subtract,
  multiply,
  divide,
};
