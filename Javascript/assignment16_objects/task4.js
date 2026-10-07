"use strict";

let isItEmpty = (given) => {
  if (Object.keys(given).length === 0) {
    return true;
  } else {
    return false;
  }
};


console.log(isItEmpty({}));
console.log(isItEmpty({a: 1}))