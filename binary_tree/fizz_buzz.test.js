'use strict';

const Tree = require('./binary_tree');
const fizzBuzz = require('./fizz_buzz');

describe('fizzBuzz', ()=>{
  let tree;
  beforeEach(()=>{
    tree = new Tree();
    tree.insert(10);
    tree.insert(12);
    tree.insert(15);
    tree.insert(9);
    tree.insert(13);
  });
  it('throws an error if the input is not a tree', ()=>{
    expect(function (){fizzBuzz(1);}).toThrow(Error);
  });
  it('changes values in a tree to fizz or buzz or both depending on their divisibility by 3 or 5 or both respectively', ()=>{
    fizzBuzz(tree);
    expect(tree.root.value).toBe('Buzz');
    expect(tree.root.left.value).toBe('Fizz');
    fizzBuzz(tree);
    expect(tree.root.value).toBe('Buzz');
  });
  it('does not change the values of values that aren\'t divisible by 3 or 5', ()=>{
    fizzBuzz(tree);
    expect(tree.root.right.right.left.value).toBe(13);
  });
});