const Graph = require("../data-structures/graph/Graph").Graph;
const Edge = require("../data-structures/graph/Edge").Edge;
const Vertex = require("../data-structures/graph/Vertex").Vertex;
const QuickSort = require("../sort/QuickSort").QuickSort;
const DisjointSet = require("../data-structures/DisjointSet").DisjointSet;


function kruskal(graph) {
    // It should fire error if graph is directed since the algorithm works only
    // for undirected graphs.
    if (graph.isDirected) {
        throw new Error('Kruskal\'s algorithms works only for undirected graphs');
    }

    // Init new graph that will contain minimum spanning tree of original graph.
    const minimumSpanningTree = new Graph();

    // Sort all graph edges in increasing order.
    const sortingCallbacks = {

        compareCallback: (graphEdgeA, graphEdgeB) => {

            if (graphEdgeA.weight === graphEdgeB.weight) {
                return 1;
            }

            return graphEdgeA.weight <= graphEdgeB.weight ? -1 : 1;
        },
    };
    const sortedEdges = new QuickSort(sortingCallbacks).sort(graph.getAllEdges());

    // Create disjoint sets for all graph vertices.
    const keyCallback = graphVertex => graphVertex.getKey();
    const disjointSet = new DisjointSet(keyCallback);

    graph.getAllVertices().forEach((graphVertex) => {
        disjointSet.makeSet(graphVertex);
    });

    // Go through all edges started from the minimum one and try to add them
    // to minimum spanning tree. The criteria of adding the edge would be whether
    // it is forms the cycle or not (if it connects two vertices from one disjoint
    // set or not).
    for (let edgeIndex = 0; edgeIndex < sortedEdges.length; edgeIndex += 1) {

        const currentEdge = sortedEdges[edgeIndex];

        // Check if edge forms the cycle. If it does then skip it.
        if (!disjointSet.inSameSet(currentEdge.startVertex, currentEdge.endVertex)) {
            // Unite two subsets into one.
            disjointSet.union(currentEdge.startVertex, currentEdge.endVertex);

            // Add this edge to spanning tree.
            minimumSpanningTree.addEdge(currentEdge);
        }
    }

    return minimumSpanningTree;
}

module.exports = {
    kruskal,
} 


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

    let ret = kruskal(grahp);

}

test();
