
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
  




/*
 * Complexity: What is the time complexity of the above functions?
 * addChild() has a time complexity of O(1)
 * contains() has a time complexity of O(n)
 */
