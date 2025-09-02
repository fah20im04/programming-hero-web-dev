class vehicle{
    constructor(type,price){
        this.type = type;
        this.price = price;
    }
    getThis(){
        console.log(this)
    }
    getPrice(){
        console.log(this)
    }

}
const cart1 = new vehicle('car',500000)
const cart2 = new vehicle('car',200000)
cart1.getThis();
cart2.getThis();