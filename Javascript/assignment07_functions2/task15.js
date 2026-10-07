"use strict";

let cakePerPerson = (cakeDiameter, groups) => {
  let totalPeople = 0;
  let biggestGroup = 0;
  let zeroGroup = 0;

  let cakeSize;

  for (let people of groups) {
    if (people === 0) {
      zeroGroup = 1;
    }
    if (biggestGroup < people) {
      biggestGroup = people;
    }
    totalPeople += people;
  }
  if (zeroGroup === 1) {
    cakeSize = cakeDiameter / biggestGroup;
  } else {
    cakeSize = cakeDiameter / totalPeople;
  }
  let textReturn;
  if (cakeSize < 5) {
    textReturn = "Mažoka";
  } else {
    textReturn = "Pakankamai";
  }
  return { perZmogui: cakeSize, ivertinimas: textReturn };
};
