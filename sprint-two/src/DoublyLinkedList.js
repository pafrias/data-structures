class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  addToHead(value) {
    var node = new Node2(value, this.head);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.previous = node;
      this.head = node;
    }
  }
  
  addToTail(value) {
    var node = new Node2(value, null, this.tail);
    if (!this.head) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  
  removeHead() {
    var oldHead = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.previous = null;
    } else {
      this.tail = null;
    }
    return oldHead;
  }
  
  removeTail() {
    var oldTail = this.tail.value;
    this.tail = this.tail.previous;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    return oldTail;
  }
  
  contains(target) {
    var spam = function(targette, obj) {
      if (obj.value === targette) {
        return true;
      } else if (obj.next) {
        return spam(targette, obj.next);
      } else {
        return false;
      }
    };
    return spam(target, this.head);
  }
}

class Node2 {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next || null;
    this.previous = previous || null;
  }
}