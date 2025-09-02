const numbers = [45,65,23,98,19];
for(let i = 0;i<numbers.length;i++){
    const number = numbers[i];
    console.log(number);
}

for(const number of numbers){
    // console.log(number);
}

const products = [
    {id:1,name:'walton phone',price:29000},
    {id:2,name:'xiomi phone',price:59000},
    {id:1,name:'samsung',price:89000},
    {id:1,name:'i phone',price:139000},
    {id:1,name:'oppo',price:29000},
    {id:1,name:'vivo phone',price:90000},
    {id:1,name:'Phone',price:19000}
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products,search){
     const matched = [];
    for(const product of products){
        // console.log(product.name.includes(search));
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products,'phone');
console.log(result);