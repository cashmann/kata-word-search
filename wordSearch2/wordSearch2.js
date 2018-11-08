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
        count: '0',
      },
      {
        string: 'right',
        count: '0',
      },
    ];
  }
}