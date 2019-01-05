
var Queue = function() {
  var cue = Object.create(queueMethods);
  _.extend(cue, queueKeys);
  return cue;
};

const queueKeys = {
  lineLen: 0,
  total: 0
};

const queueMethods = {
  head() {
    return this.total - this.lineLen;
  },
  enqueue(string) {
    this[this.total] = string;
    this.total++;
    this.lineLen++;
  },
  dequeue() {
    if (this.lineLen > 0) {
      var keep = this[this.head()];
      delete this[this.head()];
      this.lineLen--;
      return keep;
    }
  },
  size() {
    return this.lineLen;
  }
};


