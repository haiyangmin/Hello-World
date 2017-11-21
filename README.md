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
// my solution
function solution(X,Y,D){
let distance=X;
let jumps=0;
while (distance<=Y){
 distance+=D;
  ++jumps;
 }
return jumps;
}

//- PermMissingElem - https://codility.com/demo/results/training58W4YJ-VHA/
//my solution
function solution(A){
 let B=[];
 let x=0;
 B=A.sort(function(a, b){return a - b});
 
for (let i = 0; i < B.length; i++) {
 if(B[i+1]-B[i]==2) {
  x=B[i];
  }
  }
  return x+1;
  }

MissingInteger - https://codility.com/demo/results/trainingPBJ5G7-2QB/
//my solution
function solution(A){
A.sort(function(a, b){return a - b});
let B=[];
for( let i=0; i<A.length; i++){
  if(A[i]>=0) {
   B.push(A[i]);
 }
}
for(let j=0; j<B.length; j++){
if (B[j+1]-B[j]>=2){
return B[j]+1;
}
}
}



