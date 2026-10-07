"use strict";

let odds = (arrayOfNumbers) => {
  let oddsArray = [];
  arrayOfNumbers.forEach((element) => {
    if (element % 2 !== 0) {
      oddsArray.push(element);
    }
  });
  return oddsArray;
};

console.log(odds([1, 3, 2, 5, 4]));
