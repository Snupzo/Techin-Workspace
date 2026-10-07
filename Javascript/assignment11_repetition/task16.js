"use strict";

let ieskokSavaitgalio = (minutes) => {
  let poilsioDienos = 0;
  for (let diena of minutes) {
    if (diena < 120) {
      poilsioDienos++;
    }
  }
  if (poilsioDienos > 0) {
    console.log("Puiku - rastas savaitgalis!");
  } else {
    console.log("Reikia poilsio dienos!!!");
  }
};

ieskokSavaitgalio([180, 240, 300, 200, 400, 20, 60]);
