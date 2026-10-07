"use strict";

let work = [
  "Mokytis JS",
  "Kartoti medžiagą",
  "Pietūs",
  "Pasivaikščioti",
  "Serialas",
  "Žaidimai",
];

let atrinkPoilsioVeiklas = (doings) => {
  let newArray = [];
  for (let doing of doings) {
    if (doing.length > 6) {
      newArray.push(doing);
    }
  }
  return newArray;
};

console.log(atrinkPoilsioVeiklas(work));
