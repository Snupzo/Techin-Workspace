"use strict";

let fiveCents = Number(prompt("Kiek penkių centų monetų yra taupyklėje?"));
let twentyCents = Number(
  prompt("Kiek dvidešimties centų monetų yra taupyklėje?"),
);
let twoLitas = Number(prompt("Kiek dviejų litų monetų yra taupyklėje?"));
let moneySaved = fiveCents * 0.05 + twentyCents * 0.2 + twoLitas * 2;
alert(`Taupyklėje yra ${moneySaved} litų.`);
