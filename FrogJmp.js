// https://codility.com/demo/results/training6KKWUD-BXJ/
// My solution
function solution(X,Y,D){ 
let distance=X; 
let jumps=0; 
while (distance<=Y)
{ distance+=D; ++jumps; } 
return jumps; 
}
