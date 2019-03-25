/*
    이진 트리를 구현하고 전위, 중위, 후위 탐색기능을 추가하세요.
*/

class BinaryTreeNode {

    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    setValue(value){
        this.value = value;
    }

    getValue(){
        return this.value;
    }

    setLeft(left){
        this.left = left;
    }

    getLeft(){
        return this.left;
    }

    setRight(right){
        this.right = right;
    }

    getRight(){
        return this.right;
    }
};

class BinaryTree {

    constructor() {
        this.root = null;
    }

	addNode(value) {
    
        if (this.root == null) {
			let node = new BinaryTreeNode();
			node.setValue(value);
			this.root = node; // root에 값이 없으면, root에 값을 넣는다.
		} else {
            // root가 존재할 경우, root 변경하기 위한 메소드 호출
			this.addNodeWithRoot(value, this.root); 
		}

    }

	addNodeWithRoot(value, root) {

        if (value <= root.getValue()) {

			if (root.getLeft() == null) {
				let node = new BinaryTreeNode();
				node.setValue(value);
				root.setLeft(node);
			} else {
				this.addNodeWithRoot(value, root.getLeft());
			}

		} else {

			if (root.getRight() == null) {
				let node = new BinaryTreeNode();
				node.setValue(value);
				root.setRight(node);
			} else {
				this.addNodeWithRoot(value, root.getRight());
			}
		}

	}

	preOrder(root) {

		if (root == null)
			return;

        console.log(root.getValue() + " ");
	    this.preOrder(root.getLeft());
	    this.preOrder(root.getRight());
	}

	inOrder(root) {

		if (root == null)
			return;

		this.inOrder(root.getLeft());
        console.log(root.getValue() + " ");
	    this.inOrder(root.getRight());
	}

	postOrder(root) {

		if (root == null)
            return;
            
		this.postOrder(root.getLeft());
	    this.postOrder(root.getRight());
        console.log(root.getValue() + " ");
	}

}

module.exports = {
    BinaryTree,
} 

/*

function test() {

    let tree = new BinaryTree();
		
    tree.addNode(24);
    tree.addNode(15);
    tree.addNode(19);
    tree.addNode(2);
    tree.addNode(28);
    tree.addNode(27);
    tree.addNode(30);

    console.log("PreOrder : "); 
    tree.preOrder(tree.root);
    console.log("InOrder : ");
    tree.inOrder(tree.root);
    console.log("PostOrder : ");
    tree.postOrder(tree.root);
}

test();

*/