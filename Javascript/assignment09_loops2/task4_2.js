"use strict";

let distancePossible = (volume, usage) => {
  let fuelLeft = volume;
  let dayCounter = 1;
  let possible = 0;
  while (volume > 0) {
    if (dayCounter % 2 === 0) {
      volume -= usage;
      possible++;
      dayCounter++;
    } else {
      volume -= usage * 2;
      possible++;
      dayCounter++;
    }
  }
  console.log(`Keliauti bus galima ${possible} dienų/(as)/(ą).`);
};

distancePossible(20, 5);
distancePossible(112, 11);
