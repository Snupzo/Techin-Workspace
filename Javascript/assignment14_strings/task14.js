"use strict";

const strLengthSort = (array) => {
  return array.sort((a, b) => a.length - b.length);
};

console.log(strLengthSort(["Apple", "Banana", "Cherry"]));
