const Heap = require('./heap');
const Queue = require('./queue');

module.exports = (wordsArray, characterMatrix) =>{
  if(!Array.isArray(wordsArray)){
    wordsArray = [wordsArray];
  }
  let result = {};
  let columns = characterMatrix[0].length;
  let heap = new Heap();
  heap.deserialize(characterMatrix, columns);
  wordsArray.forEach(word =>{ 
    result[word] = findWord(word, columns, heap);
  });
  return result;
};

const findWord = (word, columns, heap) =>{
  let wordCoordinates;
  let startingPoint = 0;
  let matrixStart = 0;
  let wordDirection;
  let startingNode = heap.nodes.find(node => node.data === word[startingPoint] && node.index > matrixStart-1);
  matrixStart = startingNode.index;
  let queue = new Queue;
  if(startingNode){
    startingPoint++;
    queue.enqueue(startingNode);
    wordDirection = handleQueue(queue, heap, word, startingPoint);
  }
  wordCoordinates = generateCoordinates(columns, matrixStart, wordDirection, word.length);
  return wordCoordinates;
};

const handleQueue = (queue, heap, word, startingPoint) =>{
  let dirCounter = new DirectionCounter();
  while(queue.head){
    let nextIndex;
    let searchDirection;
    if(!queue.head.directed){
      searchDirection = 'all';
    } else searchDirection = queue.head.directed;
    dirCounter.directions.forEach(direction => {
      if(queue.head.directions[direction.string]){
        if((searchDirection === 'all' || searchDirection === direction.string) && queue.head.directions[direction.string].data === word[startingPoint]){
          nextIndex = queue.head.directions[direction.string].index;
          queue.enqueue(heap.nodes[nextIndex]);
          queue.tail.directed = direction.string;
          direction.count++;
          startingPoint++;
        }
      }
    });
    if(queue.head){
      queue.dequeue();
    }
  }
  let wordDirection;
  dirCounter.directions.forEach(dir =>{
    if(dir.count === word.length-1){
      wordDirection = dir.string;
    }
  });
  return wordDirection;
};

const generateCoordinates = (columns, start, direction, amount) =>{
  let coors = [];
  let xCoor;
  let yCoor;
  for(let i=0; i<amount; i++){
    if(!(xCoor >= 0) || !(yCoor >= 0)){
      xCoor = (start % columns);
      yCoor = 0;
      while(start >= columns){
        start -= columns;
        yCoor++;
      }
    }
    else{
      if(direction === 'down'){
        yCoor++;
      }
      if(direction === 'right'){
        xCoor++;
      } else if(direction === 'left'){
        xCoor--;
      }
    }
    let coor = `(${xCoor},${yCoor})`;
    coors.push(coor);
  }
  return coors;
};

class DirectionCounter{
  constructor(){
    this.directions = [
      {
        string: 'down',
        count: 0,
      },
      {
        string: 'right',
        count: 0,
      },
      {
        string: 'left',
        count: 0,
      },
    ];
  }
}