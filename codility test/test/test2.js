function solution(s){

    let rightLength = 0;
    let leftMax = s[0];
    let tmpMax  = s[0];
    for (let cnt = 1; cnt < s.length; cnt++) {
        if (leftMax < s[cnt]) {
            rightLength++;
            tmpMax = s[cnt];
        } else {
            rightLength = 0;
            leftMax = tmpMax;
    }
  }
  
  return s.length - rightLength;
}

//console.log(solution([5,-2,3,8,6]));
//console.log(solution([-5,-5,-5,-42,6,12]));
//console.log(solution([-15,-6,5,2,16,-12,6,3,7,32,4]));
//console.log(solution([-15,-6,5,2,16,-22,6,3,7,32,4]));
//console.log(solution([-15,-6,5,2,16,-22,6,3,7,32,41]))