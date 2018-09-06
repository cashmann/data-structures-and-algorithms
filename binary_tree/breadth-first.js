'use strict';

const Queue = require('../stacks-and-queues/lib/queues');
const Tree = require('./binary_tree');

module.exports = (tree) =>{
  if(!(tree instanceof Tree)){
    throw new Error('Your input must be a tree');
  }
  let i = 0;
  let array = [];
  let queue = new Queue;
  queue.enqueue(tree.root);
  console.log(queue.head.data.value);
  while(queue.head){
    console.log(queue.head.data.value);
    array[i] = queue.head.data.value;
    i++;
    if(queue.head.data.left){
      queue.enqueue(queue.head.data.left);
    }
    if(queue.head.data.right){
      queue.enqueue(queue.head.data.right);
    }
    if(queue.head){
      queue.dequeue();
    }
  }
  return array;
};