var arraySum = function(arr) {
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

var minStoneSum = function(piles, k) {
    piles.sort();
    piles.reverse();
    let end = Math.min(k,piles.length) - 1;


    for(let i =0; i<=end; i++){
        piles[i] -= Math.floor(piles[i]/2); 
        if(i === end)
        {
            while(k>0){
                piles[i] -= Math.floor(piles[i]/2); 
            k--;
            }
        }
        else{
            while(piles[i] > piles[end] && k>=i ){
                piles[i] -= Math.floor(piles[i]/2); 
                k--;
                end = Math.min(k,piles.length) - 1;
            }
        }
        
    }
   
    return arraySum(piles);

};



piles = [4,3,6,7], k = 3

console.log(minStoneSum(piles,k));