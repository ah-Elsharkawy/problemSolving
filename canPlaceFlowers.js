var canPlaceFlowers = function(flowerbed, n) {
    flowerbed.splice(0,0,0);
    flowerbed.splice(flowerbed.length,0,0);
    let count = 0;
    
    for(let i = 1; i<flowerbed.length-1; i++){
        if(flowerbed[i-1]+flowerbed[i]+flowerbed[i+1] === 0){
            count++;
            i++;
        }

    }
    return count >= n;
};



flowerbed = [1,0,0,0,1], n = 2
console.log(canPlaceFlowers(flowerbed,n));