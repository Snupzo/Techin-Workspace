"use strict";

let playerOne = prompt("rock, paper, scissors - SHOOT!:");
let playerTwo = prompt("rock, paper, scissors - SHOOT!:");

if (
  (playerOne === "rock" && playerTwo === "scissors") ||
  (playerOne === "scissors" && playerTwo === "paper") ||
  (playerOne === "paper" && playerTwo === "rock")
) {
  console.log("Player one wins!");
} else {
  console.log("Player two wins!");
}
