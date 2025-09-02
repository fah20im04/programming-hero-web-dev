function oddaverage(numbers,){
    for(const number of numbers){
        if(number%2!==0){
            sum +=number;
            cnt++;
        }
    }
    return sum/cnt;
}
const numbers = [42,13,58,65,81];
let sum = 0;
let cnt = 0;
const avg=oddaverage(numbers,sum,cnt);
//console.log(oddaverage(numbers,sum,cnt));


function oddaverage1(numbers){
    const odds = [];
    for(const number of numbers){
        if(number%2!==0){
            odds.push(number);
        }
    }
    let sum=0;
    for(const number of odds){
        sum+=number;
    }
    console.log(sum/odds.length);
}
oddaverage1(numbers);