'use strict';

const Queue = require('../stacks-and-queues/lib/queues');

class Graph{
  constructor(){
    this.vertices = [];
    this.edges = [];
    this.edgeCount = 0;
  }
  addVertex(vertex){
    this.vertices.forEach(v =>{
      if(v ===vertex){
        throw new Error('No duplicate verticies.');
      }
    });
    if(typeof vertex === 'number'){
      vertex = String(vertex);
    }
    this.vertices[this.vertices.length] = vertex;
    this.edges[vertex] = [];
  }
  connect(vertex1, vertex2){
    if(vertex1 === vertex2){
      throw new Error('Cannot connect a vertex to itself.');
    }
    let includes1;
    let includes2;
    this.vertices.forEach(vertex=>{
      if(vertex === vertex1){
        includes1=true;
        return;
      }
      if(vertex === vertex2){
        includes2=true;
        return;
      }
    });
    if(!includes1){
      this.addVertex(vertex1);
    }
    if(!includes2){
      this.addVertex(vertex2);
    }
    this.edges[vertex1][this.edges[vertex1].length] = vertex2;
    this.edges[vertex2][this.edges[vertex2].length] = vertex1;
    this.edgeCount++;
  }
  bft(){
    let i = 0;
    let arr = [];
    let start = this.vertices[0];
    let queue = new Queue();
    queue.enqueue(start);
    console.log(queue);
    while(queue.head){
      let included;
      if(arr.length > 0){
        arr.forEach(item =>{
          if(item === queue.head.data){
            included = true;
            return;
          }
        });
      }
      if(!included){
        arr[i] = queue.head.data;
        i++;
        if(this.edges[queue.head.data]){
          this.edges[queue.head.data].forEach(edge=>{
            queue.enqueue(edge);
          });
        }
      }
      queue.dequeue();
    }
    return arr;
  }
}

module.exports = Graph;