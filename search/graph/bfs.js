const Queue = require("../../data-structures/Queue").Queue;
const Graph = require("../../data-structures/graph/Graph").Graph;
const Edge = require("../../data-structures/graph/Edge").Edge;
const Vertex = require("../../data-structures/graph/Vertex").Vertex;

function initCallbacks(callbacks = {}) {

    const initiatedCallback = callbacks;
  
    const stubCallback = () => {};
  
    const allowTraversalCallback = (
      () => {
        const seen = {};
        return ({ nextVertex }) => {
                if (!seen[nextVertex.getKey()]) {
                    seen[nextVertex.getKey()] = true;
                    return true;
                }
                return false;
            };
        }
    )();
  
    initiatedCallback.allowTraversal = callbacks.allowTraversal || allowTraversalCallback;
    initiatedCallback.enterVertex = callbacks.enterVertex || stubCallback;
    initiatedCallback.leaveVertex = callbacks.leaveVertex || stubCallback;
  
    return initiatedCallback;
}
  

function breadthFirstSearch(graph, startVertex, originalCallbacks) {

    const callbacks = initCallbacks(originalCallbacks);
    const vertexQueue = new Queue();
  
    // Do initial queue setup.
    vertexQueue.enqueue(startVertex);
    callbacks.allowTraversal({nextVertex:startVertex});
  
    let previousVertex = null;
  
    // Traverse all vertices from the queue.
    while (!vertexQueue.isEmpty()) {
        const currentVertex = vertexQueue.dequeue();
        callbacks.enterVertex({ currentVertex, previousVertex });
    
        // Add all neighbors to the queue for future traversals.
        graph.getNeighbors(currentVertex).forEach((nextVertex) => {
            if (callbacks.allowTraversal({ previousVertex, currentVertex, nextVertex })) {
                vertexQueue.enqueue(nextVertex);
                //console.log(vertexQueue.toString());
            }
        });
    
        callbacks.leaveVertex({ currentVertex, previousVertex });
    
        // Memorize current vertex before next loop.
        previousVertex = currentVertex;
    }
}

module.exports = {
    breadthFirstSearch,
} 

/*
function enterVertex(vertex) {
    console.log(`enter vertex ${vertex.currentVertex.value}`);
}

function leaveVertex(vertex) {
    console.log(`leave vertex ${vertex.currentVertex.value}`);
}

function test() {

    let grahp = new Graph();
        
    let v1 = new Vertex(1);
    let v2 = new Vertex(2);
    let v3 = new Vertex(3);
    let v4 = new Vertex(4);
    let v5 = new Vertex(5);
    let v6 = new Vertex(6);

    let weight = 1;

    let e1 = new Edge(v1,v2,weight);
    v1.addEdge(e1);
    v2.addEdge(e1);

    let e2 = new Edge(v1,v3,weight);
    v1.addEdge(e2);
    v3.addEdge(e2);

    let e3 = new Edge(v2,v4,weight);
    v2.addEdge(e3);
    v4.addEdge(e3);

    let e4 = new Edge(v2,v5,weight);
    v2.addEdge(e4);
    v5.addEdge(e4);

    let e5 = new Edge(v3,v5,weight);
    v3.addEdge(e5);
    v5.addEdge(e5);

    let e6 = new Edge(v3,v4,weight);
    v3.addEdge(e6);
    v4.addEdge(e6);

    let e7 = new Edge(v4,v6,weight);
    v4.addEdge(e7);
    v6.addEdge(e7);

    let e8 = new Edge(v5,v6,weight);
    v5.addEdge(e8);
    v6.addEdge(e8);

    grahp.addVertex(v1);
    grahp.addVertex(v2);
    grahp.addVertex(v3);
    grahp.addVertex(v4);
    grahp.addVertex(v5);
    grahp.addVertex(v6);

    grahp.addEdge(e1);
    grahp.addEdge(e2);
    grahp.addEdge(e3);
    grahp.addEdge(e4);
    grahp.addEdge(e5);
    grahp.addEdge(e6);
    grahp.addEdge(e7);
    grahp.addEdge(e8);

    let callback = {
        enterVertex : enterVertex,
        //leaveVertex : leaveVertex
    }

    breadthFirstSearch(grahp, v1, callback);
}

test();
*/
