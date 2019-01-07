var Queue = function() {
  this.len = 0;
  this.last = 0;
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
