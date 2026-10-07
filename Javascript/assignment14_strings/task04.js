"use strict";

let removeWordsWithChar = (stringArray, char) =>{
    let newArray = [];
    for(let word of stringArray){
        if(!word.toLowerCase().includes(char.toLowerCase())){
            newArray.push(word)
        }
    }
    return newArray;
}


console.log(removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b'));
console.log(removeWordsWithChar(['pizza', 'beer', 'cheese'], 'E'));