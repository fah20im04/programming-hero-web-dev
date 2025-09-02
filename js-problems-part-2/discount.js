function discountedPrice(quantity){
    let total = 0;
    if(quantity<=100){
        total = quantity*100;
        return total;
    }else if(quantity<=200){
        total = quantity*90;
        return total;
    }else{
        const total = quantity *70;
        return total;
    }
}

const total = discountedPrice(205);
console.log(total);