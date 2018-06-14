
A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A.
The sum of a slice (P, Q) is the total of A[P] + A[P+1] + ... + A[Q].

Write a function:

function solution(A);

that, given an array A consisting of N integers, returns the maximum sum of any slice of A.

For example, given array A such that:

A[0] = 3  A[1] = 2  A[2] = -6
A[3] = 4  A[4] = 0
the function should return 5 because:

(3, 4) is a slice of A that has sum 4,
(2, 2) is a slice of A that has sum −6,
(0, 1) is a slice of A that has sum 5,
no other slice of A has sum greater than (0, 1).
Assume that:

N is an integer within the range [1..1,000,000];
each element of array A is an integer within the range [−1,000,000..1,000,000];
the result will be an integer within the range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N) (not counting the storage required for input arguments).
Copyright 2009–2018 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
Solution


https://app.codility.com/demo/results/trainingSNSMFZ-3RW/
function solution(A) {
     let B=[];
   let C=[];
   
   if (A.length == 1){
   return A[0];
   }
   
   else {
   for(let i=0; i<A.length; i++){
   
    for(let j=i; j<A.length; j++){
     B = A.slice(i,j+1);
     C.push(B.reduce((sum, current) => sum + current, 0));
     }
     }
     
   return Math.max.apply(null, C);
      }
    }
    
 https://app.codility.com/demo/results/trainingTXHJSZ-DXF/   
    
    function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    if(A.length === 1) {
        return A[0];
    }
    
    var maxSum = -Infinity;
    var sums = [];
    var i = 0;
    
    for(i=0; i<A.length; i++) {
        if(i === 0) {
            sums[i] = A[i];
        } else {
            sums[i] = Math.max(sums[i-1] + A[i], A[i]);
        }
        
        maxSum = Math.max(sums[i], maxSum);
    }
    
    return maxSum;
}
