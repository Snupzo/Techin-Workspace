"use strict";

let countEvens = (arrayOfNumbers) => {
  let evens = 0;
  arrayOfNumbers.forEach((element) => {
    if (element % 2 === 0 && Number.isInteger(element)) {
      evens++;
    }
  });
  return evens;
};

console.log(countEvens([1, 2, 3, 4, 5]));
console.log(countEvens([10, 10, 10]));
console.log(countEvens([1, 1, 1, 2]));
