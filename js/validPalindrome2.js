
let isPalindrome = function(s){
    let str = s;

    s.split("").reverse().join("");
    return s==str;
}

var validPalindrome = function(s) {
    let i=0, j=s.length; 
    
    while(i<=j){
        if(s[i]==s[j]){
            i++;
            j--;
        }
        else{
            return isPalindrome(s.substring(i+1,j)) || isPalindrome(s.substring(i,j-1));
        }
    }
    return true;
};


let s = "deedee"

console.log(validPalindrome(s));