const Edge = require("./Edge").Edge;
const Vertex = require("./Vertex").Vertex;

class Graph {

    constructor(isDirected = false) {
        this.vertices = {};
        this.edges = {};
        this.isDirected = isDirected;
    }
  
    addVertex(newVertex) {
        this.vertices[newVertex.getKey()] = newVertex;
        return this;
    }
  
    getVertexByKey(vertexKey) {
        return this.vertices[vertexKey];
    }
  
    getNeighbors(vertex) {
        return vertex.getNeighbors();
    }
  
    getAllVertices() {
        return Object.values(this.vertices);
    }
  
    getAllEdges() {
        return Object.values(this.edges);
    }
  
    addEdge(edge) {
        // Try to find and end start vertices.
        let startVertex = this.getVertexByKey(edge.startVertex.getKey());
        let endVertex = this.getVertexByKey(edge.endVertex.getKey());
    
        // Insert start vertex if it wasn't inserted.
        if (!startVertex) {
            this.addVertex(edge.startVertex);
            startVertex = this.getVertexByKey(edge.startVertex.getKey());
        }
    
        // Insert end vertex if it wasn't inserted.
        if (!endVertex) {
            this.addVertex(edge.endVertex);
            endVertex = this.getVertexByKey(edge.endVertex.getKey());
        }
    
        // Check if edge has been already added.
        if (this.edges[edge.getKey()]) {
            throw new Error('Edge has already been added before');
        } else {
            this.edges[edge.getKey()] = edge;
        }
    
        // Add edge to the vertices.
        if (this.isDirected) {
            // If graph IS directed then add the edge only to start vertex.
            startVertex.addEdge(edge);
        } else {
            // If graph ISN'T directed then add the edge to both vertices.
            startVertex.addEdge(edge);
            endVertex.addEdge(edge);
        }
    
        return this;
    }
  
    deleteEdge(edge) {
        // Delete edge from the list of edges.
        if (this.edges[edge.getKey()]) {
            delete this.edges[edge.getKey()];
        } else {
            throw new Error('Edge not found in graph');
        }
    
        // Try to find and end start vertices and delete edge from them.
        const startVertex = this.getVertexByKey(edge.startVertex.getKey());
        const endVertex = this.getVertexByKey(edge.endVertex.getKey());
    
        startVertex.deleteEdge(edge);
        endVertex.deleteEdge(edge);
    }
  
    findEdge(startVertex, endVertex) {
        const vertex = this.getVertexByKey(startVertex.getKey());
    
        if (!vertex) {
            return null;
        }
    
        return vertex.findEdge(endVertex);
    }
  
    getWeight() {
        return this.getAllEdges().reduce((weight, graphEdge) => {
            return weight + graphEdge.weight;
        }, 0);
    }
  
    reverse() {

        this.getAllEdges().forEach((edge) => {
            // Delete straight edge from graph and from vertices.
            this.deleteEdge(edge);
    
            // Reverse the edge.
            edge.reverse();
    
            // Add reversed edge back to the graph and its vertices.
            this.addEdge(edge);
        });
  
        return this;
    }

    getVerticesIndices() {
        const verticesIndices = {};
        this.getAllVertices().forEach((vertex, index) => {
            verticesIndices[vertex.getKey()] = index;
        });
    
        return verticesIndices;
    }
  
    getAdjacencyMatrix() {
        const vertices = this.getAllVertices();
        const verticesIndices = this.getVerticesIndices();
    
        // Init matrix with infinities meaning that there is no ways of
        // getting from one vertex to another yet.
        const adjacencyMatrix = Array(vertices.length).fill(null).map(() => {
            return Array(vertices.length).fill('x');
        });
    
        // Fill the columns.
        vertices.forEach((vertex, vertexIndex) => {
            vertex.getNeighbors().forEach((neighbor) => {
                const neighborIndex = verticesIndices[neighbor.getKey()];
                adjacencyMatrix[vertexIndex][neighborIndex] = this.findEdge(vertex, neighbor).weight;
            });
        });
    
        return adjacencyMatrix;
    }

    toString() {
        return Object.keys(this.vertices).toString();
    }
}

module.exports = {
    Graph,
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

    let adjacencyMatrix = grahp.getAdjacencyMatrix();
    adjacencyMatrix.forEach( 
        row => { 
            console.log(row.toString())
        }
    );
}

test();
*/