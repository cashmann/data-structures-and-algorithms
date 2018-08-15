const arrayShift = require('../lib/array-shift.js');
let array1 = [1,2,3,4];
let array2 = [1,2,3,4,5];
console.log(arrayShift);

describe('arrayShift', ()=>{
  it('will return null if the first argument isn\'t an array', ()=>{
    expect(arrayShift('q', 3)).toBe(null);
  });
  it('will return the same array if no truthy value is given', ()=>{
    expect(arrayShift(array1)).toBe(array1);
  });
  it('changes insert point based on length', ()=>{
    expect(arrayShift(array1, 5)).toEqual([1,2,5,3,4]);
    expect(arrayShift(array2, 1)).toEqual([1,2,3,1,4,5]);
  });
  it('can accept any inserted value', ()=>{
    expect(arrayShift(array1, null)).toEqual([1,2,3,4]);
    expect(arrayShift(array1, [1,2])).toEqual([1,2,[1,2],3,4]);
    expect(arrayShift(array1, {'foo': 'bar'})).toEqual([1,2,{'foo': 'bar'},3,4]);
    expect(arrayShift(array1, 'foo')).toEqual([1,2,'foo',3,4]);
  });
});