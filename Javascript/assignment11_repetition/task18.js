"use strict";

let darbas = ["Mokytis JS", "Ateiti į pamokas", "Kartotis"];
let poilsis = ["Miegas", "serialai", "maistas"];

let sujunkIrIsryskinkVeiklas = (arr1, arr2) => {
  return arr1.concat(arr2).map((veikla) => veikla.toUpperCase());
};

console.log(sujunkIrIsryskinkVeiklas(darbas, poilsis));
