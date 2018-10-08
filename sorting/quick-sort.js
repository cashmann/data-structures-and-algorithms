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

function quickSort2(arr, left=0, right=arr.length-1){
  let pivot;
  let partitionIndex;
  console.log(arr);
  console.log(left, right);
  if(left < right){
    pivot = right;
    partitionIndex = partitionSort(arr, pivot, left, right);
    quickSort2(arr, left, partitionIndex-1);
    quickSort2(arr, partitionIndex+1, right);
  }
  return arr;
}

function partitionSort(arr, pivot, left, right){
  let pivotVal = arr[pivot];
  let partitionIndex = left;
  for(let i = left; i<right; i++){
    if(arr[i] < pivotVal){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, partitionIndex){
  let t = arr[i];
  arr[i] = arr[partitionIndex];
  arr[partitionIndex] = t;
}


module.exports = quickSort2;