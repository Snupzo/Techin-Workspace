"use strict";

let holidaySpirit = (s1, s2, s3, s4, s5) => {
  let holidaySum = s1 + s2 + s3 + s4 + s5;
  if (holidaySum < 50) {
    // The task 3) requires the calculation, though didn't ask for return of it
    let lackingFifty = 50 - holidaySum;
  }
  if (holidaySum < 20) {
    return "Reikia daugiau mandarinų.";
  } else if (holidaySum <= 40) {
    return "Artėjame...";
  } else {
    return "Šventinė dvasia čia!";
  }
};
