"use strict";

let swapcase = (string) =>{
    let newChars = [];
    for (let i = 0; i < string.length; i++){
        newChars.push(string[i] === string[i].toUpperCase() ? string[i].toLowerCase() : string[i].toUpperCase());
    }
    return newChars.join("");
}

console.log(swapcase('AaBbc'));