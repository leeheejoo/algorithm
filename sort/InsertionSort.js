const Sort = require("./Sort").Sort;

class InsertionSort extends Sort {
    sort(originalArray) {
        const array = [...originalArray];
    
        // Go through all array elements...
        for (let i = 0; i < array.length; i += 1) {
            let currentIndex = i;
    
            // Call visiting callback.
            //this.callbacks.visitingCallback(array[i]);
    
            // Go and check if previous elements and greater then current one.
            // If this is the case then swap that elements.
            while ( array[currentIndex - 1] !== undefined && this.comparator.lessThan(array[currentIndex], array[currentIndex - 1])) {
                // Call visiting callback.
                //this.callbacks.visitingCallback(array[currentIndex - 1]);
        
                // Swap the elements.
                const tmp = array[currentIndex - 1];
                array[currentIndex - 1] = array[currentIndex];
                array[currentIndex] = tmp;
        
                // Shift current index left.
                currentIndex -= 1;
            }
        }
    
        return array;
    }
}

module.exports = {
    InsertionSort,
} 

/*
function test() {
    let sort = new InsertionSort();
    let sorted = sort.sort([4,6,23,6,7,13,1,5,2,3]);
    console.log(sorted.toString());
}

test();
*/