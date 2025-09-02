/*
ternary
*/
const age = 20;
// if(age>=18){
//     console.log("you can vote");
// }else{
//     console.log("dont");
// }
/*
condition ? do something when true : do something when false

*/
// age >=18 ? console.log('vote dio') : console.log('gumaw')

 let price=1500;
 const isLeader =true;
//  if(isLeader ===true){
//     price =0;
//  }else{
//     price +=100;
//  }console.log(price);

//  price = isLeader === true ? 0:price +100;
//  semi advance
 if(isLeader === true){
    if(price > 1000){
        price=price/2;
        console.log(price);
    }else{
        price = 0;
    }
 }
 else{
    price +=100;
 }
 //console.log(price);

price = isLeader === true ? price > 1000 ?price/2 : 0 : price +1000;