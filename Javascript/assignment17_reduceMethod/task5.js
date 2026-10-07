function flatten(arr) {
    return arr.reduce((total, currentArray)=>{
        return total.concat(currentArray);
    }, []); // Start with an empty array []
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays));