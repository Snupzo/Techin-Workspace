"use strict";

let bookRat = (chapters) => {
  let day = 0;
  let readPerDay = 1;
  let book = chapters;
  for (day; chapters > 0; day++) {
    if (chapters > 0) {
      chapters -= readPerDay;
      readPerDay++;
    }
  }
  console.log(`Visą knygą perskaitys per ${day} dienas (-ų).`);
  console.log(
    `Vidutiniškai per dieną perskaitė ${Math.round((book / day) * 100) / 100}`,
  );
};

bookRat(8);
bookRat(17);
