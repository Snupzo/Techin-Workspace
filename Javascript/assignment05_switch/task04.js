"use strict";

let letterGrade = prompt("Enter your grade (A-F):").toUpperCase();
switch (letterGrade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  case "F":
    console.log("FAIL");
    break;
  default:
    console.log("You have entered wrong letter");
}
