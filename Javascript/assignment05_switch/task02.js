"use strict";

let numberA = +prompt("Enter number A:");
let numberB = +prompt("Enter number B:");
let operatorUsed = prompt("Enter the operator to use this simple calculator:");
switch (operatorUsed) {
  case "+":
    console.log(`${numberA + numberB}`);
    break;
  case "-":
    console.log(`${numberA - numberB}`);
    break;
  case "*":
    console.log(`${numberA * numberB}`);
    break;
  case "/":
    console.log(`${numberA / numberB}`);
    break;
  default:
    console.log("ERROR! Not an operator");
}
