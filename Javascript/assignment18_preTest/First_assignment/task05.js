let mostFrequentChar = (str) =>{
    let string = [...str.toLowerCase()];
    let count = 0;
    let mfc = string[0];
    for(let char of string){
        let currentCount = 0;
        for(let i = 0; i < string.length; i++){
            if(string[i]=== char){
                currentCount++;
            }
        if(currentCount > count){
            mfc = char;
            count = currentCount
        }
        }
    }
    return mfc.toUpperCase()
}


console.log(mostFrequentChar("Hello world"))