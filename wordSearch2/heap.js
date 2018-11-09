const DirectionCounter = require('./directionCounter');

class Node{
  constructor(data, index, directionList){
    this.data = data;
    this.index = index;
    this.indexToGo = 1;
    this.directed = null;
    this.directions = {};
    directionList.forEach(direction =>{
      this.directions[direction.string] = null;
    });
    this.next = null;
    this.previous = null;
  }
}

class Heap{
  constructor(){
    this.nodes = [];
  }
  deserialize(matrix, width){
    let directionList = new DirectionCounter(width).directions;
    matrix = [].concat.apply([], matrix);
    matrix.forEach((val,i) =>{
      let newNode = new Node(val, i, directionList);
      directionList.forEach(direction=>{
        let neighborNode = new Node(matrix[i+direction.modifier], i+direction.modifier, directionList);
        if(neighborNode.data){
          newNode.directions[direction.string] = neighborNode;
        }
      });
      this.nodes.push(newNode);
    });
  }
}

module.exports = Heap;