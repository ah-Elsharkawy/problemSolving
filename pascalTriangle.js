function innerArray(prevArray, numOfElements){
    let currArray = new Array();
    for (let i = 0; i<numOfElements; i++){
        if(i === 0 || i === numOfElements-1)
        {
            currArray[i] = 1;
        }
        else{
            currArray[i] = prevArray[i-1] + prevArray[i]
        }
    }
    return currArray;
}

var generate = function(numRows) {
    let bigArray = new Array(numRows);
    let smallArray = [1];
    for(let i = 0; i < numRows; i++){
        if(i === 0){
            bigArray[i] = smallArray;
        }
        else{
            bigArray[i] = innerArray(bigArray[i-1],bigArray[i-1].length + 1);
        }
    }
    return bigArray;
};


console.log(generate(5));