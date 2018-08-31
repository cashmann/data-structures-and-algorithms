'use strict';

const BinaryTree = require('./binary_tree');

describe('Binary Tree', ()=>{
  it('starts with a null root', ()=>{
    let tree = new BinaryTree();
    expect(tree.root).toBe(null);
  });
  it('can insert a value into the tree and order it: numbers larger than root go right, others go left', ()=>{
    let tree = new BinaryTree();
    tree.insert(7);
    expect(tree.root.value).toBe(7);
    tree.insert(20);
    expect(tree.root.right.value).toBe(20);
    tree.insert(3);
    expect(tree.root.left.value).toBe(3);
    tree.insert(15);
    expect(tree.root.right.left.value).toBe(15);
  });
  it('can find a value in a tree', ()=>{
    let tree = new BinaryTree();
    expect(tree.find(7)).toBe('This tree is empty.');
    tree.insert(7);
    tree.insert(20);
    tree.insert(3);
    tree.insert(15);
    expect(tree.find(3)).toBe(true);
    expect(tree.find(1)).toBe('Value "1" not found.');
  });
  it('can remove a value from the tree', ()=>{
    let tree = new BinaryTree();
    expect(tree.remove(7)).toBe('This tree is empty.');
    tree.insert(7);
    tree.insert(20);
    tree.insert(3);
    tree.insert(15);
    expect(tree.find(3)).toBe(true);
    tree.remove(3);
    expect(tree.find(3)).toBe('Value "3" not found.');
    tree.insert(3);
    expect(tree.find(3)).toBe(true);
    tree.remove(7);
    expect(tree.root.value).toBeDefined();
  });
  it('can serialize itself into an array', ()=>{
    let tree = new BinaryTree();
    tree.insert(7);
    tree.insert(20);
    tree.insert(3);
    tree.insert(15);
    tree = tree.serialize();
    expect(tree[0]).toBe(7);
  });
  it('can deserialize an array into a tree', ()=>{
    let tree = new BinaryTree();
    tree.deserialize([1,2,7,8]);
    expect(tree.root.value).toBe(1);
  });
});