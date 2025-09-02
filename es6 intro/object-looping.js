const numbers = [1,2,3,45,6,7];
for(const num of numbers){
   // console.log(num)
}

const employee = {
    name : "Raja Rani",
    desination:"QA",
    experience:1,
    salary: 20000,
    age : 22
}
for(const key in employee){
    const value = employee[key]
    console.log(key,value)
}

const keys = Object.keys(employee)
console.log(keys)

for( const key of keys){
    const value = employee[key]
    console.log(value)
}