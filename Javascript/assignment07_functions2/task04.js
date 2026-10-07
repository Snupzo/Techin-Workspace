"use strict";

let joniniuEkspertas = (z1, z2, z3, z4) => {
  let suma = z1 + z2 + z3 + z4;
  let textReturn = suma > 20 ? "Joninės garantuotos!" : "Dar reikia žolelių";
  return { suma: suma, isvada: textReturn };
};
