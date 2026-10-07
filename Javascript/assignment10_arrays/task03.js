"use strict";

let numbers = [1, -3, 50, 100, 5];

//Function that returns Max value of an array using reduce method. Initial a is [0] and b is [1]
let max = (givenArray) => {
  return givenArray.reduce((a, b) => {
    return a > b ? a : b;
  });
};

console.log(max(numbers));
