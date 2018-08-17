'use strict';

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }
  insert(val){
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
  }
  includes(val){
    let current = this.head;
    do{
      if(current.data === val){
        return true;
      }
      else{
        current = current.next;
      }
    } while(current);
    return false;
  }
}

module.exports = LinkedList;