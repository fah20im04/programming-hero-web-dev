function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    const perChairwood = 3;
    const perTablewood= 10;
    const perBedwood = 50;

    const chairTotalWood = chairQuantity * perChairwood;
    const tableTotalWood = tableQuantity * perTablewood;
    const betTotalwood = bedQuantity * perBedwood;

    const totalWood = chairTotalWood + tableTotalWood + betTotalwood;
    return totalWood;
}
const wood = woodQuantity(4,2,1);
console.log('wood needed',wood);