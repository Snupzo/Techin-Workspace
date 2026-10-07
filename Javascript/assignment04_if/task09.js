"use strict";

let lovedNumber = +prompt("Enter your beloved number:");
let guessedNumber = +prompt("Guess the number:");

if (lovedNumber === guessedNumber) {
  alert("You guessed it right!");
} else if (lovedNumber > guessedNumber) {
  alert("Your guess is too low!");
} else {
  alert("Your guess is too high!");
}
