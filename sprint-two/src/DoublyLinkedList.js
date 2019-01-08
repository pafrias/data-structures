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
    /*
    make new node(pass node argument of current head)
    check if no tail
      set new node to head and tail
    else 
      this.head.previous is new node
      set to head
    */
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
    /*
    make new node(pass node argument of current tail)
    check if no head
      set new node to head and tail
    else 
      this.tial.next is new node
      set to tiall
    */
  }
  
  removeHead() {
    
    var deadQueen = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.previous = null;
    } else {
      this.tail = null;
    }
    return deadQueen;
    /*
    save value of current head to a variable
    set head to head.next
    set head's previous to null
    return dead queen 
    */
  }
  
  removeTail() {
    
    var deadKing = this.tail.value;
    this.tail = this.tail.previous;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    return deadKing;
    /*
    save value of current tail to a variable
    set tail to tail.previous
    set tail's next to null
    return dead king
    */
  }
  
  contains(target) {
    
    /*if (this.value) {
      var context = this;
    } else {
      var context = this.head;
    }
    if (context.value === target) {
      return true;
    } else if (context.next) {
      return DoublyLinkedList.contains.call(context.next, target);
    } else {
      return false;
    }*/
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
    /*
    the thing we did last time:
    if this has a value property
      set context to this
    else
      set context to this.head
    compare context.value to taregt
    if it matches
      return true
    else if context has a next property
      return doublylinkedlist.contains called with context.next and target
    else 
      return nfalse
      
    other way:
    don't need context
    
    declare a function called spam, with parameters for target and obj
      if value matches target
        return
      if no match && obj has a next
        call spam(target)
      else 
        despair
      
      
    return spam(target, this.head);
    */
  }
  
}

class Node2 {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next || null;
    this.previous = previous || null;
  }
}