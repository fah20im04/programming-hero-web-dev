const student = {
    name: 'Fahim',
    1:50,
    'home-address' : 'kochu khet',
    marks:90
}
// dot notation
const studentName = student.name;
// bracket notaion
const studentName2 = student['name']
// console.log(studentName2)

// console.log(student['home-address'])

for( const key in student){
    const value = student[key]
    // console.log(value)
}

const propName = 'marks'
console.log(student[propName])