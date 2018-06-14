function solution(K, A) {
    let count = 0;
    let size = 0;
   for (let i=0; i<A.length; i++){
        size+=A[i];
       if (size>= K){
           count++;
           size=0;
       }
   }
   return count;
}

https://app.codility.com/demo/results/trainingP3SQU2-K2U/
