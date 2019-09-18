
const LinkedList = require("./linkedList.js");

class Graph {
    constructor(isDirected = false) {
        this.vertices = {};
        this.edges = {};
        this.isDirected = isDirected;
    }

    addVertex(vertex) {
        this.vertices[vertex.value] = vertex;
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
        let startVertex = this.getVertexByKey(edge.startVertex.getKey());   
        let endVertex   = this.getVertexByKey(edge.endVertex.getKey());

        //if vertices are not there
        if(!startVertex) {
            this.addVertex(edge.startVertex);
            startVertex = this.getVertexByKey(edge.startVertex.getKey());
        }

        if(!endVertex) {
            this.addVertex(edge.endVertex);
            endVertex = this.getVertexByKey(edge.endVertex.getKey());
        }

        this.edges[edge.getKey()] = edge;
        //add the edges to the vertices
        if(this.isDirected) {
            startVertex.addEdge(edge);
        }else {
            startVertex.addEdge(edge);
            endVertex.addEdge(edge);
        }
    }

    deleteEdge(edge) {

        delete this.edges[edge.getKey()];

        let startVertex = this.getVertexByKey(edge.startVertex.getKey());   
        let endVertex   = this.getVertexByKey(edge.endVertex.getKey());

        startVertex.deleteEdge(edge);
        endVertex.deleteEdge(edge);
    }

    findEdge(startVertex, endVertex) {
        let startVertex = this.getVertexByKey(edge.startVertex.getKey());   
        let endVertex   = this.getVertexByKey(edge.endVertex.getKey());
        let vertex = startVertex || endVertex;

        if(!vertex) {
            return null;
        }

        vertex.findEdge(endVertex);
    }

    getWeight() {
         let weight = 0;
         let edges = this.getAllEdges();

         for(let i = 0; edges.length; i++) {
             weight += edges[i].weight;
         }

         return weight;
    }
    reverse() {
        let edges = this.getAllEdges();

        this.getAllEdges().forEach(edge => {
            this.deleteEdge(edge);
            
            edge.reverse();
            this.addEdge(edge);
        });
    }

    getVertexByKey() {
        return this.vertices[key];
    }

    getAdjacencyMatrix() {}

    print() {}
}

class GraphVertex  {
    constructor(value) {
        this.value = value;

        this.edges = new LinkedList();
    }

    addEdge(edge) {
        this.edges.append(edge);
    }

    deleteEdge(edge) {
        this.edges.delete(edge);
    }

    deleteAllEdges() {
        let edges = this.getEdges();
        edges.forEach(e => this.deleteEdge(e));
    }


    getNeighbors() {

    }

    getEdges() {
        let edges = this.edges.toArray();
        return edges.map(e => e.value); 
    }

    hasEdge() {}

    hasNeighbor() {}

    getKey() {
        return this.value;
    }
    toString() {
        return this.getKey();
    }   
}

class GraphEdge {
    constructor(startVertex, endVertex, weight = 0) {
        this.startVertex = startVertex;
        this.endVertex = endVertex;
        this.weight = weight;
    }

    reverseVertices() {
        let temp = this.startVertex;
        this.startVertex = this.endVertex;
        this.endVertex = temp;
    }

    getKey() {
        return `${this.startVertex.getKey()}_${this.endVertex.toString()}_${this.weight}`;
    }

    toString() {
        return this.getKey();
    }
}

let graph = new Graph(isDirected = true);

let a = new GraphVertex("A");
let b = new GraphVertex("B");
let d = new GraphVertex("D");

let a_b = new GraphEdge(a, b, 7);
let a_d = new GraphEdge(a, d, 5);

a.addEdge(a_b);
a.addEdge(a_d);

graph.addVertex(a);
graph.addVertex(b);
graph.addVertex(d);

console.log(a.getEdges().map(e => e.toString()));
a.deleteAllEdges();
console.log(a.getEdges().map(e => e.toString()));
