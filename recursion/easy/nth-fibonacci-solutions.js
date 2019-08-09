// O(2^n)-time; O(n)-space -- Lots of duplicate work...
// fib(6) calls fib (5) and fib(4)
// fib(5) calls fib (4) and fib(3) && fib(4) calls fib (3) and fib(2)
// fib(4) calls fib (3) and fib(2)
// fib(3) has been called 3 times etc
// my initlal solution
function getNthFib(n) {
    if (n === 2) {
      return 1;
    } else if (n === 1) {
      return 0;
    } else {
      return getNthFib(n - 1) + getNthFib(n - 2);
    }
  }
  
// O(n)-time; O(n)-space
// because each number gets calculated once and gets stored 
function getNthFib(n) {
    let solved = { 1: 0, 2: 1, 3: 1 };
    if (n in solved) {
        return solved[n];
    } else {
        solved[n] = getNthFib(n - 1) + getNthFib(n - 2);
        return solved[n];
    }
}

// O(n)-time; O(1)-space
function getNthFib(n) {
let lastTwo = [0, 1];
    let i = 3;
    while (i <= n) {
        let nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        i++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}