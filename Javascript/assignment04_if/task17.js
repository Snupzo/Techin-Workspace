"use strict";

let monthNumber = +prompt("Enter month's number to know how many days it has");
if (monthNumber <= 0 && monthNumber > 12) {
  console.log("Wrong number entered");
}
if (
  monthNumber === 1 ||
  monthNumber === 3 ||
  monthNumber === 5 ||
  monthNumber === 7 ||
  monthNumber === 8 ||
  monthNumber === 10 ||
  monthNumber === 12
) {
  console.log("31 days");
} else if (monthNumber === 2) {
  console.log("29 days");
} else {
  console.log("30 days");
}
