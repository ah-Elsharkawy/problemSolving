/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var assign = function(nums, starting_index, length, number){
    while(length !==0){
        nums[starting_index] = number;
        starting_index++;
        length--;
    }
}
var sortColors = function(nums) {
    let zeroes=0, ones=0, twos=0, index=0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === 0) zeroes++;
        if(nums[i] === 1) ones++;
        if(nums[i] === 2) twos++;
    }
    assign(nums, index, zeroes, 0);
    assign(nums, zeroes, ones, 1);
    assign(nums, zeroes+ones, twos, 2);
};
nums = [2,0,1];
sortColors(nums);

console.log(nums);