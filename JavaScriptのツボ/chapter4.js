//制御構文の処理を途中でスキップさせる
//トランプで手持ちのカードの数字を合計する

let total = 0;
let card = [1,2,3,"JOKER",4];
for(let i = 0;i<card.length;i++){
// JOKER以外を数える
if(card[i]=="JOKER"){
    continue;
}
// 合計に加算する
total += card[i];
}
console.log(total);