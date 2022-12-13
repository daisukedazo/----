//switch文
//練習１　ブラックジャック
let card =2;//Kのカードを手札に加えた
let total = 0;//手札に加えたカードの合計
switch(card){
  case 11://Jのカードを手札に加えた場合
  case 12://Qのカードを手札に加えた場合
  case 13://Kのカードを手札に加えた場合
    total += 10 //10を加算する
    break;
default: //それ以外のカードを手札に加えた場合
    total += card;// カードの数字を加算する
    break;
}
console.log("合計は"+ total);

//for文
//1から10までの合計
let total2 = 0
for(let i = 1; i <= 10; i++){
    total2 += i; 
}
console.log("合計は" + total2);

//while文
//1から20までの偶数を出力
let n = 1
let output = ""
while(n<=20){//nが２０以下なら繰り返す
   if(n%2==0){//nが偶数かどうか
    output += n + ""//outputにnを繋げる
   }
   n=n+1//nを１足す
}
console.log(output);//結果を出力する
