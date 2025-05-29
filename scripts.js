let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = `${previousInput} ${operator} ${currentInput}`;
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  document.getElementById('display').value = '';
}

function operate(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  };
}

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
