"use strict";

let totalLenght;
let lessonAmount;
const lessonLenght = 45;
let monday = Number(prompt("Kiek pamokų yra pirmadienį?"));
let tuesday = Number(prompt("Kiek pamokų yra antradienį?"));
let wednesday = Number(prompt("Kiek pamokų yra trečiadienį?"));
let thursday = Number(prompt("Kiek pamokų yra ketvirtadienį?"));
let friday = Number(prompt("Kiek pamokų yra penktadienį?"));
lessonAmount = monday + tuesday + wednesday + thursday + friday;
totalLenght = lessonAmount * lessonLenght;
//alert(`Viso pamokų yra ${lessonAmount} ir jos trunka ${totalLenght} minučių.`);
console.log(
  `Viso pamokų yra ${lessonAmount} ir jos trunka ${totalLenght} minučių.`,
);
