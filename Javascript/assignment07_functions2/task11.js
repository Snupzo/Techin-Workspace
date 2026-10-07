"use strict";

function holidayPriority(svente, dienosIki) {
  let priority;
  switch (svente) {
    case "Kalėdos":
      priority = 5;
      break;
    case "Velykos":
      priority = 4;
      break;
    case "Joninės":
      priority = 3;
      break;
    case "Cepelinų diena":
      priority = 2;
      break;
    default:
      priority = 1;
  }
  let koeficientas = priority * (30 - dienosIki);
  let textReturn = `Skubos koeficientas: ${koeficientas}`;
  return textReturn;
}
