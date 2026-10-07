"use strict";

let reverse = (string) =>{
    let stringArray = [...string];
    let newArray =[];
    for(let i = string.length; i>=0; i--){
        newArray.push(stringArray[i]);
    }
    return newArray.join("");
}

console.log(reverse("skoob"));