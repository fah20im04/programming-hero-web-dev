function isleapyear(year){
    if(year % 400 === 0)return true;
    else if(year%100===0){
        return false;
    }else if(year%4===0){
        return true;
    }else return false;
}
leap=isleapyear(1900);
leap2=isleapyear(2100);
leap3=isleapyear(2400);
leap4=isleapyear(2052);
console.log(leap,leap2,leap3,leap4);
