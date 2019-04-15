
const Comparator = require("../utils/Comparator").Comparator;
const QuickSort = require("../sort/QuickSort").QuickSort;

function jumpSearch(sortedArray, seekElement, comparatorCallback) {
    const comparator = new Comparator(comparatorCallback);
    const arraySize = sortedArray.length;
  
    if (!arraySize) {
      // We can't find anything in empty array.
      return -1;
    }
  
    // Calculate optimal jump size.
    // Total number of comparisons in the worst case will be ((arraySize/jumpSize) + jumpSize - 1).
    // The value of the function ((arraySize/jumpSize) + jumpSize - 1) will be minimum
    // when jumpSize = √array.length.
    const jumpSize = Math.floor(Math.sqrt(arraySize));
  
    // Find the block where the seekElement belong to.
    let blockStart = 0;
    let blockEnd = jumpSize;
    while (comparator.greaterThan(seekElement, sortedArray[Math.min(blockEnd, arraySize) - 1])) {
        // Jump to the next block.
        blockStart = blockEnd;
        blockEnd += jumpSize;
    
        // If our next block is out of array then we couldn't found the element.
        if (blockStart > arraySize) {
            return -1;
        }
    }
  
    // Do linear search for seekElement in subarray starting from blockStart.
    let currentIndex = blockStart;
    while (currentIndex < Math.min(blockEnd, arraySize)) {
        if (comparator.equal(sortedArray[currentIndex], seekElement)) {
            return currentIndex;
        }
    
        currentIndex += 1;
    }
  
    return -1;
}

module.exports = {
    jumpSearch,
} 

/*
function test() {
    let sort = new QuickSort();
    let sortedArray = sort.sort([1,3,5,6,23,2,61,6,3,1,6,8,9,43,3]);
    console.log(`sorted array is ${sortedArray.toString()}`);
    let ret = jumpSearch(sortedArray, 23);
    console.log(ret.toString());
}

test();
*/
