


var findRepeatedDnaSequences = function(s) {
    if(s.length < 10) return [];
    let segment = s.substring(0,10);
    let seen = new Set([segment]);
    let res = new Set();
    
    
    for(let i = 1; i<s.length - 9; i++){
        segment = segment.split('');
        segment.splice(0,1);
        segment.splice(9,1,s[i+9]);
        segment = segment.join('');
        if(seen.has(segment)) res.add(segment);
        seen.add(segment);
    }
    
    return [...res];
};



s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
console.log(findRepeatedDnaSequences(s)
);
let arr = [1,2,3,4]
console.log(arr.join(''))