

// Instantiate a new graph
var Graph = function() {
  //no need for return or Object.create()
  //maybe can just be empty entirely?
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  
  /*
  
  do we want to check if the value already exists before we add?
  by stopping them here, users can't accidently establish all
  sorts of relationships by accident
  
  makes an obj
  
  give that obj a value property
  
  give that obj an edges property
    could be null, empty collection, or maybe edges are
    just properties of their nodes???
    What happens if you try to give two nodes multiple edges to each other?
    
  set obj to a key property of the graph
    (this is currently just a string of the number, but another
     way to do this would be thorugh hashes to allow more data types)
     
     
    
  */
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  /*
  
  assuming nodes are stored as keys:
    list the keys of the graph
    iteratate through each key (reduce function perhaps, for loop probably fine)
      return true if the nodes value matches the target
      or do nothing
  */
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  /*
    Check if the graph has the node
    Does the graph not have the node?
      take a vacation
    the graph has the node 
      does the node have buddies?
        go to each buddy
        destroy their friendship to node
      no buddies?
        take a vacation
      delete the node
  */
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  /*
  because of the way we've stored these Nodes ->
  
  Do both nodes not exist/were we not fed two arguments?
    take a break, return a false and chill
  Both nodes check out?
    Given that we already made sure to not leave ghost relationships:
    We should have to check one for friendship, instead of both
      
  */
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  /*
  because of the way we've stored these Nodes ->
  
  Do both nodes not exist/were we not fed two arguments?
    take a break, throw error and chill
  Do both nodes check out?
    go to fromNode and give it a new edge to toNode
    go to toNode and give it a new edge to fromNode
      
  */
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  /*
  Do both nodes not exist/were we not fed two arguments?
    take a break, throw an error and chill
  Do both nodes check out?
    Does the fromNode have an edge to toNode?
      go to fromNode and remove the edge to toNode
      go to toNode and remove the edge to fromNode
  
  any need for elses? just do nothing? console.log("Why?")
    
  */
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(func) {
  
  /*
  should be run on the nodes, no the values
  doesn't ask for a return value, so....
  
  save a variable to the graph keys
  call each with the that variable and func
  
  */
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


