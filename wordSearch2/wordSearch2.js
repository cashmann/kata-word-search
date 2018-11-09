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

const findWord = (word, columns, heap, matrixStart = 0, rejectedDirections = []) =>{
  let wordCoordinates;
  let wordDirection;
  while(!wordDirection){
    if(matrixStart === heap.nodes.length){
      word.coordinates = 'N/A';
      return word.coordinates;
    }
    let startingNode = heap.nodes.find(node => node.data === word[0] && node.index > matrixStart-1);
    let queue = new Queue;
    if(startingNode){
      matrixStart = startingNode.index;
      queue.enqueue(startingNode);
      wordDirection = handleQueue(queue, heap, word, rejectedDirections);
      if(!wordDirection){
        matrixStart = startingNode.index + 1;
      }
    } else{
      matrixStart++;
    }
  }
  wordCoordinates = generateCoordinates(columns, matrixStart, wordDirection, word, heap, rejectedDirections);
  return wordCoordinates;
};

const handleQueue = (queue, heap, word, rejectedDirections) =>{
  let dirCounter = new DirectionCounter();
  while(queue.head && queue.head.indexToGo <= word.length){
    let nextIndex;
    let searchDirection;
    if(!queue.head.directed){
      searchDirection = 'all';
    } else searchDirection = queue.head.directed;
    dirCounter.directions.forEach(direction => {
      if(queue.head.directions[direction.string] && !rejectedDirections.includes(direction.string)){
        if((searchDirection === 'all' || searchDirection === direction.string) && queue.head.directions[direction.string].data === word[queue.head.indexToGo]){
          nextIndex = queue.head.directions[direction.string].index;
          if(heap.nodes[nextIndex]){
            queue.enqueue(heap.nodes[nextIndex]);
            queue.tail.directed = direction.string;
            queue.tail.indexToGo = queue.head.indexToGo + 1;
            direction.count++;
          }
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

const generateCoordinates = (columns, startPoint, direction, word, heap, rejectedDirections) =>{
  let amount = word.length;
  let start = startPoint;
  let coors = [];
  let xCoor;
  let yCoor;
  let rows = heap.length/columns;
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
      if(direction.includes('down')){
        yCoor++;
      } else if(direction.includes('up')){
        yCoor--;
      }
      if(direction.includes('right')){
        xCoor++;
      } else if(direction.includes('left')){
        xCoor--;
      }
    }
    if(0 > xCoor || xCoor > columns-1 || 0 > yCoor || yCoor > rows-1){
      rejectedDirections.push(direction);
      return findWord(word, columns, heap, startPoint, rejectedDirections);
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
      {
        string: 'up',
        count: 0,
      },
      {
        string: 'down right',
        count: 0,
      },
      {
        string: 'up right',
        count: 0,
      },
      {
        string: 'up left',
        count: 0,
      },
      {
        string: 'down left',
        count: 0,
      },
    ];
  }
}