"use strict";

let candiesAdded = Number(prompt("Kiek saldainių kasdien gauna Marius?"));
let candiesEaten = Number(prompt("Kiek saldainių kasdien suvalgo Marius?"));
let daysUntilChristmas = Number(prompt("Kiek dienų liko iki Kalėdų?"));
let totalCandies = (candiesAdded - candiesEaten) * daysUntilChristmas;
let gifts = Math.floor(totalCandies / candiesEaten);
let remainingCandies = totalCandies % candiesEaten;
alert(
  `Marius dovanas paruos ${gifts} draugams ir liks ${remainingCandies} saldainių.`,
);
