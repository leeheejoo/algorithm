/*
    HashTable을 구현하시오. (Chaining 방식으로 구현)
*/

const LinkedList = require("./LinkedList").LinkedList;

const defaultHashTableSize = 128;

class HashTable {

    constructor(hashTableSize = defaultHashTableSize) {
        this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
        this.keys = {};
    }

    hash(key) {
        // For simplicity reasons we will just use character codes sum of all characters of the key
        // to calculate the hash.
        //
        // But you may also use more sophisticated approaches like polynomial string hash to reduce the
        // number of collisions:
        //
        // hash = charCodeAt(0) * PRIME^(n-1) + charCodeAt(1) * PRIME^(n-2) + ... + charCodeAt(n-1)
        //
        // where charCodeAt(i) is the i-th character code of the key, n is the length of the key and
        // PRIME is just any prime number like 31.
        const hash = Array.from(key).reduce((hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),0,);

        // Reduce hash number so it would fit hash table size.
        return hash % this.buckets.length;
    }

    set(key, value) {

        const keyHash = this.hash(key);
        this.keys[key] = keyHash;
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find(key, nodeValue => nodeValue.key === key);

        if (!node) {
            bucketLinkedList.append({ key, value });
        } else {
            node.value.value = value;
        }
    }

    delete(key) {

        const keyHash = this.hash(key);
        delete this.keys[key];
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find(key, nodeValue => nodeValue.key === key);

        if (node) {
            return bucketLinkedList.delete(node.value);
        }

        return null;
    }

    get(key) {

        const bucketLinkedList = this.buckets[this.hash(key)];
        const node = bucketLinkedList.find(key,  nodeValue => nodeValue.key === key);

        return node ? node.value.value : undefined;
    }

    has(key) {
        return Object.hasOwnProperty.call(this.keys, key);
    }

    getKeys() {
        return Object.keys(this.keys);
    }
}

module.exports = {
    HashTable,
} 


function test() {

    let hash = new HashTable();
		
    hash.set('one',1);
    hash.set('two',2);
    hash.set('three',3);
    hash.set('four',4);
    hash.set('five',5);
    hash.set('six',6);
    hash.set('seven',7);

    // if(hash.has('five')){
    //     let four = hash.get('five');
    //     console.log(four);
    // }

    //hash.delete('four');

    //console.log(hash.getKeys());
}

test();
