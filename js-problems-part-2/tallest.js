const height = [65,66,68,72,78,60,89];
///let mx=Number.MIN_VALUE;
// for(let i=0;i<height.length;i++){
//     if(height[i]>mx)mx=height[i];
//     i++;
// }
//console.log(mx);
function getMax(numbers){
    let max=numbers[0];
    for (const num of numbers){
        if(num>max){
            max=num;
        }
    }
    return max;
}
const max = getMax(height);
console.log(max);
