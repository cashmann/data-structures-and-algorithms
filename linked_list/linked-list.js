'use strict';

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(arg){
    if (arg){
      this.head = arg;
      this.itemCount = 1;
    }
    this.head = null;
    this.itemCount = 0;
  }
  insert(val){
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
    this.itemCount++;
  }

  append(val){
    let current = this.head;
    for(let i = 1; i< this.itemCount; i++){
      current = current.next;
    }
    current.next = new Node(val);
    this.itemCount++;
  }
  insertAfter(val, newVal){
    let current = this.head;
    do{
      if(current.data === val){
        newVal = new Node(newVal);
        newVal.next = current.next;
        current.next = newVal;
        this.itemCount++;
        return this;
      }
      else{
        current = current.next;
      }
    } while(current);
    console.error('Insertion point not found.');
  }
  insertBefore(val, newVal){
    var current = this.head;
    if(val === current.data){
      this.insert(newVal);
      return this;
    }
    let valPos = 0;
    do{
      if(current.data === val){
        let newValNode = new Node(newVal);
        current = this.head;
        for(let i=0; i<valPos-1; i++){
          current = current.next;
        }
        newValNode.next = current.next;
        current.next = newValNode;
        this.itemCount++;
        return this;
      }
      else{
        current = current.next;
        valPos++;
      }
    }while(current);
    console.error('Insertion point not found.');
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
  findFromEnd(k){
    if(typeof(k)!=='number') return `Input must be a number.`;
    let current = this.head;
    let endPos = 1;
    while(current.next){
      current = current.next;
      endPos++;
    }
    current = this.head;
    for(let i=1; i<endPos-k; i++){
      current = current.next;
      
    }
    return current;
  }
  merge(list){
    if(!list.head){
      throw new Error('Cannot merge non-list values');
    }
    let current1 = this.head;
    let current2 = list.head;
    while(current1 && current2){
      let oldPosition = current2.next;
      current2.next = current1.next;
      current1.next = current2;
      current1 = current2.next;
      current2 = oldPosition;
    }
    console.log(this);
    return this;
  }
}

module.exports = LinkedList;