class Node{
  constructor(data){
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
  }
  enqueue(val){
    var node = new Node(val);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.numberOfValues++;
  }
  dequeue(){
    let target = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    return target.data;
  }
}

module.exports = Queue;