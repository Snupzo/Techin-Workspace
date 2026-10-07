"use strict";

let acronyms = (string) => {
  let words = string.split(" ");
  let acronym = "";
  for (let i = 0; i < words.length; i++) {
    acronym += words[i][0].toUpperCase();
  }
  return acronym;
};

console.log(acronyms("Hello World"));
