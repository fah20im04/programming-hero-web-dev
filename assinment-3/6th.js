/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary = startingSalary;
for(let i =0;i < experience;i++){
    currentSalary += currentSalary*5/100;
}
currentSalary=currentSalary.toFixed(2);
console.log(currentSalary)