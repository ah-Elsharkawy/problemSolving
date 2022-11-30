var replaceElements = function(arr) {
    let tmp = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    let mx = tmp;
    for(let i=arr.length-2; i>=0; i--){
        tmp = arr[i];
        arr[i] = mx;
        mx = Math.max(mx,tmp);
        
    }
    return arr;
};

let arr = [1,2,3,4,56,7,8,1,2,3,5];
console.log(replaceElements(arr));