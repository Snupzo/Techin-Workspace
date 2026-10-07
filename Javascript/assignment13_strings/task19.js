"use strict";

let insert = (string, insertStr = "", position = 0) => {
  return string.slice(0, position) + insertStr + string.slice(position);
};

console.log(insert("We are doing some exercises."));
console.log(insert("We are doing some exercises.", "JavaScript "));
console.log(insert("We are doing some exercises.", "JavaScript ", 18));
