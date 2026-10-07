"use strict";

function goToFair(temp, windSpeed) {
  let textReturn;
  if (temp < 0 && windSpeed > 5) {
    textReturn = "NEEIK! Sušalsi!";
  } else if (temp > 0 && windSpeed < 5) {
    textReturn = "Eik! Riestainiai tavęs laukia!";
  } else {
    textReturn = "Gal eik, bet apsirenk.";
  }
  return textReturn;
}
