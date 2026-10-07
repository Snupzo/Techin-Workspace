"use strict";

let withinRange = (number, range)=>{
    if(number <= range.max && number >= range.min){
        return true;
    } else {
        return false;
    }
}


console.log(withinRange(4, { min: 0, max: 5 }));
console.log(withinRange(4, { min: 4, max: 5 }));
console.log(withinRange(4, { min: 6, max: 10 }));
console.log(withinRange(5, { min: 5, max: 5 }));