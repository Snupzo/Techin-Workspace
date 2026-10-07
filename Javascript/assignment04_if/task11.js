"use strict";

let code = [];
for (let i = 0; i < 4; i++) {
  code.push(+prompt(`Enter number ${i + 1}:`));
}

if (code[0] === 3 || code[0] === 5 || code[0] === 7) {
  if (code[1] === 2) {
    if (code[2] > 5 && code[2] < 100) {
      if (code[3] < 9 || code[3] > 20) {
        alert("Correct!");
      }
    }
  }
} else {
  alert("Incorrect!");
}
