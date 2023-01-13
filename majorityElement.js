
// boyer-moore voting algorithm 
// Time Complexity O(n)
// Space Complexity O(1)


var majorityElement = function(nums) {
    let count = 0;
    let candidate;
    for(let i = 0; i<nums.length; i++){
        if(count == 0){
            candidate = nums[i];
        }
        count += (candidate == nums[i]) ? 1 : -1;
    }
    return candidate;
};
nums = [2]
console.log(majorityElement(nums));