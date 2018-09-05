'use strict';

const Queue = require('./queues');

describe('Queue', ()=>{
  it('can dequeue items', ()=>{
    let queue = new Queue();
    queue.enqueue(10);
    console.log(queue.head);
    queue.dequeue();
  });
});