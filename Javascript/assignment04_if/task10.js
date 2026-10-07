"use strict";

let teamOneScore = [];
let teamTwoScore = [];
let teamThreeScore = [];
for (let i = 0; i < 3; i++) {
  teamOneScore.push(+prompt("Enter the score for team one:"));
}
for (let i = 0; i < 3; i++) {
  teamTwoScore.push(+prompt("Enter the score for team two:"));
}
for (let i = 0; i < 3; i++) {
  teamThreeScore.push(+prompt("Enter the score for team three:"));
}

// Calculate the average score for each team
let averageTeamOne = 0;
let averageTeamTwo = 0;
let averageTeamThree = 0;

for (let i = 0; i < teamOneScore.length; i++) {
  averageTeamOne += teamOneScore[i];
}
averageTeamOne /= teamOneScore.length;

for (let i = 0; i < teamTwoScore.length; i++) {
  averageTeamTwo += teamTwoScore[i];
}
averageTeamTwo /= teamTwoScore.length;

for (let i = 0; i < teamThreeScore.length; i++) {
  averageTeamThree += teamThreeScore[i];
}
averageTeamThree /= teamThreeScore.length;

// Compare the average scores of all teams
if (averageTeamOne > averageTeamTwo && averageTeamOne > averageTeamThree) {
  console.log("Team one has a higher average score.");
} else if (
  averageTeamOne === averageTeamTwo &&
  averageTeamOne === averageTeamThree
) {
  console.log("All teams have the same average score.");
} else if (
  averageTeamTwo > averageTeamOne &&
  averageTeamTwo > averageTeamThree
) {
  console.log("Team two has a higher average score.");
} else if (
  averageTeamOne === averageTeamTwo &&
  averageTeamOne > averageTeamThree
) {
  console.log(
    "Team one and team two have the same average score, which is higher than team three.",
  );
} else if (
  averageTeamOne === averageTeamThree &&
  averageTeamOne > averageTeamTwo
) {
  console.log(
    "Team one and team three have the same average score, which is higher than team two.",
  );
} else if (
  averageTeamTwo === averageTeamThree &&
  averageTeamTwo > averageTeamOne
) {
  console.log(
    "Team two and team three have the same average score, which is higher than team one.",
  );
} else {
  console.log("Team three has a higher average score.");
}
