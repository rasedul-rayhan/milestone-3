/*function signature/sample */
function  analyzeText(str) {
    if(typeof str !== 'string'){
        return 'Invalid';
    }
    else if(str.length <= 0){ return 'Invalid';}
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

const str = '';

console.log(analyzeText(str));