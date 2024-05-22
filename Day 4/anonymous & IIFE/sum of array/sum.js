const result = (function(array){
var sum = 0;

for(var i = 0 ; i< array.length ; i++){

sum = sum + array[i];

}

return sum;

})
console.log(result([2, 3]));