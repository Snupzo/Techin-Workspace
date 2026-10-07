"use strict";
const daysOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

let abbrWeek = (week)=>{
    return week.map(day=>day.slice(0,3));
}

console.log(abbrWeek(daysOfWeek));
