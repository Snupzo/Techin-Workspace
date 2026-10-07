"use strict";

let skaiciuokAtideliojima = (minutes) => {
  let atideliojimas = minutes.reduce((a, b) => a + b);
  if (atideliojimas > 100) {
    console.log(`Uff... atideliojimo perdaug: ${atideliojimas} min`);
  } else {
    console.log(`Pakenčiama: ${atideliojimas} min`);
  }
};

skaiciuokAtideliojima([20, 30, 40]);
