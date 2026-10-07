"use strict";

let whatever = (obj) =>{
    let keyArray = Object.keys(obj);
    let valueArray= Object.values(obj);
    console.log(keyArray);
    console.log(valueArray);
}

whatever({ a: 1, b: 2, c: 3 });
whatever({key: true});