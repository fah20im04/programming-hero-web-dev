/** Problem -03 ( Medicine Planner ) */
var lastDay = 3;
//write your code here
if(lastDay>3&&lastDay<=30){
  for(let i =1;i<=lastDay;i++){
    if(i%3==0){
      console.log(i +(' - medicine'))
    }
    else{
      console.log(i +(' - rest'))
    }
}
}