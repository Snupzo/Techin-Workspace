"use strict";

let atrinkPoilsioDienas = (hours) =>
{
    let lazy = [];
    hours.forEach(element => {
        // Regular expression .match(/\d+/)[0]
        // [0] first found number
        // \d looks for any digit
        // + means one or more
        // If you want to look for just one digit, /\d/ will do the trick.
        if(parseInt(element.match(/\d+/)[0]) < 3)
        {lazy.push(element)}
    });
    return lazy;
}

console.log(atrinkPoilsioDienas(["Pirmadienis: 5h", "Antradienis: 2h"]));