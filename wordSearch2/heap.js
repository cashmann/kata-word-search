class Node{
  constructor(data, index){
    this.data = data;
    this.index = index;
    this.indexToGo = 1;
    this.directed = null;
    this.directions = {
      'down n': null,
      'right n': null,
      'left n': null,
      'up n': null,
      'down n right n': null,
      'up n right n': null,
      'up n left n': null,
      'down n left n': null,
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
      let downrightNode = new Node(matrix[i+width+1], i+width+1);
      let uprightNode = new Node(matrix[i-width+1], i-width+1);
      let upLeftNode = new Node(matrix[i-width-1], i-width-1);
      let downLeftNode = new Node(matrix[i+width-1], i+width-1);
      if(downNode.data){
        newNode.directions['down n'] = downNode;
      }
      if(rightNode.data){
        newNode.directions['right n'] = rightNode;
      }
      if(leftNode.data){
        newNode.directions['left n'] = leftNode;
      }
      if(upNode.data){
        newNode.directions['up n'] = upNode;
      }
      if(downrightNode.data){
        newNode.directions['down n right n'] = downrightNode;
      }
      if(uprightNode.data){
        newNode.directions['up n right n'] = uprightNode;
      }
      if(upLeftNode.data){
        newNode.directions['up n left n'] = upLeftNode;
      }
      if(downLeftNode.data){
        newNode.directions['down n left n'] = downLeftNode;
      }
      this.nodes.push(newNode);
    });
  }
}

module.exports = Heap;