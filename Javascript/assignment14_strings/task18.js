"use strict";

let numerization = (stringArray) =>{
    return stringArray.map(string=> string = Number(string));
}

console.log(numerization([ '1', '2', '3', '4', '5' ]));