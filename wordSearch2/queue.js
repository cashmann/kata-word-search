class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
  }
  enqueue(node){
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }
  dequeue(){
    this.head = this.head.next;
    if(this.head){
      this.head.previous = null;
    }
  }
}

module.exports = Queue;