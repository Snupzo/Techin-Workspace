"use strict";

let uncamelize = (str, separator = " ") => {
  let result = "";
  // Goes through every char.
  for (let i = 0; i < str.length; i++) {
    // Checks if char is upperCase
    if (str[i] >= "A" && str[i] <= "Z") {
      // If not first word, place separator
      if (i > 0) {
        result += separator;
        result += str[i].toLowerCase();
      }
    } else {
      result += str[i];
    }
  }
  return result;
};

console.log(uncamelize("helloWorld"));
console.log(uncamelize("helloWorld", "-"));
console.log(uncamelize("helloWorld", "_"));
