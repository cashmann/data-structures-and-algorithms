'use strict';

function mergeSort(arr){
  if(!(Array.isArray(arr))){
    throw new Error('Input must be an array.');
  }
  if(arr.length <= 1){
    return arr;
  }
  const middle = Math.floor(arr.length/2);
  const left = [];
  const right = [];
  for(let i=0; i<middle; i++){
    left[i] = arr[i];
  }
  for(let i=0; i<(arr.length-middle); i++){
    right[i] = arr[middle+i];
  }
  console.log(left, right);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left, right){
  let res = [];
  let leftI = 0;
  let rightI = 0;
  while(leftI < left.length && rightI < right.length){
    if(typeof left[leftI] !== 'number'|| typeof right[rightI] !== 'number'){
      throw new Error('Cannot compare non-numerical values');
    }
    if(left[leftI] < right[rightI]){
      res.push(left[leftI]);
      leftI++;
    } else {
      res.push(right[rightI]);
      rightI++;
    }
  }
  console.log(left, right);
  for(let i=leftI; i<left.length; i++){
    res[res.length] = left[i];
  }
  for(let i=rightI; i<right.length; i++){
    res[res.length] = right[i];
  }
  return res;
}

module.exports = mergeSort;