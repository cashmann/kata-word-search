const wordSearch = require('./wordSearch2');

describe('word search, given a matrix of single character strings', ()=>{
  it('will return the location of a horizontally-placed word read left to right in a given string', ()=>{
    let wordMatrix = [['B','O','N','E','S'],['K', 'I', 'R', 'K', 'S']];
    let wordToFind = 'BONES';
    let result = wordSearch(wordToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(0,0)','(1,0)','(2,0)','(3,0)','(4,0)']);
  });
  it('will return the location of a vertically-placed word read top to bottom in a given string', ()=>{
    let wordMatrix = [['B','K'],['O','I'],['N','R'],['E','K'],['S','S']];
    let wordToFind = 'BONES';
    let result = wordSearch(wordToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(0,0)', '(0,1)','(0,2)','(0,3)', '(0,4)']);
  });
  it('will return the locations of any horizontally-placed words read left to right in a given array of strings', ()=>{
    let wordMatrix = [['B','O','N','E','S'],['K', 'I', 'R', 'K', 'S']];
    let wordsToFind = ['BONES', 'KIRK'];
    let result = wordSearch(wordsToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(0,0)','(1,0)','(2,0)','(3,0)','(4,0)']);
    expect(result['KIRK']).toEqual(['(0,1)','(1,1)','(2,1)','(3,1)']);
  });
  it('will return the locations of any vertically-placed words top to bottom in a given array of strings',()=>{
    let wordMatrix = [['B','K'],['O','I'],['N','R'],['E','K'],['S','S']];
    let wordsToFind = ['BONES', 'KIRK'];
    let result = wordSearch(wordsToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(0,0)','(0,1)','(0,2)','(0,3)','(0,4)']);
    expect(result['KIRK']).toEqual(['(1,0)','(1,1)','(1,2)','(1,3)']);
  });
  it('will return the location of a horizontally-placed word read right to left in a given string', ()=>{
    let wordMatrix = [['S','E','N','O','B'],['K', 'I', 'R', 'K', 'S']];
    let wordToFind = 'BONES';
    let result = wordSearch(wordToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(4,0)','(3,0)','(2,0)','(1,0)','(0,0)']);
  });
  it('will return the location of a vertically-placed word read bottom to top in a given string', ()=>{
    let wordMatrix = [['S','K'],['E','I'],['N','R'],['O','K'],['B','S']];
    let wordToFind = 'BONES';
    let result = wordSearch(wordToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(0,4)', '(0,3)','(0,2)','(0,1)', '(0,0)']);
  });
  it('will return the locations of any horizontally-placed words read right to left in a given array of strings', ()=>{
    let wordMatrix = [['S','E','N','O','B'],['K', 'R', 'I', 'K', 'S']];
    let wordsToFind = ['BONES', 'KIRK'];
    let result = wordSearch(wordsToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(4,0)','(3,0)','(2,0)','(1,0)','(0,0)']);
    expect(result['KIRK']).toEqual(['(3,1)','(2,1)','(1,1)','(0,1)']);
  });
  it('will return the locations of any vertically-placed words bottom to top in a given array of strings',()=>{
    let wordMatrix = [['S','K'],['E','R'],['N','I'],['O','K'],['B','S']];
    let wordsToFind = ['BONES', 'KIRK'];
    let result = wordSearch(wordsToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(0,4)', '(0,3)','(0,2)','(0,1)', '(0,0)']);
    expect(result['KIRK']).toEqual(['(1,3)','(1,2)','(1,1)','(1,0)']);
  });
  it('will return the location of an obliquely-placed word read top-left to bottom-right in a given string', ()=>{
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
  it('will return the location of an obliquely-placed word read bottom-left to top-right in a given string', ()=>{
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
  it('will return the location of an obliquely-placed word read bottom-right to top-left in a given string', ()=>{
    let wordMatrix = [
      ['S','M','I','T','K'],
      ['S','E','O','I','E'],
      ['E','H','N','M','N'],
      ['Y','D','O','O','M'],
      ['K','S','U','T','B']];
    let wordToFind = 'BONES';
    let result = wordSearch(wordToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(4,4)','(3,3)','(2,2)','(1,1)','(0,0)']);
  });
  it('will return the location of an obliquely-placed word read top-right to bottom-left in a given string', ()=>{
    let wordMatrix = [
      ['S','M','I','T','K'],
      ['S','E','O','I','E'],
      ['E','H','N','M','N'],
      ['Y','D','O','O','M'],
      ['K','S','U','T','B']];
    let wordToFind = 'KIND';
    let result = wordSearch(wordToFind, wordMatrix);
    expect(result['KIND']).toEqual(['(4,0)','(3,1)','(2,2)','(1,3)']);
  });
  it('will return the locations of any word in a given array, regardless of orientation', ()=>{
    let wordMatrix = [
      ['U','M','Q','H','U','L','K','I','N','V','J','O','C','W','E'],
      ['A','L','S','H','K','Z','Z','W','Z','C','G','J','U','Y','G'],
      ['H','S','U','P','J','P','R','J','D','H','S','B','X','Q','G'],
      ['K','R','J','S','O','E','Q','E','T','I','K','K','G','A','E'],
      ['A','Y','O','A','G','C','I','R','D','Q','H','R','T','H','D'],
      ['S','C','O','T','T','Y','K','Z','R','E','P','P','X','K','F'],
      ['B','L','Q','S','L','N','E','E','E','V','U','L','F','M','Z'],
      ['O','K','R','I','K','A','M','M','R','M','F','B','A','P','P'],
      ['N','U','I','Z','Y','H','Q','M','E','M','Q','R','Y','F','S'], 
      ['E','Y','Z','Y','G','K','Q','J','P','C','Q','W','Y','A','K'],
      ['S','J','F','Z','M','Q','I','B','D','B','E','M','K','W','D'],
      ['T','G','L','B','H','C','B','E','C','H','T','O','Y','I','K'],
      ['O','J','Y','E','U','L','N','C','C','L','Y','B','Z','U','H'],
      ['W','Z','M','I','S','U','K','U','R','B','I','D','U','X','S'],
      ['K','Y','L','B','Q','Q','P','M','D','F','C','K','E','A','B'],
    ];
    let wordsToFind = ['KHAN','KIRK','BONES','SCOTTY','SPOCK','SULU','UHURA'];
    let result = wordSearch(wordsToFind, wordMatrix);
    expect(result['BONES']).toEqual(['(0,6)', '(0,7)', '(0,8)', '(0,9)', '(0,10)']);
    expect(result['KHAN']).toEqual(['(5,9)', '(5,8)', '(5,7)', '(5,6)']);
    expect(result['KIRK']).toEqual(['(4,7)','(3,7)','(2,7)','(1,7)']);
    expect(result['SCOTTY']).toEqual(['(0,5)','(1,5)','(2,5)','(3,5)','(4,5)','(5,5)']);
    expect(result['SPOCK']).toEqual(['(2,1)','(3,2)','(4,3)','(5,4)','(6,5)']);
    expect(result['SULU']).toEqual(['(3,3)','(2,2)','(1,1)','(0,0)']);
    expect(result['UHURA']).toEqual(['(4,0)','(3,1)','(2,2)','(1,3)','(0,4)']);
  });
});