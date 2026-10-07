"use strict";

let product = (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((a, b) => {
    return a * b;
  });
};

console.log(product([2, 4, 6])); // => 48 (i.e., 2 _ 4 _ 6)
console.log(product([-10, 10])); // => -100 (i.e., -10 * 10)
