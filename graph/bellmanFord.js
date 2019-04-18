const Graph = require("../data-structures/graph/Graph").Graph;
const Edge = require("../data-structures/graph/Edge").Edge;
const Vertex = require("../data-structures/graph/Vertex").Vertex;

function bellmanFord(graph, startVertex) {

    const distances = {};
    const previousVertices = {};
  
    // Init all distances with infinity assuming that currently we can't reach
    // any of the vertices except start one.
    distances[startVertex.getKey()] = 0;
    graph.getAllVertices().forEach((vertex) => {
        previousVertices[vertex.getKey()] = null;
        if (vertex.getKey() !== startVertex.getKey()) {
            distances[vertex.getKey()] = Infinity;
        }
    });
  
    // We need (|V| - 1) iterations.
    for (let iteration = 0; iteration < (graph.getAllVertices().length - 1); iteration += 1) {
        // During each iteration go through all vertices.
        Object.keys(distances).forEach((vertexKey) => {
            const vertex = graph.getVertexByKey(vertexKey);
    
            // Go through all vertex edges.
            graph.getNeighbors(vertex).forEach((neighbor) => {
                const edge = graph.findEdge(vertex, neighbor);
                // Find out if the distance to the neighbor is shorter in this iteration
                // then in previous one.
                const distanceToVertex = distances[vertex.getKey()];
                const distanceToNeighbor = distanceToVertex + edge.weight;
                if (distanceToNeighbor < distances[neighbor.getKey()]) {
                    distances[neighbor.getKey()] = distanceToNeighbor;
                    previousVertices[neighbor.getKey()] = vertex;
                }
            });
        });
    }
  
    return { distances, previousVertices };
}

module.exports = {
    bellmanFord,
} 

function test() {

    let grahp = new Graph(true);
        
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

    let ret = bellmanFord(grahp,v1);

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

