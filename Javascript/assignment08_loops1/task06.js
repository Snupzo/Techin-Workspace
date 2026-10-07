"use strict";

let gcd = (numberA, numberB) => {
  let dividersA = [];
  let dividersB = [];
  let greatestDivider = 1;
  for (let i = 1; i <= numberA; i++) {
    if (numberA % i === 0) {
      dividersA.push(i);
    }
  }
  for (let i = 1; i <= numberB; i++) {
    if (numberB % i === 0) {
      dividersB.push(i);
    }
  }

  for (let numbersA of dividersA) {
    for (let numbersB of dividersB) {
      if (numbersB === numbersA && greatestDivider < numbersB) {
        greatestDivider = numbersB;
      }
    }

    //Later I found the Euclidean algorithm. Worth taking a look later
  }

  return greatestDivider;
};

console.log(gcd(100, 50));
