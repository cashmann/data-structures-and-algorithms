'use strict';

const Queue = require('../lib/queues-with-stacks');

describe('queue', ()=>{
  it('can add values to the start of a queue', ()=>{
    let queue = new Queue();
    expect(queue.stack.head).toBe(null);
    queue.enqueue(1);
    expect(queue.stack.head.data).toBe(1);
    queue.enqueue(queue.stack);
    expect(queue.stack.head.data.head.data).toBeDefined();
    expect(queue.stack.head.data).not.toBe(1);
  });
  it('can remove values from the end of a queue', ()=>{
    let queue = new Queue();
    expect(queue.stack.head).toBe(null);
    queue.enqueue(1);
    expect(queue.stack.head.data).toBe(1);
    queue.enqueue(2);
    expect(queue.stack.head.data).toBeDefined();
    expect(queue.stack.head.data).not.toBe(1);
    expect(queue.stack.head.next.data).toBe(1);
    queue.dequeue();
    expect(queue.stack.head.data).toBe(2);
    expect(queue.stack.head.next).toBe(null);
  });
});