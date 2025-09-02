// function declaration
console.log(add(5,10));
function add(num1,num2){
    return num1+num2;
    
}

// function expression
const addition = function(num1,num2){
    return num1+num2;
}
// arrow function
const add2 = (num1,num2) => num1+num2;
const result = add2(17,13)
console.log(result)

const multiply = (a,b) => a*b;
const mult = multiply(5,7)
console.log(mult)
//boolean checker
const isFirstBig = (x,y)=>x>y
const isbig = isFirstBig(45,35);
console.log(isbig)
