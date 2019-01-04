var Stack = function() { //assumes inputs and outputs are strings
  var someInstance = {};

  var storage = {};

  someInstance.len = 0;

  someInstance.push = function(value) {
    storage[someInstance.len] = value;
    someInstance.len++;
  };

  someInstance.pop = function() {
    if (someInstance.len > 0) {
    var x = storage[someInstance.len - 1];
    delete storage[someInstance.len - 1];
    someInstance.len--;
    return x;
    };
  };

  someInstance.size = function() {
    return someInstance.len;
  };

  return someInstance;
};
