/**
 * undefined ---> not defined
 */

let money;
console.log(money)

function total(a,b){
    console.log('value of parameters',a,b)
}
total(5,6)

function total2(a,b){
        console.log('value of parameters',a,b);
        const sum = a + b;
        console.log("total is ",sum)
    //return sum;
}
total2(5,6)