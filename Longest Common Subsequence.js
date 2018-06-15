LCS Problem Statement: Given two sequences, find the length of longest subsequence present in both of them.
A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous.
For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. etc are subsequences of “abcdefg”. 
So a string of length n has 2^n different possible subsequences.

function solution( a, b ){
    let L = [];
    let m = a.length;
    let n = b.length;
    
    for ( var i = 0; i < n; i++ ) {
    L[i] = []; 
}
   
    for (let i=0; i<=m; i++){
      for (let j=0; j<=n; j++){
        if (i == 0 || j == 0) {
            L[i][j] = 0;}
        else if (a.charAt(i-1) == b.charAt(j-1)){
            L[i][j] = L[i-1][j-1] + 1;}
        else {
        L[i][j] = max(L[i-1][j], L[i][j-1]);}
      }
    }
  return L[m][n];
  }
 
function max(a,b){
    return (a > b)? a : b;
  }

let a = "aabbdd" ;
let b = "ababaeeeee";

alert(solution( a, b ));
