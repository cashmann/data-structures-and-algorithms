'use strict';
class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{
  constructor(){
    this.root = null;
  }
  insert(value){
    let leaf;
    if(!(value instanceof Node)){
      leaf = new Node(value);
    } else{
      leaf = value;
      value = value.value;
    }
    if (!this.root){
      this.root = leaf;
      return this;
    }
    let current = this.root;
    while(current){
      if (value < current.value){
        if (current.left){
          current = current.left;
        } else{
          current.left = leaf;
          return;
        }
      }
      if(value > current.value){
        if(current.right){
          current = current.right;
        } else{
          current.right = leaf;
          return;
        }
      }
      else throw new Error('This value is already in the tree. No duplicate values.');
    } return this;
  }
  find(value){
    if(!this.root){
      return 'This tree is empty.';
    }
    let current = this.root;
    while(current){
      if(value === current.value){
        return true;
      } else{
        if(value > current.value){
          if(current.right){
            current=current.right;
          } else return `Value "${value}" not found.`;
        }
        if(value < current.value){
          if(current.left){
            current = current.left;
          } else return `Value "${value}" not found.`;
        }
      }
    } return `Value "${value}" not found.`;
  }
  remove(value){
    if(!this.root){
      return 'This tree is empty.';
    }
    let current = this.root;
    let oldCurrent;
    let direction;
    while(current){
      if(value === current.value){
        if(oldCurrent){
          if(direction === 'right'){
            oldCurrent.right = current.right;
            this.insert(current.left);
            return;
          }else{
            oldCurrent.left = current.left;
            this.insert(current.right);
            return;
          }
        } else{
          this.root = current.left;
          this.insert(current.right);
          return;
        }
      } else{
        if(value > current.value){
          if(current.right){
            oldCurrent = current;
            direction = 'right';
            current=current.right;
          } else return `Value "${value}" not found.`;
        }
        if(value < current.value){
          if(current.left){
            oldCurrent = current;
            direction = 'left';
            current = current.left;
          } else return `Value "${value}" not found.`;
        }
      }
    }
  }
  deserialize(value){
    for(let i = 0; i<value.length; i++){
      this.insert(value[i]);
    }
  }
  serialize(){
    let array = [];
    const serializer = function(node){
      if(!node){
        return;
      }
      array.push(node.value);
      serializer(node.left);
      serializer(node.right);
    };
    serializer(this.root);
    return array;
  }
}

module.exports = BinaryTree;