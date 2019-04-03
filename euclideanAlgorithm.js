//최대공약수
function euclideanAlgorithm(originalA, originalB) {
    // Make input numbers positive.
    const a = Math.abs(originalA);
    const b = Math.abs(originalB);
  
    // To make algorithm work faster instead of subtracting one number from the other
    // we may use modulo operation.
    return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}

module.exports = {
    euclideanAlgorithm,
} 

/*
function test() {

    console.log(euclideanAlgorithm(27,11));
}

test();
*/