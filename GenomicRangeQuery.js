my solution 
https://app.codility.com/demo/results/trainingUQ26QY-ZCY/

function solution(S, P, Q) {
    let B ={};
    let A=[];
    var result=[];
    A=S.split("");
    for (let i=0; i<P.length; i++){
        B.i = A.slice(P[i],(Q[i]+1));
        let C = B.i.toString();
        C = C.replace(/A/g, "1");
        C = C.replace(/C/g, "2");
        C = C.replace(/G/g, "3");
        C = C.replace(/T/g, "4");
        C =C.split(",");
    result.push(Math.min.apply(null, C));
    }
return result;
}
