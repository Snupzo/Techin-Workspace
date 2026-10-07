"use strict";

let canDoNothing = (day, padarytiDarbai) => {
  if (day === 7 || padarytiDarbai > 5) {
    return "Gali nieko neveikti";
  } else {
    return "Dar šiek tiek padirbėk";
  }
};
