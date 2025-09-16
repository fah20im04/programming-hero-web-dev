// const person = {
//     name :'gias',
//     age: 40,
//     friends: ['bd','on','rahim'],
//     family: {
//         fahername:'kolim ullah',
//         mothername:'jorina'
//     }
// }
// // const jsonData = JSON.stringify(person)
// // console.log(jsonData)
// // const jsonToObject = JSON.parse(jsonData)
// // console.log(jsonToObject)
// const keys = Object.keys(person);
// //console.log(keys)
// const values = Object.values(person)
// console.log(values)
const products = [
    {name:'redmi',brand:'xiomi',price:3000,color:'black'},
    {name:'sam',brand:'samsung',price:4000,color:'green'},
    {name:'apple1',brand:'apple',price:5000,color:'gold'},
    {name:'apple2',brand:'apple',price:5000,color:'black'},
    {name:'redmi',brand:'xiomi',price:2000,color:'black'},
]

const newData = {
    name:'walton',
    price:3000,
    brand:'walton',
    color:'grey'
}
const newArray=[...products,newData]
//console.log(newArray)
const test = ""
// if(test){
//     console.log('its truthy')
// }else{
//     console.log('its falsy')
// }
test ? console.log('its truthy') : console.log('its falsy')

