"use strict";

let string_parameterize = (string) => {
  return string.toLowerCase().replaceAll(" ", "-");
};

console.log(string_parameterize("Robin Singh from USA."));
