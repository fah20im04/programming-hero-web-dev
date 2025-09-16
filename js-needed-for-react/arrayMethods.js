const products = [
    {name:'redmi',brand:'xiomi',price:3000,color:'black'},
    {name:'sam',brand:'samsung',price:4000,color:'green'},
    {name:'apple1',brand:'apple',price:5000,color:'gold'},
    {name:'apple2',brand:'apple',price:5000,color:'black'},
    {name:'redmi',brand:'xiomi',price:2000,color:'black'},
]
// const result = products.map(product =>{
//    // console.log(product)
// })
// products.forEach(product => {
//     console.log(product.price)
// });
// const result = products.filter(product=> product.color==='black');
// console.log(result)
const result = products.find(product=>product.brand==="apple")
console.log(result)