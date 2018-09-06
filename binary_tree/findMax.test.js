'use strict';

const Tree = require('./binary_tree');
const findMax = require('./findMax');

describe('findMax', ()=>{
  it('can find the max value in a tree', ()=>{
    let tree = new Tree();
    tree.insert(10);
    tree.insert(12);
    tree.insert(15);
    tree.insert(9);
    tree.insert(13);
    let max = findMax(tree);
    expect(max).toBe(15);
  });
  it('throws errors for non-tree inputs', ()=>{
    expect(function (){findMax(1);}).toThrow(Error);
  });
});