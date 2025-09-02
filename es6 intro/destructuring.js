// const product = {name: ' shirt',price:500,quantity:7}
// const discount = product.price*20/100;
// const yourPay = product.price - discount;
// const vatAmount = product.price*7/100
// const totalAmount = yourPay + vatAmount;


// another method
// const price = product.price

// const discount = price*20/100;
// const yourPay = price - discount;
// const vatAmount = price*7/100
// const totalAmount = yourPay + vatAmount;

//we can alse write this 
// (const product = {name: ' shirt',price:500,quantity:7} )like this

const {price,quantity} = {name: ' shirt',price:500,quantity:7}
console.log(price,quantity)

const device = { name : 'phone', brand: 'samsung',price: 17000}
const { brand,name } = device;
console.log(brand,name)

const numbers = [25,88,89];
const [first,second] = numbers;
console.log(first,second)