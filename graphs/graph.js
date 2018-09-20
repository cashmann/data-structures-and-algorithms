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
        throw new Error('No duplicate vertices.');
      }
    });
    if(typeof vertex === 'number'){
      vertex = String(vertex);
    }
    this.vertices[this.vertices.length] = vertex;
    this.edges[vertex] = [];
  }
  connect(vertex1, vertex2, value){
    if(typeof value !== 'number'){
      throw new Error('Weight must be a number');
    }
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
    console.log(vertex2);
    this.edges[vertex1][this.edges[vertex1].length] = [vertex2, value];
    this.edges[vertex2][this.edges[vertex2].length] =[vertex1, value];
    console.log(this.edges);
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
            queue.enqueue(edge[0]);
          });
        }
      }
      queue.dequeue();
    }
    return arr;
  }
  getWeight(...vertices){
    if(vertices.length <2){
      throw new Error('You must supply at least 2 vertices.');
    }
    let sum = 0;
    for(let i=0; i<vertices.length-1; i++){
      if (vertices[i] === vertices[i+1]){
        throw new Error('No vertex connects to itself');
      }
      if(!this.edges[vertices[i]] || !this.edges[vertices[i+1]]){
        throw new Error(`Could not find ${vertices[i]} in any connection`);
      }
      let foundEdge;
      this.edges[vertices[i]].forEach(edge=>{
        if(edge[0]===vertices[i+1]){
          foundEdge = edge;

          return;
        }
      });
      if(!foundEdge){
        return [false, '$0'];
      }
      sum+= foundEdge[1];
    }
    return [true, sum];
  }
  dft(start){
    if(!this.vertices.includes(start)){
      throw new Error('Starting point not found in graph.');
    }
    let arr = [];
    const helper = (node) => {
      if(!node || arr.includes(node)){
        return;
      }
      arr.push(node);
      this.edges[node].forEach(edge=>{
        helper(edge[0]);
      });
    };
    helper(start);
    return arr;
  }
}

module.exports = Graph;