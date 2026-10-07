"use strict";

let devMotivation = (kavosPuodeliai, eiltuesKodo, klaidos) => {
  let coderIndex = (eiltuesKodo - klaidos) * kavosPuodeliai;
  let textReturn;
  if (coderIndex < 20) {
    textReturn = "Reikia dar kavos...";
  } else if (coderIndex < 100) {
    textReturn = "Ne blogai.";
  } else {
    textReturn = "Super puikiai programuoju";
  }
  return textReturn;
};
