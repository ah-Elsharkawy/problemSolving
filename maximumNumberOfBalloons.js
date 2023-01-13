var hashing = function(text){
    let balloon = {'b':0, 'a': 0, 'l':0, 'o':0, 'n':0};
    for (i of text){
        if ( i == 'b' || i == 'a' || i == 'l' || i == 'o' || i == 'n')
        {
            if(!balloon[i]) balloon[i]=0;
            balloon[i]++;
        }
    }
    for (let i in balloon){
        if (i == 'l' || i == 'o'){
            balloon[i] = Math.floor(balloon[i]/2);
        }  

    }
    return balloon;
}


var maxNumberOfBalloons = function(text) {
    let ballonChars = hashing(text), mn = 10000;
    for(i in ballonChars){
        mn = Math.min(mn, ballonChars[i]);
        
    }
    return mn;
};
let x = hashing("aaaaabbblllllooonndddddddddnnnn");
console.log(x);
console.log(maxNumberOfBalloons("lloo"))


