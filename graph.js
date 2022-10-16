class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let node of vertexArray){
      this.addVertex(node)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for(let node of vertex.adjacent){
      this.removeEdge(node,vertex)
    }
    this.nodes.delete(vertex)
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let data = []
    let stack = []
    let seen = new Set()
    seen.add(start)
    stack.push(start)

    while(stack.length){
      let current = stack.pop()
      data.push(current.value)

      for(let neighbor of current.adjacent){
        if(!seen.has(neighbor)){
          stack.push(neighbor)
          seen.add(neighbor)
        }
      }
    }
    return data
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let data = []
    let stack = []
    let seen = new Set()
    seen.add(start)
    stack.push(start)

    while(stack.length){
      let current = stack.shift()
      data.push(current.value)

      for(let neighbor of current.adjacent){
        if(!seen.has(neighbor)){
          stack.push(neighbor)
          seen.add(neighbor)
        }
      }
    }
    return data
  }
}

module.exports = {Graph, Node}