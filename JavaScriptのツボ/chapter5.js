// 関数02
// function aisatsu(){
//     console.log("こんにちは");
// }
// aisatsu();
// console.log("1回目を実行しました");
// aisatsu();
// console.log("２回目を実行しました");

// 関数03
function aisatsu(message){
    console.log(message);
}
aisatsu("おはよう");
aisatsu("こんにちは");
aisatsu("こんばんは");

function addition(a,b){
    let total = a + b;
    console.log(total);
}
addition(10,11);
addition(-1,11);

// 配列を受け取る関数
// ①手持ちのカード
let myCard =[1,2,3,4];

// ②関数を呼び出す
SumCard(myCard);

// ③カードの数値を合計して出力する関数
function SumCard(card){
    let total = 0;
    for(let i = 0 ; i<card.length;i++){
        total += card[i];
        // ④合計に加算
    }
    // ⑤合計を出力
    console.log(total);
}
