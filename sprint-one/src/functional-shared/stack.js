var Stack = function() {
  var stack = {};
  stack.len = 0;
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  pop() {
    if (this.len > 0) {
      var result = this[this.len - 1];
      delete this[this.len - 1];
      this.len--;
      return result;
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