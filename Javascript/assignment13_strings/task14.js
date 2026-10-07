"use strict";

let capitalize_Words = (string) =>{
    let arrayString = string.split(" ");
    let stringsDone = [];
    for(let word of arrayString){
        stringsDone.push(word.charAt(0).toUpperCase()+word.slice(1));
    }
    return stringsDone.join(" ");
}

console.log(capitalize_Words('js string exercises'));