// ## Ex2．2つの自然数a, bを読み込んだ時、aからbの自然数の積を表示しなさい
// ※ aとbは以下とすること <br>
// ※ a = 3, b = 5の場合 3\*4\*5 = 60を出力
// 

// ①aとbのそれぞれの乱数を指定し出力する
const a = Math.floor(Math.random() * 10 + 1);
const b = a + Math.floor(Math.random() * 10 + 1); 
console.log("aは:" + a);
console.log("bは" + b);

 answer= product(a,b);
//  ⑤答えを出力
console.log("積:"+ answer);
// ②関数を指定
function product(a,b){

//  ③初期値をaとしてbまで順番に掛け上げる式を作る
  let x = 1;
  for(let i=a ; i<=b; i++){
    x *= i
 }
//  ④答えをxに戻す
 return x;
};