"use strict";

let abbrev_name = (string) => {
  let arrayString = string.split(" ");
  let lastName = arrayString[1].split("");
  let abbrev = arrayString[0] + " " + lastName[0] + ".";
  return abbrev;
};

console.log(abbrev_name("Robin Singh"));

// or
/*
function abbrev_name(input) {
    const parts = input.split(" ");
    const firstName = parts[0];
    const lastName = parts[1];
    const abbreviatedLastName = lastName.charAt(0) + ".";
    return `${firstName} ${abbreviatedLastName}`;
}
*/
