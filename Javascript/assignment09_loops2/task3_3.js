"use strict";

let snowlakes = (firstSecond, seconds) => {
  let totalFlakes = 0;
  let currentFlakes = firstSecond;
  for (let i = 0; i < seconds; i++) {
    totalFlakes += currentFlakes;
    currentFlakes *= 2;
  }
  return totalFlakes;
};

console.log(snowlakes(2, 4));
