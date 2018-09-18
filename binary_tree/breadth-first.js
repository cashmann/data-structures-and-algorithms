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


/*var red = {'five': 34, 'four5': 59, 'three4': 31 };
var green = {'five': 14, 'four5': 36, 'three4': 20};
var blue = {'five': 16, 'four5': 44, 'three4': 28};

function calc(color, rating, score){
  let chance;
  if (rating === 'five'){
    chance = .03;
  }
  else if(rating === 'four5'){
    chance = .61;
  }
  else{
    chance = .94;
    console.log(chance);
  }
  let multiplier = (1/color[rating])*chance;
  console.log(multiplier);
  let final = score*multiplier;
  return final;
}*/