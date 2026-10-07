const products = [
  { title: "Phone", price: 500 },
  { title: "Laptop", price: 1200 },
  { title: "Tablet", price: 800 }
];


let addVat = (objects) =>{
    objects.map(product=>{
        product.priceWithVAT = (product.price*1.21)
    })
    return objects;
}


console.log(addVat(products))