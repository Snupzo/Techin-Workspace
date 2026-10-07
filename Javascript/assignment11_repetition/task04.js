"use strict";

let skaiciuokPertraukas = (hours) => {
  let breaker = 0;
  let minutes = hours * 60;
  while (minutes > 0) {
    if (minutes >= 45) {
      minutes -= 45;
      breaker++;
    } else {
      break;
    }
  }
  return breaker;
};

console.log(skaiciuokPertraukas(3));
