//https://codility.com/demo/results/trainingPBJ5G7-2QB/
//My solution
function solution(A){ 
A.sort(function(a, b){return a - b});
let B=[]; 
for( let i=0; i<A.length; i++){ if(A[i]>=0) 
{ B.push(A[i]); } } 
for(let j=0; j<B.length; j++){ 
if (B[j+1]-B[j]>=2){ 
return B[j]+1; 
} 
} 
}
