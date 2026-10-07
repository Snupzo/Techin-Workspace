"use strict";

let mugsToPack = Number(prompt("Kiek puodelių reikia supakuoti?"));
//Nes telpa po 3 puodelius
const mugsPerBox = 3;
let fullBoxes = Math.floor(mugsToPack / mugsPerBox);
let remainingMugs = mugsToPack % mugsPerBox;
alert(
  `Pilnų dėžių: ${fullBoxes} vnt. ir likusių puodelių: ${remainingMugs} vnt.`,
);
