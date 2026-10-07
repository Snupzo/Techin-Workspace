"use strict";

let road = (steps) => {
  let click = 0;
  let clap = 0;
  for (let i = 1; i <= steps; i++) {
    if (i % 10 === 0) {
      clap++;
    }
    if (i % 10 === 5) {
      click++;
    }
  }
  console.log(`Suplojimų bus: ${clap}\nSpragtelėjimų bus: ${click}`);
};

road(15);
