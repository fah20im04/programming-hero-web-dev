const nayok ={
    name:'Sakib khan',
    id:121,
    address:'movie sinema',
    isSingle:true,
    friends:['apu','raaz','salman','amir'],
    act: function (){
        console.log('acting like sakib khan');
    },
    car:{
        brand:'tesla',
        price:5000000,
        made:2025,
        manufacturer:{
            owner:'elon musk',
            country:'USA',
            name:'tesla'
        }
    }
}
console.log(nayok.car);
console.log(nayok.act);
nayok.act();