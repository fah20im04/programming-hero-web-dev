const numbers = [4,5,6,7,8,9,12,15];

// let sum = 0;
// for(const num of numbers){
//     sum = sum + num
// }
const total = numbers.reduce((acc, curr,0) => acc + curr)

console.log(total)

