const result = function(numArray){
    
    numArray = numArray.filter((number) => {
    
    for (var i = 2; i <= Math.sqrt(number); i++) {
    
    if (number % i === 0) return false;
    
    }
    
    return true;
    
    });
    
    console.log(numArray);
    
    }([1,2,3,4]);