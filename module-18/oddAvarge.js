/**
 * create a function and take array as a paramiter
 * give me the average of the odd numbers
 */

function oddAvg(numbers){

    let oddSum = 0;
    let cntOddNums = 0;
    for(num of numbers){
        if(num % 2 !== 0){
            oddSum += num;
            cntOddNums += 1;
        }
    }
    const average = oddSum / cntOddNums;
    return average;
}

console.log(oddAvg([2, 3, 6, 5, 7]));