"use strict";

let fishInTank = Number(prompt("Kiek žuvų yra akvariume?"));
let fishToAddDaily = Number(prompt("Kiek žuvų pridedama kiekvieną dieną?"));
let daysPassed = Number(prompt("Kiek dienų praėjo?"));
let totalFish = fishInTank + fishToAddDaily * daysPassed;
alert(`Po ${daysPassed} dienų akvariume gyvens ${totalFish} žuvų.`);
//console.log(`Viso žuvų yra ${totalFish}.`);
