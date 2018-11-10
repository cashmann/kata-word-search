const Heap = require('../heap');

describe('heap', ()=>{
  it('initializes with an empty array of nodes', ()=>{
    let heap = new Heap();
    expect(heap.nodes).toEqual([]);
  });
  it('can turn a matrix into a heap given the matrix width', ()=>{
    let heap = new Heap();
    let matrix = [['B','K'],['O','I'],['N','R'],['E','K'],['S','S']];
    let matrixWidth = matrix[0].length;
    heap.deserialize(matrix, matrixWidth);
    matrix = [].concat.apply([], matrix);
    heap.nodes.forEach(node =>{
      expect(matrix.includes(node.data)).toBeTruthy;
    });
  });
  it('identifies each node in the heap with an index', ()=>{
    let heap = new Heap();
    let matrix = [['B','K'],['O','I'],['N','R'],['E','K'],['S','S']];
    let matrixWidth = matrix[0].length;
    heap.deserialize(matrix, matrixWidth);
    heap.nodes.forEach((node, i) =>{
      expect(node.index).toBe(i);
    });
  });
  it('has nodes that know the element that would be below them in the given matrix', ()=>{
    let heap = new Heap();
    let matrix = [
      ['B','K'],
      ['O','I'],
      ['N','R'],
      ['E','K'],
      ['S','S'],
    ];
    let matrixWidth = matrix[0].length;
    heap.deserialize(matrix, matrixWidth);
    matrix = [].concat.apply([], matrix);
    heap.nodes.forEach((node, i) =>{
      if(matrix[i+matrixWidth]){
        expect(matrix[i+matrixWidth]).toBe(node.directions['down '].data);
      }
    });
  });
  it('has nodes that know the element that would be to the right of them in the given matrix', ()=>{
    let heap = new Heap();
    let matrix = [
      ['B','K'],
      ['O','I'],
      ['N','R'],
      ['E','K'],
      ['S','S'],
    ];
    let matrixWidth = matrix[0].length;
    heap.deserialize(matrix, matrixWidth);
    matrix = [].concat.apply([], matrix);
    heap.nodes.forEach((node, i) =>{
      if(matrix[i+1]){
        expect(matrix[i+1]).toBe(node.directions['right '].data);
      }
    });
  });
});