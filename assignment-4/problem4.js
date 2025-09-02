function  isSame(arr1 , arr2 ) {
          // You have to write your code here
    if(!Array.isArray(arr1)||!Array.isArray(arr2)) {
        return "Invalid";
    } 

    if(arr1.length !==arr2.length)return false;
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }   
    }
    return true;
}
// Correct arrays with same values
console.log(isSame([1, 2, 3], [1, 2, 3])); // true

// Arrays with different lengths
console.log(isSame([34, 5, 7, 9], [34, 5, 7])); // false

// Arrays with undefined vs null
console.log(isSame([1, undefined, 3], [1, null, 3])); // false

// Same arrays
console.log(isSame([1, 4, 5], [1, 4, 5])); // true

// Different types in arrays
console.log(isSame([1, "4", 4], [1, 4, 4])); // false

// One input is not an array
console.log(isSame([2, 5, 6], 256)); // "Invalid"

// First input is object, second is array
console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6])); // "Invalid"

