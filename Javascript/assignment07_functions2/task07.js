"use strict";

let celebrateNameDay = (nameInput, arGeraiMiegojo) => {
  let textReturn = `Sveikiname su vardadieniu, ${nameInput}!`;
  if (!arGeraiMiegojo) {
    textReturn += " (bet pirmiau išgerk kavos)";
  }
  return textReturn;
};
