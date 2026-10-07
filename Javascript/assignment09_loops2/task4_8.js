"use strict";

let friends = +prompt("Keliems draugams Linas nori dovanoti atvirukus?");
let types = +prompt("Kiek rūšių atvirukų yra parduotuvėje?");
let amount = [];

for (let i = 1; i <= types; i++) {
  amount.push(+prompt(`Kiek yra ${i} rūšies atvirukų?`));
}

let possible = 0;

let answer = amount.reduce((a, b) => {
  if (friends <= b) {
    possible++;
  }
}, amount[0]);

alert(`${possible} rūšių užteks visiems Lino draugams`);
