"use strict";

let capitalizeAll = (string) =>{
    let arrayString = string.split(" ");
    let newString = [];
    for(let word of arrayString){
        newString.push(word.charAt(0).toUpperCase() + word.slice(1))
    }
    return newString.join(" ");
}

console.log(capitalizeAll('hello world'));
console.log(capitalizeAll('every day is like sunday'));