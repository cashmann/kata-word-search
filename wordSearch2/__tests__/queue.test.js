const Queue = require('../queue');

describe('Queue', ()=>{
  it('can enqueue an item', ()=>{
    let queue = new Queue();
    queue.enqueue(10);
    expect(queue.head).toBe(10);
  });
  it('can dequeue items', ()=>{
    let queue = new Queue();
    queue.enqueue(10);
    queue.dequeue();
  });
});