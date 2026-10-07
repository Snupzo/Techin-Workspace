"use strict";

function sumOfRange(leftSummand, rightSummand) {
  let sum = 0;
  for (let i = leftSummand; leftSummand <= rightSummand; i++) {
    sum += leftSummand;
  }
  return sum;
}

//console.log(sumOfRange(20, 100));
