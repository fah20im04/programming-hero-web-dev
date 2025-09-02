let a=5;
let b = 7;
let c=a;
a=b;
b=c;
console.log(a,b);
//---------------------
let x = 10;
let y = 12;
[x,y]=[y,x];
console.log(x,y);
for (var i = 0; i < 5; i++) {
 	 setTimeout(function () {
 	console.log(i);
  }, 100);
}