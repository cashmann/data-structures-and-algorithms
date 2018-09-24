'use strict';

const repeat = require('./repeat');

describe('repeat',()=>{
  it('throws an error for non-strings', ()=>{
    expect(function(){repeat(11);}).toThrow(Error);
  });
  it('returns the first repeated word in a string', ()=>{
    expect(repeat('a a b b')).toBe('a');
    expect(repeat('I like to like things.')).toBe('like');
    expect(repeat('a')).toBe(null);
  });
});