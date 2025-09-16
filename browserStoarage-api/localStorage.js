const addnumbersTOls = ()=>{
    const number = Math.ceil(Math.random()*100)
    console.log(number);
    localStorage.setItem('number',number)

}

const setObjectTOLS =()=>{
    const customer = {name:'rohim',product:3,price:75}
}
const getNumberfromLS = ()=>{
    const number = localStorage.getItem('number');
    console.log('from saved local stoarage',number)
}