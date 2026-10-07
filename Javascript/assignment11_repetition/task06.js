"use strict";

let darbai = [
  "Anksti atsikelti",
  "Pakartoti JS",
  "Pasidaryti arbatos",
  "Pažaist žaidimus",
  "Pažiūrėti serialą",
];

let susidarykToDo = (work) => {
  //Pushes another entry at the end of array
  work.push("Išgerti arbatos");
  //Splice cuts (starting index, how many to cut)
  work.splice(0, 1);
  return work;
};

console.log(susidarykToDo(darbai));
