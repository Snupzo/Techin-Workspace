"use strict";

let numberJoinerFancy = (numberA, numberB, separator) => {
  let returnString = "";
  for (let i = numberA; i <= numberB; i++) {
    returnString += i;
    if (separator && i < numberB) {
      returnString += separator;
    } else if (separator === undefined && i < numberB) {
      returnString += "_";
    }
  }
  return returnString;
};

//console.log(numberJoinerFancy(3, 10, "..&.."));
