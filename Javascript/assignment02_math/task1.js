"use strict";

let getMax = [];
for (let i = 0; i < 3; i++) {
  getMax[i] = +prompt("Enter a number:");
}
console.log(
  `Max number is ${Math.max(...getMax)} and Min number is ${Math.min(...getMax)}`,
);
