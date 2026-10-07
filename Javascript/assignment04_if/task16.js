"use strict";

let yourGrade = +prompt("Enter your score to know your grade");
if (yourGrade < 60) {
  console.log("F");
} else if (yourGrade <= 62) {
  console.log("D-");
} else if (yourGrade <= 66) {
  console.log("D");
} else if (yourGrade <= 69) {
  console.log("D+");
} else if (yourGrade <= 72) {
  console.log("C-");
} else if (yourGrade <= 76) {
  console.log("C");
} else if (yourGrade <= 79) {
  console.log("C+");
} else if (yourGrade <= 82) {
  console.log("B-");
} else if (yourGrade <= 86) {
  console.log("B");
} else if (yourGrade <= 89) {
  console.log("B+");
} else {
  console.log("A");
}
