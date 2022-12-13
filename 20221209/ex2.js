// ## Ex2．2つの自然数a, bを読み込んだ時、aからbの自然数の積を表示しなさい
// ※ aとbは以下とすること <br>
// ※ a = 3, b = 5の場合 3\*4\*5 = 60を出力
// 


const a = Math.floor(Math.random() * 10 + 1);
const b = a + Math.floor(Math.random() * 10 + 1); 
console.log(a);
console.log(b);
answer = product(a,b);
 console.log("積:"+ answer);

 function product(a,b){
    let x=1;
   for(let i =a ; i<=b; i++){
    x *= i;
   }
   return x;
 };
 
 
 
 
