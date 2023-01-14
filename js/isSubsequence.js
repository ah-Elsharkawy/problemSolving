var isSubsequence = function(s, t) {
    tp = 0;
    sum = 0;
    for(let i=0; i<s.length; i++){
        if(sum !== i) break;
        while(tp<t.length){
            if(s[i] === t[tp]){
                sum++;
                tp++;
                break;
            }
            tp++;
        }
    }
    return sum === s.length;
};


console.log(isSubsequence("aaaaaa","bbaaaa"));