"use strict";

let split = (str, delimiter) => {
  let result = [];
  let startIndex = 0;
  let endIndex = str.indexOf(delimiter);
  while (endIndex !== -1) {
    result.push(str.slice(startIndex, endIndex));
    startIndex = endIndex + delimiter.length;
    endIndex = str.indexOf(delimiter, startIndex);
  }
  result.push(str.slice(startIndex));
  return result;
};
console.log(split("a-b-c", "-"));
console.log(split("APPLExxBANANAxxCHERRY", "xx"));
console.log(split("xyz", "r"));
