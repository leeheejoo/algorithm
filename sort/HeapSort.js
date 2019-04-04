const Sort = require("./Sort").Sort;
const MinHeap = require("../data-structures/Heap").MinHeap;

class HeapSort extends Sort {
    sort(originalArray) {
        const sortedArray = [];
        const minHeap = new MinHeap(this.callbacks.compareCallback);
    
        // Insert all array elements to the heap.
        originalArray.forEach((element) => {
            // Call visiting callback.
            //this.callbacks.visitingCallback(element);
    
            minHeap.add(element);
        });
    
        // Now we have min heap with minimal element always on top.
        // Let's poll that minimal element one by one and thus form the sorted array.
        while (!minHeap.isEmpty()) {
            const nextMinElement = minHeap.poll();
    
            // Call visiting callback.
            //this.callbacks.visitingCallback(nextMinElement);
    
            sortedArray.push(nextMinElement);
        }
    
        return sortedArray;
    }
}


module.exports = {
    HeapSort,
} 

/*
function test() {
    let sort = new HeapSort();
    let sorted = sort.sort([4,6,23,6,7,13,1,5,2,3]);
    console.log(sorted.toString());
}

test();
*/
