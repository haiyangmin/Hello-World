Phone number formatting  Codility

a string only consisted of number, space and dash,  such as "9999  -88 00 --99". 

format the number into "999-988-00-99".   the last one or two can be two digits. 

function solution(S){
let reg = /\d/g;
let text = S.match(reg);
let length = text.length;
let n = Math.floor(text.length/3);
let s = text.length % 3 ;
if (s !== 1){
for (let i=3; i<text.length; i+=4){
text.splice(i,0,"-");
}
}
if (s == 1){
for (let i=3; i<text.length-1; i+=4){
text.splice(i,0,"-");
}
text.splice(text.length-2,0,"-");
}
text = text.join("");
return text;
}
