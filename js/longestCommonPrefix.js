/* var longestCommonPrefix = function(strs) {
  let j,mn = 300, first = strs[0], currStr, result;
  for(let i=1; i<strs.length; i++ ){
    currStr = strs[i];
    j = 0;
    result = 0;
    let mni = Math.min(first.length, currStr.length);

    while(j < mni){
        if(strs[0][j] == strs[i][j]){

            j++;
            result++;
            continue;
        }
        break;
    }
    mn = Math.max(mn, result);

  }  
  return mn ? strs[0].substr(0,mn) : "";
}; */

var longestCommonPrefix = function(strs) {
    var str = strs.sort();
    var last=str[str.length-1],first = str[0],i=0;
    var result='';
    for(i=0;i<first.length;i++){
        if(first[i]===last[i]){
            result+=first[i];
        }
        else break;
    }
    return result;
};

strs = ["cat", "ca"];
console.log(longestCommonPrefix(strs));

