"use strict";

let givenNumber = +prompt("Enter a number to check is it even or odd");
if (givenNumber === 0) {
  console.log("It's a zero!");
} else if (givenNumber % 2 === 0) {
  console.log(`${givenNumber} is even.`);
} else if (givenNumber % 2 != 0) {
  console.log(`${givenNumber} is odd.`);
}
