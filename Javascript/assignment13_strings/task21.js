"use strict";

let text_truncate = (string, length = string.length, end = "...") => {
  if (string.length <= length) return string;
  return string.substring(0, length - end.length) + end;
};

console.log(text_truncate("We are doing JS string exercises."));
console.log(text_truncate("We are doing JS string exercises.", 19));
console.log(text_truncate("We are doing JS string exercises.", 15, "!!"));
