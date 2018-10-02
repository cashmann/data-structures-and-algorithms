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
  for(let i = 1; i<arr.length; i++){
    if(arr[i]<pivot){
      left.push(arr[i]);
    } else right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}


module.exports = quickSort;