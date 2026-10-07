"use strict";

const recognizeEmployees = (names, employeesOfTheMonth) => {
  let result = [];

  for (let i = 0; i < names.length; i++) {
    if (employeesOfTheMonth.includes(names[i])) {
      result.push(`Outstanding job, ${names[i]}!`);
    } else {
      result.push(`Great job, ${names[i]}!`);
    }
  }

  return result;
};

console.log(recognizeEmployees(["Susan", "Anthony", "Bill"], ["Bill"]));
console.log(
  recognizeEmployees(["Susan", "Anthony", "Bill"], ["Bill", "Susan"]),
);
console.log(
  recognizeEmployees(["Susan", "Anthony", "Bill"], ["Jennifer", "Dylan"]),
);
