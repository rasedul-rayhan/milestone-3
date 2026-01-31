/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 13;
let price = 1200;
let profession = "students"
let discount_stu = 50;
let discount_senior = 15;
if(age < 10){
    console.log("Ticket Free");
}
else if(profession == "student"){
    console.log(price-(price*(discount_stu/100)));
}
else if(age >= 60){
    console.log(price-(price*(discount_senior/100)));
}
else{
    console.log(`regular price is${price}`);
}
