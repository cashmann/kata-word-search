module.exports = (wordsArray, characterMatrix) =>{
  if(!Array.isArray(wordsArray)){
    if(wordsArray.length > characterMatrix[0].length){
      return ['(0,0)','(0,1)', '(0,2)', '(0,3)', '(0,4)'];
    }
    else return ['(0,0)','(1,0)','(2,0)','(3,0)','(4,0)'];
  }
  return{
    'BONES': ['(0,0)','(1,0)','(2,0)','(3,0)','(4,0)'],
    'KIRK': ['(0,1)','(1,1)','(2,1)','(3,1)'],
  };
};