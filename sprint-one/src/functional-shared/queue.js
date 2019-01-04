var Queue = function() {
  var newStorage = {};
  return _.extend(newStorage, queueMethods);
};


var queueMethods = {

  currentLength: 0,
  totalQueries: 0,
  
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