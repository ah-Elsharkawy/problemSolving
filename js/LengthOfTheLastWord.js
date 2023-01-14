var lengthOfLastWord = function(s) {
    let t=0;
    s = s.trim();
    for(let i=s.length-1; i>=0; i--){
        if(s[i]===' '){
            break;
        }
        t++;
    }
    //return s.split(" ")[s.split(" ").length-1].length;
    return t;
};

console.log(lengthOfLastWord("my name is ahmed   "));