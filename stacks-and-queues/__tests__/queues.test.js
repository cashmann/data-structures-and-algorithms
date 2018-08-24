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
  // it('can remove a value from the top of the stack', ()=>{
  //   let stack = new Stack();
  //   stack.push(1);
  //   expect(stack.itemCount).toBe(1);
  //   stack.push(2);
  //   stack.push(3);
  //   expect(stack.pop()).toBe(3);
  //   expect(stack.head.data).toBe(2);
  //   expect(stack.itemCount).toBe(2);
  //   let emptyStack = new Stack();
  //   expect(emptyStack.pop()).toBe(null);
  // });
});