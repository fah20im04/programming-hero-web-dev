/***
 * first100-->100
 * 101-200-->90
 * avobe200-->70
 */

function layeredDiscountTotal(quantity){
    const first100PPrice = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <=100){
        const total = quantity*first100PPrice;
        return total;
    }
    else if(quantity<=200){
        const first100Total = 100*first100PPrice;
        const remaining = quantity-100;
        const remainingTotal = remaining* second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100*first100PPrice;
        const second100Total = 100 * second100Price;
        const remaining = quantity-200;
        const remainingTotal = remaining* above200Price;
        const total = first100Total + second100Total  + remainingTotal;
        return total;

    }
}
const total = layeredDiscountTotal(201);
console.log(total);