class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.stack = new Stack();
  }
  enqueue(val){
    this.stack.push(val);
  }
  dequeue(){
    this.stack.pop();
  }
}

class Stack{
  constructor(){
    this.head = null;
  }
  pop(){
    let current = this.head;
    let endPosition = 0;
    while(current){
      current = current.next;
      endPosition++;
    }
    current = this.head;
    for(let i=1; i<(endPosition-1); i++){
      current = current.next;
    }
    current.next = null;
    return this;
  }
  push(val){
    val = new Node(val);
    val.next = this.head;
    this.head = val;
    return this;
  }
}

module.exports = Queue;