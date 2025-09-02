const employee = {
    name : "Raja Rani",
    desination:"QA",
    experience:1,
    salary: 20000,
    age : 22
}
Object.seal(employee)
employee.salary = employee.salary + 5000;
employee.location = 'Dhaka'
console.log(employee)
delete employee.experience
console.log(employee)