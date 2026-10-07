"use strict";

let findLongestWord = (string) => {
  let arrayString = string.split(" ");
  return arrayString.reduce((wordA, wordB) => {
    return wordA.length > wordB.length ? wordA : wordB;
  });
};

console.log(findLongestWord("a book full of doggies"));
