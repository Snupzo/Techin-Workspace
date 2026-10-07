"use strict";

let nuotaikos = [
  "motyvuotas",
  "tingus",
  "tingus",
  "normalus",
  "motyvuotas",
  "tingus",
  "ramus",
];

let ivertinkSave = (moods) => {
  let counter = 0;
  for (let mood of moods) {
    if (mood === "tingus") {
      counter++;
    }
  }
  return counter;
};

console.log(`Tinginystė užklupo ${ivertinkSave(nuotaikos)} kartus.`);
