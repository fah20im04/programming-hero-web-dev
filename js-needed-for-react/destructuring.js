// const friends  = ['hero alam','hena','hamja','BD'];
// const [element1,element2,element3] = friends;
// console.log(element1,element2,element3)
const person = {
    name:'Hero Alam',
    age:25,
    friends:['bd','test'],
    country:'bangladesh'
}
// console.log(person.country)
const { name,country,age,friends } = person;
console.log(friends[1])