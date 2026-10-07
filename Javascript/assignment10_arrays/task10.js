"use strict";

let evens = (arrayOfNumbers) => {
  let evensArray = [];
  arrayOfNumbers.forEach((element) => {
    if (element % 2 === 0) {
      evensArray.push(element);
    }
  });
  return evensArray;
};

console.log(evens([1, 3, 2, 5, 4]));
