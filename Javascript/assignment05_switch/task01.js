"use strict";

let dayNow = prompt("What day is it?");
switch (dayNow) {
  case "Monday":
    console.log("5 days until Saturday");
    break;
  case "Tuesday":
    console.log("4 days until Saturday");
    break;
  case "Wednesday":
    console.log("3 days until Saturday");
    break;
  case "Thursday":
    console.log("2 days until Saturday");
    break;
  case "Friday":
    console.log("1 days until Saturday");
    break;
  case "Saturday":
    console.log("Yay! It's Saturday");
    break;
  case "Sunday":
    console.log("6 days until Saturday");
    break;
  default:
    console.log("Enter an actual day please");
}
