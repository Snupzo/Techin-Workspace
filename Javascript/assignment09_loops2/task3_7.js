"use strict";

let jumps = (times) => {
  let totalJumps = 0;
  for (let i = 1; i <= times; i++) {
    totalJumps += +prompt(`Kiek sušokinėjo kartų ${i} bandymu:`);
  }
  console.log(`Iš viso: ${totalJumps}`);
  console.log(`Vidutiniškai: ${totalJumps / times}`);
};

jumps(+prompt("Kiek kartų šokinėjo:"));
