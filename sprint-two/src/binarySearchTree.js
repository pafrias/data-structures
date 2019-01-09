var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  obj.layer = 0;
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value === value) {
  } else if (this.value < value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
      this.right.layer = (this.layer) + 1;
    }
  } else if (this.value > value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
      this.left.layer = (this.layer) + 1;
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.value < value && this.right) {
    return this.right.contains(value);
  } else if (this.value > value && this.left) {
    return this.left.contains(value);
  } else {
    return false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  func(this.value, this.layer);
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(func) {
  var depthResult = [];
  var deepestLayer = 0;
  this.depthFirstLog(function(value, layer) {
    depthResult.push([layer, value]);
  });
  console.log(depthResult);
  _.each(depthResult, function(tuple) {
    if (tuple[0] > deepestLayer) {
      deepestLayer = tuple[0];
    }
  });
  for (var i = 0; i <= deepestLayer; i++) {
    _.each(depthResult, function(tuple) {
      if (tuple[0] === i) {
        func(tuple[1]);
      }
    });
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * The time complexity of insert() is O(n) at worst case, but can 
 *   approach O(log2n) at best cases of distribution
 * The time complexity of contains() is O(n) at worst case, but can 
 *   approach O(log2n) at best cases of distribution
 * The time complexity of depthFirstLog() is O(n)
 * The time complexity of breadthFirstLog() is O(n)
 */
