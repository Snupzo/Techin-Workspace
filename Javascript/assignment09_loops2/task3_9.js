"use strict";

let cartCheck = (amount) => {
  let totalWeight = 0;
  let cartTotal = 0;
  for (let i = 0; i < amount; i++) {
    cartTotal += +prompt("Įvesti prekės kainą:");
    totalWeight += +prompt("Įvesti prekės svorį:");
  }
  let averagePrice = cartTotal / amount;
  console.log(
    `Pirkinio vidutinė kaina: ${Math.floor(averagePrice / 100)} Lt ${(averagePrice % 100).toFixed(0)} ct.`,
  );
  console.log(
    totalWeight < 5000
      ? "Petriukas galės parnešti pirkinius."
      : "Petriukas negalės parnešti pirkinių.",
  );
};

cartCheck(+prompt("Kiek buvo pirkinių:"));
