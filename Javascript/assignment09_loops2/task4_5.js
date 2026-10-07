"use strict";

let price = 1;
let deliveryCounter = 0;
let expensiveDelivery = 0;
let deliveryTotal = 0;

//I know, it's messy, but it works as intended.

while (price > 0) {
  price = +prompt("Įveskite siuntos sumą:");
  if (price === 0) {
    console.log(`>100 Lt: ${expensiveDelivery}`);
    console.log(
      `Average delivery: ${(deliveryTotal / deliveryCounter).toFixed(2)} Lt.`,
    );
    console.log(`Total deliveries: ${deliveryCounter}.`);
    break;
  }
  if (price > 100) {
    expensiveDelivery++;
  }
  deliveryTotal += price;
  deliveryCounter++;
}
