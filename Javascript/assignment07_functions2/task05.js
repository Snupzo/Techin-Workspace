"use strict";

let fishNeeded = (g1, g2, g3) => {
  let totalPeople = g1 + g2 + g3;
  let fishToCook = (totalPeople * 0.25).toFixed(2);
  let returnText;
  if (fishNeeded > 2) {
    returnText = "Reikės didelio puodo!";
  } else {
    returnText = "Užteks mažo puodo.";
  }
  return { zmones: totalPeople, zuvis: fishToCook, zinute: returnText };
};
