'use strict';

module.exports = (items) =>{
  if(!(Array.isArray(items))){
    throw new Error('Input must be an array');
  }
  for(let i=0; i<items.length; i++){
    if(typeof items[i] !== 'number'){
      throw new Error('Array values must all be numbers');
    }
    let val = items[i];
    for(var j=i-1; j>-1 && items[j] > val; j--){
      items[j+1] = items[j];
    }
    items[j+1] = val;
    console.log(val);
    console.log(items);
  }
  return items;
};