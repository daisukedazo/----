console.log("hello world");

const a = 10
const b = 20
const c = 30

console.log(c == a + b)

//if文
const score = 20
if(score==100){
    console.log("S");
}else if(score>=80){
    console.log("A");
}else if(score>=60){
    console.log("B");
}else if(score>=40){
    console.log("C");
}else if(score<40){
    console.log("F");
}

//for文
//問題5から15を出力する(5,6,7...14,15を出力)
//for(初期値；繰り返しの条件；繰り返しの変化)
for(let n =5;n <=15;n+=2){
    console.log(n);
}
//例題
//
const n =100
let sum =0
for(let i =1; i <=n; i++){
    sum += i;

}
console.log(sum)

//数値型（ナンバー）
 const price = 150;
 let input = 200;
 console.log(input - price);

//文字列型(ストリング)

 let name = "リンゴジュース";
 let message = "お買い上げありがとうございました";
 console.log (name + message);

 



