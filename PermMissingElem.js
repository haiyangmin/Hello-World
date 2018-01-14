//https://codility.com/demo/results/training58W4YJ-VHA/
// My solution
function solution(A){ 
let B=[]; 
let x=0; 
B=A.sort(function(a, b){return a - b});
for (let i = 0; i < B.length; i++) { 
  if(B[i+1]-B[i]==2) {
   x=B[i]; } 
 } 
return x+1;
}
