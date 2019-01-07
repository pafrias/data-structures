var Queue = function() {
  var newStorage = {};
  newStorage.currentLength = 0;
  newStorage.totalQueries = 0;
  return _.extend(newStorage, queueMethods);
};


var queueMethods = {
  
  firstInLine() {
    return this.totalQueries - this.currentLength;
  },
  dequeue() {
    if (this.currentLength > 0) {
      var x = this[this.firstInLine()];
      delete this[this.firstInLine()];
      this.currentLength--; 
      return x;
    }
  },
  size() {
    return this.currentLength;
  },
  enqueue(string) {
    this[this.totalQueries] = string;
    this.totalQueries++;
    this.currentLength++;
  }
};