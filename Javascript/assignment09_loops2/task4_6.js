"use strict";

let numbers = [];
let operator = +prompt("Įveskite veiksmą:");

do {
  incoming = +prompt("Įveskite skaičių (stop = 0):");
  if (incoming !== 0) numbers.push(incoming);
} while (incoming != 0);

let theHelp = numbers.reduce((a, b) => {
  switch (operator) {
    case 1:
      return a + b;
      break;
    case 2:
      return a - b;
      break;
    case 3:
      if (b === 0) {
        b = 1;
      }
      return a * b;
      break;
    case 4:
      return b > a ? b : a;
      break;
    case 5:
      return b < a ? b : a;
      break;
  }
});

switch (operator) {
  case 1:
    console.log(`Sum: ${theHelp}`);
    break;
  case 2:
    console.log(`Sub: ${theHelp}`);
    break;
  case 3:
    console.log(`Multiplied: ${theHelp}`);
    break;
  case 4:
    console.log(`Max: ${theHelp}`);
    break;
  case 5:
    console.log(`Min: ${theHelp}`);
    break;
}
