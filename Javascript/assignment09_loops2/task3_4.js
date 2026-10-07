"use strict";

let avgSpruce = (spruceAmount) => {
  let totalHeights = 0;
  for (let i = 1; i <= spruceAmount; i++) {
    totalHeights += +prompt(`Enter ${i} spruce height:`);
  }
  return alert(
    `Spruces' average height is: ${(totalHeights / spruceAmount).toFixed(2)}`,
  );
};

avgSpruce(+prompt("Enter the amount of spruces brought:"));
