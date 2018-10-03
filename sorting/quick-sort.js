'use strict';

function quickSort(arr){
  if(!(Array.isArray(arr))){
    throw new Error('Input must be an array.');
  }
  if(arr.length <= 1){
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right= [];
  let pivotArr = [];
  for(let i = 1; i<arr.length; i++){
    if(arr[i]<pivot){
      left.push(arr[i]);
    } else if (arr[i]=== pivot){
      pivotArr.push(arr[i]);
    }
    else right.push(arr[i]);
  }
  if(pivotArr.length !== 0){
    pivotArr.push(pivot);
    return quickSort(left).concat(pivotArr, quickSort(right));
  }
  return quickSort(left).concat(pivot, quickSort(right));
}


module.exports = quickSort;