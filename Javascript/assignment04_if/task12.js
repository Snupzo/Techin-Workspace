"use strict";

let productPrice = new Map();
productPrice.set("Macbook Air", 999);
productPrice.set("MacBook Pro", 1299);
productPrice.set("Mac Pro", 2499);
productPrice.set("Apple Sticker", 1);

let productWanted = prompt("Kokio produkto norite?:");
let moneyOwned = +prompt("Kiek turite pinigų?");

if (productPrice.get(productWanted) <= moneyOwned) {
  alert("True");
} else {
  alert("False");
}
