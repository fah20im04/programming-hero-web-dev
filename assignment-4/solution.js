//problem-1
function totalFine( fare ) {
          // You have to write your code here
    if(typeof fare !=='number'||fare<=0){
        return "Invalid";
    }
    let fine = fare +(fare *0.20)+30;
    return fine;
}

//problem-2
function onlyCharacter(str) {
    if (typeof str !== 'string') return "Invalid";
    
    let upper = str.toUpperCase();
    let removeS = "";
    
    for (let i=0; i<upper.length;i++) {
        if (upper[i]!==" ") { 
            removeS +=upper[i];
        }
    }
    
    return removeS;
}
//problem-3
function  bestTeam( player1, player2 ) {
          // You have to write your code here
    if(typeof player1 !== 'object' || typeof player2 !== 'object'){
        return "Invalid";
    }
    let total1 = player1.foul + player1.cardY + player1.cardR;
    let total2 = player2.foul + player2.cardY + player2.cardR;
    if(total1 ===total2)return "Tie";
    if(total1>total2)return player2.name;
    else return player1.name;

}
//problem-4
function  isSame(arr1 , arr2 ) {
          // You have to write your code here
    if(!Array.isArray(arr1)||!Array.isArray(arr2)) {
        return "Invalid";
    } 

    if(arr1.length !==arr2.length)return false;
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }   
    }
    return true;
}
//problem-5
function  resultReport( marks ) {
          // You have to write your code here
    if(!Array.isArray(marks))return "Invalid";
    if(marks.length===0){
        return {finalScore: 0, pass: 0, fail:0};
    }
    let pass = 0;
    let fail = 0;
    let sum = 0;
    for(let i=0;i<marks.length;i++){
        sum+=marks[i];
        if(marks[i]>=40)pass++;
        else fail++;
    }
    let avg = Math.round(sum / marks.length);
    return {
        finalScore: avg,pass:pass,fail:fail
    }
}


