class Node{
  constructor(data, index){
    this.data = data;
    this.index = index;
    this.directions = {
      'down': null,
      'right': null,
    };
    this.directed = null;
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
      if(downNode.data){
        newNode.directions['down'] = downNode;
      }
      if(rightNode.data){
        newNode.directions['right'] = rightNode;
      }
      this.nodes.push(newNode);
    });
  }
}

module.exports = Heap;