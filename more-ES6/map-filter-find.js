const students = [
    {id: 1 , name: "abul", marks: 50},
    {id: 2 , name: "sabul", marks: 80},
    {id: 3 , name: "kabul", marks: 90},
    {id: 4 , name: "babul", marks: 80}
]
const names = students.map(student => student.marks)

const passMarks = students.find(student => student.marks > 50)

const passMarks2 = students.filter(student  => student.marks>80)

console.log(passMarks)
console.log(passMarks2)