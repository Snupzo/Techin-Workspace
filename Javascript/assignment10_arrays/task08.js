"use strict";

let positives = (arrayOfNumbers) => {
  let newArray = [];
  arrayOfNumbers.forEach((element) => {
    if (element > 0) {
      newArray.push(element);
    }
  });
  return newArray;
};

console.log(positives([1, -3, 5, -3, 0]));
console.log(positives([1, 2, 3]));
console.log(positives([-1, -2, -3]));
