/*function signature/sample */
function finalScore (omr) {
    if(typeof omr === 'object' && omr.right + omr.wrong + omr.skip === 100){
        const rightMark = omr.right * 1;
        const loseMark = omr.wrong * 0.5;
        const totalMark = rightMark - loseMark;
        return Math.round(totalMark);
    }
    else{
        console.log("Invalid");
    }
}


finalScore({ right: 67, wrong: 23, skip: 10 })

finalScore({ right: 80, wrong: 25, skip: 0 })

finalScore({ right: 50, wrong: 10, skip: 40 })

finalScore({ right: 30, wrong: 30, skip: 40 })

finalScore("!@#")

finalScore(["Raj"])

finalScore([231,232,232])


