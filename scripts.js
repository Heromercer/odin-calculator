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

function operate(currentInput, previousInput, operator) {
  if (operator === "+") {
    return add(currentInput, [previousInput]);
  } else if (operator === "-") {
    return subtract(currentInput, previousInput);
  } else if (operator === "*") {
    return multiply(currentInput, previousInput);
  } else if (operator === "/") {
    return divide(currentInput, previousInput);
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
