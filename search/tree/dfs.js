const BinaryTree = require("../../data-structures/BinaryTree").BinaryTree;

function initCallbacks(callbacks = {}) {

    const initiatedCallbacks = {};
    const stubCallback = () => {};
    const defaultAllowTraversalCallback = () => true;

    initiatedCallbacks.allowTraversal = callbacks.allowTraversal || defaultAllowTraversalCallback;
    initiatedCallbacks.enterNode = callbacks.enterNode || stubCallback;
    initiatedCallbacks.leaveNode = callbacks.leaveNode || stubCallback;

    return initiatedCallbacks;
}

function depthFirstSearchRecursive(node, callbacks) {

    callbacks.enterNode(node);

    if (node.left && callbacks.allowTraversal(node, node.left)) {
        depthFirstSearchRecursive(node.left, callbacks);
    }
  
    if (node.right && callbacks.allowTraversal(node, node.right)) {
        depthFirstSearchRecursive(node.right, callbacks);
    }
  
    callbacks.leaveNode(node);
}
  
function depthFirstSearch(rootNode, callbacks) {

    const processedCallbacks = initCallbacks(callbacks);
    depthFirstSearchRecursive(rootNode, processedCallbacks);

}

module.exports = {
    depthFirstSearch,
} 

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
   
    depthFirstSearch(tree.root, callback);
}

test();

