const wordSearch = require('./wordSearch2');

describe('word search', ()=>{
  it('will return the location in a given matrix of single character strings of a horizontally-placed word read left to right in a given string', ()=>{
    let wordMatrix = [['B','O','N','E','S'],['K', 'I', 'R', 'K', 'S']];
    let wordToFind = 'BONES';
    let result = wordSearch(wordToFind, wordMatrix);
    expect(result).toEqual(['(0,0)','(1,0)','(2,0)','(3,0)','(4,0)']);
  });
});