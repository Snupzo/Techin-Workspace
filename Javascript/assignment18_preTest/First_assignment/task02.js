const products = [
  { title: "Keyboard", price: 40, inStock: true },
  { title: "Mouse", price: 15, inStock: false },
  { title: "Monitor", price: 120, inStock: true },
  { title: "USB Cable", price: 5, inStock: true },
];

let available = (list) => {
  let result = [];
  list.forEach((item) => {
    if (item.inStock === true) {
      result.push(item);
    }
  });
  return sort(result);
};

let sort = (array) => {
    let sorted = array;
    for(let i=0; i < array.length; i++){
        for(let j=i+1; j < array.length; j++){
            let tempI = sorted[i];
            let tempJ = sorted[j];
            let priceI = tempI.price;
            let priceJ = tempJ.price;
            if(priceI > priceJ){
                sorted[i] = tempJ;
                sorted[j] = tempI;
            }
        }
    }
    return sorted;
};

console.log(available(products));
