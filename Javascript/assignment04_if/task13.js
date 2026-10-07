"use strict";

/**13.1
let restaurantBill = +prompt("Enter the total bill:");
let hospitalityLevel = new Map();
hospitalityLevel.set("good", 0.2);
hospitalityLevel.set("fair", 0.15);
hospitalityLevel.set("poor", 0.1);
let actualHospitalityLevel = prompt("Tell us about your experience: (good/fair/poor)");
let tips = hospitalityLevel.get(actualHospitalityLevel) * restaurantBill;
console.log(`Tips amount: ${tips}`);

//13.2
console.log(`The total is: ${tips + restaurantBill}`);

//13.3
let restaurantBill = +prompt("Enter the total bill:");
let hospitalityLevel = new Map();
hospitalityLevel.set("good", 0.2);
hospitalityLevel.set("fair", 0.15);
hospitalityLevel.set("poor", 0.1);
let actualHospitalityLevel = prompt("Tell us about your experience: (good/fair/poor)");
let tips = hospitalityLevel.get(actualHospitalityLevel) * restaurantBill;
let guests = +prompt("How many guests?:");
let total = tips + restaurantBill;
console.log(`Every person has to pay ${(total/guests).toFixed(2)}`);
*/

// Kadangi reiktų if, tada būtų: (pamiršau tam kartui, kad tema if, tai nukeliavau ieškoti idomesnių būdų)

let restaurantBill = +prompt("Enter the total bill:");
let actualHospitalityLevel = prompt(
  "Tell us about your experience: (good/fair/poor)",
);
let tips;
if (actualHospitalityLevel === "good") {
  tips = restaurantBill * 0.2;
} else if (actualHospitalityLevel === "fair") {
  tips = restaurantBill * 0.15;
} else if (actualHospitalityLevel === "poor") {
  tips = restaurantBill * 0.1;
}
let guests = +prompt("How many guests?:");
let total = tips + restaurantBill;
console.log(`Every person has to pay ${(total / guests).toFixed(2)}`);
