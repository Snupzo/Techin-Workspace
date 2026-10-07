"use strict";

let onlyDigits = (string) => {
  // /.../ shows a regular expression, ^ is to negate (like !), [0-9] is a set of digits,
  // g is to match globally (without it will only match the first occurrence)
  let onlyDigits = string.replace(/[^0-9]/g, "");
  return parseInt(onlyDigits);
};

console.log(onlyDigits("Hello World 12345"));
