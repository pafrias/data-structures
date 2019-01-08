describe('doublyLinkedList', function () {
  var doubleList;

  beforeEach(function() {
    doubleList = new DoublyLinkedList();
  });
  
  it('should have addToHead, removeHead, addToTail, removeTail, and contains properties', function() {
    expect(doubleList).to.have.property('addToHead');
    expect(doubleList).to.have.property('removeHead');
    expect(doubleList).to.have.property('addToTail');
    expect(doubleList).to.have.property('removeTail');
    expect(doubleList).to.have.property('contains');
  });
  
  it('addToHead, removeHead, addToTail, removeTail, and contains should be functions', function() {
    expect(doubleList.addToHead).to.be.a('function');
    expect(doubleList.removeHead).to.be.a('function');
    expect(doubleList.addToTail).to.be.a('function');
    expect(doubleList.removeTail).to.be.a('function');
    expect(doubleList.contains).to.be.a('function');
  });
  
  it('should create nodes with pointer properties and values', function() {
    doubleList.addToHead(5);
    expect(doubleList.head).to.have.property('value');
    expect(doubleList.head).to.have.property('next');
    expect(doubleList.head).to.have.property('previous');
  });
  
  it('nodes should point to their neighbors', function() {
    doubleList.addToTail(6);
    doubleList.addToTail(7);
    expect(doubleList.tail.previous.value).to.equal(6);
    expect(doubleList.head.next.value).to.equal(7);
  });
  
  it('should have a head and tail', function() {
    expect(doubleList).to.have.property('head');
    expect(doubleList).to.have.property('tail');
  });
  
  it('should add values to the head and tail', function() {
    doubleList.addToHead(5);
    doubleList.addToHead(6);
    doubleList.addToHead(7);
    expect(doubleList.head.value).to.equal(7);
    expect(doubleList.tail.value).to.equal(5);
  });
  
  it('should replace head and tail as more values are added', function() {
    doubleList.addToHead(5);
    doubleList.addToHead(6);
    expect(doubleList.head.value).to.not.equal(5);
    doubleList.addToTail(7);
    doubleList.addToTail(8);
    expect(doubleList.tail.value).to.not.equal(7);
  });
  
  it('should contain values not kept as tail or head', function() {
    doubleList.addToHead(5);
    doubleList.addToHead(6);
    doubleList.addToHead(7);
    expect(doubleList.contains(6)).to.equal(true);
    doubleList.addToTail(8);
    doubleList.addToTail(9);
    expect(doubleList.contains(8)).to.equal(true);
  });
  
  it('should remove values at the head and tail', function() {
    doubleList.addToHead(5);
    doubleList.addToHead(6);
    doubleList.addToTail(7);
    doubleList.addToTail(8);
    expect(doubleList.removeHead()).to.equal(6);
    expect(doubleList.removeTail()).to.equal(8);
    expect(doubleList.removeHead()).to.equal(5);
    expect(doubleList.removeTail()).to.equal(7);
  });
  
  it('should not contain values that have been removed', function() {
    doubleList.addToHead(5);
    doubleList.addToHead(6);
    doubleList.addToTail(7);
    doubleList.addToTail(8);
    doubleList.removeHead();
    expect(doubleList.contains(6)).to.equal(false);
  });
  
  it('should recognize a single value as head and tail', function() {
    debugger;
    doubleList.addToHead(5);
    expect(doubleList.removeTail()).to.equal(5);
    doubleList.addToTail(6);
    expect(doubleList.removeHead()).to.equal(6);
  });
}); 

/*
  it('', function() {
    expect().to.
    
  });
  
  */