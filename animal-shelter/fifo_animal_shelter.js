'use strict';

class Animal{
  constructor(animal){
    this.animal = animal;
    this.next = null;
    this.previous = null;
  }
}

class AnimalList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
  }
  enqueue(val){
    var animal = new Animal(val);
    this.numberOfValues++;
    if(!this.head) {
      this.head = animal;
      this.tail = animal;
    } else{
      animal.next = this.head;
      this.head.previous = animal;
      this.head = animal;
    }
  }
  dequeue(val){
    let target = this.tail;
    if(!target){
      return 'This queue is empty.';
    }
    if(val){
      if(this.head.animal === val){
        target = this.head;
        this.head = target.next;
        return target.animal;
      }
      if(this.tail.animal === val){
        this.tail = target.previous;
        return target.animal;
      }
      while(target && target.animal !== val ){
        target = target.previous;
      }
      if(target){
        if(target.previous){
          target.previous.next = target.next;
        }
        if(target.next){
          target.next.previous = target.previous;
        }
        this.numberOfValues--;
        return target.animal;
      } else{
        return `Could not find a "${val}" in the shelter.`;
      }
    }
    this.numberOfValues--;
    target.previous.next = null;
    this.tail = target.previous;
    return target.animal;
  }
}

module.exports = AnimalList;