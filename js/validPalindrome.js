const prompt = require("prompt-sync")({ sigint: true });

var isPalindrome = function(s) {

    let  str = s.replace(/[^A-Za-z0-9]/g, "");
    s = str;
    s = s.split("").reverse().join("");
    return s === str;
    
};



const s = prompt();

console.log(isPalindrome(s))