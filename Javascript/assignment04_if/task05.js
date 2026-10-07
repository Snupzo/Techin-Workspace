"use strict";

let number = Number(prompt("Enter a three digit number:"));
let amstrong = 0;
for (let i = 0; i < number.toString().length; i++) {
  amstrong += Math.pow(Number(number.toString()[i]), 3);
}
if (amstrong === number) {
  alert("The number is an Armstrong number.");
} else {
  alert("The number is not an Armstrong number.");
}
