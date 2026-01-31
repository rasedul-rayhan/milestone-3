/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let urScore = 69;

if(urScore >= 90 && urScore <= 100){
    console.log("A");
}
else if(urScore >= 80 && urScore <= 89){
    console.log("B");
}
else if(urScore >= 70 && urScore <= 79){
    console.log("C");
}
else if(urScore >= 60 && urScore <= 69){
    console.log("D");
}
else if(urScore <= 59){
    console.log("F");
}

