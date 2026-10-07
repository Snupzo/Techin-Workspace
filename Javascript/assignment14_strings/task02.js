"use strict";

function removeZAnimals() {
  const animals = ["alligator", "zebra", "crocodile", "giraffe"];
  let animalsWithoutZ = [];
  for (let beast of animals) {
    if (beast.includes("z") === false) {
      animalsWithoutZ.push(beast);
    }
  }
  return animalsWithoutZ.toString(" ");
}

console.log(removeZAnimals());
