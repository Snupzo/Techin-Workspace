"use strict";

let numberJoinerFor = (numberA, numberB) => {
  let returnString = "";
  for (let i = numberA; i <= numberB; i++) {
    returnString += i + "_";
  }
  return returnString.slice(0, -1);
};

//console.log(numberJoinerFor(2, 5));
