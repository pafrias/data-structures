var Queue = function() {
  this.cache = [];
};

Queue.prototype.enqueue = function(string) {
  this.cache.push(string);
};

Queue.prototype.dequeue = function() {
  return this.cache.shift();
};

Queue.prototype.size = function() {
  return this.cache.length;
};
