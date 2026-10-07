"use strict";

let giftsBudget = (k1, k2, k3) => {
  let textReturn;
  let totalBudget = Number((k1 + k2 + k3).toFixed(2));
  if (totalBudget > 50) {
    textReturn = "Biudžetas sprogo!";
  } else {
    textReturn = "Tilpai!";
  }
  return { suma: totalBudget, statusas: textReturn };
};
