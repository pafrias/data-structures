var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    
    var x = Node(value);
    
    if (!this.tail) {
      this.head = x;
      this.tail = x;
    } else {
      this.tail.next = x;
      this.tail = x;
    }
    
  };

  list.removeHead = function() {
    var oldHead = this.head.value;
    this.head = this.head.next;
    return oldHead;
    
  };

  list.contains = function(target) {
    if (this.value === undefined) {
      var context = this.head;
    } else {
      var context = this;
    }
    if (context.value === target) {
      return true;
    } else if (context.next) {
      return list.contains.call(context.next, target);
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail() has a time complexity of O(1)
  removeHead() has a time complexity of O(1)
  contains has a time complexity of O(n)
 */
