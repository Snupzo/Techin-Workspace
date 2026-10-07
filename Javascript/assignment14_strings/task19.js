"use strict";

let capitalization = (strings) =>{
    return strings.map(string=>string.toUpperCase());
}

console.log(capitalization([ 'apple', 'pear', 'cherry' ]));
