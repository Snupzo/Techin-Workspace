"use strict";

// Heron's formula. calcArea{}. toFixed(2)

function calcArea(a, b, c) {
  let semiPerimeter = (a + b + c) / 2;
  let areaHeron = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - a) *
      (semiPerimeter - b) *
      (semiPerimeter - c),
  );
  return areaHeron.toFixed(2);
}
