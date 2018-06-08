https://app.codility.com/demo/results/trainingUV5D9E-E9R/
function solution(S) {
    let len=S.length;
    if (len%2 !== 0){
        return 0;
    }
    
    if(S.length === 0) {
        return 1;
    }
    var str = S.split('');
    var control = 0;
    for(var i=0; i<str.length; i++) {
        if(str[i] == '(') {
            control++;
        } else {
            control--;
        }
        
        if(control < 0) {
            return 0;
        }
    }
    
    if(control === 0) {
        return 1;
    } else {
        return 0;
    }
}
