function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    if (n < 1) {
        return 0;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);

}

function fibonacciMemo(n, memo) {
    memo = memo || {};
    if (n === 1 || n === 2) {
        return 1;
    }
    if (n < 1) {
        return 0;
    }
    if (memo[n]) {
        return memo[n];
    }
    return memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);

}

function fibonacciIterative(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    if (n < 1) {
        return 0;
    }
    let prev = 1;
    let result = 1;
    for (let i = 3; i <= n; i++) {
        const temp = result;
        result = prev + result;
        prev = temp;
    }
    return result;
}

const fun = fibonacciIterative;

console.log(fun(8));
console.log(fun(7));
console.log(fun(6));
console.log(fun(5));
console.log(fun(4));
console.log(fun(3));
console.log(fun(2));
console.log(fun(1));
console.log(fun(0));
console.log(fun(40));

console.log(fibonacciMemo(8, {}));
console.log(fibonacciMemo(7, {}));
console.log(fibonacciMemo(6, {}));
console.log(fibonacciMemo(5, {}));
console.log(fibonacciMemo(4, {}));
console.log(fibonacciMemo(3, {}));
console.log(fibonacciMemo(2, {}));
console.log(fibonacciMemo(1, {}));
console.log(fibonacciMemo(0, {}));
console.log(fibonacciMemo(40, {}));
console.log(fibonacci(40));
