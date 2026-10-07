const temperatures = [18, 25, 30, 10, 28];

let conditions = (temp) =>{
    let result = [];
    temp.forEach((t)=>{
        if(t < 15){
            result.push({temp: t, status: "cold"})
        }else if(t < 25){
            result.push({temp:t, status:"warm"})
        }else{
            result.push({temp:t, status: "hot"})
        }
    })
    return result;
}

console.log(conditions(temperatures))