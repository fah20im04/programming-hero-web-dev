function inchFeet(inch){
    const feet = inch/12;
    return feet;
}
const height = inchFeet(75);
console.log(height);
function inchFeet2(inch){
    const feetfraction = inch /12;
    const feetnumber = parseInt(feetfraction);
    console.log(feetnumber + " feet " + (inch%12)+" inch");
}
//inchFeet2(75);
//miles to kilometer
function mileToKilo(mile){
    const kilo = mile*1.61;
    return kilo;
    //console.log(kilo);

}
console.log(mileToKilo(50));