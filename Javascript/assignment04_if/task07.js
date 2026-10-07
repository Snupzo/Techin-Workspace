"use strict";

let firstNumber = +prompt("Enter the first number:");
let secondNumber = +prompt("Enter the second number:");
let thirdNumber = +prompt("Enter the third number:");

let newFirstNumber, newSecondNumber, newThirdNumber;

if (firstNumber < secondNumber && firstNumber < thirdNumber) {
  newFirstNumber = firstNumber;
  if (secondNumber < thirdNumber) {
    newSecondNumber = secondNumber;
    newThirdNumber = thirdNumber;
  } else {
    newSecondNumber = thirdNumber;
    newThirdNumber = secondNumber;
  }
} else if (secondNumber < firstNumber && secondNumber < thirdNumber) {
  newFirstNumber = secondNumber;
  if (firstNumber < thirdNumber) {
    newSecondNumber = firstNumber;
    newThirdNumber = thirdNumber;
  } else {
    newSecondNumber = thirdNumber;
    newThirdNumber = firstNumber;
  }
} else {
  newFirstNumber = thirdNumber;
  if (firstNumber < secondNumber) {
    newSecondNumber = firstNumber;
    newThirdNumber = secondNumber;
  } else {
    newSecondNumber = secondNumber;
    newThirdNumber = firstNumber;
  }
}
alert(`${newFirstNumber}, ${newSecondNumber}, ${newThirdNumber}`);
