const numbers = [87,8,5,91]
console.log(numbers)
console.log(...numbers)

// const max = Math.max(21 , 54,65,98,52,5,10,36)
// console.log(max)
const  max= Math.max(...numbers)
// console.log(max)
// const first = [1,2,3,4,5];
// const second = first;
// second.push(6);
// console.log(first);

const first = [1,2,3,4,5];
const second = [...first];
second.push(6);
const third = [1.24,35,58,...first,45,6,52,35]
// console.log(first);
// console.log(second);
// console.log(third);
const ages = [45,45,1]
const prices = [98,65,35]
const all = [...ages,555,12,12,...prices]
console.log(all)

const person = {name:'parmism',age:25}
const employee = {designation: 'dev',...person}
console.log(employee)

const total = (a,b,c) =>a+b+c;
const result = total(45,65,21)
const digits = [78,55,66]
const result2 = total(...digits)
console.log(result2)