'use strict';

const Tree = require('./binary_tree');

module.exports=(tree)=>{
  if(!(tree instanceof Tree)){
    throw new Error('Your input must be a tree');
  }
  let current = tree.root;
  while(current.right){
    current = current.right;
  }
  return current.value;
};