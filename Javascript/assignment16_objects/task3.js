"use strict";

let scrabbleMax = (scoring) => {
  let maxScore = 0;
  for (let i = 0; i < scoring.length; i++) {
    maxScore += scoring[i].score;
  }
  return maxScore;
};

const scrabbleScores = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

console.log(scrabbleMax(scrabbleScores));
