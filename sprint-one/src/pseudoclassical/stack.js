var Stack = function() {
  this._size = 0;
};

Stack.prototype.pop = function() {
  if (this._size > 0) {
    var keep = this[this._size - 1];
    delete this[this._size - 1];
    this._size--;
    return keep;
  }
};
Stack.prototype.push = function(string) {
  this[this._size] = string;
  this._size++;
};
Stack.prototype.size = function() {
  return this._size;
};