// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var key = this.convert(value);
  var obj = {};
  obj.value = value; //
  obj.edges = [];
  this[key] = obj;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  var key = this.convert(target);
  return !(this[key] === undefined);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var key = this.convert(node);
  var context = this;
  if (this[key].edges.length > 0) {
    _.each(this[key].edges, function(edge) {
      context.removeEdge(key, edge.value);
    });
  }
  delete this[key];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromKey = this.convert(fromNode);
  var toKey = this.convert(toNode);
  
  if (this[fromKey] && this[toKey]) {
    return _.reduce(this[fromKey].edges, function(memo, edge) {
      if (edge.value === toNode || memo) {
        return true;
      } else {
        return false;
      }
    }, false);
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromKey = this.convert(fromNode);
  var toKey = this.convert(toNode);
  
  if (this[fromKey] && this[toKey]) {
    this[fromKey].edges.push(this[toKey]);
    this[toKey].edges.push(this[fromKey]);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromKey = this.convert(fromNode);
  var toKey = this.convert(toNode);
  
  if (this[fromKey] && this[toKey]) {
    this[fromKey].edges = _.filter(this[fromKey].edges, function(edge) {
      return (edge.value !== toNode);
    });
    this[toKey].edges = _.filter(this[toKey].edges, function(edge) {
      return (edge.value !== fromNode);
    });
  }
};

// Pass in a callback which will be executed on each node(value) of the graph.
Graph.prototype.forEachNode = function(func) {
  var keys = Object.keys(this);
  var values = _.map(keys, function(key) {
    return this[key].value;
  }, this);
  _.each(values, func);
};

//allows for multiple data-types
Graph.prototype.convert = function(key) { 
  if (typeof key === 'string') {
    return 'str' + key;
  } else if (typeof key === 'number') {
    return 'num' + key.toString();
  } else if (typeof key === 'boolean') {
    return 'bool' + key.toString();
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
 * addNode() has a time complexity of O(1)
 * contains() has a time complexity of O(n)
 * removeNode() has a time complexity of O(n) bc of reliance on removeEdge()
 * addEdge() has a time complexity of O(1)
 * hasEdge() has a time complexity of O(n)
 * removeEdge() has a time complexity of O(n)
 * forEachNode() has a time complexity of O(n)
 * convert() has a time complexity of O(1)
 */

