"use strict";

let result;
let firstOperand;
let operator;
let secondOperand;

while (isNaN(firstOperand)) {
  firstOperand = +prompt("Введите первое число:", "");
  if (firstOperand === null || firstOperand === "") {
    alert("Вы ничего не ввели");
  } else if (!isNaN(firstOperand)) {
    break;
  }
  if (isNaN(firstOperand)) {
    alert("Вы ввели не число. Введите первое число:", "");
  }
}
console.log(firstOperand);
// console.log(typeof firstOperand);

while (true) {
  operator = prompt("Введите оператор (+, -, *, /):");
  if (operator === null || operator === "") {
    alert("Вы ничего не ввели");
  } else if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/"
  ) {
    break;
  }
  if (isNaN(operator)) {
    alert("Вы ввели не оператор. Введите оператор (+, -, *, /): ");
  }
}
console.log(operator);

while (isNaN(secondOperand)) {
  secondOperand = +prompt("Введите второе число:", "");
  if (secondOperand === null || secondOperand === "") {
    alert("Вы ничего не ввели");
  } else if (!isNaN(secondOperand)) {
    break;
  }
  if (isNaN(secondOperand)) {
    alert("Вы ввели не число. Введите второе число:");
  }
}
console.log(secondOperand);
// console.log(typeof secondOperand);

switch (operator) {
  case "+":
    result = +firstOperand + +secondOperand;
    break;
  case "-":
    result = +firstOperand - +secondOperand;
    break;
  case "*":
    result = +firstOperand * +secondOperand;
    break;
  case "/":
    if (secondOperand === 0) {
      console.log("На ноль делить нельзя!");
    } else {
      result = +firstOperand / +secondOperand;
    }
    break;
  default:
    console.log("Ошибка: я вас не понимаю!");
}

console.log(result);
