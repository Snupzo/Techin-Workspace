"use strict";

let cars = Number(prompt("Kiek automobilių laukia persikelti?"));
let ferryCapacity = Number(prompt("Kiek automobilių telpa i keltą?"));
alert(
  `Perkels per ${Math.floor(cars / ferryCapacity)} kart. Liks neperkelta: ${cars % ferryCapacity}`,
);
