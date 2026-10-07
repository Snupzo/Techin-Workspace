"use strict";

let firstNumber = +prompt("Enter the first number:");
let secondNumber = +prompt("Enter the second number:");
let thirdNumber = +prompt("Enter the third number:");

let multipliedNumbers = firstNumber * secondNumber * thirdNumber;

if (multipliedNumbers > 0) {
  alert("The result is positive.");
} else if (multipliedNumbers < 0) {
  alert("The result is negative.");
} else {
  alert("The result is zero.");
}
