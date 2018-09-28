'use strict';

const insertionSort = require('./insert_sort');

describe('insertionSort', ()=>{
  it('throws an error for non-array inputs and if an array has a non-number value', ()=>{
    let arr = [5,3,6,5,4,'q'];
    expect(function(){insertionSort('abcds');}).toThrow(Error);
    expect(function(){insertionSort(arr);}).toThrow(Error);
  });
  it('takes an array of numbers and sorts them from smallest to largest via insertion', ()=>{
    let arr =  [23,4598,734,90,28,62,589,724,39,85,7,2391];
    let sorted = insertionSort(arr);
    expect(sorted).toEqual([7,23,28,39,62,85,90,589,724,734,2391,4598]);
    let arr2 = [];
    for(let i=0; i<20; i++){
      arr2[i] = Math.random();
    }
    let sorted2 = insertionSort(arr2);
    console.log(sorted2);
    for(let i = 0; i<sorted2.length; i++){
      if(sorted2[i+1]){
        expect(sorted2[i]).toBeLessThan(sorted2[i+1]);
      }
    }
  });
});
