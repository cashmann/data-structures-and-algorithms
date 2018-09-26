'use strict';

const HashMap = require('./hashmap');
const Tree = require('../binary_tree/binary_tree');

module.exports = (tree1, tree2) =>{
  if(!(tree1 instanceof Tree) || !(tree2 instanceof Tree)){
    throw new Error('Both inputs must be a tree.');
  }
  let map = new HashMap();
  let arr = [];
  const helper = (node) =>{
    if(!node){
      return;
    }

    map.set(node.value);
    helper(node.left);
    helper(node.right);
  };
  helper(tree1.root);
  const finder = (node) =>{
    if(!node){
      return;
    }
    console.log(map._buckets);
    const hash = map._generateHash(node.value);
    if(map._buckets[hash]) arr[arr.length] = node.value;
    finder(node.left);
    finder(node.right);
  };
  finder(tree2.root);
  return arr;
};