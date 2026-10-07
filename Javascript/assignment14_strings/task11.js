"use strict";

const leetspeak = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (char === "a") result += "4";
    else if (char === "e") result += "3";
    else if (char === "g") result += "6";
    else if (char === "i") result += "1";
    else if (char === "o") result += "0";
    else if (char === "s") result += "5";
    else if (char === "t") result += "7";
    else result += char;
  }

  return result;
};

console.log(leetspeak("Leet"));
console.log(leetspeak("ORANGE"));
