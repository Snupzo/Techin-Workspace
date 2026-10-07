"use strict";

let is_Blank = (input) => {
  if (input === null || input === undefined || input.trim() === "") {
    return true;
  } else {
    return false;
  }
};

console.log(is_Blank("")); // true
console.log(is_Blank("abc")); // false
