

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let sumOdd = 0;

let i = 81;
while(i <= 131){
    if(i % 2 != 0){
        sumOdd += i;
    }
    i++
}
console.log('Sum is :', sumOdd)



/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let sumEven = 0;
let j = 206;
while(j <= 311){
    if(j % 2 == 0){
        sumEven += j;
    }
    j++;
}
console.log('sum of even is: ', sumEven);