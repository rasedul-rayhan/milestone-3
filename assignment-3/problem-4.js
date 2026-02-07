/*function signature/sample */
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
        console.log('Invalid');
     }
}

gonoVote(['ha', 'ha', 'ha', 'na', 'na']);
