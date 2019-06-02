function solution(s){

    const divDigit = s.split(/[0-9]/);
    let maxLength = -1;
    divDigit.forEach((e)=>{
        if(/[A-Z]/g.test(e)){
            if(e.length > maxLength){
                maxLength = e.length;
            }
        }
    });
    return maxLength;
}

//console.log(solution("a0Ba"));
//console.log(solution("a0Ba0BaaaldjfDF0ADFADF"));
//console.log(solution("sgsadg0dfgjDE9lksahoiSEoie0ssh0askWE69jfgjG"));
//console.log(solution("A"));
//console.log(solution("a"));
//console.log(solution("0"));
//console.log(solution("a0"));
//console.log(solution("0a"));
console.log(solution("0A"));
