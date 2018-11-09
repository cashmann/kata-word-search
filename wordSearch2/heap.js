class Node{
  constructor(data, index){
    this.data = data;
    this.index = index;
    this.indexToGo = 1;
    this.directed = null;
    this.directions = {
      'down': null,
      'right': null,
      'left': null,
      'up': null,
      'down right': null,
      'up right': null,
      'up left': null,
      'down left': null,
    };
    this.next = null;
    this.previous = null;
  }
}

class Heap{
  constructor(){
    this.nodes = [];
  }
  deserialize(matrix, width){
    matrix = [].concat.apply([], matrix);
    matrix.forEach((val,i) =>{
      let newNode = new Node(val, i);
      let downNode = new Node(matrix[i+width], i+width);
      let rightNode = new Node(matrix[i+1], i+1);
      let leftNode = new Node(matrix[i-1], i-1);
      let upNode = new Node(matrix[i-width], i-width);
      let downRightNode = new Node(matrix[i+width+1], i+width+1);
      let upRightNode = new Node(matrix[i-width+1], i-width+1);
      let upLeftNode = new Node(matrix[i-width-1], i-width-1);
      let downLeftNode = new Node(matrix[i+width-1], i+width-1);
      if(downNode.data){
        newNode.directions['down'] = downNode;
      }
      if(rightNode.data){
        newNode.directions['right'] = rightNode;
      }
      if(leftNode.data){
        newNode.directions['left'] = leftNode;
      }
      if(upNode.data){
        newNode.directions['up'] = upNode;
      }
      if(downRightNode.data){
        newNode.directions['down right'] = downRightNode;
      }
      if(upRightNode){
        newNode.directions['up right'] = upRightNode;
      }
      if(upLeftNode){
        newNode.directions['up left'] = upLeftNode;
      }
      if(downLeftNode){
        newNode.directions['down left'] = downLeftNode;
      }
      this.nodes.push(newNode);
    });
  }
}

module.exports = Heap;