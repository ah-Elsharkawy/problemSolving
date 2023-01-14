var largestNumber = function(nums) {
    var sorted = nums.sort(function(a, b) {
        var ab = a.toString() + b.toString();
        var ba = b.toString() + a.toString();
        return ba - ab;
    });

    var joined = sorted.join('');
    if (parseInt(joined) === 0) {
        return '0';
    } else {
        return joined;
    }
};

nums = [3,30,34,5,9];

console.log(nums);
nums = nums.map((num) => {
    return num.toString();
})
console.log(typeof nums[0]);
console.log(nums);
nums = nums.sort()
console.log(nums);