"use strict";

let enoughCandies = (totalCandies, dailyConsumption) => {
  let dayCounter = 0;
  for (let i = 0; i < dailyConsumption.length; i++) {
    if (totalCandies - dailyConsumption[i] >= 0) {
      totalCandies -= dailyConsumption[i];
      dayCounter++;
    }
  }
  console.log(
    `Petriukui saldainių užteks ${dayCounter} dienoms ir jam liks ${totalCandies} saldainiai.`,
  );
};

enoughCandies(25, [7, 7, 8, 5]);
