const wordSearch = require('./wordSearch2');

describe('word search', ()=>{
  it('will return the location in a given matrix of single character strings of a horizontally-placed word read left to right in a given string', ()=>{
    let wordMatrix = [['B','O','N','E','S'],['K', 'I', 'R', 'K', 'S']];
    let wordToFind = 'BONES';
    let result = wordSearch(wordToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(0,0)','(1,0)','(2,0)','(3,0)','(4,0)']);
  });
  it('will return the location in a given matrix of single character strings of a vertically-placed word read top to bottom in a given string', ()=>{
    let wordMatrix = [['B','K'],['O','I'],['N','R'],['E','K'],['S','S']];
    let wordToFind = 'BONES';
    let result = wordSearch(wordToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(0,0)', '(0,1)','(0,2)','(0,3)', '(0,4)']);
  });
  it('will return the locations in a given matrix of single character strings of any horizontally-placed words read left to right in a given array of strings', ()=>{
    let wordMatrix = [['B','O','N','E','S'],['K', 'I', 'R', 'K', 'S']];
    let wordsToFind = ['BONES', 'KIRK'];
    let result = wordSearch(wordsToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(0,0)','(1,0)','(2,0)','(3,0)','(4,0)']);
    expect(result['KIRK']).toEqual(['(0,1)','(1,1)','(2,1)','(3,1)']);
  });
  it('will return the locations in a given matrix of single character strings of any vertically-placed words top to bottom in a given array of strings',()=>{
    let wordMatrix = [['B','K'],['O','I'],['N','R'],['E','K'],['S','S']];
    let wordsToFind = ['BONES', 'KIRK'];
    let result = wordSearch(wordsToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(0,0)','(0,1)','(0,2)','(0,3)','(0,4)']);
    expect(result['KIRK']).toEqual(['(1,0)','(1,1)','(1,2)','(1,3)']);
  });
  it('will return the location in a given matrix of single character strings of a horizontally-placed word read right to left in a given string', ()=>{
    let wordMatrix = [['S','E','N','O','B'],['K', 'I', 'R', 'K', 'S']];
    let wordToFind = 'BONES';
    let result = wordSearch(wordToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(4,0)','(3,0)','(2,0)','(1,0)','(0,0)']);
  });
  it('will return the location in a given matrix of single character strings of a vertically-placed word read bottom to top in a given string', ()=>{
    let wordMatrix = [['S','K'],['E','I'],['N','R'],['O','K'],['B','S']];
    let wordToFind = 'BONES';
    let result = wordSearch(wordToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(0,4)', '(0,3)','(0,2)','(0,1)', '(0,0)']);
  });
  it('will return the locations in a given matrix of single character strings of any horizontally-placed words read right to left in a given array of strings', ()=>{
    let wordMatrix = [['S','E','N','O','B'],['K', 'R', 'I', 'K', 'S']];
    let wordsToFind = ['BONES', 'KIRK'];
    let result = wordSearch(wordsToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(4,0)','(3,0)','(2,0)','(1,0)','(0,0)']);
    expect(result['KIRK']).toEqual(['(3,1)','(2,1)','(1,1)','(0,1)']);
  });
  it('will return the locations in a given matrix of single character strings of any vertically-placed words bottom to top in a given array of strings',()=>{
    let wordMatrix = [['S','K'],['E','R'],['N','I'],['O','K'],['B','S']];
    let wordsToFind = ['BONES', 'KIRK'];
    let result = wordSearch(wordsToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(0,4)', '(0,3)','(0,2)','(0,1)', '(0,0)']);
    expect(result['KIRK']).toEqual(['(1,3)','(1,2)','(1,1)','(1,0)']);
  });
  it('will return the location in a given matrix of single character strings of an obliquely-placed word read top-left to bottom-right in a given string', ()=>{
    let wordMatrix = [
      ['B','M','I','T','K'],
      ['S','O','O','I','Q'],
      ['E','H','N','M','N'],
      ['Y','D','O','E','M'],
      ['K','S','U','T','S']];
    let wordToFind = 'BONES';
    let result = wordSearch(wordToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(0,0)', '(1,1)','(2,2)','(3,3)', '(4,4)']);
  });
  it('will return the location in a given matrix of single character strings of an obliquely-placed word read bottom-left to top-right in a given string', ()=>{
    let wordMatrix = [
      ['B','M','I','T','K'],
      ['S','O','O','I','E'],
      ['E','H','N','M','N'],
      ['Y','D','O','E','M'],
      ['K','S','U','T','S']];
    let wordToFind = 'SOME';
    let result = wordSearch(wordToFind, wordMatrix);
    expect(result['SOME']).toEqual(['(1,4)', '(2,3)','(3,2)','(4,1)']);
  });
  it('will return the location in a given matrix of single character strings of an obliquely-placed word read bottom-right to top-left in a given string', ()=>{
    let wordMatrix = [
      ['S','M','I','T','K'],
      ['S','E','O','I','E'],
      ['E','H','N','M','N'],
      ['Y','D','O','O','M'],
      ['K','S','U','T','B']];
    let wordToFind = 'BONE';
    let result = wordSearch(wordToFind, wordMatrix);
    expect(result['BONE']).toEqual(['(4,4)','(3,3)','(2,2)','(1,1)']);
  });
});