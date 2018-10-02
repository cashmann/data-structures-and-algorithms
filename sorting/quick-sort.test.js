'use strict';
const quickSort = require('./quick-sort');

describe('quickSort', ()=>{
  it('sorts values', ()=>{
    let arr = [523,459,83,25,74,3,87,60,29,875];
    let res = quickSort(arr);
    expect(res.length).toBe(arr.length);
    let arr2 = [];
    for(let i=0; i<29; i++){
      arr2[i] = Math.random();
    }
    let r2 = quickSort(arr2);
    console.log(r2);
    for(let i = 0; i<r2.length; i++){
      if(r2[i+1]){
        expect(r2[i]).toBeLessThan(r2[i+1]);
      }
    }
  });
});