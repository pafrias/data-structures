// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var obj = {};
  obj.value = value;
  obj.edges = [];
  this[value] = obj;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  return !(this[target] === undefined);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var context = this;
  if (this[node].edges.length > 0) {
    _.each(this[node].edges, function(edge) {
      context.removeEdge(node, edge.value);
    });
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode] && this[toNode]) {
    return _.reduce(this[fromNode].edges, function(memo, edge) {
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
  if (this[fromNode] && this[toNode]) {
    this[fromNode].edges.push(this[toNode]);
    this[toNode].edges.push(this[fromNode]);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this[fromNode] && this[toNode]) {
    this[fromNode].edges = _.filter(this[fromNode].edges, function(edge) {
      return (edge.value !== toNode);
    });
    this[toNode].edges = _.filter(this[toNode].edges, function(edge) {
      return (edge.value !== fromNode);
    });
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(func) {
  var keys = Object.keys(this);
  _.each(keys, func);
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
 */

