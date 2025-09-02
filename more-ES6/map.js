const numbers = [4, 8 , 7, 5, 6,4];
// const doubled = []
// for (const num of numbers){
//     const result = num*2;
//     doubled.push(result)
// }
// const doubleIt = x =>x*2;
// const doubled = numbers.map(doubleIt);
const doubled = numbers.map(x => x*2)
console.log(doubled);


const fiveTimes = numbers.map(x => x * 5)
console.log(fiveTimes);

const square = numbers.map(x => x*x)
console.log(...square)

const friends = ['hakim','roshid','bakit'];
const nameLenght = friends.map(name => name.length);
const firstLetter = friends.map(name => name[0].toUpperCase());
console.log(firstLetter)
console.log(nameLenght)

const result = numbers.map((num,index) => {
    console.log(num*index)
    return index;
})
console.log(result)

