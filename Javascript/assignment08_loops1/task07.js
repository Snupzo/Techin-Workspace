"use strict";

let factors = (givenNumber) => {
  let factorIO = [];
  for (let i = 1; i <= givenNumber; i++) {
    if (givenNumber % i === 0) {
      factorIO.push(i);
    }
  }
  return factorIO;
};
//console.log(factors(12));
