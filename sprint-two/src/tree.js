
var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var sapling = Tree(value);
  sapling.parent = this;
  this.children.push(sapling);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    return _.reduce(this.children, function(memo, child) {
      if (memo || child.value === target) {
        return true;
      } else {
        return child.contains(target);
      }
    }, false);
  } else {
    return false;
  }
};
  
treeMethods.removeFromParent = function() {
  if (this.parent === null) {
    //throw error
  } else {
    var compare = this.value;
    this.parent.children = _.filter(this.parent.children, function(child) {
      return (child.value !== compare);
    });
    this.parent = null;
  }
};

treeMethods.traverse = function(func) {
  if (this.value !== undefined) {
    func(this.value);
  }
  if (this.children.length > 0) {
    _.each(this.children, function(child) {
      child.traverse(func);
    });
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild() has a time complexity of O(1)
 * contains() has a time complexity of O(n)
 */
