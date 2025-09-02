const jim = 56;
const tim = 189;
const kim = 100;
function maxi(jim,tim,kim){
    if(jim>tim&&jim>kim)return jim;

    else if(tim>jim&&tim>kim)return tim;
    else return kim;
    
}
console.log(maxi(jim,tim,kim));