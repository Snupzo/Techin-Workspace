"use strict";

let cepelinuAnalize = (kiekCepelinu) => {
  let totalCalories = 350 * kiekCepelinu;
  let textReturn =
    totalCalories > 1000
      ? "Ufff... čia rimtas balius!"
      : "Dar gali judėti po valgio.";
  return { kalorijos: totalCalories, zinute: textReturn };
};
