"Use strict";

let firstNumber = +prompt("Enter the first number:");
let secondNumber = +prompt("Enter the second number:");

console.log(
  `${firstNumber > secondNumber ? firstNumber : secondNumber} is the bigger number.`,
);
