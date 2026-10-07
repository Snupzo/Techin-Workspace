"use strict";

let grades = [];
do {
  incoming = +prompt("Įveskite kiek balų gavo mokinys:");
  grades.push(incoming);
} while (incoming != 0);
let okay = 0;
let passable = grades.reduce((a, b) => {
  if (b >= 5 || a >= 5) {
    okay++;
  }
  return okay;
}, 0);

alert(`Į karnavalą ėjo ${grades.length}, pateko ${passable}`);
