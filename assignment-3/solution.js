//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    if(typeof currentPrice !== 'string' && typeof discount !== 'string'){
        const discount_amount = (currentPrice * discount)/ 100;
        const discountPrice = currentPrice - discount_amount;
        return discountPrice.toFixed(3);
    }
    else{
        return 'Invalid';
    }
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    if(typeof otp === 'string'){
        if(otp.length === 8 && otp.startsWith('ph-')){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'Invalid';
    }
}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
    if(typeof omr === 'object' && omr.right + omr.wrong + omr.skip === 100){
        const rightMark = omr.right * 1;
        const loseMark = omr.wrong * 0.5;
        const totalMark = rightMark - loseMark;
        return Math.round(totalMark);
    }
    else{
        return 'Invalid';
    }
}

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    if(Array.isArray(array)){
        let haVote = 0;
        let naVote = 0;
        for(const vote of array){
            if(vote === 'ha'){
                haVote += 1;
            }
            else if(vote === 'na'){
                naVote += 1;
            }
        }
        if(haVote > naVote){
            return true;
        }
        else if(haVote < naVote){
            return false;
        }
        else{
            return 'equal';
        }
     }
     else{
        return 'Invalid';
     }
}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
    if(typeof str !== 'string'){
        return 'Invalid';
    }
    else if(str.length === 0){ 
        return 'Invalid';
        }
    else{ 
        const array = str.split(' ');
        let token = 0;
        let longwords = "";
        for(const word of array){
            if(longwords.length < word.length){
                longwords = word;
            }
            token += word.length;
        }
        // return {word : longwords, Size : token};
        return {longwords: longwords, token: token};
    }
}

