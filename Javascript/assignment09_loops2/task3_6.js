"use strict";

let diceNumbers = (diceAmount, scores) => {
  let maxTotal = diceAmount * 6;
  let actualScore = [];
  let totalScore = 0;
  for (let score of scores) {
    totalScore += score;
    actualScore.push = score;
  }
  console.log(`Iš viso buvo galima surinkti taškų: ${maxTotal}`);
  console.log(`Tomas iš viso surinko: ${totalScore} taškų`);
  console.log(`Jo taškų vidurkis: ${(totalScore / diceAmount).toFixed(1)}`);
  console.log(
    totalScore >= maxTotal / 2 ? "Loterija laimėta" : "Loterija Pralaimėta",
  );
};

diceNumbers(4, [5, 3, 2, 1]);
diceNumbers(7, [6, 6, 2, 2, 5, 4, 5]);
