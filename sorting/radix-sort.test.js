const radixSort = require('./radix-sort');

describe('radixSort', ()=>{
  it('throws an error for a non-array and non-number inputs', ()=>{
    let arr = [2345098, 'safo'];
    expect(function(){radixSort('hi');}).toThrow(Error);
    expect(function(){radixSort(arr);}).toThrow(Error);
  });
  it('sorts an array of numbers from smallest to largest', ()=>{
    let arr = [23,94,58,279583,7203,985,7029,38];
    let result = radixSort(arr);
    expect(result.length).toBe(arr.length);
    expect(result).toEqual([23, 38, 58, 94, 985, 7029, 7203, 279583]);
    //will not work for decimal numbers yet
  });
});