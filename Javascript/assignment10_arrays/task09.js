"use strict";

let mean = (arrayOfNumbers) => {
  let sum = arrayOfNumbers.reduce((a, b) => {
    return a + b;
  });
  let divider = arrayOfNumbers.length;
  return sum / divider;
};

console.log(mean([30, 10, 20]));
console.log(mean([-10, 10]));
