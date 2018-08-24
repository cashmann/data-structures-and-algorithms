'use strict';

const Stack = require('../lib/stack');

describe('stack', ()=>{
  it('can add a value at the top of a stack', ()=>{
    let stack = new Stack();
    stack.push(1);
    expect(stack.itemCount).toBe(1);
    stack.push(2);
    stack.push(3);
    expect(stack.head.data).toBe(3);
    expect(stack.head.next.next.data).toBe(1);
    expect(stack.itemCount).toBe(3);
  });
  it('can remove a value from the top of the stack', ()=>{
    let stack = new Stack();
    stack.push(1);
    expect(stack.itemCount).toBe(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.head.data).toBe(2);
    expect(stack.itemCount).toBe(2);
    let emptyStack = new Stack();
    expect(emptyStack.pop()).toBe(null);
  });
});