function solution(A) {
   let N = A.length;
   A.sort(function(a, b){
        return b - a; 
    });
   for (let i=0; i<N; i++){
       if ((A[i]+A[i+1]>A[i+2]) && (A[i]+A[i+2]>A[i+1]) && (A[i+2]+A[i+1]>A[i]) ){
       return 1;
       }
   }
  return 0;
}
https://app.codility.com/demo/results/training37XEC5-XQD/
