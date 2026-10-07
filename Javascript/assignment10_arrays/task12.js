"use strict";

let integers = (arrayOfNumbers) => {
  let trueIntegers = [];
  arrayOfNumbers.forEach((element) => {
    if (Number.isInteger(element)) {
      trueIntegers.push(element);
    }
  });
  return trueIntegers;
};

console.log(integers([3.14, 2.4, 7, 8.1, 2]));
