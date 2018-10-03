'use strict';

function radixSort(arr){
  if(!(Array.isArray(arr))){
    throw new Error('Input must be an array of numbers.');
  }
  if(arr.length <= 1){
    return arr;
  }
  let x = true;
  let positionMod = 1;
  
  while(x){
    let digits = [];
    for(let i=0; i<10; i++){
      digits.push([]);
    }
    let done=0;
    for(let i=0; i<arr.length; i++){
      if(typeof arr[i] !== 'number'){
        throw new Error(`Unrecognized number in array. ${arr[i]}`);
      }
      let str = arr[i].toString();
      let digit = 0;
      if(str[str.length-positionMod]){
        digit = Number(str[str.length-positionMod]);
      } else{
        done++;
      }
      digits[digit].push(Number(str));
    }
    positionMod++;
    arr = [];
    digits.forEach(digit =>{
      if(digit.length !== 0){
        digit.forEach(number =>{
          arr.push(number);
        });
      }
    });
    if(done===arr.length){
      x=false;
    }
  }

  return arr;
}

module.exports = radixSort;