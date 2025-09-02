const tax = 5000;
let eta = 5;
eta = 2;
console.log(eta)

// default parameter 
function add(num1,num2=0){
    return num1+num2;
}

// template string

const student = {name:"Fahim",age:21}
const friends = ['abul','babil','dabul'];
const template = `my name is ${student.name} and my friend name is ${friends[1]}`;
console.log(template)

const innerHTML= `
<div>
    <h1>hello : ${friends.length}</h1>
</div>
`
console.log(innerHTML)

// arrow function

const add2 = (num1,num2) => num1+ num2;

// spread operator

const newFriends = [...friends,'abul','kabul']
// destructuring

const {age} = student

console.log(age)