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
    if(this.head === null){
      return 'This queue is empty.';
    }
    this.head = this.head.next;
    if(this.head.prev){
      this.head.prev = null;
    } else{
      return 'This queue is now empty.';
    }
  }
}

module.exports = Queue;