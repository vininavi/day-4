const result = (function(array){

    let dup = Set(array);
    
    console.log(dup);
    return dup;

    })([1,1,2]);
    console.log(result);