"use strict";

let carSpeed = Number(prompt("Kokia yra automobilio greitis (km/h)?"));
const distance = 0.264;
let travelTime = (distance / carSpeed) * 3600;
alert(`Automobilis tunelį pravažiuos per ${travelTime.toFixed(2)} s.`);
