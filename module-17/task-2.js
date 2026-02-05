/**
    Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function numbers(a){
    if(a % 2 !== 0){
        return a * 2;
    }
    else{
        return a / 2;
    }
}

console.log(numbers(7));