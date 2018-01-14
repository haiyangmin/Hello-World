//https://codility.com/demo/results/trainingSH2W5R-RP5/ 
//my solution
function Solution(A,K)
{ var x=A.length;
var steps=K%x;
var B=[];
for( i=0;i<x-steps;i++){ 
  B[i+steps]=A[i]; 
  }
  for(j=0;j<steps;j++){
  B[j]=A[x-steps+j];
  }
  return B;
 }
