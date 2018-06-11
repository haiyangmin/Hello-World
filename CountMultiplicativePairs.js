function solution(A, B) {
   let C=[];
   for (let i=0; i<A.length; i++){
       C.push(A[i]+B[i]/1000000);
   }
   let result =0;
   let len = C.length;
   if (len > 1){
        let lo_index;
   let hi_index = len - 1;

    // Skip all C[i] less than 1
    for (lo_index = 0; lo_index < len; lo_index++)
    {
      if (C[lo_index] > 1)
        break;
    }

    while (hi_index > lo_index)
    {
      let v = C[hi_index] / (C[hi_index] - 1);

      while (lo_index < hi_index && C[lo_index] < v)
      {
        lo_index++;
      }

      if (lo_index == hi_index)
        break;

      result += (hi_index - lo_index);

      hi_index--;

    }
  }
  return result; 
}
