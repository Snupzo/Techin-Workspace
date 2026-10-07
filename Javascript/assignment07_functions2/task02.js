"use strict";

let blynMotyvacija = (nuotaika, energija) => {
  let kepimoIndeksas = nuotaika * energija;
  let textReturn;
  switch (true) {
    case kepimoIndeksas < 20:
      textReturn = "Palik blynus rytojui...";
      break;
    case kepimoIndeksas <= 40:
      textReturn = "Kepk kelis blynus.";
      break;
    case kepimoIndeksas > 40:
      textReturn = "Kepk daug blynų";
      break;
  }
  return textReturn;
};
