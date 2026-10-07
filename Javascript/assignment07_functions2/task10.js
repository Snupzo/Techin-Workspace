"use strict";

let potatoBattle = () => {
  let patiekalai = [
    "Bulviniai blynai",
    "Vedarai",
    "Šaltibarščiai su bulvėm",
    "Bulvinė košė",
    "Bulvių plokštainis",
  ];
  let textReturn;
  let patiekalasOne = patiekalai[Math.floor(Math.random() * patiekalai.length)];
  let patiekalasTwo = patiekalai[Math.floor(Math.random() * patiekalai.length)];
  if (patiekalasOne === patiekalasTwo) {
    textReturn = `Lemtingas sutapimas! Valgysi dvigubą ${patiekalasOne} porciją!`;
  } else {
    textReturn = `Šiandien rinkis tarp ${patiekalasOne} ir ${patiekalasTwo}!`;
  }
  return textReturn;
};
