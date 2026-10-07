"use strict";

let edgeOne = +prompt("Enter the first edge:");
let edgeTwo = +prompt("Enter the second edge:");
let edgeThree = +prompt("Enter the third edge:");

if (
  edgeOne + edgeTwo > edgeThree ||
  edgeOne + edgeThree > edgeTwo ||
  edgeTwo + edgeThree > edgeOne
) {
  alert("The edges can form a triangle.");
} else {
  alert("The edges cannot form a triangle.");
}
