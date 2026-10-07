"use strict";

let fizzbuzz = (number) => {
  let returnText = "";
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      returnText += "fizzbuzz";
    } else if (i % 3 !== 0 && i % 5 === 0) {
      returnText += "buzz";
    } else if (i % 3 === 0 && i % 5 !== 0) {
      returnText += "fizz";
    } else if (i % 3 !== 0 || i % 5 !== 0) {
      returnText += ".";
    }
  }
  return returnText;
};

//console.log(fizzbuzz(12));
