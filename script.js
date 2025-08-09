const screen = document.querySelector(".screen");

function add(firstNum, secondNum) {
  screen.textContent = `The result is ${firstNum + secondNum}`;
}

function subtract(firstNum, secondNum) {
  screen.textContent = `The result is ${firstNum - secondNum}`;
}

function multiply(firstNum, secondNum) {
  screen.textContent = `The result is ${firstNum * secondNum}`;
}

function divide(firstNum, secondNum) {
  screen.textContent = `The result is ${firstNum / secondNum}`;
}

let firstNum = parseInt(prompt("Enter the first number"));
let operator = prompt("Enter the operator (+, -, /, *)");
let secondNum = parseInt(prompt("Enter the second number"));

function operate(operator, firstNum, secondNum) {
  if (operator == "+") {
    return add(firstNum, secondNum);
  } else if (operator == "-") {
    return subtract(firstNum, secondNum);
  } else if (operator == "*") {
    return multiply(firstNum, secondNum);
  } else if (operator == "/") {
    return divide(firstNum, secondNum);
  } else {
    alert("Please enter a valid operator.");
  }
}

operate(operator, firstNum, secondNum);
