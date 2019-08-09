// ​Nth Fibonacci
// The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.

// my initlal solution
// O(2^n)-time; O(n)-space


function getNthFib(n) {
    // Write your code here.
      // 0, 1, 1, 2, 3, 5, 8
      if(n === 1) {
          return 0
      } else if (n === 2) {
          return 1
      } else {
          return getNthFib(n-1) + getNthFib(n-2)
      }
  }
  
  // Do not edit the line below.
  exports.getNthFib = getNthFib;
  