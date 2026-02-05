/**
    Task-3
    Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(array){
    let sum = 0;
    for(let num of array){
        sum += num;
    }
    return sum / array.length;
}

let array = [4, 6, 5, 7];

let resutOfAvg = make_avg(array);

console.log(resutOfAvg);