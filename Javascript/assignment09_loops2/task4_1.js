"use strict";

let squirrel = (nuts, amount) => {
  let days = 0;
  while (nuts > 0) {
    days++;
    nuts -= amount * 3;
  }
  console.log(`Riešutų sukaupta ${days} dienoms.`);
  if (days < 90) {
    console.log("Riešutų neužteks visai žiemai.");
  } else {
    console.log("Riešutų užteks visai žiemai.");
  }
};

squirrel(900, 2);
squirrel(800, 3);
