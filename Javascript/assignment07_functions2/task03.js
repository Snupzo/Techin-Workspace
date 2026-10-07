"use strict";

function dayMood(dayOfTheWeek) {
  let textReturn;
  let whichCase;
  switch (dayOfTheWeek) {
    case 1:
      textReturn = "Pirmadienis. Stiprios kavos prašau.";
      break;
    case 2:
      textReturn = "Antradienis. Jau geriau.";
      break;
    case 3:
      textReturn = "Trečiadienis. Pusė kelio!";
      break;
    case 4:
      textReturn = "Ketvirtadienis. Dar truputį.";
      break;
    case 5:
      textReturn = "Penktadienis. Širdis dainuoja!";
      whichCase = 5;
      break;
    case 6:
      textReturn = "Šeštadienis. Galima ilgiau pamiegoti.";
      whichCase = 6;
      break;
    case 7:
      textReturn = "Sekmadienis. Nieko neveikimo menas.";
      break;
    default:
      textReturn = "Tokios dienos nėra!";
  }
  if (whichCase === 5 || whichCase === 6) {
    textReturn += " šventinė atmosfera";
  }
  return textReturn;
}
