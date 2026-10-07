"use strict";

let findInHaystack = (givenArray, value) => {
  return givenArray.includes(value);
};

console.log(findInHaystack([1, 2, 30, -10], 480));
console.log(findInHaystack([1, 2, 30, -10], 30));
console.log(findInHaystack(["waffle", "giraffe", "banana"], "giraffe"));
console.log(findInHaystack(["waffle", "giraffe", "banana"], "lemons"));
