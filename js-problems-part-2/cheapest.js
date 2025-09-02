const phones= [
    {name:'Samsung',price:20000,camera:'12mp',color:'black'},
    {name:'xiomi',price:18000,camera:'12mp',color:'black'},
    {name:'Samsung',price:30000,camera:'12mp',color:'black'},
    {name:'Samsung',price:100000,camera:'12mp',color:'black'},
    {name:'Samsung',price:31000,camera:'12mp',color:'black'},
    {name:'Samsung',price:27000,camera:'12mp',color:'black'},
]

function getCheapestPhone(phones){
    let max = phones[0];
    for (const phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}
const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is : ',cheap);