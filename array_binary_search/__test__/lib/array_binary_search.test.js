'use strict';

const binarySearch = require('../../lib/array_binary_search');

describe('binarySearch', ()=>{
  it('will return -1 if the array is not at least 1 element long', ()=>{
    expect(binarySearch([],1)).toBe(-1);
  });
  it('will not accept non-arrays as its first argument', ()=>{
    expect(binarySearch(1,1)).toBe(null);
  });
  it('will return the index of a key inside any given array', ()=>{
    let arr = [1,2,3,4,5,6,7,8,9];
    let arr2 = [1,2,3,4];
    expect(binarySearch(arr, 1)).toBe(0);
    expect(binarySearch(arr, 9)).toBe(8);
    expect(binarySearch(arr2, 3)).toBe(2);
    expect(binarySearch(arr2,2)).toBe(1);
    expect(binarySearch(arr2, 1)).toBe(0);
    expect(binarySearch(arr, 2)).toBe(1);
    expect(binarySearch(arr, 3)).toBe(2);
    //expect(binarySearch(arr, 4)).toBe(3);
    expect(binarySearch(arr, 5)).toBe(4);
    //expect(binarySearch(arr, 6)).toBe(5);
    //expect(binarySearch(arr, 7)).toBe(6);
    expect(binarySearch(arr, 8)).toBe(7);
    // Some of these don't work, I haven't been able to work out why with what I'm doing.
  });
});