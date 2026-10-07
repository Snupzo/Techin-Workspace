"use strict";

let simuliuokMiegoGrafika = (yesterday, today, dayBeforeYesterday) => {
  let averageSleep = (yesterday + today + dayBeforeYesterday) / 3;
  if (averageSleep < 6) {
    // Math.floor(number*10)/10 makes it so there is only one digit after decimal point and it's on lower side
    console.log(`Vidurkis ${Math.floor(averageSleep * 10) / 10} - esi zombis`);
  } else if (averageSleep > 7) {
    console.log(
      `Vidurkis ${Math.floor(averageSleep * 10) / 10} - miego karalius`,
    );
  } else {
    console.log(
      `Vidurkis ${Math.floor(averageSleep * 10) / 10} - normaliai išsilaikei`,
    );
  }
};

simuliuokMiegoGrafika(5, 7, 8);
