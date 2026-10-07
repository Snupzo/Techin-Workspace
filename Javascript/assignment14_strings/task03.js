"use strict";

let removeAnyWordWithZ = (stringArray) => {
  let newArray = [];
  for (let word of stringArray) {
    if (!word.toLowerCase().includes("z")) {
      newArray.push(word);
    }
  }
  return newArray;
};

console.log(removeAnyWordWithZ(["apple", "BananaZ", "Orange", "applezi"]));
console.log(removeAnyWordWithZ(["zebra", "lion", "tiger", "mouse"]));
console.log(removeAnyWordWithZ(["elephant", "fish", "bird", "dog"]));
console.log(removeAnyWordWithZ([]));
console.log(removeAnyWordWithZ(["appleZ", "Bananaz", "orangeZ"]));
console.log(removeAnyWordWithZ(["apple", "banana", "orange"]));
console.log(removeAnyWordWithZ(["apple123", "123banana", "456orange"]));
console.log(
  removeAnyWordWithZ(["apple!@#", "bananaZ%$^", "orange", "applezi*()_"]),
);
console.log(
  removeAnyWordWithZ(["appleZ", "Bananaz", "orangeZ", "apple", "Banana"]),
);
