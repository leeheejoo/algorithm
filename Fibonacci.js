function fibonacci(n) {

    const fibSequence = [1];
  
    let currentValue = 1;
    let previousValue = 0;
  
    if (n === 1) {
        return fibSequence;
    }
  
    let iterationsCounter = n - 1;
  
    while (iterationsCounter) {
        currentValue += previousValue;
        previousValue = currentValue - previousValue;
    
        fibSequence.push(currentValue);
    
        iterationsCounter -= 1;
    }
  
    return fibSequence;
}

function fibonacciNth(n) {

    let currentValue = 1;
    let previousValue = 0;
  
    if (n === 1) {
        return 1;
    }
  
    let iterationsCounter = n - 1;
  
    while (iterationsCounter) {
        currentValue += previousValue;
        previousValue = currentValue - previousValue;
    
        iterationsCounter -= 1;
    }
  
    return currentValue;
}


function fibonacciClosedForm(position) {

    const topMaxValidPosition = 75;
  
    // Check that position is valid.
    if (position < 1 || position > topMaxValidPosition) {
          throw new Error(`Can't handle position smaller than 1 or greater than ${topMaxValidPosition}`);
    }
  
    // Calculate √5 to re-use it in further formulas.
    const sqrt5 = Math.sqrt(5);
    // Calculate φ constant (≈ 1.61803).
    const phi = (1 + sqrt5) / 2;
  
    // Calculate fibonacci number using Binet's formula.
    return Math.floor((phi ** position) / sqrt5 + 0.5);
}


function test() {

    let num = 11;
    console.log(fibonacci(num).toString());
    console.log(fibonacciNth(num));
    console.log(fibonacciClosedForm(num));
}

test();