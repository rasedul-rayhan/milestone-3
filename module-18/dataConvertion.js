//inch to feet

function inchTofeet(inch){
    const feet = parseInt(inch / 12);
    
    const inchRemaning = inch % 12;

    console.log(inchRemaning);
}

inchTofeet(62);