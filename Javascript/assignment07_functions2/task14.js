"use strict";

let springEnergy = (e1, e2, e3) => {
  let energyAverage = Number((e1 + e2 + e3) / 3).toFixed(2);
  if (energyAverage > 7) {
    return "Pavasarinis pakilimas!";
  } else {
    return "Laukiam saulės...";
  }
};
