"use strict";

let camelize = (string) => {
  let words = string.split(" ");
  let camelCaseString = words[0];
  for (let i = 1; i < words.length; i++) {
    let capitalizedFirstLetter = words[i][0].toUpperCase();
    let restOfString = words[i].slice(1);
    camelCaseString += capitalizedFirstLetter + restOfString;
  }

  return camelCaseString;
};

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
