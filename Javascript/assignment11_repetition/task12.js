let dienosDarbai = [
  "Mokytis JS",
  "Kartoti",
  "Sportuoti",
  "Sutvarkyti kambarį",
  "Paskaityti",
  "Išnešti šiukšles",
];

let trumpinkDienosPlana = (works) => {
  // if works > 5, cut till 5
  //sort
  //return
  let returnArray = [];
  if (works.length > 5) {
    returnArray = works.slice(0, 5);
    returnArray.sort();
  }
  return returnArray;
};

console.log(trumpinkDienosPlana(dienosDarbai));
