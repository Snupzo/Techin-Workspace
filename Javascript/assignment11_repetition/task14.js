"use strict";

let darbas = ["Mokytis", "Kartoti", "Testuoti"];
let poilsis = ["Pietūs", "Pasivaikščiojimas", "Miegas"];

let sudarykBalansoAtaskaita = (work, leasure) => {
  let newtext = work.concat(leasure);
  let balansas = newtext.length;
  return balansas;
};

console.log(
  `Dienos balansas: ${sudarykBalansoAtaskaita(darbas, poilsis)} veiklų.`,
);
