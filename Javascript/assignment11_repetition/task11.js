"use strict";

let skaiciuokPuslapius = (timeAvailable) => {
  let pages = 0;
  do {
    if (timeAvailable >= 10) {
      timeAvailable -= 10;
      pages++;
    }
  } while (timeAvailable > 9);
  return pages;
};

console.log(skaiciuokPuslapius(35));
