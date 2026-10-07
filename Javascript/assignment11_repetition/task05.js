"use strict";

let objektai = [
  { uzduotis: "Kartoti JS", prioritetas: 1 },
  { uzduotis: "Pasportuoti", prioritetas: 3 },
  { uzduotis: "Miegas", prioritetas: 2 },
];

let tvarkarastisSuPrioritetais = (objektas) => {
  //toSorted checks each object properties against each other(loop). If objA.p - ojbB.p is negative, means objA is lower number, hence priority is higher
  return objektas.toSorted((objA, objB) => objA.prioritetas - objB.prioritetas);
};

console.log(tvarkarastisSuPrioritetais(objektai));
