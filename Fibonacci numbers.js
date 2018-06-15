Let's try to understand this by taking an example of Fibonacci numbers.

Fibonacci (n) = 1; if n = 0
Fibonacci (n) = 1; if n = 1
Fibonacci (n) = Fibonacci(n-1) + Fibonacci(n-2)

So, the first few numbers in this series will be: 1, 1, 2, 3, 5, 8, 13, 21... and so on!

A code for it using pure recursion:
function solution(n) {
        if (n < 2) {
            return 1;}
            
        return solution(n-1) + solution(n-2);
    }
    
Using Dynamic Programming approach with memoization:
function solution1(n) {
       let result=[];
        result[0] = 1;
        result[1] = 1;
 for (let i = 2; i<=n; i++){
  result[i] = result[i-1] + result[i-2];
    }
    return  result[n] ;
    }
