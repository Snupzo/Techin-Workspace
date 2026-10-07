"use strict";

const sumSort = (array) => {
  return array.sort((a, b) => {
    const sumA = a.reduce((acc, val) => acc + val, 0);
    const sumB = b.reduce((acc, val) => acc + val, 0);
    return sumA - sumB;
  });
};

console.log(sumSort([[9, 1, 9], [2], [4, 5]]));
