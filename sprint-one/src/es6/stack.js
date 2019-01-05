class Stack {
  constructor() {
    this.cache = [];
  }
  push(string) {
    this.cache.push(string);
  }
  pop() {
    return this.cache.pop();
  }
  size() {
    return this.cache.length;
  }
}