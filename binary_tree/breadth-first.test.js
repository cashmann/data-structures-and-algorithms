'use strict';

const Tree = require('./binary_tree');
const breadthFirst = require('./breadth-first');

describe('breadthFirst', ()=>{
  it('returns an array of values from left to right given a tree', ()=>{
    let tree = new Tree();
    tree.insert(10);
    tree.insert(12);
    tree.insert(15);
    tree.insert(9);
    tree.insert(13);
    let array = breadthFirst(tree);
    expect(array).toEqual([10,9,12,15,13]);
  });
  it('throws an error for non-tree inputs', ()=>{
    expect(function (){breadthFirst(1);}).toThrow(Error);
  });
});