"use strict";

let dalykai = ["Kintamieji", "Ciklai", "Masyvai", "Funkcijos", "Objektai"];

let numeruokJsDalykus = (arrayStrings) => {
  let newArray = [];
  for (let i = 1; i <= arrayStrings.length; i++) {
    newArray.push(`${i}. ${arrayStrings[i]}`);
  }
  return newArray;
};

console.log(numeruokJsDalykus(dalykai));
