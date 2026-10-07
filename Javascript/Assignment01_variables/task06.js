"use strict";

let ilgesnis = Number(prompt("Koks yra ilgesnis pagrindo ilgis (m)?"));
let trumpesnis = Number(prompt("Koks yra trumpesnis pagrindo ilgis (m)?"));
let aukstis = Number(prompt("Koks yra trapecijos aukštis (m)?"));
let plotas = ((ilgesnis + trumpesnis) / 2) * aukstis;
alert(`Trapecijos plotas yra ${plotas.toFixed(2)} m².`);
