"use strict";

let myHoliday = (myName, month, luckyNumber) => {
  if (month === luckyNumber) {
    return `Mistinis sutapimas, ${myName}`;
  } else if (month > 6) {
    return `Vasaros Nuotaikos, ${myName}`;
  } else if (month <= 6) {
    return `Pavasaro vėjai, ${myName}`;
  }
};
