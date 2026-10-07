"use strict";

let numberInput = Number(
  prompt("Įveskite skaičių, kad sužinot jo kvadratą ir kubą:"),
);
console.log(`Kvadratas: ${Math.pow(numberInput, 2)}`);
console.log(`Kubas: ${Math.pow(numberInput, 3)}`);
