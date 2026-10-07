"use strict";

let running = (runners, times) => {
  let fastBoi = times[0];
  let totalTime = 0;
  for (let time of times) {
    totalTime += time;
    if (fastBoi > time) {
      fastBoi = time;
    }
  }
  let averageTime = totalTime / runners;
  console.log(`Greičiausias bėgiko laikas: ${fastBoi} sek.`);
  console.log(
    `Jis buvo ${averageTime.toFixed(0) - fastBoi} sek greitesnis už vidurkį`,
  );
};

running(4, [22, 20, 25, 25]);
running(3, [25, 20, 32]);
