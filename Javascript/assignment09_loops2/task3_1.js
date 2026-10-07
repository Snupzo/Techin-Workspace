"use strict";

let contest = (startingNumber, endingNumber) => {
  let totalShirtsReq = 0;
  for (let i = startingNumber; i <= endingNumber; i++) {
    if (i % 6 === 0) {
      totalShirtsReq++;
    }
  }
  return totalShirtsReq;
};

console.log(`Reikalingų marškinėlių skaičius: ${contest(5, 24)}`);
