var Stack = function() {
  var stax = Object.create(stackMethods);
  _.extend(stax, stackKeys);
  return stax;
};

var stackKeys = {
  len: 0
};

var stackMethods = {
  pop() {
    if (this.len > 0) {
      var keep = this[this.len - 1];
      delete this[this.len - 1];
      this.len--;
      return keep;
    }
  },
  push(string) {
    this[this.len] = string;
    this.len++;
  },
  size() {
    return this.len;
  }
};


