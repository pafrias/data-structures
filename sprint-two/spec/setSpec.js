describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });
  
  it('should handle numbers', function() {
    set.add('123');
    set.add(123);
    set.remove('123');
    expect(set.contains('123')).to.equal(false);
    expect(set.contains(123)).to.equal(true);
    set.add(234);
    set.add(345);
    expect(set.contains(234)).to.equal(true);
  });
  
  it('should handle arrays and objects', function() {
    var obj = {};
    var arr = [];
    set.add(obj);
    set.add(arr);
    expect(set.contains(arr)).to.equal(true);
    expect(set.contains(obj)).to.equal(true);
    expect(set.contains([])).to.equal(false);
    expect(set.contains({})).to.equal(false);
    set.remove(arr);
    set.remove(obj);
    expect(set.contains(arr)).to.equal(false);
    expect(set.contains(obj)).to.equal(false);
  });
});
