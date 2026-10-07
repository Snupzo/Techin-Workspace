"use strict";

let shouldEatCake = (month, alkis) => {
  let textReturn;
  if (month === 12 && alkis > 5) {
    textReturn = "Šakotis privalomas";
  } else if (month != 12 && alkis > 7) {
    textReturn = "Na jau gerai... galima mažą gabalėlį";
  } else {
    textReturn = "Gal užteks arbatos?";
  }
  return textReturn;
};
