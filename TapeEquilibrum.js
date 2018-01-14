// https://app.codility.com/demo/results/trainingHMJHCT-9BX/
//my solution 

function solution(A){ 
 let B=[];
 let C=[]; 
 let y=0; 
for (let i=0; i<A.length-1; i++){ 
  B.push(A[i]); 
  let Totalsum =A.reduce((sum, current) => sum + current, 0); 
  let Rightsum = B.reduce((sum, current) => sum + current, 0);
  let Leftsum = Totalsum-Rightsum; 
  let y=Math.abs(Rightsum - Leftsum); C.push(y); 
  }
return Math.min.apply(null, C);
}
