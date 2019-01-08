var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  this._storage = this._storage.filter(function spam(value) {
    return (value !== item);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .add() has a time complexity of O(1)
 * .contains() has a time complexity of O(n)
 * .remove() has a time complexity of O(n)
 */
