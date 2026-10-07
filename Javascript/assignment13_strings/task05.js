"use strict";

let removeShorterStrings = (string, minLength) => {
  let strings = string.split(" ");
  let filteredStrings = strings.filter(
    (strings) => strings.length >= minLength,
  );
  return filteredStrings;
};

console.log(
  removeShorterStrings("This is a text about something really special", 5),
);
