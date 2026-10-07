"use strict";

let apskaiciuokBalansoIndeksa = (darbasValandomis, poilsisValandomis) => {
  let balansas = poilsisValandomis / darbasValandomis;
  if (balansas === 1) {
    return "Idealus balansas";
  } else if (balansas < 1 && balansas >= 0.5) {
    return "Geras balansas";
  } else if (balansas < 0.5) {
    return "Reikia atostogų";
  } else {
    return "Užteks tingėti";
  }
};

console.log(apskaiciuokBalansoIndeksa(10, 5));
console.log(apskaiciuokBalansoIndeksa(5, 10));
console.log(apskaiciuokBalansoIndeksa(10, 10));
