'use strict';

module.exports = (wordArray, characterMatrix) =>{

  let result = {};
  let columns = characterMatrix[0].length;
  characterMatrix = [].concat.apply([], characterMatrix);
  wordArray.forEach((word,i) =>{
    result[word] = findWord(word, columns, characterMatrix);
  });
  return result;
};

const findWord = (word, columns, characterMatrix) =>{
  let found = false;
  let current = 0;
  let directions = ['0: up', '1: down', '2: left', '3: right', '4: up left', '5: up right', '6: down left', '7: down right'];
  let direction;
  let x = 0;
  let reset;
  let dirNumber;
  while(!found){
    if(current === (characterMatrix.length-1)){
      break;
    }
    let checked = false;
    let matrixIndex = characterMatrix.indexOf(word[x], current);
    let indicies = generateIndicies(matrixIndex, columns);
    if(matrixIndex < 0){
      break;
    }
    if(!direction){
      indicies.forEach((index, i)=>{
        if(characterMatrix[index] === word[x+1]){
          direction = directions[i];
          dirNumber = Number(direction[0]);
          checked = true;
          reset = matrixIndex;
        }
      });
    }
    else{
      if(characterMatrix[indicies[dirNumber]] === word[x+1]){
        checked = true;
      }
    }
    if (checked){
      x++;
      current = indicies[dirNumber];
    } else{
      x = 0;
      current = matrixIndex+1;
      if(direction){
        if(direction.includes('up') || direction.includes('left') || direction.includes('down')){
          current = reset+1;
        }
      }
      direction = null;
    }
    if(x >= word.length-1){
      found = true;
    }
  }
  if(found){
    let results = generateCoordinates(columns, current, direction, word.length);
    return results;
  }
};

const generateIndicies = (start, columns) =>{
  let results = [start - columns, start+ columns, start - 1, start + 1 ];
  results.push(results[0]-1, results[0]+1, results[1]-1, results[1]+1);
  return results;
};

const generateCoordinates = (columns, start, direction, number) =>{
  let coors = [];
  let xCoor;
  let yCoor;
  for(let i=0; i<number; i++){
    if(!(xCoor >= 0) || !(yCoor >= 0)){
      xCoor = (start % columns);
      yCoor = 0;
      while(start >= columns){
        start -= columns;
        yCoor++;
      }
    }
    else{
      if(direction.includes('up')){
        yCoor++;
      }
      else if(direction.includes('down')){
        yCoor--;
      }
      if(direction.includes('left')){
        xCoor++;
      }
      else if(direction.includes('right')){
        xCoor--;
      }
    }
    let coor = `(${xCoor},${yCoor})`;
    coors.push(coor);
  }
  return coors.reverse();
};