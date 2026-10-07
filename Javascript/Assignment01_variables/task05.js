"use strict";

let wallLenght = Number(prompt("Kokia yra sienos ilgis (m)?"));
let wallHeight = Number(prompt("Kokia yra sienos aukštis (m)?"));
let brickPrice = Number(prompt("Kokia yra plytos kaina (eur)?"));
let wallArea = wallLenght * wallHeight;
let brickArea = 0.2 * 0.1;
let brickAmount = wallArea / brickArea;
let totalPrice = brickAmount * brickPrice;
alert(
  `Plytų kiekis: ${brickAmount.toFixed(0)} vnt. ir jų kaina yra ${totalPrice.toFixed(2)} eur.`,
);
