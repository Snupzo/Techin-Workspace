"use strict";

let bakedCookies = Number(prompt("Kiek Tautvydas iškepė sausainių?"));
let friendsBakedCookies = Number(prompt("Kiek draugų iškepė sausainių?"));
let friendsAmount = Number(prompt("Kiek draugų dalyvavo?"));
let totalCookies = bakedCookies + bakedCookies * friendsBakedCookies;
let cookiesPerPerson = Math.floor(totalCookies / friendsAmount);
alert(
  `Kiekvienas draugas gaus po ${cookiesPerPerson} sausainių.\nTautvydui liko ${totalCookies % friendsAmount} sausainių.`,
);
