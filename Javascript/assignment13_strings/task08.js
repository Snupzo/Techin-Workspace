"use strict";

let string_to_array = (string) => {
  // regex - \s checks for whitespaces, \. because dot means any character.
  return string.split(/[\s,\.]+/);
};

console.log(string_to_array("Robin Singh"));
