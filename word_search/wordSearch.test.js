const wordSearch = require('./wordSearch');

describe('word search', ()=>{
  it('will return the locations in a given matrix of single character strings of all horizontally-placed words in a given array of strings', () =>{
    let wordMatrix = [['B','O','N','E','S'],['K', 'I', 'R', 'K', 'S']];
    //BONES should map to (0,0),(1,0),(2,0)(3,0)(4,0)
    //KIRK -> (0,1)(1,1)(2,1)(3,1)
    let find = ['BONES', 'KIRK'];
    let result = wordSearch(find, wordMatrix);
    expect(result['BONES'][0]).toBe('(0,0)');
    expect(result['BONES'][4]).toBe('(4,0)');
    expect(result['KIRK'][0]).toBe('(0,1)');
    expect(result['KIRK'][3]).toBe('(3,1)');
  });
  it('will return the locations in a given matrix of single character strings of all vertically-placed words in a given array of strings', ()=>{
    let wordMatrix = [['B','K'],['O','I'],['N','R'],['E','K'],['S','S']];
    let find = ['BONES','KIRK'];
    //BONES -> (0,0),(0,1),(0,2)(0,3)(0,4)
    //KIRK -> (1,0)(1,1)(1,2)(1,3)
    let result = wordSearch(find, wordMatrix);
    expect(result['BONES'][0]).toBe('(0,0)');
    expect(result['BONES'][4]).toBe('(0,4)');
    expect(result['KIRK'][0]).toBe('(1,0)');
    expect(result['KIRK'][3]).toBe('(1,3)');
  });
  it('will do all of the above, backwards or forwards', ()=>{
    let wordMatrix = [['S','E','N','O','B'],['K', 'Q', 'Q', 'Q', 'Q'],['R', 'Q', 'Q', 'Q', 'Q'],['I', 'Q', 'Q', 'Q', 'Q'],['K', 'Q', 'Q', 'Q', 'Q']];
    let find = ['BONES','KIRK'];
    //BONES -> (4,0),(3,0),(2,0)(1,0)(0,0)
    //KIRK -> (0,4)(0,3)(0,2)(0,1)
    let result = wordSearch(find, wordMatrix);
    expect(result['BONES'][0]).toBe('(4,0)');
    expect(result['BONES'][4]).toBe('(0,0)');
    expect(result['KIRK'][0]).toBe('(0,4)');
    expect(result['KIRK'][3]).toBe('(0,1)');
  });
  it('will do all of the above diagonally', ()=>{
    let wordMatrix = [
      ['S','M','I','T','K'],
      ['S','E','O','I','Q'],
      ['E','H','N','M','N'],
      ['Y','D','O','O','M'],
      ['K','S','U','T','B']];
    let find = ['BONES','KIND', 'MOM', 'HOT'];
    //BONES -> (4,4),(3,3),(2,2)(1,1)(0,0)
    //KIND -> (4,0)(3,1)(2,2)(1,3)
    //MOM -> (1,0)(2,1)(3,2)
    //HOT -> (1,2)(2,3)(3,4)
    let result = wordSearch(find, wordMatrix);
    console.log(result);
    expect(result['BONES'][0]).toBe('(4,4)');
    expect(result['BONES'][4]).toBe('(0,0)');
    expect(result['KIND'][0]).toBe('(4,0)');
    expect(result['KIND'][3]).toBe('(1,3)');
    expect(result['MOM'][0]).toBe('(1,0)');
    expect(result['MOM'][2]).toBe('(3,2)');
    expect(result['HOT'][0]).toBe('(1,2)');
    expect(result['HOT'][2]).toBe('(3,4)');
    wordMatrix = [
      ['U','M','K','H','U','L','K','I','N','V','J','O','C','W','E'], //0-14
      ['L','L','S','H','K','Z','Z','W','Z','C','G','J','U','Y','G'], //15-29
      ['H','S','U','P','J','P','R','J','D','H','S','B','X','T','G'], //30-44
      ['B','R','J','S','O','E','Q','E','T','I','K','K','G','L','E'], //45-59
      ['A','Y','O','A','G','C','I','R','D','Q','H','R','T','C','D'], //60-74
      ['S','C','O','T','T','Y','K','Z','R','E','P','P','X','P','F'], //75-89
      ['B','L','Q','S','L','N','E','E','E','V','U','L','F','M','Z'], //90-104
      ['O','K','R','I','K','A','M','M','R','M','F','B','A','P','P'], //105-119
      ['N','U','I','Z','Y','H','Q','M','E','M','Q','R','Y','F','S'], 
      ['E','Y','Z','Y','G','K','Q','J','P','C','Q','W','Y','A','K'],
      ['S','J','F','Z','M','Q','I','B','D','B','E','M','K','W','D'],
      ['T','G','L','B','H','C','B','E','C','H','T','O','Y','I','K'],
      ['O','J','Y','E','U','L','N','C','C','L','Y','B','Z','U','H'],
      ['W','Z','M','I','S','U','K','U','R','B','I','D','U','X','S'],
      ['K','Y','L','B','Q','Q','P','M','D','F','C','K','E','A','B'],
    ];
    find = ['KIRK','BONES','KHAN','KIRK','SCOTTY','SPOCK','SULU','UHURA'];
    result = wordSearch(find, wordMatrix);
    expect(result['BONES'][0]).toBe('(0,6)');
    expect(result['BONES'][4]).toBe('(0,10)');
    expect(result['KHAN'][0]).toBe('(5,9)');
    expect(result['KHAN'][3]).toBe('(5,6)');
    expect(result['KIRK'][0]).toBe('(4,7)');
    expect(result['KIRK'][3]).toBe('(1,7)');
    expect(result['SCOTTY'][0]).toBe('(0,5)');
    expect(result['SCOTTY'][5]).toBe('(5,5)');
    expect(result['SPOCK'][0]).toBe('(2,1)');
    expect(result['SPOCK'][4]).toBe('(6,5)');
    expect(result['SULU'][0]).toBe('(3,3)');
    expect(result['SULU'][3]).toBe('(0,0)');
    expect(result['UHURA'][0]).toBe('(4,0)');
    expect(result['UHURA'][4]).toBe('(0,4)');
  });
});