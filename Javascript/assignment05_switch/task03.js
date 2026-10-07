"use strict";

function monthDays(theNumber) {
  switch (theNumber) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log("This month has 31 days");
      break;
    case 2:
      console.log("This month has 28 days");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("This month has 30 days");
      break;
    default:
      console.log("Wrong input.");
  }
}

monthDays(+prompt("Enter number of the month (1-12):"));
