"use strict";

function typeAdvantage(type) {
  switch (type) {
    case "fire":
      console.log("grass");
      break;
    case "water":
      console.log("fire");
      break;
    case "grass":
      console.log("water");
      break;
    default:
      console.log("No advantage");
  }
}

typeAdvantage(prompt("Enter Pokemon type to know the advantage").toLowerCase());
