"use strict";

//Write function allPositive which is given an array of numbers and returns true if every element is positive and false otherwise.

let allPositive = (arrayOfNumbers) => {
  let counter = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > 0) {
      counter++;
    }
  }
  if (counter === arrayOfNumbers.length) {
    return true;
  } else {
    return false;
  }
};

console.log(allPositive([1, 2, 3, 4, 5]));
console.log(allPositive([1, 2, -3, 4, 5]));
console.log(allPositive([0, 0, 1]));
