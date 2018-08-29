'use strict';

const mbv = require('./multi-bracket-validation');

describe('Multi Bracket Validation', ()=>{
  it('checks if all brackets in a string are closed', ()=>{
    expect(mbv(')(')).toBe(false);
    expect(mbv('(')).toBe(false);
    expect(mbv('(){}[[[[]]]]{}()')).toBe(true);
    expect(mbv('(Hi mom!)')).toBe(true);
  });
  it('protects against non-string and empty string inputs', ()=>{
    expect(function(){mbv({name: 'me', money: 'no'});}).toThrow(Error);
    expect(function(){mbv(1);}).toThrow(Error);
  });
  it('works for strings without any brackets', ()=>{
    expect(mbv(' ')).toBe(true);
  });
});