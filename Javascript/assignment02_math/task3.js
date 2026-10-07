"use strict";

console.log(`Atsitiktinis skaičius nuo 0 iki 1: ${Math.random()}`);
console.log(
  `Atsitiktinis skaičius nuo 0 iki 100: ${Math.ceil(Math.random() * 100)}`,
);
console.log(
  `Atsitiktinis skaičius nuo 5 iki 20: ${Math.ceil(Math.random() * 15) + 5}`,
);
// Jei naudotumę Math.floor, tai paskutinis skaičius būtų 19, nes Math.floor suapvalina žemyn, tada reiktų pridėti +1, kad gautųsi sąlygos.
