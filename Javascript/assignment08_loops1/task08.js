"use strict";

let makeSquare = (size) => {
  let returnText = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      returnText += "*";
    }
    returnText += "\n";
  }
  return returnText;
};
//console.log(makeSquare(5));
