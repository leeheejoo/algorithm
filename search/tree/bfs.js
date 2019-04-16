const Queue = require("../../data-structures/Queue").Queue;
const BinaryTree = require("../../data-structures/BinaryTree").BinaryTree;

function initCallbacks(callbacks = {}) {
    const initiatedCallback = callbacks;
  
    const stubCallback = () => {};
    const defaultAllowTraversal = () => true;
  
    initiatedCallback.allowTraversal = callbacks.allowTraversal || defaultAllowTraversal;
    initiatedCallback.enterNode = callbacks.enterNode || stubCallback;
    initiatedCallback.leaveNode = callbacks.leaveNode || stubCallback;
  
    return initiatedCallback;
} 
  
 function breadthFirstSearch(rootNode, originalCallbacks) {

    const callbacks = initCallbacks(originalCallbacks);

    const nodeQueue = new Queue();
  
    nodeQueue.enqueue(rootNode);
  
    while (!nodeQueue.isEmpty()) {

        const currentNode = nodeQueue.dequeue();
    
        callbacks.enterNode(currentNode);
    
        if (currentNode.left && callbacks.allowTraversal(currentNode, currentNode.left)) {
            nodeQueue.enqueue(currentNode.left);
        }

        if (currentNode.right && callbacks.allowTraversal(currentNode, currentNode.right)) {
            nodeQueue.enqueue(currentNode.right);
        }
    
        callbacks.leaveNode(currentNode);
    }
}

module.exports = {
    breadthFirstSearch,
} 

/*
function enterNode(node) {
    console.log(`enter node ${node.value}`);
}

function leaveNode(node) {
    console.log(`leave node ${node.value}`);
}

function test() {

    let tree = new BinaryTree();
    tree.addNode(24);
    tree.addNode(15);
    tree.addNode(19);
    tree.addNode(2);
    tree.addNode(28);
    tree.addNode(27);
    tree.addNode(30);

    let callback = {
        enterNode : enterNode,
        //leaveNode : leaveNode
    }

    breadthFirstSearch(tree.root, callback);
}

test();
*/
