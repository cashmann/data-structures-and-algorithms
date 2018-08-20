'use strict';

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
  }
  insertAtEnd(val){
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
  insertAtStart(val){
    var node = new Node(val);
    node.next = this.head;
    this.head.previous = node;
    this.head = node;
  }
  
}