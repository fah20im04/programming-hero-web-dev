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
        finalScore:avg,pass:pass,fail:fail
    }
}
console.log(resultReport([]));
// { finalScore: 0, pass: 0, fail: 0 }

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
// { finalScore: 79, pass: 6, fail: 1 }

console.log(resultReport([99, 87, 67, 12, 87]));
// { finalScore: 70, pass: 4, fail: 1 }

console.log(resultReport([99]));
// { finalScore: 99, pass: 1, fail: 0 }

console.log(resultReport(100));
// "Invalid"



