const Heap = require('./heap');
const Queue = require('./queue');

module.exports = (wordsArray, characterMatrix) =>{
  if(!Array.isArray(wordsArray)){
    if(wordsArray.length > characterMatrix[0].length){
      return ['(0,0)','(0,1)', '(0,2)', '(0,3)', '(0,4)'];
    }
    else return ['(0,0)','(1,0)','(2,0)','(3,0)','(4,0)'];
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