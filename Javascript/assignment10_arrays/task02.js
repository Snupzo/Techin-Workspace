"use strict";

let myArray = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// Printing 3rd item. Index is 2 because everything counted is started at 0
console.log(myArray[2]);

//Change the 'thursday' value to null
let newWeek = myArray.toSpliced(myArray.indexOf("thursday"), 1, null);
console.log(myArray);

// print the position of step 2
let position = newWeek.indexOf(null);
console.log(position);
