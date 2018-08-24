'use strict';

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.head = null;
    this.itemCount = 0;
  }
  pop(){
    let target = this.head;
    if(target === null){
      return null;
    }
    this.head = this.head.next;
    this.itemCount--;
    return target.data;
  }
  push(val){
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
    this.itemCount++;
  }
}

module.exports = Stack;