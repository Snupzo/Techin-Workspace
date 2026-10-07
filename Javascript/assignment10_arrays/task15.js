"use strict";

let squareDance = (arrayOfNumbers) => {
  let squaredArray = [];
  arrayOfNumbers.forEach((element) => {
    squaredArray.push(Math.pow(element, 2));
  });
  return squaredArray;
};

console.log(squareDance([1, 2, 3]));
