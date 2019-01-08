

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!Array.isArray(bucket)) {
    bucket = [];
  }
  bucket.push([k, v]);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  return _.reduce(bucket, function(memo, tuple) {
    if (tuple[0] === k) {
      return tuple[1];
    }
    return memo;
  }, undefined);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  bucket = _.filter(bucket, function(tuple) {
    return (tuple[0] !== k);
  });
  this._storage.set(index, bucket);
};

/* HashTable.prototype.reconfig = function() {
  check buckets
}
/*
/*
 * Complexity: What is the time complexity of the above functions?
 * .insert() has a time complexity of O(1)
 * .retrieve() has a time complexity of O(n), because at worst case
 *    n values have the same index and must all be iterated over
 * .remove() has a time complexity of O(n), because at worst case
 *    n values are stored at the same index and must all be checked
 */


