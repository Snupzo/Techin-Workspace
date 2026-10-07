"use strict";

let randomHoliday = () => {
  let holidays = [
    { group: "technologinė", holidayG: ["PD", "KPD"] },
    { group: "maisto", holidayG: ["CD", "ŠD"] },
    { group: "poilsio", holidayG: ["NND", "VPD"] },
  ];

  let randomGroup = holidays[Math.floor(Math.random() * holidays.length)];
  let randomHolidayG =
    randomGroup.holidayG[
      Math.floor(Math.random() * randomGroup.holidayG.length)
    ];
  return { kategorija: randomGroup, šventė: randomHolidayG };
};
