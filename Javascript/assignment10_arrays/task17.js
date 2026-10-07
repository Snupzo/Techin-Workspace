"use strict";

let countValue = (arrayOfNumbers, value) => {
  let count = 0;
  arrayOfNumbers.forEach((element) => {
    if (element === value) {
      count++;
    }
  });
  return count;
};

console.log(countValue([1, 2, 3, 4, 5], 2));
console.log(countValue([1, 2, 3, 4, 5], 17));
console.log(countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1));
console.log(countValue([10, 10, 10, -10], 10));
console.log(countValue(["hello", "bananas", "hello"], "hello"));
console.log(countValue(["hello", "bananas", "hello"], "giraffe"));
