'use strict';

const treeIntersect = require('./treeIntersect');
const Tree = require('../binary_tree/binary_tree');

describe('treeIntersect', ()=>{
  it('throws an error for non-tree inputs', ()=>{
    expect(function(){treeIntersect(1,2);}).toThrow(Error);
  });
  it('returns values shared by two trees', ()=>{
    let tree1 = new Tree();
    let tree2 = new Tree();
    let arr1 = ['2','4','6','8','10','12', '9'];
    let arr2 = ['3','6','9','12'];
    arr1.forEach(number => tree1.insert(number));
    arr2.forEach(number => tree2.insert(number));
    let shared = treeIntersect(tree1, tree2);
    console.log(shared);
    expect(shared).toContain('6', '12');
    let tree3 = new Tree();
    shared = treeIntersect(tree1, tree3);
    expect(shared).toEqual([]);
  });
});