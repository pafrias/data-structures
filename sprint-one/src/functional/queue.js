var Queue = function() {
  var someInstance = {};

  var storage = {};

  var len = 0; // number of people in line
  var lineProgress = 0; // end of the line; never reduces

  someInstance.enqueue = function(value) {
    storage[lineProgress] = value;
    lineProgress ++;
    len++;
  };

  someInstance.dequeue = function() {
    var x = storage[lineProgress - len];
    delete storage[lineProgress - len];
    if (len > 0) {
      len--;
    }
    return x;
  };

  someInstance.size = function() {
    return len;
  };

  return someInstance;
};
