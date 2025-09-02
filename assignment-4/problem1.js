function totalFine( fare ) {
          // You have to write your code here
    if(typeof fare !=='number'||fare<=0){
        return "Invalid";
    }
    let fine = fare +(fare *0.20)+30;
    return fine;
}
console.log(totalFine(200));   // 270
console.log(totalFine(0));     // Invalid
console.log(totalFine(50));    // 90
console.log(totalFine(552));   // 692.4
console.log(totalFine(-35));   // Invalid
console.log(totalFine("65"));  // Invalid
console.log(totalFine("Gorib tai ticket katinai")); // Invalid

