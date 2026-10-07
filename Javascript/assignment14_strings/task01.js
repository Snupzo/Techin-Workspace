"use strict";

let isVowel = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return vowels.includes(str);
};

console.log(isVowel("c"));
console.log(isVowel("e"));
console.log(isVowel("A"));
console.log(isVowel(99));
console.log(isVowel({ e: "Elephant" }));
