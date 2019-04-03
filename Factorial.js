

function factorial(number) {
    let result = 1;
  
    for (let i = 2; i <= number; i += 1) {
        result *= i;
    }
  
    return result;
}

function factorialRecursive(number) {
    return number > 1 ? number * factorialRecursive(number - 1) : 1;
}


function test() {

    console.log(factorial(10));
    console.log(factorialRecursive(10));
}

test();