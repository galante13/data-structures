function findFactorial(n) {
    if(n === 2) {
        return 2;
    }
    if(n === 1) {
        return 1;
    }

    return n * findFactorial(n -1);
}
function findFactorialIterative(n) {
    if(n === 2) {
        return 2;
    }
    if(n === 1) {
        return 1;
    }
    let result = 1;
    while(n > 1){
        result *= n;
        n--;
    }

    return result;
}

const fun = findFactorial;
console.log(fun(5));
console.log(fun(4));
console.log(fun(3));
console.log(fun(2));
console.log(fun(1));
