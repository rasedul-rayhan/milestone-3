/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum = 0;
let i = 1;

while(true){
    if(sum >= 100){
        break;
    }
    sum = sum + i;
    i++;
    
}
console.log('sum is: ', sum);
