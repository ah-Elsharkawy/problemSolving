
nums = [1,2,3,4,5,6,1]

var containsDuplicate = function(nums) {
    const items = new Set(nums);
    return items.size !== nums.length; 
};
var s = "string"
/* for(i of s){
    console.log(i)
} */
s = s.split('').sort().join('');
console.log(s.split('').sort().join());
console.log(s);