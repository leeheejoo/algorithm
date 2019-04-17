class DisjointSetItem {

    constructor(value, keyCallback) {
        this.value = value;
        this.keyCallback = keyCallback;
        this.parent = null;
        this.children = {};
    }
  
    getKey() {
        // Allow user to define custom key generator.
        if (this.keyCallback) {
            return this.keyCallback(this.value);
        }
    
        // Otherwise use value as a key by default.
        return this.value;
    }
  
    getRoot() {
        return this.isRoot() ? this : this.parent.getRoot();
    }
  
    isRoot() {
        return this.parent === null;
    }
  
    getRank() {
        if (this.getChildren().length === 0) {
            return 0;
        }
    
        let rank = 0;
    
        this.getChildren().forEach((child) => {
            // Count child itself.
            rank += 1;
    
            // Also add all children of current child.
            rank += child.getRank();
        });
    
        return rank;
    }
  
    getChildren() {
        return Object.values(this.children);
    }
  
    setParent(parentItem, forceSettingParentChild = true) {
        this.parent = parentItem;
        if (forceSettingParentChild) {
            parentItem.addChild(this);
        }
    
        return this;
    }
  
    addChild(childItem) {
        this.children[childItem.getKey()] = childItem;
        childItem.setParent(this, false);
    
        return this;
    }
}

class DisjointSet {

    constructor(keyCallback) {
        this.keyCallback = keyCallback;
        this.items = {};
    }

    makeSet(itemValue) {
        const disjointSetItem = new DisjointSetItem(itemValue, this.keyCallback);
    
        if (!this.items[disjointSetItem.getKey()]) {
            // Add new item only in case if it not presented yet.
            this.items[disjointSetItem.getKey()] = disjointSetItem;
        }
    
        return this;
    }
  
    find(itemValue) {
        const templateDisjointItem = new DisjointSetItem(itemValue, this.keyCallback);
    
        // Try to find item itself;
        const requiredDisjointItem = this.items[templateDisjointItem.getKey()];
    
        if (!requiredDisjointItem) {
            return null;
        }
    
        return requiredDisjointItem.getRoot().getKey();
    }
  
    union(valueA, valueB) {
        const rootKeyA = this.find(valueA);
        const rootKeyB = this.find(valueB);
    
        if (rootKeyA === null || rootKeyB === null) {
            throw new Error('One or two values are not in sets');
        }
    
        if (rootKeyA === rootKeyB) {
            // In case if both elements are already in the same set then just return its key.
            return this;
        }
    
        const rootA = this.items[rootKeyA];
        const rootB = this.items[rootKeyB];
    
        if (rootA.getRank() < rootB.getRank()) {
            // If rootB's tree is bigger then make rootB to be a new root.
            rootB.addChild(rootA);
    
            return this;
        }
    
        // If rootA's tree is bigger then make rootA to be a new root.
        rootA.addChild(rootB);
    
        return this;
    }
  
    inSameSet(valueA, valueB) {
        const rootKeyA = this.find(valueA);
        const rootKeyB = this.find(valueB);
    
        if (rootKeyA === null || rootKeyB === null) {
            throw new Error('One or two values are not in sets');
        }
    
        return rootKeyA === rootKeyB;
    }
}


module.exports = {
    DisjointSetItem,
    DisjointSet
} 

/*
function test() {

    let ds = new DisjointSet;
    ds.makeSet(1);
    ds.makeSet(2);
    ds.makeSet(3);
    ds.makeSet(4);
    ds.makeSet(5);
    ds.makeSet(6);
    ds.makeSet(7);
    ds.makeSet(8);

    ds.union(1,2);
    ds.union(1,3);
    ds.union(2,4);

    console.log(`#1 root is ${ds.find(4)}`);

    ds.union(5,6);

    console.log(`#2 root is ${ds.find(6)}`);

    ds.union(7,8);

    console.log(`#3 root is ${ds.find(8)}`);

    ds.union(3,6);

    console.log(`#4 root is ${ds.find(6)}`);

    ds.union(2,8);

    console.log(`#5 root is ${ds.find(7)}`);
}

test();
*/