"use strict";

let picLength = +prompt("Enter length of your picture:");
let picWidth = +prompt("Enter width of your picture:");

if (picLength > picWidth) {
  console.log("Landscape");
} else {
  console.log("Not landscape");
}
