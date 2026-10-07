"use strict";

let nicer = (string) => {
  let arrayString = string.split(" ");
  let newArray = [];
  for (let word of arrayString) {
    if (
      word !== "heck" &&
      word !== "darn" &&
      word !== "dang" &&
      word !== "crappy"
    ) {
      newArray.push(word);
    }
  }
  return newArray.join(" ");
};

console.log(nicer("mom get the heck in here and bring me a darn sandwich."));
