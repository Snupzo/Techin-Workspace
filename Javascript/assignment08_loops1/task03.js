"use strict";

let numberJoinerWhile = (numberA, numberB) => {
  let returnString = "";
  let i = numberA;
  while (i <= numberB) {
    returnString += i + "_";
    i++;
  }
  return returnString.slice(0, -1);
};

//console.log(numberJoinerWhile(2, 5));
