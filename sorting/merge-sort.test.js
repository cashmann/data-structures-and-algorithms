const mergeSort = require('./merge-sort');

describe('mergeSort', ()=>{
  it('throws an error for invalid inputs', ()=>{
    let arr = [1,'252',436,4364,5];
    expect(function(){mergeSort(4);}).toThrow(Error);
    expect(function(){mergeSort(arr);}).toThrow(Error);
  });
  it('sorts an array of numbers via merging', ()=>{
    let arr = [25,79,843,1,4,20,378];
    let result = mergeSort(arr);
    expect(result.length).toBe(arr.length);
    expect(result).toEqual([1,4,20,25,79,378,843]);
    let arr2 = [];
    for(let i=0; i<29; i++){
      arr2[i] = Math.random();
    }
    let r2 = mergeSort(arr2);
    console.log(r2);
    for(let i = 0; i<r2.length; i++){
      if(r2[i+1]){
        expect(r2[i]).toBeLessThan(r2[i+1]);
      }
    }
  });
});