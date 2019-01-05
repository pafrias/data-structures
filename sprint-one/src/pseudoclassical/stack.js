var Stack = function() {
  this.cache = [];
};

Stack.prototype.pop = function() {
  return this.cache.pop();
};
Stack.prototype.push = function(string) {
  this.cache.push(string);
};
Stack.prototype.size = function() {
  return this.cache.length;
};