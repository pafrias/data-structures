var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value === value) {
  } else if (this.value < value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  } else if (this.value > value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
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
  func(this.value);
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * The time complexity of insert() is O(n) at worst case, but can 
 *   approach O(log2n) at best cases of distribution
 * The time complexity of contains() is O(n) at worst case, but can 
 *   approach O(log2n) at best cases of distribution
 * The time complexity of depthFirstLog() is O(n)
 */
