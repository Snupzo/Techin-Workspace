"use strict";

let firstIndexOf = (givenArray, value) => {
  return givenArray.indexOf(value);
};

console.log(firstIndexOf([10, 20, 30, 20], 20));
console.log(firstIndexOf([10, 20, 30, 20], 17));
console.log(firstIndexOf(["giraffe", "giraffe", "banana"], "giraffe"));
console.log(firstIndexOf(["giraffe", "giraffe", "banana"], "banana"));
