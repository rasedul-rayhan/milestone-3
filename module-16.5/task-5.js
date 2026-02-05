/**
 * Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3]
 */

const nums1 = [1, 2, 3];

let num2 = [];

for(let num of nums1){
    num2.push(num);
}
console.log(num2);

num2[0] = 99;

console.log(num2);

