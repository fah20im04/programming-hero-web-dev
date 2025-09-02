const getTax = (amount,taxRate) => amount*taxRate/100;
console.log(getTax(500,10));

// single parameter
const getSquare = (x) =>x*x
console.log(getSquare(5))
const gethalf = num =>num/2
console.log(100)

// for array
const firstElement = nums =>nums[0];
console.log(firstElement([25,30,1,24,36]))

// no prameter

const logIt =()=>console.log(58)
console.log(logIt())

// annonymouse
// document.getElementById('btn-click').addEventListener('click',()=>{
    
// })
// document.getElementById('btn-click').addEventListener('click',event =>{

// })

// function test(a, b) {
//   console.log(arguments); // [1, 2, 3]
// }
// test(1, 2, 3);

// const test = (a, b) => {
//   console.log(arguments); // ❌ Error (arguments is not defined here)
// };

