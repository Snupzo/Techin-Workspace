"use strict";

let n = +prompt("Enter number:");
let d = +prompt("Enter dividing number:");

if (d === 0) {
  alert("Division by zero is not allowed.");
} else {
  alert(n % d === 0 ? true : false);
}
