# Hello-World
// TapeEquilibrum - https://codility.com/demo/results/trainingHMJHCT-9BX/
// my solution
function solution(A){
  let B=[];
  let C=[];
  let y=0;
for (let i=0; i<A.length-1; i++){
  B.push(A[i]);
let Totalsum =A.reduce((sum, current) => sum + current, 0);
let Rightsum = B.reduce((sum, current) => sum + current, 0);
let Leftsum = Totalsum-Rightsum;
 let y=Math.abs(Rightsum - Leftsum);
  C.push(y);
  }
 return Math.min.apply(null, C); 
}

//CyclicRotation - https://codility.com/demo/results/trainingSH2W5R-RP5/
//my solution
function Solution(A,K){
var x=A.length;
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

// FrogJmp - https://codility.com/demo/results/training6KKWUD-BXJ/
function solution(X,Y,D){
let distance=X;
let jumps=0;
while (distance<=Y){
 distance+=D;
  ++jumps;
 }
return jumps;
}
