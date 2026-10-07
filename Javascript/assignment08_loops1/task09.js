"use strict";

let makeBox = (long, high) => {
  let returnText = "";
  for (let i = 1; i <= high; i++) {
    for (let j = 0; j < long; j++) {
      if (j === 0 || j === long - 1 || i === 1 || i === high) {
        returnText += "*";
      } else if (j > 0 && j < long) {
        returnText += " ";
      }
    }
    returnText += "\n";
  }
  return returnText;
};

console.log(makeBox(7, 5));
