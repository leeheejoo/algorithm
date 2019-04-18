const Graph = require("../data-structures/graph/Graph").Graph;
const Edge = require("../data-structures/graph/Edge").Edge;
const Vertex = require("../data-structures/graph/Vertex").Vertex;
const PriorityQueue = require("../data-structures/PriorityQueue").PriorityQueue;


function dijkstra(graph, startVertex) {
    // Init helper variables that we will need for Dijkstra algorithm.
    const distances = {};
    const visitedVertices = {};
    const previousVertices = {};
    const queue = new PriorityQueue();
  
    // Init all distances with infinity assuming that currently we can't reach
    // any of the vertices except the start one.
    graph.getAllVertices().forEach((vertex) => {
        distances[vertex.getKey()] = Infinity;
        previousVertices[vertex.getKey()] = null;
    });
  
    // We are already at the startVertex so the distance to it is zero.
    distances[startVertex.getKey()] = 0;
  
    // Init vertices queue.
    queue.add(startVertex, distances[startVertex.getKey()]);
  
    // Iterate over the priority queue of vertices until it is empty.
    while (!queue.isEmpty()) {

        //console.log(queue.toString());

        // Fetch next closest vertex.
        const currentVertex = queue.poll();
        // Iterate over every unvisited neighbor of the current vertex.
        currentVertex.getNeighbors().forEach((neighbor) => {

            // Don't visit already visited vertices.
            if (!visitedVertices[neighbor.getKey()]) {
                // Update distances to every neighbor from current vertex.
                const edge = graph.findEdge(currentVertex, neighbor);
        
                const existingDistanceToNeighbor = distances[neighbor.getKey()];
                const distanceToNeighborFromCurrent = distances[currentVertex.getKey()] + edge.weight;
        
                // If we've found shorter path to the neighbor - update it.
                if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
                    distances[neighbor.getKey()] = distanceToNeighborFromCurrent;
        
                    // Change priority of the neighbor in a queue since it might have became closer.
                    if (queue.hasValue(neighbor)) {
                        queue.changePriority(neighbor, distances[neighbor.getKey()]);
                    }
        
                    // Remember previous closest vertex.
                    previousVertices[neighbor.getKey()] = currentVertex;
                }
        
                // Add neighbor to the queue for further visiting.
                if (!queue.hasValue(neighbor)) {
                    queue.add(neighbor, distances[neighbor.getKey()]);
                }
            }
        });
    
        // Add current vertex to visited ones to avoid visiting it again later.
        visitedVertices[currentVertex.getKey()] = currentVertex;
    }
  
    // Return the set of shortest distances to all vertices and the set of
    // shortest paths to all vertices in a graph.
    return { distances, previousVertices };
}

module.exports = {
    dijkstra,
} 

/*
function test() {

    let grahp = new Graph();
        
    let v1 = new Vertex(1);
    let v2 = new Vertex(2);
    let v3 = new Vertex(3);
    let v4 = new Vertex(4);
    let v5 = new Vertex(5);
    let v6 = new Vertex(6);

    let e1 = new Edge(v1,v2,1);
    v1.addEdge(e1);
    v2.addEdge(e1);

    let e2 = new Edge(v1,v3,2);
    v1.addEdge(e2);
    v3.addEdge(e2);

    let e3 = new Edge(v2,v4,3);
    v2.addEdge(e3);
    v4.addEdge(e3);

    let e4 = new Edge(v2,v5,4);
    v2.addEdge(e4);
    v5.addEdge(e4);

    let e5 = new Edge(v3,v5,6);
    v3.addEdge(e5);
    v5.addEdge(e5);

    let e6 = new Edge(v3,v4,5);
    v3.addEdge(e6);
    v4.addEdge(e6);

    let e7 = new Edge(v4,v6,7);
    v4.addEdge(e7);
    v6.addEdge(e7);

    let e8 = new Edge(v5,v6,8);
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

    let ret = dijkstra(grahp,v1);

    Object.keys(ret.previousVertices).forEach(function (key) {

        console.log(`************* vertex${key} : distance ${ret.distances[key]}**************`);

        let vertex = ret.previousVertices[key];
        let path;
        while(vertex){
            let pv = vertex.getKey();

            if(path)
                path += `->${pv}`; 
            else
                path = pv;

            vertex = ret.previousVertices[pv];
        }

        if(path)
            console.log(path);
    });

}

test();
*/
