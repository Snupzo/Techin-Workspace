function stringConcat(arr){
    return arr.reduce((a, b)=>{return `${a}${b}`})
}

console.log(stringConcat([1,2,3]))