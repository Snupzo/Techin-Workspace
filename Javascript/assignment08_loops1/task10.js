"use strict";

let makeBanner = (welcomeText) => {
  let returnText = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < Number(welcomeText.length); j++) {
      if (i === 1) {
        returnText += "*" + welcomeText + "*";
        break;
      } else {
        returnText += "*";
      }
    }
    returnText += "\n";
  }
  return returnText;
};

//console.log(makeBanner("Welcome to DigitalCrafts"));
