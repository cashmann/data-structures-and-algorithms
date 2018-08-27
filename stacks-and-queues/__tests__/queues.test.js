'use strict';

const Queue = require('../lib/queues');

describe('stack', ()=>{
  it('can add a value at the end of a queue', ()=>{
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.tail.data).toBe(3);
    expect(queue.head.data).toBe(1);
    
  });
  it('can remove a value from the top of the stack', ()=>{
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3); 
    expect(queue.head.data).toBe(1);
    queue.dequeue();
    expect(queue.head.data).toBe(2);
    
    let emptyQueue = new Queue();
    expect(function(){emptyQueue.dequeue();}).toThrow(Error);
  });
});