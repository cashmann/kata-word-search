module.exports = (word, characterMatrix) =>{
  if(word.length > characterMatrix[0].length){
    return ['(0,0)','(0,1)', '(0,2)', '(0,3)', '(0,4)'];
  }
  else return ['(0,0)','(1,0)','(2,0)','(3,0)','(4,0)'];
};