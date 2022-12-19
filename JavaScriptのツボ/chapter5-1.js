// 関数04
// 関数の処理結果を受け取る
// function addition(a,b){
//     let c = a + b;// a+bを計算してcに代入
//     return c // 呼び出し元にcを返す
// }
// let total= addition(10,11);// 関数の戻り値を受け取る
// console.log (total) ;

// カードの合計を返す関数

// ③カードの数値を合計して返す関数
function sumCard(card){
    let total = 0;
    for(let i = 0 ; i < card.length; i++){
        total += card[i];// ④合計に加算
    }
    return total; // ⑤合計を返す
}
// ①手持ちのカード
let myCard=[1,2,3,4];
// ②関数を呼び出して戻り値を変数totalに受け取る
let total = sumCard(myCard);
// ⑥結果を出力
console.log(total);


// 関数③は配列myCardを仮引数cardとして受け取るため、cardの中身はmyCardと同じ

// 関数05
// 変数のスコープ（ブロックスコープ）

let i =3;// ①
function scopeTest(){
    let i = 5;// ②
    console.log(i);// ②を出力
    for(let i = 0 ; i < 10 ; i++){ // ③for文の中のlet i
        console.log(i);// ③を出力
    }
}
scopeTest();
console.log(i);// ①を出力






