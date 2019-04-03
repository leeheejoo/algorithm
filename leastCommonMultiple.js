const euclideanAlgorithm = require("./euclideanAlgorithm").euclideanAlgorithm;

// 최소 공배수
function leastCommonMultiple(a, b) {
    return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b);
}

/*
function test() {

    console.log(leastCommonMultiple(27,18));
}

test();
*/