/*
    Task 1
    ---------
    Write a JavaScript code to reverse the array colors without using the reverse method.

    Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

    Output:

    ['orange', 'yellow', 'green', 'blue', 'red']
 */


// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

/**first way to reverse
 * 
    console.log(colors.reverse());
 */

/**
    second way

    console.log(colors);

    let colorsRv = [];
    for(let i = 0; i < colors.length; i++){
        // colorItem = colors[i];
        colorsRv.unshift(colors[i]);
    }

    console.log(colorsRv);

 */

    /*  4th way

        const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
        console.log(colors);
        let colorRv = [];
        for(let color of colors){
            colorRv.unshift(color);
        }
        console.log(colorRv);
    */


const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let colorRv= [];

console.log(colors);
for(let i = colors.length -1; i >= 0; i--){
    colorRv.push(colors[i]);
    console.log(colorRv);
}
console.log(colorRv);