"use strict";

let sortArray = (givenArray) => {
  //Bubble sort
  /*
    let bubble = givenArray;
    for(let i = 0; i < bubble.length; i++){
        for(let j = 0; j < givenArray.length; j++)
        if(bubble[j] > bubble[j+1]){
            let temp1 = bubble[j];
            let temp2 = bubble[j+1];
            bubble[j] = temp2;
            bubble[j+1] = temp1;
        }
    }
    return bubble; */
  //Selection sort
  /*
    let selection = givenArray;
    for(let i = 0; i < selection.length; i++){
        let tempMin = selection[i];
        let tempI = selection[i];
        let tempJ;
        for(let j = i+1; j < selection.length; j++){
            if(tempMin > selection[j]){
                tempMin = selection[j];
                tempJ = j;
            }
        }
        if (selection[i] > tempMin){
            selection[i] = tempMin;
            selection[tempJ] = tempI;
        }
    }
    return selection; */
  //Insertion sort
  let insertion = givenArray;
  for (let i = 1; i < insertion.length; i++) {
    let sortable = insertion[i];
    let j = i - 1;
    while (j >= 0 && insertion[j] > sortable) {
      insertion[j + 1] = insertion[j];
      j--;
    }
    insertion[j + 1] = sortable;
  }
  return insertion;
};

console.log(sortArray([5, 2, 8, 1, 9]));
