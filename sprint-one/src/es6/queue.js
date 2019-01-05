class Queue {
  constructor() {
    this.cache = [];
  }
  enqueue(string) {
    this.cache.push(string);
  }
  dequeue() {
    return this.cache.shift();
  }
  size() {
    return this.cache.length;
  }
}
