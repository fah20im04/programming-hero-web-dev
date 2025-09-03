// function counter(){
//     let count = 0;
//     const numb =[];
//     const people = {};
//     function innerFunction(){
//         console.log('inside the inner function somone called me')
//     }
//     return innerFunction;

// }
// const output = counter();
// console.log(output())

function counter (user){
    let count = 10;

    return function(user){
        count +=1;
        console.log('inside the inner function',count)
    }
}
// const innerFunc = counter();
// innerFunc();
// innerFunc();
// innerFunc();
// innerFunc();

const  meCounter = counter()
meCounter('rahim')
meCounter('rahim')
meCounter('rahim')
meCounter('rahim')
const herCounter = counter()
herCounter('maisha')
herCounter('maisha')
meCounter('rahim')
