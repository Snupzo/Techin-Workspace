"use strict";

let temperature = parseInt(prompt("Enter the temperature:"));
switch (true) {
  case temperature < 0:
    console.log("Freezing");
    break;
  case temperature <= 10:
    console.log("Cold");
    break;
  case temperature <= 20:
    console.log("Mild");
    break;
  case temperature <= 30:
    console.log("Warm");
    break;
  case temperature > 30:
    console.log("HOT");
    break;
  default:
    console.log("NaN was entered");
}
