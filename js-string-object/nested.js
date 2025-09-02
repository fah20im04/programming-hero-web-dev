const school ={
    name:'vnc',
    class:['10','11','12','12=3','14'],
    events:['science fair','bijoy','21 feb'],
    unique:{
        color:"blue",
        result:{
        gpa:5,
        merit:'top'
        }

    }
}
delete school.name;
console.log(school.unique.result.merit)
console.log(school.events[2])
console.log(school)