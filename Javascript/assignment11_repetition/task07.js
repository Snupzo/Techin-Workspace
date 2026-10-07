"use strict";

let rimti = ["Mokytis", "Kartoti", "Rašyti konspektą", "Ateiti į pamokas"];
let smagus = ["Pyragas", "Pasivaikščiojimas", "Žaidimai"];

let penktadienioTvarkytojas = (arraySerious) => {
  //filter() checks if work matches in rimti[] and then returns the ones that doesn't match
  return arraySerious.filter((work) => !rimti.includes(work));
};

console.log(penktadienioTvarkytojas(rimti.concat(smagus)));
