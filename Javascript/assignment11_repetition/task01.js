"use strict";

let suskaiciuokDienosKruvi = (work, learn) =>
{
    if((work + learn) > 10)
    {
        console.log(`Per stipriai varai! Šiandien: ${work + learn}.`);
    }
    else
    {
        console.log(`Gerai paskirstyta diena: ${work + learn}.`);
    }
}

suskaiciuokDienosKruvi(4, 7);