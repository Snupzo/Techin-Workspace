"use strict";

let kaina = Number(prompt("Įveskite prekes kainą:"));
let nuolaida = Number(prompt("Įveskite nuolaidą procentais:"));
let kainaPoNuolaidos = kaina - (kaina * nuolaida) / 100;
console.log(`Kaina po nuolaidos: ${kainaPoNuolaidos.toFixed(2)}`);
