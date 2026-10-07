"use strict";

let numberInput = Number(
  prompt("Įveskite skaičių su keliais skaitmenimis po kablelio:"),
);
let decimalPlaces = Number(prompt("Įveskite norimą skaičių po kablelio:"));
console.log(`Suapvalintas skaičius: ${numberInput.toFixed(decimalPlaces)}`);
