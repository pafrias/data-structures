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
    
    /*
    
    #save new Node(value) as a variable
    #catch if no current tail/1st time
    #  update head and tail
    #  else update tail
    #list.tail points to new tail
    #list.tail becomes the new tail
    
    attach new Node to list
    
    */
    
  };

  list.removeHead = function() {
    var oldHead = this.head.value;
    this.head = this.head.next;
    return oldHead;
    
    /*
    
    save current head as oldHead
    this.head becomes this.head.next
    
    return oldHead
    */
    
  };

  list.contains = function(target) {
    if(arguments[1]) {
      if(arguments[1].value === target) {
        return true;
      } else {
        
      }
    }
    
    /*
    if (arg[1]) {
      check arg1.value
      retrn true
      if no match and arg1.next
        recurse on arg1.next
      
    } else
    
    if head.value is target
      return true
      check head for target
    */
    
    /* 
    if this.value exists
      check if it matches
    else 
      recurse
    */
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
 */
