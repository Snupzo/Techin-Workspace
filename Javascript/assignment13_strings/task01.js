"use strict";

let blankGone = (string) => {
  let noBlank = string.replace(" ", "");
  return noBlank;
};

console.log(blankGone("Hello World"));
