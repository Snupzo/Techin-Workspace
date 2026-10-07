"use strict";

let sudarykMotyvaciniPlana = (work) =>
{
    let mantra = [];
    for (let task of work)
    {
        let newText = task + " - Aš galiu!";
        mantra.push(newText);
    }
    return mantra;
}

console.log(sudarykMotyvaciniPlana(["Kartoti JS", "Sportuoti", "Perskaityti dokumentaciją"]));
