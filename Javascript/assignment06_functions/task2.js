"use strict";

function compareBMI(markMass, markHeight, johnMass, johnHeight) {
  let bmiMark = markMass / Math.pow(markHeight, 2);
  let bmiJohn = johnMass / Math.pow(johnHeight, 2);
  let bool = Boolean(bmiMark > bmiJohn);
  return bool;
}
