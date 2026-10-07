"use strict";

let luckCheck = (day) => {
  if (day === 13) {
    return "Oi...";
  } else if (day % 3 === 0) {
    return "Tokiomis dienomis kaip ši žmonės laimi loterijose";
  } else if (day % 2 === 0) {
    return "Rami diena";
  } else {
    return "Normalu";
  }
};
