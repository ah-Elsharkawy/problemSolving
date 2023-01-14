var wordPattern = function(pattern, s) {
    s = s.split(' ');
    let mp1 = {}, mp2 = {};

    for(let i = 0; i < s.length; i++){
        if(!mp1[pattern[i]]){
            mp1[pattern[i]] = s[i];
        }

    }
    return mp1;
};

pattern = "abba", s = "dog cat cat dog";

console.log(wordPattern(pattern, s));

