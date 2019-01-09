describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });
  
  it('should have a property named parent and methods named removeFromParent and traverse', function() {
    expect(tree.hasOwnProperty('parent')).to.equal(true);
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
  });

  it('should create children who reference their parent', function() {
    tree.addChild(1);
    tree.addChild(2);
    expect(tree.children[0].parent).to.equal(tree);
    tree.children[0].addChild(3);
    expect(tree.children[0].children[0].parent).to.equal(tree.children[0]);
  });
  
  it('should dissociate children from parents with removeFromParent()', function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.children[1].addChild(3);
    tree.children[1].addChild(4);
    tree.children[1].children[0].removeFromParent();
    expect(tree.contains(3)).to.equal(false);
  });
  
  it('should perform a callback function on every value left to right', function() {
    var array1 = [];
    for (var i = 0; i < 10; i++) {
      tree.addChild(i);
      array1.push(i);
      for (var j = 0; j < 10; j++) {
        tree.children[i].addChild(j + 10);
        array1.push(j + 10);
        for (var l = 0; l < 10; l++) {
          tree.children[i].children[j].addChild(l + 20);
          array1.push(l + 20);
        }
      }
    }
    var arr = [];
    tree.traverse((num) => {
      arr.push(num);
    });
    expect(arr).to.eql(array1);
  });
  
  it('should traverse without mutating values', function() {
    tree.addChild(2);
    tree.addChild(4);
    tree.children[1].addChild(6);
    tree.children[1].addChild(8);
    var arr = [];
    tree.traverse((num) => {
      arr.push(num + 1);
    });
    expect(tree.contains(2)).to.equal(true);
    expect(tree.contains(3)).to.equal(false);
  });
  
  
});
