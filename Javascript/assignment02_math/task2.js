"use strict";

let numberInput = Number(
  prompt("Įveskite skaičių su keliais skaitmenimis po kablelio:"),
);
console.log(`Suapvalintas skaičius: ${Math.round(numberInput)}`);
console.log(`Suapvalintas skaičius žemyn: ${Math.floor(numberInput)}`);
console.log(`Suapvalintas skaičius aukštyn: ${Math.ceil(numberInput)}`);
