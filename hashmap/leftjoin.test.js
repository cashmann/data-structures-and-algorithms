'use strict';
 
const HashMap = require('./hashmap');
const leftJoin = require('./leftjoin');

describe('leftJoin', ()=>{
  it('throws an error if inputs arent hashmaps', ()=>{
    expect(function(){leftJoin(1,2);}).toThrow(Error);
  });
  it('joins two hash tables at the firsts keys', ()=>{
    var ht1 = new HashMap();
    var ht2 = new HashMap();
    let keys1 = ['fond', 'wrath', 'diligent'];
    let values1 = ['enamoured', 'anger', 'employed'];
    let keys2 = ['fond', 'wrath', 'guide'];
    let values2 = ['averse', 'happy', 'follow'];
    keys1.forEach((key, i)=>{
      ht1.set(key, values1[i]);
    });
    keys2.forEach((key, i)=>{
      ht2.set(key, values2[i]);
    });
    console.log(ht1, ht2);
    let joined = leftJoin(ht1, ht2);
    expect(joined).toEqual([ [ 'fond', 'enamoured', 'averse' ],
      [ 'wrath', 'anger', 'happy' ],
      [ 'diligent', 'employed', null ] ]);
    let ht3 = new HashMap();
    joined = leftJoin(ht3,ht1);
    expect(joined).toEqual([]);
  });
});